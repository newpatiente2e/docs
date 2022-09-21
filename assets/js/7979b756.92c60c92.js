"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[899],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>u});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=d(r),u=a,g=m["".concat(p,".").concat(u)]||m[u]||c[u]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<o;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2068:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=r(7462),a=(r(7294),r(3905));const o={},i="Upload training data",l={unversionedId:"form-recognizer-studio/upload-training-data",id:"form-recognizer-studio/upload-training-data",title:"Upload training data",description:"This topic describes how to upload your training data to the Form Recognizer Studio.",source:"@site/docs/25-form-recognizer-studio/25-upload-training-data.md",sourceDirName:"25-form-recognizer-studio",slug:"/form-recognizer-studio/upload-training-data",permalink:"/docs/form-recognizer-studio/upload-training-data",draft:!1,editUrl:"https://github.com/newpatiente2e/docs/tree/main/docs/25-form-recognizer-studio/25-upload-training-data.md",tags:[],version:"current",sidebarPosition:25,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Form recognizer studio",permalink:"/docs/form-recognizer-studio/intro-form-recognizer"},next:{title:"Create a project",permalink:"/docs/form-recognizer-studio/create-project"}},p={},d=[{value:"Upload new patient registration form training data",id:"upload-new-patient-registration-form-training-data",level:2}],s={toc:d};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"upload-training-data"},"Upload training data"),(0,a.kt)("p",null,"This topic describes how to upload your training data to the Form Recognizer Studio."),(0,a.kt)("p",null,"This tutorial includes a ",(0,a.kt)("em",{parentName:"p"},"New Patient Registration Form")," and matching label data that you need to upload to an Azure storage container."),(0,a.kt)("p",null,"The label data describes the location of the fields on the forms and was created for the tutorial using Form recognizer Studio. The label data is in a JSON file that is named the same as the form file. For example, the label data for the form named ",(0,a.kt)("inlineCode",{parentName:"p"},"form1.pdf")," is in the file named ",(0,a.kt)("inlineCode",{parentName:"p"},"form1.pdf.json"),". The label data is in the same folder as the form files."),(0,a.kt)("h2",{id:"upload-new-patient-registration-form-training-data"},"Upload new patient registration form training data"),(0,a.kt)("p",null,"Upload the ",(0,a.kt)("em",{parentName:"p"},"New Patient Registration Form")," and matching label data to the storage container that you created in the previous step."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Storage account")," page, select ",(0,a.kt)("strong",{parentName:"li"},"Containers"),"."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"+ Container"),"."),(0,a.kt)("li",{parentName:"ol"},"Name the name container ",(0,a.kt)("inlineCode",{parentName:"li"},"trainingdata"),"."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"From the ",(0,a.kt)("strong",{parentName:"li"},"Containers")," page, select the ",(0,a.kt)("strong",{parentName:"li"},"trainingdata")," container."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"trainingdata")," page, select ",(0,a.kt)("strong",{parentName:"li"},"Upload"),"."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Upload")," page, select the ",(0,a.kt)("strong",{parentName:"li"},"Add files")," icon."),(0,a.kt)("li",{parentName:"ol"},"In the ",(0,a.kt)("strong",{parentName:"li"},"Add files")," dialog, select the all the files from the ",(0,a.kt)("strong",{parentName:"li"},"contoso_new_patient_assets/training_labelled")," folder you cloned to your computer."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Open"),"."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Upload"),".")))}c.isMDXComponent=!0}}]);