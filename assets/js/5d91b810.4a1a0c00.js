"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[264],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=o.createContext({}),m=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=m(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=m(r),u=a,f=c["".concat(s,".").concat(u)]||c[u]||d[u]||n;return r?o.createElement(f,i(i({ref:t},p),{},{components:r})):o.createElement(f,i({ref:t},p))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var m=2;m<n;m++)i[m]=r[m];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5466:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>m});var o=r(7462),a=(r(7294),r(3905));const n={},i="Train your model",l={unversionedId:"form-recognizer-studio/train-model",id:"form-recognizer-studio/train-model",title:"Train your model",description:"With your training forms labeled, you're now ready to train your model. Follow these steps to train your model.",source:"@site/docs/25-form-recognizer-studio/50-train-model.md",sourceDirName:"25-form-recognizer-studio",slug:"/form-recognizer-studio/train-model",permalink:"/docs/form-recognizer-studio/train-model",draft:!1,editUrl:"https://github.com/newpatiente2e/docs/tree/main/docs/25-form-recognizer-studio/50-train-model.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Label your data",permalink:"/docs/form-recognizer-studio/label-data"},next:{title:"Deploy new patient app",permalink:"/docs/category/deploy-new-patient-app"}},s={},m=[{value:"Test the model",id:"test-the-model",level:2}],p={toc:m};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"train-your-model"},"Train your model"),(0,a.kt)("p",null,"With your training forms labeled, you're now ready to train your model. Follow these steps to train your model."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the Train button in the upper-right corner."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"image shows the train form button",src:r(1168).Z,width:"1094",height:"317"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the train a new model dialog, name your model ",(0,a.kt)("inlineCode",{parentName:"p"},"patient-registration-model"),", and optionally, provide a description.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Template")," from the ",(0,a.kt)("strong",{parentName:"p"},"Build Mode"),". "),(0,a.kt)("p",{parentName:"li"},"Template models train in a few minutes. Neural models can take up to 30 minutes to train. Learn more about the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/applied-ai-services/form-recognizer/concept-custom?WT.mc_id=aiml-77396-cxa"},"model types and capabilities"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Train model dialog",src:r(6198).Z,width:"878",height:"450"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Train")," to initiate the training process. ")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Go to Models")," to navigate to the ",(0,a.kt)("em",{parentName:"p"},"Models")," menu to view the status of the train operation.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You may need to refresh the ",(0,a.kt)("strong",{parentName:"p"},"Models")," page to see latest status of the train operation."),(0,a.kt)("admonition",{parentName:"li",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The training model status will change to ",(0,a.kt)("strong",{parentName:"p"},"succeeded"),". The model is now ready for use.")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Train model status",src:r(7474).Z,width:"1230",height:"351"})))),(0,a.kt)("h2",{id:"test-the-model"},"Test the model"),(0,a.kt)("p",null,"Once the model training is complete, you can test your model by selecting the model on the models list page."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Test")," from the Form Recognizer Studio menu."),(0,a.kt)("li",{parentName:"ol"},"Browse for a file or drag and drop a file into the ",(0,a.kt)("em",{parentName:"li"},"Test model")," page. Select a .jpeg or .pdf file from the ",(0,a.kt)("strong",{parentName:"li"},"contoso_new_patient_assets/training_labeled")," folder that matches the language you used to train your model."),(0,a.kt)("li",{parentName:"ol"},"With a file selected, choose the ",(0,a.kt)("strong",{parentName:"li"},"Analyze")," button to test the model."),(0,a.kt)("li",{parentName:"ol"},"The model results are displayed in the main window and the fields extracted are listed in the right navigation bar on the ",(0,a.kt)("em",{parentName:"li"},"fields")," tab."),(0,a.kt)("li",{parentName:"ol"},"Validate your model by evaluating the results for each field."),(0,a.kt)("li",{parentName:"ol"},"The right navigation bar also includes sample code to invoke your model and the JSON results from the API.")),(0,a.kt)("p",null,"Congratulations you've trained a custom model in the Form Recognizer Studio! Your model is ready for use with the patient registration app."))}d.isMDXComponent=!0},1168:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/train-form-model-7500bd016cde8bdc2fbba73500ad6fd0.png"},6198:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/train-model-dialog-6c5a6da92d44034b4a1eca7927c54917.png"},7474:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/train-model-status-b4688df36cd6d8d5a7523cb9593d0f8e.png"}}]);