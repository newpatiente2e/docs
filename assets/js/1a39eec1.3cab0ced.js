"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[67],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,f=m["".concat(p,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5418:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="Create Azure services",l={unversionedId:"create-azure-services",id:"create-azure-services",title:"Create Azure services",description:"Deploy Azure services",source:"@site/docs/20-create-azure-services.md",sourceDirName:".",slug:"/create-azure-services",permalink:"/docs/create-azure-services",draft:!1,editUrl:"https://github.com/newpatiente2e/docs/tree/main/docs/20-create-azure-services.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Local installation",permalink:"/docs/install-prerequisites/local-install"},next:{title:"Azure Form Recognizer",permalink:"/docs/category/azure-form-recognizer"}},p={},s=[{value:"Deploy Azure services",id:"deploy-azure-services",level:2},{value:"Open a terminal window in VS Code",id:"open-a-terminal-window-in-vs-code",level:2},{value:"Create the Azure Patient Registration Services",id:"create-the-azure-patient-registration-services",level:3}],c={toc:s};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-azure-services"},"Create Azure services"),(0,a.kt)("h2",{id:"deploy-azure-services"},"Deploy Azure services"),(0,a.kt)("p",null,"The following services will be created in your Azure subscription:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/services/form-recognizer?WT.mc_id=aiml-77396-cxa"},"Azure Form Recognizer"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/azure/cosmos-db/introduction?WT.mc_id=aiml-77396-cxa"},"Azure Cosmos DB"),"."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/services/app-service/static/?WT.mc_id=aiml-77396-cxa"},"Azure Static Web Apps"),".")),(0,a.kt)("h2",{id:"open-a-terminal-window-in-vs-code"},"Open a terminal window in VS Code"),(0,a.kt)("p",null,"From VS Code, select ",(0,a.kt)("kbd",null,"Ctrl+Shift+`")," to open a new terminal window."),(0,a.kt)("h3",{id:"create-the-azure-patient-registration-services"},"Create the Azure Patient Registration Services"),(0,a.kt)("p",null,"From the terminal window, run the following commands to create the Azure Patient Registration Services."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Authenticate to Azure by running the ",(0,a.kt)("inlineCode",{parentName:"p"},"az login --use-device-code")," command.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Initialize your Azure environment with ",(0,a.kt)("inlineCode",{parentName:"p"},"azd init")," command.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Create an environment name. For this workshop, the environment name must be globally unique. Create a unique environment name by appending a random six digital number after ",(0,a.kt)("strong",{parentName:"p"},"contoso-health-app-NNNNNN"),", for example, ",(0,a.kt)("strong",{parentName:"p"},"contoso-health-app-318721"),". But don't use the example name, use your own.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select a region (e.g: ",(0,a.kt)("strong",{parentName:"p"},"eastus"),").")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select your subscription.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Deploy the Azure services with ",(0,a.kt)("inlineCode",{parentName:"p"},"azd up --debug"),"."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"It will take approximately 5 minutes to deploy the Azure services. So now is a great time to grab a cup of coffee or tea or read the next section of the workshop documentation.")),(0,a.kt)("admonition",{parentName:"li",type:"tip"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"You can only have one free Azure Form Recognizer service in your Azure subscription."),(0,a.kt)("li",{parentName:"ul"},"If your azd environment fails to deploy, you can delete the environment by deleting the ",(0,a.kt)("inlineCode",{parentName:"li"},".azure")," folder in the ",(0,a.kt)("inlineCode",{parentName:"li"},"contoso_new_patient_app")," folder.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"When  the ",(0,a.kt)("inlineCode",{parentName:"p"},"azd up")," command completes, select the ",(0,a.kt)("strong",{parentName:"p"},"View resources")," link to open the newly created resource group in the Azure portal."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"The image shows the link to the Azure resource group",src:r(8818).Z,width:"1300",height:"458"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Leave the Azure portal open in your web browser as you'll need to return to it later in the workshop.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Leave VS Code open, as you'll need it in the next section of the workshop."))))}u.isMDXComponent=!0},8818:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/resource_group_link-dc1ee551a7f40ff34d0c64c3ee9f3ae4.png"}}]);