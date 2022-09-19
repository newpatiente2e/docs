"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[264],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=s(r),u=a,h=c["".concat(p,".").concat(u)]||c[u]||d[u]||n;return r?o.createElement(h,i(i({ref:t},m),{},{components:r})):o.createElement(h,i({ref:t},m))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,i=new Array(n);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<n;s++)i[s]=r[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}c.displayName="MDXCreateElement"},5466:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>l,toc:()=>s});var o=r(7462),a=(r(7294),r(3905));const n={},i="Train your model",l={unversionedId:"form-recognizer-studio/train-model",id:"form-recognizer-studio/train-model",title:"Train your model",description:"With your dataset labeled, you're now ready to train your model. Follow these steps to train your model.",source:"@site/docs/25-form-recognizer-studio/50-train-model.md",sourceDirName:"25-form-recognizer-studio",slug:"/form-recognizer-studio/train-model",permalink:"/docs/form-recognizer-studio/train-model",draft:!1,editUrl:"https://github.com/newpatiente2e/docs/tree/main/docs/25-form-recognizer-studio/50-train-model.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Label your data",permalink:"/docs/form-recognizer-studio/label-data"}},p={},s=[{value:"Test the model",id:"test-the-model",level:2}],m={toc:s};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"train-your-model"},"Train your model"),(0,a.kt)("p",null,"With your dataset labeled, you're now ready to train your model. Follow these steps to train your model."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the train button in the upper-right corner."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"imge shows the train form button",src:r(8518).Z,width:"1094",height:"317"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"From the train a new model dialog, provide a unique model ID and, optionally, a description. The model ID accepts a string data type.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Template")," from the ",(0,a.kt)("strong",{parentName:"p"},"Build Mode"),"."),(0,a.kt)("p",{parentName:"li"},"Learn more about the ",(0,a.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/applied-ai-services/form-recognizer/concept-custom"},"model types and capabilities"),"."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Train model dialog",src:r(8982).Z,width:"869",height:"447"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select ",(0,a.kt)("strong",{parentName:"p"},"Train")," to initiate the training process.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Template models train in a few minutes. Neural models can take up to 30 minutes to train.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Navigate to the ",(0,a.kt)("em",{parentName:"p"},"Models")," menu to view the status of the train operation.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"You may need to refresh the ",(0,a.kt)("strong",{parentName:"p"},"Models")," page to see the status of the train operation."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{alt:"Train model status",src:r(1047).Z,width:"1230",height:"351"})))),(0,a.kt)("h2",{id:"test-the-model"},"Test the model"),(0,a.kt)("p",null,"Once the model training is complete, you can test your model by selecting the model on the models list page."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the model and select on the ",(0,a.kt)("strong",{parentName:"p"},"Test")," button.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the ",(0,a.kt)("inlineCode",{parentName:"p"},"+ Add")," button to select a file to test the model.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"With a file selected, choose the ",(0,a.kt)("strong",{parentName:"p"},"Analyze")," button to test the model.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The model results are displayed in the main window and the fields extracted are listed in the right navigation bar.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Validate your model by evaluating the results for each field.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The right navigation bar also has the sample code to invoke your model and the JSON results from the API."))),(0,a.kt)("p",null,"Congratulations you've trained a custom model in the Form Recognizer Studio! Your model is ready for use with the REST API or the SDK to analyze documents."))}d.isMDXComponent=!0},8518:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/train-form-model-7500bd016cde8bdc2fbba73500ad6fd0.png"},8982:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/train-model-dialog-5ad2f7a2354260c3ace31a196d03a040.png"},1047:(e,t,r)=>{r.d(t,{Z:()=>o});const o=r.p+"assets/images/train-model-status-b4688df36cd6d8d5a7523cb9593d0f8e.png"}}]);