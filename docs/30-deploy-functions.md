# Deploy the new patient registration app to Azure

The following services will be created in your Azure subscription

1. An [Azure Cosmos DB](https://learn.microsoft.com/azure/cosmos-db/introduction) service.
1. An [Azure Function](https://learn.microsoft.com/azure/azure-functions/) service.
1. An [Azure Static Web App](https://azure.microsoft.com/services/app-service/static/) service.

## Install the new patient registration services

1. Open a command prompt and navigate to the `new_patient_functions/infra` folder.
1. Login to your Azure account.

    ```bash
    az login
    ```

1. Run the following command to create the required Azure services.

```bash
azd up --template resources
```

The command will prompt for the following information:

- Environment Name: Prefix for the resource group that will be created to hold all Azure resources.
<!-- - Azure Location: The Azure location where your resources will be deployed.
- Azure Subscription: The Azure Subscription where your resources will be deployed. -->

