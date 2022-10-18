# Create Azure services

## Deploy Azure services

The following services will be created in your Azure subscription

1. An [Azure Form Recognizer](https://azure.microsoft.com/services/form-recognizer?WT.mc_id=aiml-77396-cxa) service and an associated storage account.
1. An [Azure Cosmos DB](https://learn.microsoft.com/azure/cosmos-db/introduction?WT.mc_id=aiml-77396-cxa) service.
1. An [Azure Function](https://learn.microsoft.com/azure/azure-functions/?WT.mc_id=aiml-77396-cxa) service.
1. An [Azure Static Web App](https://azure.microsoft.com/services/app-service/static/?WT.mc_id=aiml-77396-cxa) service.

## Install the new patient registration services

1. If you are using VS Code *devcontainers*, then from the VS Code main menu, select `Terminal`, and then select `New Terminal`.
1. If you installed the Azure Developer CLI locally, open a command prompt, and navigate to the `contoso_new_patient_app` folder.
1. Initialize your Azure environment with `azd init`, 
1. Follow the prompts to log in to your Azure subscription,
1. Create a name for your resources (e.g: `contoso-health-app`),
1. Select a region (e.g: `eastus`).
1. Select your subscription.
1. Deploy the Azure services with `azd up`.
