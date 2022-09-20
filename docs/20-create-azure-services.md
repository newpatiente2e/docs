# Create Azure services

## Deploy Azure services

The following services will be created in your Azure subscription

1. An [Azure Form Recognizer](https://azure.microsoft.com/services/form-recognizer) service and an associated storage account.
1. An [Azure Cosmos DB](https://learn.microsoft.com/azure/cosmos-db/introduction) service.
1. An [Azure Function](https://learn.microsoft.com/azure/azure-functions/) service.
1. An [Azure Static Web App](https://azure.microsoft.com/services/app-service/static/) service.

## Install the new patient registration services

1. Open a command prompt and navigate to the `contoso_new_patient_app/infra` folder.

1. Run the following command to create the required Azure services.

```bash
azd up --template resources
```

The command will prompt for the following information:

- Environment Name: Prefix for the resource group that will be created to hold all Azure resources.


Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla in odio vel enim sodales accumsan. Curabitur accumsan bibendum elit pharetra finibus. Aliquam urna magna, facilisis vitae orci at, ultrices rhoncus sem. Nam ut metus risus. Vivamus mattis pellentesque arcu at condimentum. Quisque tristique varius arcu eu volutpat. Nullam pharetra leo sit amet erat sagittis, non mollis elit porttitor. Aliquam tincidunt, nisl vitae tempus finibus, urna leo aliquam elit, id iaculis justo mauris eu dolor. Sed tempus magna sit amet aliquet ullamcorper. Duis facilisis aliquam viverra. Pellentesque iaculis tincidunt tristique. Integer sed enim efficitur, iaculis risus eget, aliquam neque. Etiam congue id lectus vel tincidunt. Proin tristique lobortis ex, sed elementum ex congue consequat.
