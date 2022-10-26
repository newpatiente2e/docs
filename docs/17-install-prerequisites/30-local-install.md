# Local installation

If you choose not to use a Container Instance or run Docker locally, then you can install the prerequisites on your local machine, then ensure you install the following apps on your computer:

1. [VS Code](https://code.visualstudio.com/?WT.mc_id=aiml-77396-cxa)
1. The C# extension for VS Code. You can install it from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp&WT.mc_id=aiml-77396-cxa).
1. The [git](https://git-scm.com/) client.
1. The [GitHub CLI](https://github.com/cli/cli).
1. The [Azure CLI](https://learn.microsoft.com/cli/azure/install-azure-cli?WT.mc_id=aiml-77396-cxa).
1. The [Azure Developer CLI (azd)](https://learn.microsoft.com/azure/developer/azure-developer-cli/get-started?tabs=bare-metal%2Clinuxmac&pivots=programming-language-csharp&WT.mc_id=aiml-77396-cxa).
1. [Node.js v16 with npm](https://nodejs.org/).
1. The [.NET SDK 6.0](https://dotnet.microsoft.com/download/dotnet/6.0?WT.mc_id=aiml-77396-cxa)
1. The Static Web App CLI (SWA CLI) - `npm install -g @azure/static-web-apps-cli`

## Clone the workshop repository

1. Open VS Code.
1. Install the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers&WT.mc_id=aiml-77396-cxa) extension.
1. Select **Clone Git Repository**.

    ![The image shows hwo to select clone a repo](img/clone_repository.png)

1. Enter the following URL: `https://github.com/newpatiente2e/Contoso-New-Patient-App.git`

    ![The image shows how to enter the repo url](img/clone_repo_url.png)

1. Choose a folder to clone the repository in to.
1. Select **OK** to clone the repository.
1. You will be prompted to open the cloned repository. Select **Open**.
1. Select **Install** for **Install Recommended Extensions**.
1. Select **Restore** to restore the app dependencies.
1. **DON'T** close VS Code, as you'll need it open for the rest of the workshop.

Congratulations! You've successfully installed the workshop prerequisites locally and opened the solution with VS Code.

Next, [create the workshop Azure Services](../../create-azure-services/)
