# Clean up

## Deleting Azure resources

To delete the resources from Azure, from a VS Code terminal, run the following command:

```bash
azd down
```

This will prompt you to confirm that you want to delete the resources. Enter `y` to confirm.

## Deleted the Azure Container Instance

If you created an Azure Container Instance, you will need to delete it manually. To do this, from the Azure portal, open a Cloud Shell terminal and run the following command:

```bash
az container delete -g rg-globalai --name newpatient
```

:::warning

The container instance costs approximately $US35 per month (as at Oct 2022). So, be sure to delete the container instance when you are done with the workshop.

:::

## Purging the Form Recognizer resource

When deleting a Form Recognizer resource, it is performed as a _soft delete_ so that you can recover it in the event of an accidental deletion. To completely delete the resource, you must purge it, using the following command:

```bash
$region=<Azure Region selected>
$resourceName=<Form Recognizer resource name>
$resourceGroupName=<Resource group name>
az cognitiveservices account purge -l $region -n $resourceName -g $resourceGroupName
```

:::note

The resource group name and region were specified when you setup the project during the [Create Azure resources](./20-create-azure-services.md) step. The name of the Form Recognizer resource is prefixed with `form-recognizer-` and then a unique hash, that will be present in the logs when you cleaned up the resources in the previous step.

:::

## Social

Please tweet your questions, comments, and successes including hashtag #AzureFormRecognizer, the workshop link [https://aka.ms/PatientRegistration](https://aka.ms/PatientRegistration), and tag @dglover. Thank you.
