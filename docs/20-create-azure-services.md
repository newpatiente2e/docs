# Create Azure services

## Deploy Azure services

The following services will be created in your Azure subscription

1. An [Azure Form Recognizer](https://azure.microsoft.com/services/form-recognizer?WT.mc_id=aiml-77396-cxa) service and an associated storage account.
1. An [Azure Cosmos DB](https://learn.microsoft.com/azure/cosmos-db/introduction?WT.mc_id=aiml-77396-cxa) service.
1. An [Azure Function](https://learn.microsoft.com/azure/azure-functions/?WT.mc_id=aiml-77396-cxa) service.
1. An [Azure Static Web App](https://azure.microsoft.com/services/app-service/static/?WT.mc_id=aiml-77396-cxa) service.

## Install the new patient registration services

1. Open a command prompt and navigate to the `contoso_new_patient_app` folder.

1. Initialize your Azure environment with `azd init`, and follow the prompts to log in to your Azure subscription, create a name for your resources (e.g: `contoso-health-app`), and select a region (e.g: `eastus`).

1. Deploy the Azure services with `azd up`.
