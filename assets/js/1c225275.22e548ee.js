"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[494],{4137:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=p(r),u=o,k=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return r?n.createElement(k,i(i({ref:t},c),{},{components:r})):n.createElement(k,i({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},5762:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(4137));const a={pagination_prev:"install-prerequisites",pagination_next:"create-azure-services"},i="Docker Dev Containers",l={unversionedId:"install-prerequisites/dev-containers",id:"install-prerequisites/dev-containers",title:"Docker Dev Containers",description:"If you can run Docker locally, you can open the workshop using VS Code Dev Containers. Dev Containers ensures you have all the developer tools installed and configured correctly for the workshop.",source:"@site/docs/17-install-prerequisites/20-dev-containers.md",sourceDirName:"17-install-prerequisites",slug:"/install-prerequisites/dev-containers",permalink:"/docs/install-prerequisites/dev-containers",draft:!1,editUrl:"https://github.com/newpatiente2e/docs/tree/main/docs/17-install-prerequisites/20-dev-containers.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{pagination_prev:"install-prerequisites",pagination_next:"create-azure-services"},sidebar:"tutorialSidebar",previous:{title:"Install prerequisites",permalink:"/docs/install-prerequisites"},next:{title:"Create Azure services",permalink:"/docs/create-azure-services"}},s={},p=[{value:"Install the development tools",id:"install-the-development-tools",level:2},{value:"Clone the workshop repository",id:"clone-the-workshop-repository",level:2}],c={toc:p},m="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(m,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"docker-dev-containers"},"Docker Dev Containers"),(0,o.kt)("p",null,"If you can run Docker locally, you can open the workshop using ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/containers?WT.mc_id=aiml-77396-cxa"},"VS Code Dev Containers"),". Dev Containers ensures you have all the developer tools installed and configured correctly for the workshop."),(0,o.kt)("p",null,"Install the following:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Docker.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/docker-for-windows/install/"},"Windows")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/docker-for-mac/install/"},"macOS")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://docs.docker.com/engine/install/"},"Linux")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/?WT.mc_id=aiml-77396-cxa"},"VS Code")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers&WT.mc_id=aiml-77396-cxa"},"VS Code Remote Containers extension")),(0,o.kt)("li",{parentName:"ol"},"The ",(0,o.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"git")," client.")),(0,o.kt)("h2",{id:"install-the-development-tools"},"Install the development tools"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/?WT.mc_id=aiml-77396-cxa"},"Visual Studio Code"),"."),(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"For chromebooks, review ",(0,o.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/blogs/2020/12/03/chromebook-get-started?WT.mc_id=aiml-77396-cxa"},"learning with VS Code on Chromebooks"))))),(0,o.kt)("h2",{id:"clone-the-workshop-repository"},"Clone the workshop repository"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Open VS Code.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install the ",(0,o.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers&WT.mc_id=aiml-77396-cxa"},"Dev Containers")," extension.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Clone Git Repository"),"."),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"The image shows hwo to select clone a repo",src:r(2009).Z,width:"1122",height:"636"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Enter the following URL:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"https://github.com/newpatiente2e/Contoso-New-Patient-App.git\n")),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"The image shows how to enter the repo url",src:r(3081).Z,width:"1124",height:"307"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Choose a folder to clone the repository in to.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"OK")," to clone the repository.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will be prompted to open the cloned repository. Select ",(0,o.kt)("strong",{parentName:"p"},"Open"),".")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"You will be prompted to ",(0,o.kt)("strong",{parentName:"p"},"Reopen in Container")," to open the repository in a Dev Container."),(0,o.kt)("admonition",{parentName:"li",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Depending on your network speed, it may take a 5 to 10 minutes to download the Docker image and build the container."))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Install")," to install the C# extension.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("strong",{parentName:"p"},"Restore")," to restore the app dependencies.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"DON'T")," close VS Code, as you'll need it open for the rest of the workshop."))),(0,o.kt)("p",null,"Congratulations! You've successfully created a developer container and connected to it using VS Code Dev Container support."))}d.isMDXComponent=!0},3081:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/clone_repo_url-3059e0c4eaba6c3737d5a9d6e96d362d.png"},2009:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/clone_repository-3db0d0678d91668a3a12d7ffc7aacde6.png"}}]);