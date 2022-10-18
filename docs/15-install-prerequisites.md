# Install prerequisites

## A computer

You will need a computer with a 64-bit operating system. The labs have been tested on Windows 10/11 (latest updates), macOS 12.6, and Linux 20.04.

## An Azure Subscription

An active Azure account. If you don't have one, you can create a [free account](https://azure.microsoft.com/free/cognitive-services/?WT.mc_id=aiml-77396-cxa). If you are a student, you can also get a [free account](https://azure.microsoft.com/free/students/?WT.mc_id=aiml-77396-cxa) without a credit card.

## A GitHub account

If you don't have a GitHub account then sign up for a free [GitHub organization account](https://docs.github.com/get-started/signing-up-for-github/signing-up-for-a-new-github-account).

## Local Development

The application is a combination of C# for the API and integration with [Azure Form Recognizer](https://docs.microsoft.com/azure/applied-ai-services/form-recognizer?WT.mc_id=aiml-77396-cxa), React with TypeScript for the web frontend, and [Bicep](https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview?tabs=bicep&WT.mc_id=aiml-77396-cxa) for managing the Azure resources (maanged via the [Azure Developer CLI](https://learn.microsoft.com/azure/developer/azure-developer-cli/get-started?tabs=bare-metal%2Clinuxmac&pivots=programming-language-csharp&WT.mc_id=aiml-77396-cxa)).

For local development, we recommend using [VS Code](https://code.visualstudio.com/?WT.mc_id=aiml-77396-cxa) as the editor of choice, and the workshop is optimised for that.

This workshop is using the [Azure Developer CLI](https://learn.microsoft.com/azure/developer/azure-developer-cli/overview?tabs=nodejs&WT.mc_id=aiml-77396-cxa) to simplify the creation, management, and deletion of Azure services.

### Recommended Local Setup

The recommended way to undertake the local development aspects of the workshop is to use [VS Code Remote Containers](https://code.visualstudio.com/docs/remote/containers?WT.mc_id=aiml-77396-cxa) (aka, devcontainers), which creates a Docker environment that is pre-installed with all the tools, dependencies, and extensions to complete the workshop.

Install the following:

1. Docker.
   - [Windows](https://docs.docker.com/docker-for-windows/install/)
   - [macOS](https://docs.docker.com/docker-for-mac/install/)
   - [Linux](https://docs.docker.com/engine/install/)
1. [VS Code](https://code.visualstudio.com/?WT.mc_id=aiml-77396-cxa)
1. [VS Code Remote Containers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers&WT.mc_id=aiml-77396-cxa)


### Manual Local Setup

If you choose not to use the devcontainer, you will need to install the prerequisites on your local machine, then ensure you install the following apps on your computer:

1. [VS Code](https://code.visualstudio.com/?WT.mc_id=aiml-77396-cxa)
1. The [git](https://git-scm.com/) client.
1. The [GitHub CLI](https://github.com/cli/cli).
1. The [Azure CLI](https://learn.microsoft.com/cli/azure/install-azure-cli?WT.mc_id=aiml-77396-cxa).
1. The [Azure Developer CLI (azd)](https://learn.microsoft.com/azure/developer/azure-developer-cli/get-started?tabs=bare-metal%2Clinuxmac&pivots=programming-language-csharp&WT.mc_id=aiml-77396-cxa).
1. [Node.js v16 with npm](https://nodejs.org/).
1. The [.NET SDK 6.0](https://dotnet.microsoft.com/download/dotnet/6.0?WT.mc_id=aiml-77396-cxa)

## Clone the patient registration assets repo

Follow these steps to clone the patient registration assets repo to your local machine.

1. Open a command prompt and navigate to the folder where you want to clone the repo.
1. Run the following command to clone the workshop repo:

   ```bash
   git clone https://github.com/newpatiente2e/Contoso-New-Patient-Assets.git contoso_new_patient_assets
   ```

## Clone the patient registration app repo

Follow these steps to clone the patient registration app repo to your local machine.

1. Open a command prompt and navigate to the folder where you want to clone the repo.
1. Run the following command to clone the workshop repo:

   ```bash
   git clone https://github.com/newpatiente2e/Contoso-New-Patient-App.git contoso_new_patient_app
   ```

## Open the patient registration app repo in VS Code

Follow these steps to open the patient registration app repo in VS Code.

1. Open VS Code.
1. Select **File** > **Open Folder**.
1. Open the **contoso_new_patient_app** folder and select **Open**.
1. If you followed the recommendation to use *devcontainers*, then select **Reopen in Container** when prompted.

   :::note 
   Depending on your network speed, it may take a 5 to 10 minutes to download the Docker image and build the container. Carry on with the next steps while the container is being built.

1. **Restore** unresolved dependencies.
