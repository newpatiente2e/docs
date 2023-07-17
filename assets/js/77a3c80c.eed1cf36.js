"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[467],{4137:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>c});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=m(a),k=r,c=u["".concat(d,".").concat(k)]||u[k]||s[k]||l;return a?n.createElement(c,o(o({ref:e},p),{},{components:a})):n.createElement(c,o({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},2812:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(7462),r=(a(7294),a(4137));const l={},o="Label your data",i={unversionedId:"form-recognizer-studio/label-data",id:"form-recognizer-studio/label-data",title:"Label your data",description:"In your project, there are five documents, four of the documents have a green dot to indicate the documents have been analyzed and labeled. The fifth document needs to be analyzed and labeled.",source:"@site/docs/25-form-recognizer-studio/40-label-data.md",sourceDirName:"25-form-recognizer-studio",slug:"/form-recognizer-studio/label-data",permalink:"/docs/form-recognizer-studio/label-data",draft:!1,editUrl:"https://github.com/newpatiente2e/docs/tree/main/docs/25-form-recognizer-studio/40-label-data.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a project",permalink:"/docs/form-recognizer-studio/create-project"},next:{title:"Train your model",permalink:"/docs/form-recognizer-studio/train-model"}},d={},m=[{value:"Video introduction to labeling forms with Form Recognizer",id:"video-introduction-to-labeling-forms-with-form-recognizer",level:2},{value:"Label the new patient registration form",id:"label-the-new-patient-registration-form",level:2},{value:"English Labels",id:"english-labels",level:2},{value:"Etiquetas Espa\xf1olas",id:"etiquetas-espa\xf1olas",level:2},{value:"Etiquetas Portugu\xeasas",id:"etiquetas-portugu\xeasas",level:2}],p={toc:m},u="wrapper";function s(t){let{components:e,...l}=t;return(0,r.kt)(u,(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"label-your-data"},"Label your data"),(0,r.kt)("p",null,"In your project, there are five documents, four of the documents have a green dot to indicate the documents have been analyzed and labeled. The fifth document needs to be analyzed and labeled."),(0,r.kt)("h2",{id:"video-introduction-to-labeling-forms-with-form-recognizer"},"Video introduction to labeling forms with Form Recognizer"),(0,r.kt)("p",null,"Watch this YouTube to understand how to label an English language version of a form. Open the video on Youtube to watch in full screen."),(0,r.kt)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/d1QHX47mSDo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h2",{id:"label-the-new-patient-registration-form"},"Label the new patient registration form"),(0,r.kt)("p",null,"The following steps will show you how to label your data."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the document named ",(0,r.kt)("em",{parentName:"p"},"sample.pdf"),". ")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select ",(0,r.kt)("inlineCode",{parentName:"p"},"Run layout")," the document will analyze and then open the document for labeling.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the ISO language code for the document. You'll find this field in the top right-hand corner of the document, then from the list of labels, select ",(0,r.kt)("strong",{parentName:"p"},"iso"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Now repeat this labeling process for all the fields in the document. See the tables below for the list of form fields and their associated labels for:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#english-labels"},"English Labels"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#etiquetas-espa%C3%B1olas"},"Etiquetas Espa\xf1olas"),","),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#etiquetas-portugu%C3%AAsas"},"Etiquetas Portugu\xeasas "),", and"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#%E6%99%AE%E9%80%9A%E8%AF%9D%E6%A0%87%E7%AD%BE"},"\u666e\u901a\u8bdd\u6807\u7b7e"),".")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"You can filter the list of labels by typing the label name in the list of labels dropdown. For example, if you type ",(0,r.kt)("inlineCode",{parentName:"p"},"family")," in the list of labels, the ",(0,r.kt)("inlineCode",{parentName:"p"},"family_name")," label will be displayed.")),(0,r.kt)("h2",{id:"english-labels"},"English Labels"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"This image is the english registration form",src:a(2629).Z,width:"799",height:"1142"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the Family name field on the analyzed document, then from the list of labels, select ",(0,r.kt)("inlineCode",{parentName:"p"},"family_name"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Repeat this process for the remaining fields in the document. It's important to correctly label all the fields in the document as they will be used to train the model."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Document element"),(0,r.kt)("th",{parentName:"tr",align:null},"Label name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Document language iso"),(0,r.kt)("td",{parentName:"tr",align:null},"iso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Family name"),(0,r.kt)("td",{parentName:"tr",align:null},"family_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Given names"),(0,r.kt)("td",{parentName:"tr",align:null},"given_names")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date of birth"),(0,r.kt)("td",{parentName:"tr",align:null},"date_of_birth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Street address"),(0,r.kt)("td",{parentName:"tr",align:null},"address_street")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"City"),(0,r.kt)("td",{parentName:"tr",align:null},"address_city")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"State"),(0,r.kt)("td",{parentName:"tr",align:null},"address_state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Code"),(0,r.kt)("td",{parentName:"tr",align:null},"address_code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Email"),(0,r.kt)("td",{parentName:"tr",align:null},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Phone"),(0,r.kt)("td",{parentName:"tr",align:null},"phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prefer Email checkbox"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prefer Phone checkbox"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prefer Text checkbox"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"My gender identity"),(0,r.kt)("td",{parentName:"tr",align:null},"gender_identity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"My pronouns"),(0,r.kt)("td",{parentName:"tr",align:null},"my_pronouns")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Emergency contact name"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Emergency contact relationship"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_relationship")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Emergency contact email"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Emergency contact phone"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allergy row 1"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allergy row 2"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allergy row 3"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reaction row 1"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reaction row 2"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reaction row 3"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"date"),(0,r.kt)("td",{parentName:"tr",align:null},"date")))))),(0,r.kt)("p",null,"You now have all the documents in your dataset labeled. If you look at the storage account, you'll find a ",(0,r.kt)("em",{parentName:"p"},".labels.json")," and ",(0,r.kt)("em",{parentName:"p"},".ocr.json")," files that correspond to each document in your training dataset and a new fields.json file. This training dataset will be submitted to train the model."),(0,r.kt)("h2",{id:"etiquetas-espa\xf1olas"},"Etiquetas Espa\xf1olas"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"This image is the spanish registration form",src:a(962).Z,width:"856",height:"1211"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Seleccione el campo Nombre Completo en el documento analizado, luego de la lista de etiquetas, seleccione nombre_completo.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Repita este proceso para los campos restantes del documento. Es muy importante etiquetar correctamente todos los campos del documento, ya que se utilizar\xe1n para entrenar el modelo."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Elemento de documento"),(0,r.kt)("th",{parentName:"tr",align:null},"Nombre de etiqueta"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Idioma del documento iso"),(0,r.kt)("td",{parentName:"tr",align:null},"iso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nombre"),(0,r.kt)("td",{parentName:"tr",align:null},"family_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Apellido"),(0,r.kt)("td",{parentName:"tr",align:null},"given_names")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fecha de nacimiento"),(0,r.kt)("td",{parentName:"tr",align:null},"date_of_birth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Direcci\xf3n"),(0,r.kt)("td",{parentName:"tr",align:null},"address_street")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ciudad"),(0,r.kt)("td",{parentName:"tr",align:null},"address_city")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Estado"),(0,r.kt)("td",{parentName:"tr",align:null},"address_state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C\xf3digo"),(0,r.kt)("td",{parentName:"tr",align:null},"address_code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Correo electr\xf3nico"),(0,r.kt)("td",{parentName:"tr",align:null},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tel\xe9fono"),(0,r.kt)("td",{parentName:"tr",align:null},"phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"M\xe9todo de contacto preferido: Correo electr\xf3nico"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"M\xe9todo de contacto preferido: tel\xe9fono"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"M\xe9todo de contacto preferido: Mensaje de texto"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mi identidad de g\xe9nero es"),(0,r.kt)("td",{parentName:"tr",align:null},"gender_identity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mis pronombres son"),(0,r.kt)("td",{parentName:"tr",align:null},"my_pronouns")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contacto de emergencia: Nombre"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contacto de emergencia: Grado de parentesco"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_relationship")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contacto de emergencia: Correo electr\xf3nico"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contacto de emergencia: Tel\xe9fono"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alergia fila 1"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alergia fila 2"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alergia fila 3"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fila de reacci\xf3n 1"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fila de reacci\xf3n 2"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fila de reacci\xf3n 3"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fecha"),(0,r.kt)("td",{parentName:"tr",align:null},"date")))))),(0,r.kt)("p",null,"Ahora tiene todos los documentos en su conjunto de datos etiquetados. Si observa la cuenta de almacenamiento, encontrar\xe1 archivos .labels.json y .ocr.json que corresponden a cada documento en su conjunto de datos de entrenamiento y un nuevo archivo fields.json. Este conjunto de datos de entrenamiento se enviar\xe1 para entrenar el modelo."),(0,r.kt)("h2",{id:"etiquetas-portugu\xeasas"},"Etiquetas Portugu\xeasas"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"This image is the portuguese registration form",src:a(6191).Z,width:"853",height:"1197"})),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Selecione o campo Nome Completo no documento analisado e, na lista de r\xf3tulos, selecione nome_completo.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Repita este processo para os demais campos do documento. \xc9 importante rotular corretamente todos os campos no documento, pois eles ser\xe3o usados para treinar o modelo."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Elemento do documento"),(0,r.kt)("th",{parentName:"tr",align:null},"Nome do r\xf3tulo"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Idioma do documento iso"),(0,r.kt)("td",{parentName:"tr",align:null},"iso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nome"),(0,r.kt)("td",{parentName:"tr",align:null},"family_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sobrenome"),(0,r.kt)("td",{parentName:"tr",align:null},"given_names")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data de nascimento"),(0,r.kt)("td",{parentName:"tr",align:null},"date_of_birth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Endere\xe7o"),(0,r.kt)("td",{parentName:"tr",align:null},"address_street")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cidade"),(0,r.kt)("td",{parentName:"tr",align:null},"address_city")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Estada"),(0,r.kt)("td",{parentName:"tr",align:null},"address_state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C\xf3digo"),(0,r.kt)("td",{parentName:"tr",align:null},"address_code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"E-mail"),(0,r.kt)("td",{parentName:"tr",align:null},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Telefone"),(0,r.kt)("td",{parentName:"tr",align:null},"Phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"E-mail de prefer\xeancia checkbox"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Telefone de prefer\xeancia checkbox"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Texto de prefer\xeancia checkbox"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Me identifico como (g\xeanero)"),(0,r.kt)("td",{parentName:"tr",align:null},"gender_identity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Meus pronomes s\xe3o:"),(0,r.kt)("td",{parentName:"tr",align:null},"my_pronouns")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contato de emerg\xeancia: Nome"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contato de emerg\xeancia: Grau de Parentesco"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_relationship")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contato de emerg\xeancia: E-mail"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Contato de emerg\xeancia: Telefone"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alergia linha 1"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alergia linha 2"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alergia linha 3"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linha de rea\xe7\xe3o 1"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linha de rea\xe7\xe3o 2"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linha de rea\xe7\xe3o 3"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data"),(0,r.kt)("td",{parentName:"tr",align:null},"Date")))))),(0,r.kt)("p",null,"Agora voc\xea tem todos os documentos em seu conjunto de dados rotulados. Se voc\xea observar a conta de armazenamento, encontrar\xe1 arquivos .labels.json e .ocr.json que correspondem a cada documento em seu conjunto de dados de treinamento e um novo arquivo fields.json. Este conjunto de dados de treinamento ser\xe1 enviado para treinar o modelo"))}s.isMDXComponent=!0},2629:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/new_patient_form-84a32ac73575a707acf12eaf7a028f7f.png"},6191:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/new_patient_form_portuguese-16fcea8c96d9f60031d53b13c21a0811.png"},962:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/new_patient_form_spanish-6f8083b7b2d9a983afefb1dc08d3cdfe.png"}}]);