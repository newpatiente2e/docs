# Prerequisites

## A computer

You will need a computer with a 64-bit operating system. The labs have been tested on Windows 10/11 (latest updates), macOS 12.6, and Linux 20.04.

## An Azure Subscription

An active Azure account. If you don't have one, you can create a [free account](https://azure.microsoft.com/free/cognitive-services/). If you are a student, you can also get a [free account](https://azure.microsoft.com/free/students/) without a credit card.

## A GitHub account

If you don't have a GitHub account then sign up or a free [GitHub organization account](https://docs.github.com/get-started/signing-up-for-github/signing-up-for-a-new-github-account).

## Azure Developer CLI (azd)

This tutorial is using the Azure Developer CLI to simplify the creation and deletion of Azure services.

Install the [prerequisites for the Azure Developer CLI](https://learn.microsoft.com/azure/developer/azure-developer-cli/get-started?tabs=bare-metal%2Cwindows&pivots=programming-language-nodejs#configure-your-development-environment).

You should have installed the following apps:

1. The [git](https://git-scm.com/) client.
1. The [GitHub CLI](https://github.com/cli/cli).
1. The [Azure CLI](https://learn.microsoft.com/cli/azure/install-azure-cli).
1. The [Azure Developer CLI (azd)](https://learn.microsoft.com/azure/developer/azure-developer-cli/get-started?tabs=bare-metal%2Clinuxmac&pivots=programming-language-csharp#prerequisites).
1. [Node.js with npm](https://nodejs.org/).
1. The [.NET SDK 6.0](https://dotnet.microsoft.com/download/dotnet/6.0)

## Clone the tutorial repository

Follow these steps to clone the tutorial repository to your local machine.

1. Open a command prompt and navigate to the folder where you want to clone the tutorial repository.
1. Run the following command to clone the tutorial repository:

    ```bash
    git clone https://github.com/newpatiente2e/new_patient_assets.git contoso_new_patient_assets
    ```

## Clone the Azure Functions

Follow these steps to clone the new patient azure functions repository to your local machine.

1. Open a command prompt and navigate to the folder where you want to clone the tutorial repository.
1. Run the following command to clone the tutorial repository:

    ```bash
    git clone https://github.com/newpatiente2e/Contoso-New-Patient-App.git contoso_new_patient_app
    ```

## Deploy Azure services

The following services will be created in your Azure subscription

1. An [Azure Form Recognizer](https://azure.microsoft.com/services/form-recognizer) service and an associated storage account.
1. An [Azure Cosmos DB](https://learn.microsoft.com/azure/cosmos-db/introduction) service.
1. An [Azure Function](https://learn.microsoft.com/azure/azure-functions/) service.
1. An [Azure Static Web App](https://azure.microsoft.com/services/app-service/static/) service.

## Install the new patient registration services

1. Open a command prompt and navigate to the `contoso_new_patient_app/infra` folder.
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
