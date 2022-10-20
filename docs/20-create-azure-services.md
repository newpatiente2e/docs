# Create Azure services

## Deploy Azure services

The following services will be created in your Azure subscription

1. An [Azure Form Recognizer](https://azure.microsoft.com/services/form-recognizer?WT.mc_id=aiml-77396-cxa) service and an associated storage account.
1. An [Azure Cosmos DB](https://learn.microsoft.com/azure/cosmos-db/introduction?WT.mc_id=aiml-77396-cxa) service.
1. An [Azure Function](https://learn.microsoft.com/azure/azure-functions/?WT.mc_id=aiml-77396-cxa) service.
1. An [Azure Static Web App](https://azure.microsoft.com/services/app-service/static/?WT.mc_id=aiml-77396-cxa) service.


## Open the patient registration app repo in VS Code

Follow these steps to open the patient registration app repo in VS Code.

1. Open VS Code.
1. Select **File** > **Open Folder**.
1. Open the **contoso_new_patient_app** folder and select **Open**.
1. If you followed the recommendation to use *devcontainers*, then select **Reopen in Container** when prompted.

   :::note

   Depending on your network speed, it may take a 5 to 10 minutes to download the Docker image and build the container.

   :::

1. You may be prompted to install the C# extension. Select **Install**.
1. **Restore** unresolved dependencies.

## Open a terminal window

1. If you are using VS Code *devcontainers*, then ensure the devcontainer Docker image download has completed, then from the VS Code main menu, select `Terminal`, and then select `New Terminal`.
1. If you installed the Azure Developer CLI locally, open a command prompt, and navigate to the `contoso_new_patient_app` folder.

### Build the Static Web App

From the terminal window, run the following commands to build the static web app.

```bash
swa build
```

### Create the Azure Patient Registration Services

From the terminal window, run the following commands to create the Azure Patient Registration Services.

1. Authenticate to Azure by running the `az login --use-device-code` command.'
1. Initialize your Azure environment with `azd init`,
1. Follow the prompts to log in to your Azure subscription,
1. Create a name for your resources (e.g: **contoso-health-app**),
1. Select a region (e.g: **eastus**).
1. Select your subscription.
1. Deploy the Azure services with `azd up`.

    :::note

    It will take approximately 5 minutes to deploy the Azure services. So now is a great time to grab a cup of coffee, or tea, or read the next section of the workshop documentation.

    :::

### List the Azure service keys

You will need the Azure service keys to configure the patient registration app. So, from the terminal window, run the following commands to list the Azure service keys.

1. Run the following command to list Azure service keys.

    ```bash
    azd env get-values
    ```

1. Copy all the values from the output to a text editor. You will need these values to configure the patient registration app.
