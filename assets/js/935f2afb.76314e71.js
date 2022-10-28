"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Workshop Introduction","href":"/docs/","docId":"introduction"},{"type":"link","label":"Install prerequisites","href":"/docs/install-prerequisites","docId":"install-prerequisites"},{"type":"category","label":"Installation options","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Azure Container Instance","href":"/docs/install-prerequisites/container-instances","docId":"install-prerequisites/container-instances"},{"type":"link","label":"Docker Dev Containers","href":"/docs/install-prerequisites/dev-containers","docId":"install-prerequisites/dev-containers"}],"href":"/docs/category/installation-options"},{"type":"link","label":"Create Azure services","href":"/docs/create-azure-services","docId":"create-azure-services"},{"type":"category","label":"Azure Form Recognizer","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Form recognizer studio","href":"/docs/form-recognizer-studio/intro-form-recognizer","docId":"form-recognizer-studio/intro-form-recognizer"},{"type":"link","label":"Upload training data","href":"/docs/form-recognizer-studio/upload-training-data","docId":"form-recognizer-studio/upload-training-data"},{"type":"link","label":"Create a project","href":"/docs/form-recognizer-studio/create-project","docId":"form-recognizer-studio/create-project"},{"type":"link","label":"Label your data","href":"/docs/form-recognizer-studio/label-data","docId":"form-recognizer-studio/label-data"},{"type":"link","label":"Train your model","href":"/docs/form-recognizer-studio/train-model","docId":"form-recognizer-studio/train-model"}],"href":"/docs/category/azure-form-recognizer"},{"type":"category","label":"Deploy new patient app","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Azure Static Web Apps","href":"/docs/create-new-patient-app/intro-static-web-apps","docId":"create-new-patient-app/intro-static-web-apps"},{"type":"link","label":"Integrate Form Recognizer","href":"/docs/create-new-patient-app/integrate-ai","docId":"create-new-patient-app/integrate-ai"},{"type":"link","label":"Upload a registration form","href":"/docs/create-new-patient-app/upload-doc","docId":"create-new-patient-app/upload-doc"}],"href":"/docs/category/deploy-new-patient-app"},{"type":"category","label":"Adding surgery roles","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Static Web App roles","href":"/docs/surgery-roles/static-web-app-roles","docId":"surgery-roles/static-web-app-roles"},{"type":"link","label":"Add surgery roles","href":"/docs/surgery-roles/add-roles","docId":"surgery-roles/add-roles"}],"href":"/docs/category/adding-surgery-roles"},{"type":"link","label":"Clean up","href":"/docs/clean-up","docId":"clean-up"},{"type":"link","label":"Summary","href":"/docs/summary","docId":"summary"},{"type":"link","label":"Resources","href":"/docs/resources","docId":"resources"}]},"docs":{"clean-up":{"id":"clean-up","title":"Clean up","description":"Deleting Azure resources","sidebar":"tutorialSidebar"},"create-azure-services":{"id":"create-azure-services","title":"Create Azure services","description":"Deploy Azure services","sidebar":"tutorialSidebar"},"create-new-patient-app/integrate-ai":{"id":"create-new-patient-app/integrate-ai","title":"Integrate Form Recognizer","description":"In this section, we\'re going to be updating an Azure Function to call Form Recognizer to extract the patient\'s information from the uploaded image.","sidebar":"tutorialSidebar"},"create-new-patient-app/intro-static-web-apps":{"id":"create-new-patient-app/intro-static-web-apps","title":"Azure Static Web Apps","description":"Azure Static Web Apps is a service that automatically builds and deploys full stack web apps to Azure from a code repository.","sidebar":"tutorialSidebar"},"create-new-patient-app/upload-doc":{"id":"create-new-patient-app/upload-doc","title":"Upload a registration form","description":"Complete a new patient registration form and upload it to the patient registration app.","sidebar":"tutorialSidebar"},"form-recognizer-studio/create-project":{"id":"form-recognizer-studio/create-project","title":"Create a project","description":"The Form Recognizer Studio provides and orchestrates all the API calls required to complete your dataset and train your model.","sidebar":"tutorialSidebar"},"form-recognizer-studio/intro-form-recognizer":{"id":"form-recognizer-studio/intro-form-recognizer","title":"Form recognizer studio","description":"Form recognizer studio is a web-based tool that allows you to create custom models. You can use it to label your training documents and train your custom model.","sidebar":"tutorialSidebar"},"form-recognizer-studio/label-data":{"id":"form-recognizer-studio/label-data","title":"Label your data","description":"In your project, there are five documents, four of the documents have a purple dot to indicate the documents have been analyzed and labeled. The fifth document needs to be analyzed and labeled.","sidebar":"tutorialSidebar"},"form-recognizer-studio/train-model":{"id":"form-recognizer-studio/train-model","title":"Train your model","description":"With your training forms labeled, you\'re now ready to train your model. Follow these steps to train your model.","sidebar":"tutorialSidebar"},"form-recognizer-studio/upload-training-data":{"id":"form-recognizer-studio/upload-training-data","title":"Upload training data","description":"This topic describes how to upload your training data to Form Recognizer Studio.","sidebar":"tutorialSidebar"},"install-prerequisites":{"id":"install-prerequisites","title":"Install prerequisites","description":"A computer","sidebar":"tutorialSidebar"},"install-prerequisites/container-instances":{"id":"install-prerequisites/container-instances","title":"Azure Container Instance","description":"If you can\'t run Docker on your machine, you can use a Developer Container Instance to use for the workshop. We\'ll be connecting to the container instance using VS Code Remote SSH.","sidebar":"tutorialSidebar"},"install-prerequisites/dev-containers":{"id":"install-prerequisites/dev-containers","title":"Docker Dev Containers","description":"If you can run Docker locally, you can open the workshop using VS Code Dev Containers. Dev Containers ensures you have all the developer tools installed and configured correctly for the workshop.","sidebar":"tutorialSidebar"},"introduction":{"id":"introduction","title":"Workshop Introduction","description":"Most of the forms we complete nowadays are online but there are still times when we need to complete paper-based forms. There are plenty of examples, for this workshop, we\'ve chosen a patient registration for a doctor\'s surgery as it\'s something we\'ve all had to do at some point.","sidebar":"tutorialSidebar"},"resources":{"id":"resources","title":"Resources","description":"The following Azure resources are used in this workshop.","sidebar":"tutorialSidebar"},"summary":{"id":"summary","title":"Summary","description":"In this workshop you learned how to infuse AI into a patient registration app using Azure services. The app uses Azure Form Recognizer to extract data from a patient registration form and Azure Cosmos DB to store the data. The app also uses Azure Functions to process the data and Azure Static Web Apps to host the app.","sidebar":"tutorialSidebar"},"surgery-roles/add-roles":{"id":"surgery-roles/add-roles","title":"Add surgery roles","description":"Create Static Web App roles","sidebar":"tutorialSidebar"},"surgery-roles/static-web-app-roles":{"id":"surgery-roles/static-web-app-roles","title":"Static Web App roles","description":"Azure Static Web Apps provide a streamlined authentication experience. The free tier Static Web Apps include several pre-configured providers. For higher-tier Static Web Apps, you can register custom authentication providers.","sidebar":"tutorialSidebar"}}}')}}]);