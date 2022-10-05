# Clean up

## Deleting Azure resources

To delete the resources from Azure, run the following command:

```bash
azd down
```

This will prompt you to confirm that you want to delete the resources. Enter `y` to confirm.

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
