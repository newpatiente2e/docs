"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[905],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>p});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var c=r.createContext({}),m=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=m(o),p=n,f=d["".concat(c,".").concat(p)]||d[p]||u[p]||a;return o?r.createElement(f,s(s({ref:t},l),{},{components:o})):r.createElement(f,s({ref:t},l))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var m=2;m<a;m++)s[m]=o[m];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},2936:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>m});var r=o(7462),n=(o(7294),o(3905));const a={},s="Form recognizer studio",i={unversionedId:"form-recognizer-studio/intro-form-recognizer",id:"form-recognizer-studio/intro-form-recognizer",title:"Form recognizer studio",description:"Form recognizer studio is a web-based tool that allows you to create custom models. You can use it to label your training documents and train your custom model.",source:"@site/docs/25-form-recognizer-studio/10-intro-form-recognizer.md",sourceDirName:"25-form-recognizer-studio",slug:"/form-recognizer-studio/intro-form-recognizer",permalink:"/docs/form-recognizer-studio/intro-form-recognizer",draft:!1,editUrl:"https://github.com/newpatiente2e/docs/tree/main/docs/25-form-recognizer-studio/10-intro-form-recognizer.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Azure Form Recognizer",permalink:"/docs/category/azure-form-recognizer"},next:{title:"Upload training data",permalink:"/docs/form-recognizer-studio/upload-training-data"}},c={},m=[{value:"Custom Form Recognizer models",id:"custom-form-recognizer-models",level:2},{value:"Custom model types",id:"custom-model-types",level:2},{value:"Custom template model",id:"custom-template-model",level:3},{value:"Custom neural model",id:"custom-neural-model",level:3}],l={toc:m};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"form-recognizer-studio"},"Form recognizer studio"),(0,n.kt)("p",null,"Form recognizer studio is a web-based tool that allows you to create custom models. You can use it to label your training documents and train your custom model."),(0,n.kt)("h2",{id:"custom-form-recognizer-models"},"Custom Form Recognizer models"),(0,n.kt)("p",null,"Form Recognizer uses advanced machine learning to extract text and table data from your documents. You can train custom models to extract data specific to your forms, or use the prebuilt models to extract common fields from receipts, invoices, and business cards."),(0,n.kt)("p",null,"To train a custom model, you need to provide a set of labeled training documents. The training documents should be in the same format as the documents you want to recognize. For example, if you want to recognize receipts, you should provide labeled training receipts."),(0,n.kt)("p",null,"You need at least five examples of a document type to train a custom model. For example, if you want to recognize receipts, you'd need five labeled receipts examples."),(0,n.kt)("h2",{id:"custom-model-types"},"Custom model types"),(0,n.kt)("p",null,"Custom models can be one of two types, ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/applied-ai-services/form-recognizer/concept-custom-template?WT.mc_id=aiml-77396-cxa"},(0,n.kt)("strong",{parentName:"a"},"custom template"))," or custom form and ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/applied-ai-services/form-recognizer/concept-custom-neural?WT.mc_id=aiml-77396-cxa"},(0,n.kt)("strong",{parentName:"a"},"custom neural"))," or custom document models. The labeling and training process for both models is identical, but the models differ as follows:"),(0,n.kt)("h3",{id:"custom-template-model"},"Custom template model"),(0,n.kt)("p",null,"The custom template or custom form model relies on a consistent visual template to extract the labeled data. The accuracy of your model is affected by variances in the visual structure of your documents. Structured  forms such as questionnaires or applications are examples of consistent visual templates."),(0,n.kt)("p",null,"Your training set will consist of structured documents where the formatting and layout is static and constant from one document instance to the next. Custom template models support key-value pairs, selection marks, tables, signature fields, and regions. Template models and can be trained on documents in any of the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/applied-ai-services/form-recognizer/language-support?WT.mc_id=aiml-77396-cxa"},"supported languages"),". For more information, ",(0,n.kt)("em",{parentName:"p"},"see")," ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/applied-ai-services/form-recognizer/concept-custom-template?WT.mc_id=aiml-77396-cxa"},"custom template models"),"."),(0,n.kt)("h3",{id:"custom-neural-model"},"Custom neural model"),(0,n.kt)("p",null,"The custom neural (custom document) model uses deep learning models and base models trained on a large collection of documents. This model is then fine-tuned or adapted to your data when you train the model with a labeled dataset. Custom neural models support structured, semi-structured, and unstructured documents to extract fields. Custom neural models currently support English-language documents. When you're choosing between the two model types, start with a neural model to determine if it meets your functional needs. See ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/azure/applied-ai-services/form-recognizer/concept-custom-neural?WT.mc_id=aiml-77396-cxa"},"neural models")," to learn more about custom document models."))}u.isMDXComponent=!0}}]);