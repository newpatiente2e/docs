"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[467],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>N});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function o(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):o(o({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},k=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),k=m(a),N=r,g=k["".concat(d,".").concat(N)]||k[N]||u[N]||l;return a?n.createElement(g,o(o({ref:e},p),{},{components:a})):n.createElement(g,o({ref:e},p))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var m=2;m<l;m++)o[m]=a[m];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},217:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={},o="Label your data",i={unversionedId:"form-recognizer-studio/label-data",id:"form-recognizer-studio/label-data",title:"Label your data",description:"In your project, there are five documents, four of the documents have a purple dot to indicate the documents have been analyzed and labeled. The fifth document needs to be analyzed and labeled.",source:"@site/docs/25-form-recognizer-studio/40-label-data.md",sourceDirName:"25-form-recognizer-studio",slug:"/form-recognizer-studio/label-data",permalink:"/docs/form-recognizer-studio/label-data",draft:!1,editUrl:"https://github.com/newpatiente2e/docs/tree/main/docs/25-form-recognizer-studio/40-label-data.md",tags:[],version:"current",sidebarPosition:40,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create a project",permalink:"/docs/form-recognizer-studio/create-project"},next:{title:"Train your model",permalink:"/docs/form-recognizer-studio/train-model"}},d={},m=[{value:"Video introduction to labeling forms with Form Recognizer",id:"video-introduction-to-labeling-forms-with-form-recognizer",level:2},{value:"New patient registration form",id:"new-patient-registration-form",level:2},{value:"Label the new patient registration form",id:"label-the-new-patient-registration-form",level:2},{value:"English labels",id:"english-labels",level:2},{value:"Spanish labels",id:"spanish-labels",level:2},{value:"Portuguese labels",id:"portuguese-labels",level:2},{value:"Mandarin labels",id:"mandarin-labels",level:2}],p={toc:m};function u(t){let{components:e,...l}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"label-your-data"},"Label your data"),(0,r.kt)("p",null,"In your project, there are five documents, four of the documents have a purple dot to indicate the documents have been analyzed and labeled. The fifth document needs to be analyzed and labeled."),(0,r.kt)("h2",{id:"video-introduction-to-labeling-forms-with-form-recognizer"},"Video introduction to labeling forms with Form Recognizer"),(0,r.kt)("p",null,"Watch this YouTube to understand how to label an English language version of a form. Open the video on Youtube to watch in full screen."),(0,r.kt)("iframe",{width:"800",height:"450",src:"https://www.youtube.com/embed/d1QHX47mSDo",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,r.kt)("h2",{id:"new-patient-registration-form"},"New patient registration form"),(0,r.kt)("p",null,"The following image is of the fifth document that needs to be labeled."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"The image shows the label data panel",src:a(1329).Z,width:"663",height:"931"})),(0,r.kt)("h2",{id:"label-the-new-patient-registration-form"},"Label the new patient registration form"),(0,r.kt)("p",null,"The following steps will show you how to label your data. "),(0,r.kt)("p",null,"The document language will match the folder of documents you uploaded to your Azure Storage Account. For example, if you uploaded the English folder, the document language will be English."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Select the last document in the list of documents. The document is named ",(0,r.kt)("em",{parentName:"li"},"sample.pdf"),". Selecting the document will analyze and then open the document for labeling."),(0,r.kt)("li",{parentName:"ol"},"Select the ISO language code for the document. You'll find this field in the top right-hand corner of the document, then from the list of labels, select ",(0,r.kt)("strong",{parentName:"li"},"iso"),".")),(0,r.kt)("p",null,"You can filter the list of labels by typing the label name in the list of labels dropdown. For example, if you type ",(0,r.kt)("inlineCode",{parentName:"p"},"family")," in the list of labels, the ",(0,r.kt)("inlineCode",{parentName:"p"},"family_name")," label will be displayed."),(0,r.kt)("p",null,"The following tables show the labels that are available for the new patient registration form for the following languages:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#english-labels"},"English labels")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#spanish-labels"},"Spanish labels")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#portuguese-labels"},"Portuguese labels")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#mandarin-labels"},"Mandarin labels"))),(0,r.kt)("h2",{id:"english-labels"},"English labels"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Select the Family name field on the analyzed document, then from the list of labels, select ",(0,r.kt)("inlineCode",{parentName:"p"},"family_name"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Repeat this process for the remaining fields in the document. It's important to correctly label all the fields in the document as they will be used to train the model."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Document element"),(0,r.kt)("th",{parentName:"tr",align:null},"Label name"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Document language iso"),(0,r.kt)("td",{parentName:"tr",align:null},"iso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Family name"),(0,r.kt)("td",{parentName:"tr",align:null},"family_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Given names"),(0,r.kt)("td",{parentName:"tr",align:null},"given_names")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Date of birth"),(0,r.kt)("td",{parentName:"tr",align:null},"date_of_birth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Street address"),(0,r.kt)("td",{parentName:"tr",align:null},"address_street")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"City"),(0,r.kt)("td",{parentName:"tr",align:null},"address_city")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"State"),(0,r.kt)("td",{parentName:"tr",align:null},"address_state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Code"),(0,r.kt)("td",{parentName:"tr",align:null},"address_code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Email"),(0,r.kt)("td",{parentName:"tr",align:null},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Phone"),(0,r.kt)("td",{parentName:"tr",align:null},"phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prefer Email checkbox"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prefer Phone checkbox"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Prefer Text checkbox"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"My gender identity"),(0,r.kt)("td",{parentName:"tr",align:null},"gender_identity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"My pronouns"),(0,r.kt)("td",{parentName:"tr",align:null},"my_pronouns")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Emergency contact name"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Emergency contact relationship"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_relationship")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Emergency contact email"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Emergency contact phone"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allergy row 1"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allergy row 2"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Allergy row 3"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reaction row 1"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reaction row 2"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Reaction row 3"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_3")))))),(0,r.kt)("p",null,"You now have all the documents in your dataset labeled. If you look at the storage account, you'll find a ",(0,r.kt)("em",{parentName:"p"},".labels.json")," and ",(0,r.kt)("em",{parentName:"p"},".ocr.json")," files that correspond to each document in your training dataset and a new fields.json file. This training dataset will be submitted to train the model."),(0,r.kt)("h2",{id:"spanish-labels"},"Spanish labels"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Seleccione el campo Nombre de familia en el documento analizado, luego de la lista de etiquetas, seleccione ",(0,r.kt)("inlineCode",{parentName:"p"},"nombre_de_familia"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Repita este proceso para los campos restantes del documento. Es importante etiquetar correctamente todos los campos del documento, ya que se utilizar\xe1n para entrenar el modelo."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Elemento de documento"),(0,r.kt)("th",{parentName:"tr",align:null},"Nombre de etiqueta"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Idioma del documento iso"),(0,r.kt)("td",{parentName:"tr",align:null},"iso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Apellido"),(0,r.kt)("td",{parentName:"tr",align:null},"family_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nombres dados"),(0,r.kt)("td",{parentName:"tr",align:null},"given_names")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fecha de nacimiento"),(0,r.kt)("td",{parentName:"tr",align:null},"date_of_birth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Direcci\xf3n"),(0,r.kt)("td",{parentName:"tr",align:null},"address_street")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ciudad"),(0,r.kt)("td",{parentName:"tr",align:null},"address_city")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Estado"),(0,r.kt)("td",{parentName:"tr",align:null},"address_state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C\xf3digo"),(0,r.kt)("td",{parentName:"tr",align:null},"address_code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Correo electr\xf3nico"),(0,r.kt)("td",{parentName:"tr",align:null},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tel\xe9fono"),(0,r.kt)("td",{parentName:"tr",align:null},"phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Casilla de verificaci\xf3n Preferir correo electr\xf3nico"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Preferir casilla de tel\xe9fono"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Preferir casilla de texto"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mi identidad de genero"),(0,r.kt)("td",{parentName:"tr",align:null},"gender_identity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Mis pronombres"),(0,r.kt)("td",{parentName:"tr",align:null},"my_pronouns")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nombre del contacto de emergencia"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Relaci\xf3n de contacto de emergencia"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_relationship")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Correo electr\xf3nico de contacto de emergencia"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Tel\xe9fono de contacto de emergencia"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alergia fila 1"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alergia fila 2"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alergia fila 3"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fila de reacci\xf3n 1"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fila de reacci\xf3n 2"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Fila de reacci\xf3n 3"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_3")))))),(0,r.kt)("p",null,"Ahora tiene todos los documentos en su conjunto de datos etiquetados. Si observa la cuenta de almacenamiento, encontrar\xe1 archivos ",(0,r.kt)("em",{parentName:"p"},".labels.json")," y ",(0,r.kt)("em",{parentName:"p"},".ocr.json")," que corresponden a cada documento en su conjunto de datos de entrenamiento y un nuevo archivo fields.json. Este conjunto de datos de entrenamiento se enviar\xe1 para entrenar el modelo."),(0,r.kt)("h2",{id:"portuguese-labels"},"Portuguese labels"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Selecione o campo Family name no documento analisado e, na lista de r\xf3tulos, selecione ",(0,r.kt)("inlineCode",{parentName:"p"},"family_name"),".")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Repita este processo para os demais campos do documento. \xc9 importante rotular corretamente todos os campos no documento, pois eles ser\xe3o usados para treinar o modelo."),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Elemento do documento"),(0,r.kt)("th",{parentName:"tr",align:null},"Nome do r\xf3tulo"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Idioma do documento iso"),(0,r.kt)("td",{parentName:"tr",align:null},"iso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sobrenome"),(0,r.kt)("td",{parentName:"tr",align:null},"family_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Recebem nomes"),(0,r.kt)("td",{parentName:"tr",align:null},"given_names")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Data de nascimento"),(0,r.kt)("td",{parentName:"tr",align:null},"date_of_birth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endere\xe7o da Rua"),(0,r.kt)("td",{parentName:"tr",align:null},"address_street")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Cidade"),(0,r.kt)("td",{parentName:"tr",align:null},"address_city")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Estada"),(0,r.kt)("td",{parentName:"tr",align:null},"address_state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"C\xf3digo"),(0,r.kt)("td",{parentName:"tr",align:null},"address_code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"E-mail"),(0,r.kt)("td",{parentName:"tr",align:null},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Phone"),(0,r.kt)("td",{parentName:"tr",align:null},"Telefone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"E-mail de prefer\xeancia checkbox"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Telefone de prefer\xeanciacheckbox"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Texto de prefer\xeancia checkbox"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Minha identidade de g\xeanero"),(0,r.kt)("td",{parentName:"tr",align:null},"gender_identity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Meus pronomes"),(0,r.kt)("td",{parentName:"tr",align:null},"my_pronouns")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Nome do contato de emerg\xeancia"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Relacionamento de contato de emerg\xeancia"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_relationship")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"E-mail de contato de emerg\xeancia"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Telefone de contato de emerg\xeancia"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alergia linha 1"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alergia linha 2"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Alergia linha 3"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linha de rea\xe7\xe3o 1"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linha de rea\xe7\xe3o 2"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Linha de rea\xe7\xe3o 3"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_3")))))),(0,r.kt)("p",null,"Agora voc\xea tem todos os documentos em seu conjunto de dados rotulados. Se voc\xea observar a conta de armazenamento, encontrar\xe1 arquivos ",(0,r.kt)("em",{parentName:"p"},".labels.json")," e ",(0,r.kt)("em",{parentName:"p"},".ocr.json")," que correspondem a cada documento em seu conjunto de dados de treinamento e um novo arquivo fields.json. Este conjunto de dados de treinamento ser\xe1 enviado para treinar o modelo."),(0,r.kt)("h2",{id:"mandarin-labels"},"Mandarin labels"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u9009\u62e9\u5206\u6790\u6587\u6863\u4e0a\u7684\u59d3\u6c0f\u5b57\u6bb5\uff0c\u7136\u540e\u4ece\u6807\u7b7e\u5217\u8868\u4e2d\u9009\u62e9\u201cfamily_name\u201d\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5bf9\u6587\u6863\u4e2d\u7684\u5176\u4f59\u5b57\u6bb5\u91cd\u590d\u6b64\u8fc7\u7a0b\u3002 \u6b63\u786e\u6807\u8bb0\u6587\u6863\u4e2d\u7684\u6240\u6709\u5b57\u6bb5\u975e\u5e38\u91cd\u8981\uff0c\u56e0\u4e3a\u5b83\u4eec\u5c06\u7528\u4e8e\u8bad\u7ec3\u6a21\u578b\u3002"),(0,r.kt)("table",{parentName:"li"},(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u6587\u6863\u5143\u7d20"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6807\u7b7e\u540d\u79f0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6587\u6863\u8bed\u8a00 iso"),(0,r.kt)("td",{parentName:"tr",align:null},"iso")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u59d3"),(0,r.kt)("td",{parentName:"tr",align:null},"family_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u59d3"),(0,r.kt)("td",{parentName:"tr",align:null},"given_names")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u51fa\u751f\u65e5\u671f"),(0,r.kt)("td",{parentName:"tr",align:null},"date_of_birth")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8857\u9053\u5730\u5740"),(0,r.kt)("td",{parentName:"tr",align:null},"address_street")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u57ce\u5e02"),(0,r.kt)("td",{parentName:"tr",align:null},"address_city")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u72b6\u6001"),(0,r.kt)("td",{parentName:"tr",align:null},"address_state")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee3\u7801"),(0,r.kt)("td",{parentName:"tr",align:null},"address_code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7535\u5b50\u90ae\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},"email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7535\u8bdd"),(0,r.kt)("td",{parentName:"tr",align:null},"phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u9996\u9009\u7535\u5b50\u90ae\u4ef6\u590d\u9009\u6846"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u9996\u9009\u7535\u8bdd\u590d\u9009\u6846"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u9996\u9009\u6587\u672c\u590d\u9009\u6846"),(0,r.kt)("td",{parentName:"tr",align:null},"prefer_text")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6211\u7684\u6027\u522b\u8ba4\u540c"),(0,r.kt)("td",{parentName:"tr",align:null},"gender_identity")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u6211\u7684\u4ee3\u540d\u8bcd"),(0,r.kt)("td",{parentName:"tr",align:null},"my_pronouns")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7d27\u6025\u8054\u7edc\u540d\u5b57"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_name")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7d27\u6025\u8054\u7edc\u5173\u7cfb"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_relationship")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7d27\u6025\u8054\u7edc\u7535\u5b50\u90ae\u4ef6"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_email")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u7d27\u6025\u8054\u7edc\u7535\u8bdd"),(0,r.kt)("td",{parentName:"tr",align:null},"emergency_phone")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8fc7\u654f\u7b2c 1 \u884c"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8fc7\u654f\u7b2c 2 \u884c"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u8fc7\u654f\u7b2c 3 \u884c"),(0,r.kt)("td",{parentName:"tr",align:null},"allergy_3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53cd\u5e94\u6392 1"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53cd\u5e94\u7b2c 2 \u884c"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\u53cd\u5e94\u6392 3"),(0,r.kt)("td",{parentName:"tr",align:null},"reaction_3")))))),(0,r.kt)("p",null,"\u60a8\u73b0\u5728\u5df2\u6807\u8bb0\u6570\u636e\u96c6\u4e2d\u7684\u6240\u6709\u6587\u6863\u3002 \u5982\u679c\u60a8\u67e5\u770b\u5b58\u50a8\u5e10\u6237\uff0c\u60a8\u4f1a\u53d1\u73b0\u4e0e\u8bad\u7ec3\u6570\u636e\u96c6\u4e2d\u7684\u6bcf\u4e2a\u6587\u6863\u76f8\u5bf9\u5e94\u7684 ",(0,r.kt)("em",{parentName:"p"},".labels.json")," \u548c ",(0,r.kt)("em",{parentName:"p"},".ocr.json")," \u6587\u4ef6\u4ee5\u53ca\u4e00\u4e2a\u65b0\u7684 fields.json \u6587\u4ef6\u3002 \u6b64\u8bad\u7ec3\u6570\u636e\u96c6\u5c06\u88ab\u63d0\u4ea4\u4ee5\u8bad\u7ec3\u6a21\u578b\u3002"))}u.isMDXComponent=!0},1329:(t,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/label-data-panel-dcdf6ed1142b44060f1f0d2b84d733b3.png"}}]);