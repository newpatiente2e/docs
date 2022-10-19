# Integrate Form Recognizer

In this section, we're going to be updating an Azure Function to call Form Recognizer to extract the patient's information from the uploaded image.

## Updating the Azure Function

1. Start VS Code and open the `contoso_new_patient_app` folder.
1. Open the `UploadFile.cs` file, located at `src/api/NewPatient/UploadFile.cs`.
1. Scroll down to the `// TODO: Call Azure Form Recognizer` section.
1. Replace the `// TODO` comment and `throw` statement with the following code

   ```csharp
   string? endpoint = Environment.GetEnvironmentVariable("FORM_RECOGNIZER_ENDPOINT");
   string? apiKey = Environment.GetEnvironmentVariable("FORM_RECOGNIZER_API_KEY");
   string? modelId = Environment.GetEnvironmentVariable("FORM_RECOGNIZER_MODEL_ID");

   if (string.IsNullOrEmpty(endpoint) || string.IsNullOrEmpty(apiKey) || string.IsNullOrEmpty(modelId))
   {
       throw new InvalidOperationException("Missing environment variables");
   }

   var credential = new AzureKeyCredential(apiKey);
   var client = new DocumentAnalysisClient(new Uri(endpoint), credential);

   var blobClient = containerClient.GetBlobClient(filename);
   var uri = blobClient.GenerateSasUri(BlobSasPermissions.Read, DateTimeOffset.UtcNow.AddMinutes(5));

   AnalyzeDocumentOperation operation = await client.AnalyzeDocumentFromUriAsync(WaitUntil.Completed, modelId, uri);
   AnalyzeResult result = operation.Value;

   var outputs = new Dictionary<string, (string, float?)>();

   foreach (AnalyzedDocument document in result.Documents)
   {
       foreach ((string fieldName, DocumentField field) in document.Fields)
       {
           outputs.Add(fieldName, (field.Content, field.Confidence));
       }
   }

   return outputs;
   ```

1. Save the file.

<details>
<summary>What is this code doing?</summary>

Let's take some time to understand what this code is doing by breaking it down piece by piece.

```csharp
string? endpoint = Environment.GetEnvironmentVariable("FORM_RECOGNIZER_ENDPOINT");
string? apiKey = Environment.GetEnvironmentVariable("FORM_RECOGNIZER_API_KEY");
string? modelId = Environment.GetEnvironmentVariable("FORM_RECOGNIZER_MODEL_ID");

if (string.IsNullOrEmpty(endpoint) || string.IsNullOrEmpty(apiKey) || string.IsNullOrEmpty(modelId))
{
    throw new InvalidOperationException("Missing environment variables");
}
```

This first piece of code is retrieving the environment variables that contain the keys and other secret information for Form Recognizer, avoiding us from hard-coding them into the code. We've also got some `null` checking, to ensure that we have set the values.

```csharp
var credential = new AzureKeyCredential(apiKey);
var client = new DocumentAnalysisClient(new Uri(endpoint), credential);
```

Here, we're creating the connection to Form Recognizer using the endpoint and API key.

```csharp
var blobClient = containerClient.GetBlobClient(filename);
var uri = blobClient.GenerateSasUri(BlobSasPermissions.Read, DateTimeOffset.UtcNow.AddMinutes(5));
```

Form Recognizer will need a URL to the image that we want to analyze, so we're creating a SAS token for the image that we uploaded to Azure Storage, which will mean that only the Form Recognizer service can access the image.

```csharp
AnalyzeDocumentOperation operation = await client.AnalyzeDocumentFromUriAsync(WaitUntil.Completed, modelId, uri);
AnalyzeResult result = operation.Value;

var outputs = new Dictionary<string, (string, float?)>();

foreach (AnalyzedDocument document in result.Documents)
{
    foreach ((string fieldName, DocumentField field) in document.Fields)
    {
        outputs.Add(fieldName, (field.Content, field.Confidence));
    }
}

return outputs;
```

Lastly, we'll call Form Recognizer, telling it which image we want to analyze and what trained model to use for that. When the result comes back, we'll loop through the fields that were found and return them as a dictionary, which will later be stored in Cosmos DB.

</details>

## Running Locally

To run the application locally, we need to set the environment variables for the Azure Function in the `local.settings.json` file.

1. Create a new file (if one doesn't already exist) at `src/api/local.settings.json` and include the following code:

   ```json
   {
     "IsEncrypted": false,
     "Values": {
       "FUNCTIONS_WORKER_RUNTIME": "dotnet",
       "NEW_PATIENT_STORAGE": "<STORAGE_CONNECTION_STRING>",
       "FORM_RECOGNIZER_API_KEY": "<FORM_RECOGNIZER_API_KEY>",
       "FORM_RECOGNIZER_ENDPOINT": "<FORM_RECOGNIZER_ENDPOINT>",
       "FORM_RECOGNIZER_MODEL_ID": "<FORM_RECOGNIZER_MODEL_ID>",
       "COSMOS_DB": "<COSMOS_DB_CONNECTION_STRING>"
     },
     "Host": {
       "CORS": "*"
     }
   }
   ```

1. Navigate to the [Azure portal](https://portal.azure.com) and open the resource group that was created for the workshop.
1. Access the Storage Account resource `storage<hash>` and copy the connection string from the **Access Keys** section, replacing the `<STORAGE_CONNECTION_STRING>` value in the `local.settings.json` file.
1. Access the Cosmos DB resource, `cosmos-<hash>` and copy the _Primary Connection String_ from the **Keys** section, replacing the `<COSMOS_DB_CONNECTION_STRING>` value in the `local.settings.json` file.
1. Access the Form Recognizer resource , `form-recognizer-<hash>` and copy the _Endpoint_ and _Key 1_ from the **Keys and Endpoint** section, replacing the `<FORM_RECOGNIZER_ENDPOINT>` and `<FORM_RECOGNIZER_API_KEY>` values in the `local.settings.json` file, and set the `<FORM_RECOGNIZER_MODEL_ID>` value to the model ID created in the previous module.

Once all the environment variables have been set, we can run the application locally.

1. Open the _Run and Debug_ view in VS Code (`CTRL + SHIFT + D`).
1. From the drop down, select `launch: all` and click the _Start Debugging_ button.
1. Once all the debuggers have started, navigate to `http://localhost:4280` in your browser.

## Deploy

Deploy the app to Azure Static Web Apps with the Azure Developer CLI.

1. From VS Code, select `` CTRL + SHIFT + ` `` to open a new terminal.
1. From the terminal, run the following command to start the function app. This command will deploy the updated function to Azure.

   ```bash
   azd deploy
   ```

## Open the patient registration app in your browser

From your browser, open the patient registration app at the URL displayed in the deployment logs.
