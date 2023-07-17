"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[699],{4137:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>u});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=d(n),f=a,u=m["".concat(l,".").concat(f)]||m[f]||s[f]||o;return n?r.createElement(u,i(i({ref:t},c),{},{components:n})):r.createElement(u,i({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:a,i[1]=p;for(var d=2;d<o;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>d});var r=n(7462),a=(n(7294),n(4137));const o={},i="Upload a registration form",p={unversionedId:"create-new-patient-app/upload-doc",id:"create-new-patient-app/upload-doc",title:"Upload a registration form",description:"Complete a new patient registration form and upload it to the patient registration app.",source:"@site/docs/30-create-new-patient-app/20-upload-doc.md",sourceDirName:"30-create-new-patient-app",slug:"/create-new-patient-app/upload-doc",permalink:"/docs/create-new-patient-app/upload-doc",draft:!1,editUrl:"https://github.com/newpatiente2e/docs/tree/main/docs/30-create-new-patient-app/20-upload-doc.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Integrate Form Recognizer",permalink:"/docs/create-new-patient-app/integrate-ai"},next:{title:"Adding surgery roles",permalink:"/docs/category/adding-surgery-roles"}},l={},d=[{value:"Open the new patient registration form",id:"open-the-new-patient-registration-form",level:2},{value:"Fill out the form by hand",id:"fill-out-the-form-by-hand",level:3},{value:"Edit the form in a PDF reader",id:"edit-the-form-in-a-pdf-reader",level:3},{value:"Upload the registration form",id:"upload-the-registration-form",level:2},{value:"Validate the patient&#39;s information",id:"validate-the-patients-information",level:2}],c={toc:d},m="wrapper";function s(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,r.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upload-a-registration-form"},"Upload a registration form"),(0,a.kt)("p",null,"Complete a new patient registration form and upload it to the patient registration app."),(0,a.kt)("h2",{id:"open-the-new-patient-registration-form"},"Open the new patient registration form"),(0,a.kt)("p",null,"You can print the document and then fill it out by hand, or you can open the document in a PDF reader and edit the document. "),(0,a.kt)("p",null,"Use the ",(0,a.kt)("inlineCode",{parentName:"p"},"contoso_new_patient_assets/forms/new_patient_information_<language>.pdf")," document that matches the language you used to label and train the model in Form Recognizer Studio."),(0,a.kt)("h3",{id:"fill-out-the-form-by-hand"},"Fill out the form by hand"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Print the form and fill it out by hand."),(0,a.kt)("li",{parentName:"ol"},"From your mobile device, using the patient registration app, take a picture of the completed form and upload the registration form."),(0,a.kt)("li",{parentName:"ol"},"The patient registration app will extract the patient information from the form and display the information in the app."),(0,a.kt)("li",{parentName:"ol"},"Confirm the information is correct and click the ",(0,a.kt)("strong",{parentName:"li"},"Submit")," button.")),(0,a.kt)("h3",{id:"edit-the-form-in-a-pdf-reader"},"Edit the form in a PDF reader"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the ",(0,a.kt)("inlineCode",{parentName:"li"},"contoso_new_patient_assets/forms/new_patient_information.pdf")," file in a PDF reader."),(0,a.kt)("li",{parentName:"ol"},"Complete the form using the edit tools in the PDF reader."),(0,a.kt)("li",{parentName:"ol"},"Save the file.")),(0,a.kt)("h2",{id:"upload-the-registration-form"},"Upload the registration form"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Upload the file to the patient registration app you deployed in the previous section.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The patient registration app will extract the patient information from the form and display the information in the app.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Confirm the information is correct and click the ",(0,a.kt)("strong",{parentName:"p"},"Upload")," button. "),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"The gif shows the process of uploading a form",src:n(4958).Z,width:"1493",height:"1116"})))),(0,a.kt)("h2",{id:"validate-the-patients-information"},"Validate the patient's information"),(0,a.kt)("p",null,"The patient registration app will extract the patient information from the form and display the information in the app. Confirm the information is correct and click the ",(0,a.kt)("strong",{parentName:"p"},"Save")," button."))}s.isMDXComponent=!0},4958:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/basic-workflow-89ab935c405cfc887d5d120aab78e2af.gif"}}]);