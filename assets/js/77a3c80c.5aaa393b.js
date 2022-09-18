"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[467],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),p=n,f=m["".concat(d,".").concat(p)]||m[p]||u[p]||l;return a?r.createElement(f,o(o({ref:t},c),{},{components:a})):r.createElement(f,o({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},217:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var r=a(7462),n=(a(7294),a(3905));const l={},o="Label your data",i={unversionedId:"form-recognizer-studio/label-data",id:"form-recognizer-studio/label-data",title:"Label your data",description:"In your project, there will be five documents, four of the documents will have an assciated purple dot to indicate the documents have need analyzed and labels. The fifth document need to be analyzed and labelled.",source:"@site/docs/25-form-recognizer-studio/40-label-data.md",sourceDirName:"25-form-recognizer-studio",slug:"/form-recognizer-studio/label-data",permalink:"/docs/form-recognizer-studio/label-data",draft:!1,editUrl:"https://github.com/newpatiente2e/docs/tree/main/docs/25-form-recognizer-studio/40-label-data.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a project",permalink:"/docs/form-recognizer-studio/create-project"},next:{title:"Train your model",permalink:"/docs/form-recognizer-studio/train-model"}},d={},s=[{value:"Video introduction to labelling forms with Form Recognizer",id:"video-introduction-to-labelling-forms-with-form-recognizer",level:2},{value:"New patient registration form",id:"new-patient-registration-form",level:2},{value:"Label the new patient registration form",id:"label-the-new-patient-registration-form",level:2}],c={toc:s};function u(e){let{components:t,...l}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"label-your-data"},"Label your data"),(0,n.kt)("p",null,"In your project, there will be five documents, four of the documents will have an assciated purple dot to indicate the documents have need analyzed and labels. The fifth document need to be analyzed and labelled."),(0,n.kt)("h2",{id:"video-introduction-to-labelling-forms-with-form-recognizer"},"Video introduction to labelling forms with Form Recognizer"),(0,n.kt)("p",null,"Watch this YouTube to understand how to label a form. Open the video in Youtube to watch in full screen."),(0,n.kt)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/d1QHX47mSDo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,n.kt)("h2",{id:"new-patient-registration-form"},"New patient registration form"),(0,n.kt)("p",null,"This is the new patient form that you will label."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"The image shows the label data panel",src:a(7412).Z,width:"618",height:"875"})),(0,n.kt)("h2",{id:"label-the-new-patient-registration-form"},"Label the new patient registration form"),(0,n.kt)("p",null,"The following steps will show you how to label your data."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the last document in the list of documents named sample.pdf to analyze and then open the document for labelling.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ISO language code for the document. You'll find this field in the top right-hand corner of the document.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the Family name field and then from the list of labels select the label ",(0,n.kt)("inlineCode",{parentName:"p"},"family_name"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Repeat this process for the other fields in the document. It's important to label all the fields in the document as they will be used to train the model."),(0,n.kt)("p",{parentName:"li"},"To assign a value to the field, choose a word or words in the document and select the field in either the dropdown or the field list on the right navigation bar. You'll see the labeled value below the field name in the list of fields."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"given_names"),(0,n.kt)("li",{parentName:"ul"},"date_of_birth"),(0,n.kt)("li",{parentName:"ul"},"address_unit"),(0,n.kt)("li",{parentName:"ul"},"address_number",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Take care selecting the address number field as the adjacent text 'street' will be likely be selected as well. Click on the text 'street' to unselect it."))),(0,n.kt)("li",{parentName:"ul"},"address_street"),(0,n.kt)("li",{parentName:"ul"},"address_city"),(0,n.kt)("li",{parentName:"ul"},"address_state"),(0,n.kt)("li",{parentName:"ul"},"address_code"),(0,n.kt)("li",{parentName:"ul"},"email"),(0,n.kt)("li",{parentName:"ul"},"phone"),(0,n.kt)("li",{parentName:"ul"},"gender identity: male, female, ftm, mtf, queer, decline"),(0,n.kt)("li",{parentName:"ul"},"preferred pronoun: she, he, they, other"),(0,n.kt)("li",{parentName:"ul"},"emergency_name"),(0,n.kt)("li",{parentName:"ul"},"emergency_relationship"),(0,n.kt)("li",{parentName:"ul"},"emergency_email"),(0,n.kt)("li",{parentName:"ul"},"emergency_phone"),(0,n.kt)("li",{parentName:"ul"},"allergy_1"),(0,n.kt)("li",{parentName:"ul"},"reacton_1"),(0,n.kt)("li",{parentName:"ul"},"allergy_2"),(0,n.kt)("li",{parentName:"ul"},"reaction_2"),(0,n.kt)("li",{parentName:"ul"},"allergy_3"),(0,n.kt)("li",{parentName:"ul"},"reaction_3")))),(0,n.kt)("p",null,"You now have all the documents in your dataset labeled. If you look at the storage account, you'll find a ",(0,n.kt)("em",{parentName:"p"},".labels.json")," and ",(0,n.kt)("em",{parentName:"p"},".ocr.json")," files that correspond to each document in your training dataset and a new fields.json file. This training dataset will be submitted to train the model."))}u.isMDXComponent=!0},7412:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/label-data-panel-9471e1dc94e52ba1b2135cb21537b6cf.png"}}]);