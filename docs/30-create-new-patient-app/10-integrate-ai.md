# Integrate Form Recognizer
<!-- 
TODO @AARON: Add the command to create the Azure services. 
-->

1. Start VS Code and open the `contoso_new_patient_app` folder.
1. Open the ????? function.
1. Scroll down to the `// TODO: Add code here` section.
1. Add the following code snippet at the TODO area

    ```c#
    var webclient = new WebClient();
    webclient.Headers.Add("Content-Type", "application/json");
    webclient.Headers.Add("Ocp-Apim-Subscription-Key", "YOUR_FORM_RECOGNIZER_KEY");
  
    ...
    ...
    ```

1. Replace `YOUR_FORM_RECOGNIZER_KEY` with the subscription key for the `new_patient` API.
1. Save the file.

## Deploy

Deploy the app to Azure Static Web Apps with the Azure Developer CLI.

1. From VS Code, select `Ctrl+Shift+~` to open a new terminal.
1. From the terminal, run the following command to start the function app. This command will deploy the updated function to Azure.

    ```bash
    azd up ...
    ```bash

## Open the patient registration app in your browser

From your browser, open the patient registration app at the following URL.

