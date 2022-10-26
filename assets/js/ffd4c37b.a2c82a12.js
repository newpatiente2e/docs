"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[592],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(r),d=o,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?n.createElement(h,i(i({ref:t},c),{},{components:r})):n.createElement(h,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6985:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={},i="Install prerequisites",s={unversionedId:"install-prerequisites",id:"install-prerequisites",title:"Install prerequisites",description:"A computer",source:"@site/docs/15-install-prerequisites.md",sourceDirName:".",slug:"/install-prerequisites",permalink:"/docs/install-prerequisites",draft:!1,editUrl:"https://github.com/newpatiente2e/docs/tree/main/docs/15-install-prerequisites.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Workshop Introduction",permalink:"/docs/"},next:{title:"Install options",permalink:"/docs/category/install-options"}},l={},p=[{value:"A computer",id:"a-computer",level:2},{value:"An Azure Subscription",id:"an-azure-subscription",level:2},{value:"The patient registration app",id:"the-patient-registration-app",level:2},{value:"Clone the patient registration assets repo",id:"clone-the-patient-registration-assets-repo",level:2},{value:"Install the workshop developer tools",id:"install-the-workshop-developer-tools",level:2},{value:"Docker Dev Containers",id:"docker-dev-containers",level:3},{value:"Azure Container Instances",id:"azure-container-instances",level:3},{value:"Local installation",id:"local-installation",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"install-prerequisites"},"Install prerequisites"),(0,o.kt)("h2",{id:"a-computer"},"A computer"),(0,o.kt)("p",null,"You will need a computer with a 64-bit operating system. The labs have been tested on Windows 10/11 (latest updates), macOS 12.6, and Linux 20.04."),(0,o.kt)("h2",{id:"an-azure-subscription"},"An Azure Subscription"),(0,o.kt)("p",null,"An active Azure account. If you don't have one, you can create a ",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/free/cognitive-services/?WT.mc_id=aiml-77396-cxa"},"free account"),". If you are a student, you can also get a ",(0,o.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/free/students/?WT.mc_id=aiml-77396-cxa"},"free account")," without a credit card."),(0,o.kt)("h2",{id:"the-patient-registration-app"},"The patient registration app"),(0,o.kt)("p",null,"The patient registration application is a combination of C# for the API and integration with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/applied-ai-services/form-recognizer?WT.mc_id=aiml-77396-cxa"},"Azure Form Recognizer"),", React with TypeScript for the web front end, and ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/azure-resource-manager/bicep/overview?tabs=bicep&WT.mc_id=aiml-77396-cxa"},"Bicep")," for managing the Azure resources (managed via the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/developer/azure-developer-cli/get-started?tabs=bare-metal%2Clinuxmac&pivots=programming-language-csharp&WT.mc_id=aiml-77396-cxa"},"Azure Developer CLI"),")."),(0,o.kt)("p",null,"This workshop uses the ",(0,o.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/azure/developer/azure-developer-cli/overview?tabs=nodejs&WT.mc_id=aiml-77396-cxa"},"Azure Developer CLI")," to simplify the creation, management, and deletion of Azure services."),(0,o.kt)("h2",{id:"clone-the-patient-registration-assets-repo"},"Clone the patient registration assets repo"),(0,o.kt)("p",null,"Follow these steps to clone the patient registration assets repo to your local machine."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open a command prompt and navigate to the folder where you want to clone the repo.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Run the following command to clone the workshop repo:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/newpatiente2e/Contoso-New-Patient-Assets.git contoso_new_patient_assets\n")))),(0,o.kt)("h2",{id:"install-the-workshop-developer-tools"},"Install the workshop developer tools"),(0,o.kt)("p",null,"The are three ways to install the workshop developer tools. The option you choose will depend on your computer's capabilities and your preference."),(0,o.kt)("h3",{id:"docker-dev-containers"},"Docker Dev Containers"),(0,o.kt)("p",null,"If you can run Docker on your computer, follow the ",(0,o.kt)("a",{parentName:"p",href:"../install-prerequisites/dev-containers"},"Dev Container instructions"),"."),(0,o.kt)("p",null,"Note, the minimum requirement for running Docker on your computer is 4GB of RAM, the recommended amount is 8GB of RAM."),(0,o.kt)("h3",{id:"azure-container-instances"},"Azure Container Instances"),(0,o.kt)("p",null,"If you can't run Docker on your computer or would prefer not to, follow the ",(0,o.kt)("a",{parentName:"p",href:"../install-prerequisites/container-instances"},"Container Instance instructions"),"."),(0,o.kt)("h3",{id:"local-installation"},"Local installation"),(0,o.kt)("p",null,"This option requires the least amount of computer resources, but it is the most time-consuming to install. Follow the ",(0,o.kt)("a",{parentName:"p",href:"../install-prerequisites/local-install"},"Local installation instructions"),". Installing the prerequisites locally will take approximately 10 minutes, and is supported on Windows, macOS, and Linux."))}u.isMDXComponent=!0}}]);