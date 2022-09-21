# Static Web App roles

Introduction to Azure Static Web Apps roles. [Learn more](https://docs.microsoft.com/azure/static-web-apps/authentication-authorization)

Azure Static Web Apps provides a streamlined authentication experience. The free tier Static Web Apps include several pre-configured providers. For higher tier Static Web Apps, you can register a custom authentication providers.

## Role management

By default, every user belongs to the built-in anonymous role, and all logged-in users are members of the authenticated role. There are three roles in the Contoso Surgery app: admin, nurse, and doctor. To add a user to a role, you generate invitations that allow you to associate users to specific roles.

### Create an invitation

Invitations are specific to individual authorization-providers, so consider the needs of your app as you select which providers to support. Some providers expose a user's email address, while others only provide the site's username.

| Authorization provider | Exposes a user's |
| ---------------------- | ---------------- |
| Azure Active Directory | email address    |
| GitHub                 | username         |
| Twitter                | username         |

1. Navigate to a Static Web Apps resource in the [Azure portal](https://portal.azure.com).
1. Under _Settings_, click on **Role Management**.
1. Click on the **Invite** button.
1. Select an _Authorization provider_ from the list of options.
1. Add either the username or email address of the recipient in the _Invitee details_ box.
   - For GitHub and Twitter, you enter the username. For all others, enter the recipient's email address.
1. Select the domain of your static site from the _Domain_ drop-down.
   - The domain you select is the domain that appears in the invitation. If you have a custom domain associated with your site, you probably want to choose the custom domain.
1. For simplicity, add the following roles **admin, nurse, doctor** to list of role names in the _Role_ box. In a production app, you would likely add only the roles that are appropriate for the user.
1. Enter the maximum number of hours you want the invitation to remain valid.
   - The maximum possible limit is 168 hours, which is 7 days.
1. Click the **Generate** button.
1. Copy the link from the _Invite link_ box.
1. If the link is for you, then paste the link into your browser and follow the instructions to accept the invitation. If the link is for someone else, then send the link to the recipient for them to accept the invitation.
