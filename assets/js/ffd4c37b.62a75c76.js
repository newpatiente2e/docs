"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[592],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var o=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,r=function(e,t){if(null==e)return{};var a,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)a=n[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=o.createContext({}),c=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(a),d=r,h=u["".concat(p,".").concat(d)]||u[d]||m[d]||n;return a?o.createElement(h,i(i({ref:t},s),{},{components:a})):o.createElement(h,i({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}u.displayName="MDXCreateElement"},6985:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>n,metadata:()=>l,toc:()=>c});var o=a(7462),r=(a(7294),a(3905));const n={},i="Install prerequisites",l={unversionedId:"install-prerequisites",id:"install-prerequisites",title:"Install prerequisites",description:"A computer",source:"@site/docs/15-install-prerequisites.md",sourceDirName:".",slug:"/install-prerequisites",permalink:"/docs/install-prerequisites",draft:!1,editUrl:"https://github.com/newpatiente2e/docs/tree/main/docs/15-install-prerequisites.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Workshop Introduction",permalink:"/docs/"},next:{title:"Create Azure services",permalink:"/docs/create-azure-services"}},p={},c=[{value:"A computer",id:"a-computer",level:2},{value:"An Azure Subscription",id:"an-azure-subscription",level:2},{value:"A GitHub account",id:"a-github-account",level:2},{value:"Local Development",id:"local-development",level:2},{value:"Recommended Local Setup",id:"recommended-local-setup",level:3},{value:"Manual Local Setup",id:"manual-local-setup",level:3},{value:"Clone the patient registration assets repo",id:"clone-the-patient-registration-assets-repo",level:2},{value:"Clone the patient registration app repo",id:"clone-the-patient-registration-app-repo",level:2}],s={toc:c};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"install-prerequisites"},"Install prerequisites"),(0,r.kt)("h2",{id:"a-computer"},"A computer"),(0,r.kt)("p",null,"You will need a computer with a 64-bit operating system. The labs have been tested on Windows 10/11 (latest updates), macOS 12.6, and Linux 20.04."),(0,r.kt)("h2",{id:"an-azure-subscription"},"An Azure Subscription"),(0,r.kt)("p",null,"An active Azure account. If you don't have one, you can create a ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/free/cognitive-services/?WT.mc_id=aiml-77396-cxa"},"free account"),". If you are a student, you can also get a ",(0,r.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/free/students/?WT.mc_id=aiml-77396-cxa"},"free account")," without a credit card."),(0,r.kt)("h2",{id:"a-github-account"},"A GitHub account"),(0,r.kt)("p",null,"If you don't have a GitHub account then sign up for a free ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/get-started/signing-up-for-github/signing-up-for-a-new-github-account"},"GitHub organization account"),"."),(0,r.kt)("h2",{id:"local-development"},"Local Development"),(0,r.kt)("p",null,"The application is a combination of C# for the API and integration with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/applied-ai-services/form-recognizer?WT.mc_id=aiml-77396-cxa"},"Azure Form Recognizer"),", React with TypeScript for the web frontend, and ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview?tabs=bicep&WT.mc_id=aiml-77396-cxa"},"Bicep")," for managing the Azure resources (maanged via the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/developer/azure-developer-cli/get-started?tabs=bare-metal%2Clinuxmac&pivots=programming-language-csharp&WT.mc_id=aiml-77396-cxa"},"Azure Developer CLI"),")."),(0,r.kt)("p",null,"For local development, we recommend using ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/?WT.mc_id=aiml-77396-cxa"},"VS Code")," as the editor of choice, and the workshop is optimised for that."),(0,r.kt)("p",null,"This workshop is using the ",(0,r.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/developer/azure-developer-cli/overview?tabs=nodejs&WT.mc_id=aiml-77396-cxa"},"Azure Developer CLI")," to simplify the creation, management, and deletion of Azure services."),(0,r.kt)("h3",{id:"recommended-local-setup"},"Recommended Local Setup"),(0,r.kt)("p",null,"The recommended way to undertake the local development aspects of the workshop is to use ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/containers?WT.mc_id=aiml-77396-cxa"},"VS Code Remote Containers")," (aka, devcontainers), which creates a Docker environment that is pre-installed with all the tools, dependencies, and extensions to complete the workshop."),(0,r.kt)("p",null,"Install the following:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Docker.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/docker-for-windows/install/"},"Windows")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/docker-for-mac/install/"},"macOS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Linux")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/?WT.mc_id=aiml-77396-cxa"},"VS Code")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers&WT.mc_id=aiml-77396-cxa"},"VS Code Remote Containers extension"))),(0,r.kt)("h3",{id:"manual-local-setup"},"Manual Local Setup"),(0,r.kt)("p",null,"If you choose not to use the devcontainer, you will need to install the prerequisites on your local machine, then ensure you install the following apps on your computer:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/?WT.mc_id=aiml-77396-cxa"},"VS Code")),(0,r.kt)("li",{parentName:"ol"},"The C# extension for VS Code. You can install it from the ",(0,r.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-dotnettools.csharp&WT.mc_id=aiml-77396-cxa"},"VS Code Marketplace"),"."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git")," client."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/cli/cli"},"GitHub CLI"),"."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/cli/azure/install-azure-cli?WT.mc_id=aiml-77396-cxa"},"Azure CLI"),"."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/developer/azure-developer-cli/get-started?tabs=bare-metal%2Clinuxmac&pivots=programming-language-csharp&WT.mc_id=aiml-77396-cxa"},"Azure Developer CLI (azd)"),"."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/"},"Node.js v16 with npm"),"."),(0,r.kt)("li",{parentName:"ol"},"The ",(0,r.kt)("a",{parentName:"li",href:"https://dotnet.microsoft.com/download/dotnet/6.0?WT.mc_id=aiml-77396-cxa"},".NET SDK 6.0")),(0,r.kt)("li",{parentName:"ol"},"The Static Web App CLI (SWA CLI) - ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install -g @azure/static-web-apps-cli"))),(0,r.kt)("h2",{id:"clone-the-patient-registration-assets-repo"},"Clone the patient registration assets repo"),(0,r.kt)("p",null,"Follow these steps to clone the patient registration assets repo to your local machine."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a command prompt and navigate to the folder where you want to clone the repo.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to clone the workshop repo:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/newpatiente2e/Contoso-New-Patient-Assets.git contoso_new_patient_assets\n")))),(0,r.kt)("h2",{id:"clone-the-patient-registration-app-repo"},"Clone the patient registration app repo"),(0,r.kt)("p",null,"Follow these steps to clone the patient registration app repo to your local machine."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open a command prompt and navigate to the folder where you want to clone the repo.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run the following command to clone the workshop repo:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/newpatiente2e/Contoso-New-Patient-App.git contoso_new_patient_app\n")))))}m.isMDXComponent=!0}}]);