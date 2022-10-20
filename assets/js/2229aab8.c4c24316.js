"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[763],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),u=r,h=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9335:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const o={},i="Integrate Form Recognizer",l={unversionedId:"create-new-patient-app/integrate-ai",id:"create-new-patient-app/integrate-ai",title:"Integrate Form Recognizer",description:"In this section, we're going to be updating an Azure Function to call Form Recognizer to extract the patient's information from the uploaded image.",source:"@site/docs/30-create-new-patient-app/10-integrate-ai.md",sourceDirName:"30-create-new-patient-app",slug:"/create-new-patient-app/integrate-ai",permalink:"/docs/create-new-patient-app/integrate-ai",draft:!1,editUrl:"https://github.com/newpatiente2e/docs/tree/main/docs/30-create-new-patient-app/10-integrate-ai.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Azure Static Web Apps",permalink:"/docs/create-new-patient-app/intro-static-web-apps"},next:{title:"Upload a registration form",permalink:"/docs/create-new-patient-app/upload-doc"}},p={},s=[{value:"Updating the Azure Function",id:"updating-the-azure-function",level:2},{value:"Running Locally",id:"running-locally",level:2},{value:"Test the Application",id:"test-the-application",level:2},{value:"Deploy to Azure",id:"deploy-to-azure",level:2},{value:"Open the patient registration app in your browser",id:"open-the-patient-registration-app-in-your-browser",level:2}],c={toc:s};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"integrate-form-recognizer"},"Integrate Form Recognizer"),(0,r.kt)("p",null,"In this section, we're going to be updating an Azure Function to call Form Recognizer to extract the patient's information from the uploaded image."),(0,r.kt)("h2",{id:"updating-the-azure-function"},"Updating the Azure Function"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Start VS Code and open the ",(0,r.kt)("strong",{parentName:"p"},"contoso_new_patient_app")," folder.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("strong",{parentName:"p"},"UploadFile.cs")," file, located at ",(0,r.kt)("strong",{parentName:"p"},"src/api/NewPatient/UploadFile.cs"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Scroll down to the ",(0,r.kt)("strong",{parentName:"p"},"// TODO: Call Azure Form Recognizer")," section.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the ",(0,r.kt)("strong",{parentName:"p"},"// TODO comment and throw")," statement with the following code"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string? endpoint = Environment.GetEnvironmentVariable("FORM_RECOGNIZER_ENDPOINT");\nstring? apiKey = Environment.GetEnvironmentVariable("FORM_RECOGNIZER_API_KEY");\nstring? modelId = Environment.GetEnvironmentVariable("FORM_RECOGNIZER_MODEL_ID");\n\nif (string.IsNullOrEmpty(endpoint) || string.IsNullOrEmpty(apiKey) || string.IsNullOrEmpty(modelId))\n{\n    throw new InvalidOperationException("Missing environment variables");\n}\n\nvar credential = new AzureKeyCredential(apiKey);\nvar client = new DocumentAnalysisClient(new Uri(endpoint), credential);\n\nvar blobClient = containerClient.GetBlobClient(filename);\nvar uri = blobClient.GenerateSasUri(BlobSasPermissions.Read, DateTimeOffset.UtcNow.AddMinutes(5));\n\nAnalyzeDocumentOperation operation = await client.AnalyzeDocumentFromUriAsync(WaitUntil.Completed, modelId, uri);\nAnalyzeResult result = operation.Value;\n\nvar outputs = new Dictionary<string, (string, float?)>();\n\nforeach (AnalyzedDocument document in result.Documents)\n{\n    foreach ((string fieldName, DocumentField field) in document.Fields)\n    {\n        outputs.Add(fieldName, (field.Content, field.Confidence));\n    }\n}\n\nreturn outputs;\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Save the file."))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"What is this code doing?"),(0,r.kt)("p",null,"Let's take some time to understand what this code is doing by breaking it down piece by piece."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},'string? endpoint = Environment.GetEnvironmentVariable("FORM_RECOGNIZER_ENDPOINT");\nstring? apiKey = Environment.GetEnvironmentVariable("FORM_RECOGNIZER_API_KEY");\nstring? modelId = Environment.GetEnvironmentVariable("FORM_RECOGNIZER_MODEL_ID");\n\nif (string.IsNullOrEmpty(endpoint) || string.IsNullOrEmpty(apiKey) || string.IsNullOrEmpty(modelId))\n{\n    throw new InvalidOperationException("Missing environment variables");\n}\n')),(0,r.kt)("p",null,"This first piece of code is retrieving the environment variables that contain the keys and other secret information for Form Recognizer, avoiding us from hard-coding them into the code. We've also got some ",(0,r.kt)("inlineCode",{parentName:"p"},"null")," checking, to ensure that we have set the values."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var credential = new AzureKeyCredential(apiKey);\nvar client = new DocumentAnalysisClient(new Uri(endpoint), credential);\n")),(0,r.kt)("p",null,"Here, we're creating the connection to Form Recognizer using the endpoint and API key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"var blobClient = containerClient.GetBlobClient(filename);\nvar uri = blobClient.GenerateSasUri(BlobSasPermissions.Read, DateTimeOffset.UtcNow.AddMinutes(5));\n")),(0,r.kt)("p",null,"Form Recognizer will need a URL to the image that we want to analyze, so we're creating a SAS token for the image that we uploaded to Azure Storage, which will mean that only the Form Recognizer service can access the image."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-csharp"},"AnalyzeDocumentOperation operation = await client.AnalyzeDocumentFromUriAsync(WaitUntil.Completed, modelId, uri);\nAnalyzeResult result = operation.Value;\n\nvar outputs = new Dictionary<string, (string, float?)>();\n\nforeach (AnalyzedDocument document in result.Documents)\n{\n    foreach ((string fieldName, DocumentField field) in document.Fields)\n    {\n        outputs.Add(fieldName, (field.Content, field.Confidence));\n    }\n}\n\nreturn outputs;\n")),(0,r.kt)("p",null,"Lastly, we'll call Form Recognizer, telling it which image we want to analyze and what trained model to use for that. When the result comes back, we'll loop through the fields that were found and return them as a dictionary, which will later be stored in Cosmos DB.")),(0,r.kt)("h2",{id:"running-locally"},"Running Locally"),(0,r.kt)("p",null,"To run the application locally, we need to set the environment variables for the Azure Function in the ",(0,r.kt)("strong",{parentName:"p"},"local.settings.json")," file."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new file (if one doesn't already exist) at ",(0,r.kt)("strong",{parentName:"p"},"src/api/local.settings.json")," and include the following code:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "IsEncrypted": false,\n    "Values": {\n      "AzureWebJobsSecretStorageType": "files",\n      "FUNCTIONS_WORKER_RUNTIME": "dotnet",          \n      "COSMOS_DB": "REPLACE_WITH_COSMOS_DB_CONNECTION_STRING",\n      "FORM_RECOGNIZER_API_KEY": "REPLACE_WITH_FORM_RECOGNIZER_API_KEY",\n      "FORM_RECOGNIZER_ENDPOINT": "REPLACE_WITH_FORM_RECOGNIZER_ENDPOINT",\n      "NEW_PATIENT_STORAGE": "REPLACE_WITH_STORAGE_CONNECTION_STRING",\n      "FORM_RECOGNIZER_MODEL_ID": "patient-registration-model"\n    },\n    "Host": {\n      "CORS": "*"\n    }\n}\n'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Replace the placeholders with the values from the ",(0,r.kt)("inlineCode",{parentName:"p"},"azd env get-values")," command that you saved in your text editor earlier.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"If you followed the instructions in the previous section, you should have a ",(0,r.kt)("strong",{parentName:"p"},"patient-registration-model")," model in Form Recognizer. If you used a different name, you'll need to update the ",(0,r.kt)("strong",{parentName:"p"},"FORM_RECOGNIZER_MODEL_ID")," value in the ",(0,r.kt)("strong",{parentName:"p"},"local.settings.json")," file"))),(0,r.kt)("p",null,"Once all the environment variables have been set, you can run the application locally."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("strong",{parentName:"p"},"Run and Debug")," view from the VS Code sidebar, or select ",(0,r.kt)("kbd",null,"Ctrl+Shift+D")," or ",(0,r.kt)("kbd",null,"Cmd+Shift+D")," on macOS."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"The image shows how to launch the Run and Debug view",src:n(8186).Z,width:"484",height:"480"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the drop down, select ",(0,r.kt)("strong",{parentName:"p"},"launch: all"),", then select the ",(0,r.kt)("em",{parentName:"p"},"Start Debugging")," button."),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"The image shows how to select launch all",src:n(9523).Z,width:"391",height:"234"})),(0,r.kt)("admonition",{parentName:"li",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Depending on how fast your computer is, it may take up to 30 seconds for the Static Web App to start."))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once all the debuggers have started, navigate to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:4280"},"http://localhost:4280")," in your web browser."))),(0,r.kt)("h2",{id:"test-the-application"},"Test the Application"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Drag and drop one of the training images from the ",(0,r.kt)("strong",{parentName:"p"},"contoso_new_patient_assets/training_labeled")," folder into the drop zone. Be sure to use an image from the folder that matches the language you used to train the Form Recognizer model.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Next, select ",(0,r.kt)("strong",{parentName:"p"},"Upload"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Once the image has been uploaded, and after a few seconds, you'll see the fields that were extracted from the form.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("strong",{parentName:"p"},"Save")," to save the data to Patient Registration Cosmos DB."))),(0,r.kt)("h2",{id:"deploy-to-azure"},"Deploy to Azure"),(0,r.kt)("p",null,"Deploy the app to Azure Static Web Apps with the Azure Developer CLI."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From VS Code, select ",(0,r.kt)("inlineCode",{parentName:"p"},"CTRL + SHIFT + `")," to open a new terminal.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"From the terminal, run the following command to start the function app. This command will deploy the updated function to Azure."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"azd deploy\n")))),(0,r.kt)("h2",{id:"open-the-patient-registration-app-in-your-browser"},"Open the patient registration app in your browser"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"From your browser, open the patient registration app at the URL displayed in the deployment logs."),(0,r.kt)("li",{parentName:"ol"},"Save the patient registration app URL for use in the next section.")))}m.isMDXComponent=!0},9523:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/launch-60e3275ba1ee245e4a8957d3ad02f3f0.png"},8186:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/run-8f5595d1cc67308bd0d29df241134fec.png"}}]);