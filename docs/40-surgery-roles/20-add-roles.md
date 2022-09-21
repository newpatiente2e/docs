# Add surgery roles

## Create Static Web App roles

## Securing web app routes with roles

Access to the patient registration app is controlled by the roles and Static Web App routes are secured by the roles.

The patient registration app has several routes that are only accessible to users with specific roles. For example, the `/admin` route is only accessible to users with the `admin` role. The `/admin` route is used to add new patient registrations in the app. The `/admin` route is only accessible to users with the `admin` role.

## Enable role-based access control

TODO @AARON: Add the command to enable role-based access control. The following is just placeholder text.

Open the `contoso_new_patient_app/infra/azuredeploy.json` file and add the following code to the `parameters` section.

```json
"staticWebAppRoles": {
    "type": "array",
    "defaultValue": [
        {
            "name": "admin",
            "displayName": "Admin",
            "description": "Admin role"
        },
        {
            "name": "doctor",
            "displayName": "Doctor",
            "description": "Doctor role"
        },
        {
            "name": "nurse",
            "displayName": "Nurse",
            "description": "Nurse role"
        }
    ]
}
```

## Redeploy Static Web App

Redeploy the app to Azure Static Web Apps with the Azure Developer CLI.

1. From VS Code, select `Ctrl+Shift+~` to open a new terminal.
1. From the terminal, run the following command to start the function app. This command will deploy the updated function to Azure.

    ```bash
    azd up ...
    ```

## Sign in to the surgery app

Sign in to the surgery app.

1. From the patient registration app, select **Sign in**, and then select the login provider you configured with roles when you created a role invitation in the previous section.
1. If you added the **admin** role to the invitation, then you can sign into the patient registration app and add new patients from the **Admin** tab.
1. If you also added the **nurse** or **doctor** roles to the invitation, then you can view patient details in the surgery app from the **patients** tab.
