"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[699],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),f=c(r),m=a,u=f["".concat(l,".").concat(m)]||f[m]||s[m]||o;return r?n.createElement(u,i(i({ref:t},d),{},{components:r})):n.createElement(u,i({ref:t},d))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},i="Upload a registration form",p={unversionedId:"create-new-patient-app/upload-doc",id:"create-new-patient-app/upload-doc",title:"Upload a registration form",description:"Complete a new patient registration form and upload it to the patient registration app.",source:"@site/docs/30-create-new-patient-app/20-upload-doc.md",sourceDirName:"30-create-new-patient-app",slug:"/create-new-patient-app/upload-doc",permalink:"/docs/create-new-patient-app/upload-doc",draft:!1,editUrl:"https://github.com/newpatiente2e/docs/tree/main/docs/30-create-new-patient-app/20-upload-doc.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Integrate Form Recognizer",permalink:"/docs/create-new-patient-app/integrate-ai"},next:{title:"Adding surgery roles",permalink:"/docs/category/adding-surgery-roles"}},l={},c=[{value:"Open the new patient registration form",id:"open-the-new-patient-registration-form",level:2},{value:"Fill out the form by hand",id:"fill-out-the-form-by-hand",level:3},{value:"Edit the form in a PDF reader",id:"edit-the-form-in-a-pdf-reader",level:3}],d={toc:c};function s(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upload-a-registration-form"},"Upload a registration form"),(0,a.kt)("p",null,"Complete a new patient registration form and upload it to the patient registration app."),(0,a.kt)("h2",{id:"open-the-new-patient-registration-form"},"Open the new patient registration form"),(0,a.kt)("p",null,"You can either print the form and fill it out by hand, or you can open the form in a PDF reader and edit the document. The form is located in the ",(0,a.kt)("inlineCode",{parentName:"p"},"contoso_new_patient_assets")," folder you cloned to your computer. Open the ",(0,a.kt)("inlineCode",{parentName:"p"},"contoso_new_patient_assets/forms/new_patient_information.pdf")," file."),(0,a.kt)("h3",{id:"fill-out-the-form-by-hand"},"Fill out the form by hand"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Print the form and fill it out by hand."),(0,a.kt)("li",{parentName:"ol"},"From your mobile device, using the patient registration app, take a picture of the completed form and upload the registration form."),(0,a.kt)("li",{parentName:"ol"},"The patient registration app will extract the patient information from the form and display the information in the app."),(0,a.kt)("li",{parentName:"ol"},"Confirm the information is correct and click the ",(0,a.kt)("strong",{parentName:"li"},"Submit")," button.")),(0,a.kt)("h3",{id:"edit-the-form-in-a-pdf-reader"},"Edit the form in a PDF reader"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the ",(0,a.kt)("inlineCode",{parentName:"li"},"contoso_new_patient_assets/forms/new_patient_information.pdf")," file in a PDF reader."),(0,a.kt)("li",{parentName:"ol"},"Complete the form using the edit tools in the PDF reader."),(0,a.kt)("li",{parentName:"ol"},"Save the file."),(0,a.kt)("li",{parentName:"ol"},"Upload the file to the patient registration app."),(0,a.kt)("li",{parentName:"ol"},"The patient registration app will extract the patient information from the form and display the information in the app."),(0,a.kt)("li",{parentName:"ol"},"Confirm the information is correct and click the ",(0,a.kt)("strong",{parentName:"li"},"Submit")," button.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"The gif shows the process of uploading a form",src:r(7549).Z,width:"1493",height:"1116"})))}s.isMDXComponent=!0},7549:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/basic-workflow-89ab935c405cfc887d5d120aab78e2af.gif"}}]);