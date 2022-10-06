"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[702],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),p=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(r),d=n,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||a;return r?o.createElement(m,i(i({ref:t},u),{},{components:r})):o.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9791:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:1,slug:"/"},i="Workshop Introduction",s={unversionedId:"introduction",id:"introduction",title:"Workshop Introduction",description:"Most of the forms we complete nowadays are online but there are still times when we need to complete paper-based forms. There are plenty of examples, for this workshop, we've chosen a patient registration for a doctor's surgery as it's something we've all had to do at some point.",source:"@site/docs/10-introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/",draft:!1,editUrl:"https://github.com/newpatiente2e/docs/tree/main/docs/10-introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Install prerequisites",permalink:"/docs/install-prerequisites"}},l={},p=[{value:"Workshop problem statement",id:"workshop-problem-statement",level:2},{value:"Workshop goals",id:"workshop-goals",level:2},{value:"Introduction to Form Recognizer",id:"introduction-to-form-recognizer",level:2},{value:"Workshop Personas",id:"workshop-personas",level:2},{value:"Workshop outline",id:"workshop-outline",level:2},{value:"Solution overview",id:"solution-overview",level:2},{value:"Architecture",id:"architecture",level:2}],u={toc:p};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"workshop-introduction"},"Workshop Introduction"),(0,n.kt)("p",null,"Most of the forms we complete nowadays are online but there are still times when we need to complete paper-based forms. There are plenty of examples, for this workshop, we've chosen a patient registration for a doctor's surgery as it's something we've all had to do at some point."),(0,n.kt)("h2",{id:"workshop-problem-statement"},"Workshop problem statement"),(0,n.kt)("p",null,"This solution aims to address data issues that creep in with paper-based systems, plus the overhead associated with entering the new patient information into the surgery system."),(0,n.kt)("p",null,"For this doctor's surgery, patient registration is still a paper-based process and will continue to be so for the foreseeable future. The surgery wants to improve the patient experience by moving to an online registration process. The surgery has a website and a mobile app, but it's not integrated with the patient registration process."),(0,n.kt)("h2",{id:"workshop-goals"},"Workshop goals"),(0,n.kt)("p",null,"The goal of this workshop is for you to learn how to infuse AI technologies into a web based patient registration system. The workshop solution is a simplified version of a real-world scenario, simple enough to be completed in a workshop but complex enough to demonstrate the power of AI technologies. The workshop provides a step-by-step guide, taking you through the process of deploying the solution to Azure. You'll learn a little about Azure Static Web Apps, Azure Functions, Azure Cognitive Services, Azure Storage, and Azure Cosmos DB."),(0,n.kt)("h2",{id:"introduction-to-form-recognizer"},"Introduction to Form Recognizer"),(0,n.kt)("p",null,"The solution will build on Azure Form Recognizer. Azure Form Recognizer is a new Cognitive Service that uses machine learning to extract text and table data from form documents. You can train custom models to extract data specific to your forms, or use the prebuilt models to extract common fields from receipts, invoices, and business cards."),(0,n.kt)("h2",{id:"workshop-personas"},"Workshop Personas"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Persona"),(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null}))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Surgery admin: Drew"),(0,n.kt)("td",{parentName:"tr",align:null},"Drew's role is to ensure new patients register in the surgery system. Drew also verifies new patient data before committing to the patient data in the surgery system."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"The image shows the picture of an admin",src:r(1263).Z,width:"101",height:"117"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Nurse: Alex"),(0,n.kt)("td",{parentName:"tr",align:null},"Alex uses new patient registration to understand any existing allergies or medicine reactions."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"The image shows the picture of a nurse",src:r(7574).Z,width:"101",height:"102"}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Doctor: Anthony"),(0,n.kt)("td",{parentName:"tr",align:null},"Anthony uses new patient registration to understand any existing allergies or medicine reactions. Anthony uses the new patient system to record medical events."),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"The image shows the photo of a doctor",src:r(7828).Z,width:"100",height:"100"}))))),(0,n.kt)("h2",{id:"workshop-outline"},"Workshop outline"),(0,n.kt)("p",null,"The following is an outline of the workshop:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Learn about and create the Azure services for the app."),(0,n.kt)("li",{parentName:"ol"},"Train a custom Azure Form Recognizer model."),(0,n.kt)("li",{parentName:"ol"},"Create a web app that integrates with Form Recognizer."),(0,n.kt)("li",{parentName:"ol"},"Define application roles that map to the workshop roles."),(0,n.kt)("li",{parentName:"ol"},"Implement app functions to support surgery admin, nurse, and doctor roles.")),(0,n.kt)("h2",{id:"solution-overview"},"Solution overview"),(0,n.kt)("p",null,"The following outlines the process of the solution:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"A new patient completes the patient registration form."),(0,n.kt)("li",{parentName:"ol"},"The patient then uploads the form to the web app."),(0,n.kt)("li",{parentName:"ol"},"The web app uses Form Recognizer to extract the data from the form."),(0,n.kt)("li",{parentName:"ol"},"The app returns the extracted data to the patient."),(0,n.kt)("li",{parentName:"ol"},"The patient submits the verified new data."),(0,n.kt)("li",{parentName:"ol"},"The surgery admin verifies registration and adds it to the doctor's surgery system."),(0,n.kt)("li",{parentName:"ol"},"Data is stored in the surgery system."),(0,n.kt)("li",{parentName:"ol"},"Document data is analyzed and translated."),(0,n.kt)("li",{parentName:"ol"},"New patient registration records are available to the surgery's nurse and doctor.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The image shows the registration process",src:r(3651).Z,width:"1280",height:"720"})),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The image shows the architecture of the solution",src:r(4151).Z,width:"1186",height:"526"})))}c.isMDXComponent=!0},7574:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/alex-c3e6492dba94a67c99afce20f3e5b4b0.png"},7828:(e,t,r)=>{r.d(t,{Z:()=>o});const o="data:image/jpeg;base64,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"},4151:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/architecture-6631a25734e64c8a2a1288b7c1731796.png"},1263:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/drew-660de00db7dbbbcb1e790eb2a0044721.png"},3651:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/registration_process-0da1473bed5089798c9df0f423a783bf.png"}}]);