# Install prerequisites

## A computer

You will need a computer with a 64-bit operating system. The labs have been tested on Windows 10/11 (latest updates), macOS 12.6, and Linux 20.04.

## An Azure Subscription

An active Azure account. If you don't have one, you can create a [free account](https://azure.microsoft.com/free/cognitive-services/). If you are a student, you can also get a [free account](https://azure.microsoft.com/free/students/) without a credit card.

## A GitHub account

If you don't have a GitHub account then sign up for a free [GitHub organization account](https://docs.github.com/get-started/signing-up-for-github/signing-up-for-a-new-github-account).

## Install the Azure Developer CLI (azd)

This tutorial is using the [Azure Developer CLI](https://learn.microsoft.com/azure/developer/azure-developer-cli/overview?tabs=nodejs) to simplify the creation and deletion of Azure services.

There are two ways to use the Azure Developer CLI:

1. The recommended approach is to use the `azd cli` DevContainer. This approach is the easiest and quickest way to get started. If you are not familiar with DevContainers, then you can find more information in the [DevContainer documentation](https://code.visualstudio.com/docs/remote/containers).
1. Install the prerequisites on your local machine (bare metal).

Follow the instructions to [configure your development environment](https://learn.microsoft.com/azure/developer/azure-developer-cli/get-started?tabs=devcontainer%2Clinuxmac&pivots=programming-language-nodejs#configure-your-development-environment). The instructions include how to install the Azure Developer CLI and how to configure the DevContainer.

If you choose to install the prerequisites on your local machine, then ensure you install the following apps on your computer:

1. The [git](https://git-scm.com/) client.
1. The [GitHub CLI](https://github.com/cli/cli).
1. The [Azure CLI](https://learn.microsoft.com/cli/azure/install-azure-cli).
1. The [Azure Developer CLI (azd)](https://learn.microsoft.com/azure/developer/azure-developer-cli/get-started?tabs=bare-metal%2Clinuxmac&pivots=programming-language-csharp#prerequisites).
1. [Node.js with npm](https://nodejs.org/).
1. The [.NET SDK 6.0](https://dotnet.microsoft.com/download/dotnet/6.0)

## Clone the patient registration assets repo

Follow these steps to clone the patient registration assets repo to your local machine.

1. Open a command prompt and navigate to the folder where you want to clone the repo.
1. Run the following command to clone the tutorial repo:

    ```bash
    git clone https://github.com/newpatiente2e/-Contoso-New-Patient-Assets.git contoso_new_patient_assets
    ```

## Clone the patient registration app repo

Follow these steps to clone the patient registration app repo to your local machine.

1. Open a command prompt and navigate to the folder where you want to clone the repo.
1. Run the following command to clone the tutorial repo:

    ```bash
    git clone https://github.com/newpatiente2e/Contoso-New-Patient-App.git contoso_new_patient_app
    ```
