# Dev Containers

If you can run Docker locally, then you can open the workshop using [VS Code Remote Containers](https://code.visualstudio.com/docs/remote/containers?WT.mc_id=aiml-77396-cxa) (aka, Dev Containers). This will ensure that you have all the prerequisites installed and configured correctly for the workshop.

Install the following:

1. Docker.
   - [Windows](https://docs.docker.com/docker-for-windows/install/)
   - [macOS](https://docs.docker.com/docker-for-mac/install/)
   - [Linux](https://docs.docker.com/engine/install/)
1. [VS Code](https://code.visualstudio.com/?WT.mc_id=aiml-77396-cxa)
1. [VS Code Remote Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers&WT.mc_id=aiml-77396-cxa)
1. The [git](https://git-scm.com/) client.

## Clone the workshop repository

1. Open VS Code.
1. Install the [Dev Containers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers&WT.mc_id=aiml-77396-cxa) extension.
1. Select **Clone Git Repository**.

    ![The image shows hwo to select clone a repo](img/clone_repository.png)

1. Enter the following URL: `https://github.com/newpatiente2e/Contoso-New-Patient-App.git`

    ![The image shows how to enter the repo url](img/clone_repo_url.png)

1. Chose a folder to clone the repository to.
1. Select **OK** to clone the repository.
1. You will be prompted to open the cloned repository. Select **Open**.
1. You will be prompted to **Reopen in Container** to open the repository in a Dev Container.

   :::note

   Depending on your network speed, it may take a 5 to 10 minutes to download the Docker image and build the container.

   :::

1. Select **Install** to install the C# extension.
1. Select **Restore** to restore the app dependencies.
1. **DON'T** close VS Code as you will need it open for the rest of the workshop.

Congratulations! You have successfully created a developer container and connected to it using VS Code Dev Container support.

Next, [create the workshop Azure Services](../../create-azure-services/)
