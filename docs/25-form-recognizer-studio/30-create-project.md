# Create a project

The Form Recognizer Studio provides and orchestrates all the API calls required to complete your dataset and train your model.

1. Start by navigating to [Form Recognizer Studio](https://formrecognizer.appliedai.azure.com/studio).

1. Select the **Custom models** tile, on the custom models page.
1. Next, select the **Create a project** button.

    ![The image shows creating a new project](./img/studio-create-project.png)

1. On the create project dialog, provide a name for your project, optionally a description, and select continue.

    1. Select your Azure subscription.
    1. Select the resource group whose name starts with **contoso-patient-registration**.
    1. Name the service **form-recognizer**.
    1. Select the location closest to you.
    1. Select the free pricing tier **F0**.
    1. Select API version **2022-08-31 (General Availability)**.
    1. Select **Continue**.

    ![Select the Form Recognizer resource](./img/create-service-resources.png)

1. Next select the storage account where you uploaded your custom model training dataset. 

    1. Select your Azure subscription.
    1. Select the resource group **new-patient-registration**.
    1. Select the storage account you created in the previous step.
    1. Select the **trainingdata** blob container.
    1. Leave the **Folder path** field empty.
    1. Select **Continue**.
    1. Select **Create project**.

    ![Select the storage account](./img/studio-select-storage.png)

The form recognizer service will now be created and configured. Once the service is created, the Studio will open the project and display the **Label data** page.
