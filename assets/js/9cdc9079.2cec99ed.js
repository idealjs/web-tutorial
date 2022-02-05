"use strict";(self.webpackChunkweb_tutorial=self.webpackChunkweb_tutorial||[]).push([[538],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),m=l,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,o=new Array(a);o[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:l,o[1]=u;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:l},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(7462),l=n(7294),a=n(2389),o=n(9548),u=n(6010),i="tabItem_LplD";function c(e){var t,n,a,c=e.lazy,s=e.block,p=e.defaultValue,d=e.values,m=e.groupId,f=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=d?d:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,o.UB)(),w=y.tabGroupChoices,g=y.setTabGroupChoices,x=(0,l.useState)(k),O=x[0],j=x[1],N=[],T=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var E=w[m];null!=E&&E!==O&&b.some((function(e){return e.value===E}))&&j(E)}var P=function(e){var t=e.currentTarget,n=N.indexOf(t),r=b[n].value;r!==O&&(T(t),j(r),null!=m&&g(m,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;n=N[r]||N[0];break;case"ArrowLeft":var l=N.indexOf(e.currentTarget)-1;n=N[l]||N[N.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":s},f)},b.map((function(e){var t=e.value,n=e.label,a=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return N.push(e)},onKeyDown:D,onFocus:P,onClick:P},a,{className:(0,u.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),c?(0,l.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function s(e){var t=(0,a.Z)();return l.createElement(c,(0,r.Z)({key:String(t)},e))}},2805:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return d},default:function(){return f}});var r=n(7462),l=n(3366),a=(n(7294),n(3905)),o=n(9877),u=n(8215),i=["components"],c={sidebar_position:9},s="Hello Node JS",p={unversionedId:"post-9",id:"post-9",title:"Hello Node JS",description:"\u5047\u5982\u5b89\u88c5\u597d\u4e86 Node\uff0c\u5982\u4f55\u9a8c\u8bc1\u5b89\u88c5\u597d\u4e86\uff1f\u6216\u8005\u6211\u600e\u4e48\u4f7f\u7528\u5b83\uff1f",source:"@site/docs/post-9.mdx",sourceDirName:".",slug:"/post-9",permalink:"/web-tutorial/docs/post-9",editUrl:"https://github.com/idealjs/web-tutorial/tree/main/docs/post-9.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Node \u5165\u95e8",permalink:"/web-tutorial/docs/post-8"},next:{title:"React \u5165\u95e8",permalink:"/web-tutorial/docs/post-10"}},d=[{value:"\u9a8c\u8bc1\u662f\u5426\u5b89\u88c5\u6210\u529f",id:"\u9a8c\u8bc1\u662f\u5426\u5b89\u88c5\u6210\u529f",children:[],level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[],level:2}],m={toc:d};function f(e){var t=e.components,n=(0,l.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"hello-node-js"},"Hello Node JS"),(0,a.kt)("p",null,"\u5047\u5982\u5b89\u88c5\u597d\u4e86 Node\uff0c\u5982\u4f55\u9a8c\u8bc1\u5b89\u88c5\u597d\u4e86\uff1f\u6216\u8005\u6211\u600e\u4e48\u4f7f\u7528\u5b83\uff1f"),(0,a.kt)("h2",{id:"\u9a8c\u8bc1\u662f\u5426\u5b89\u88c5\u6210\u529f"},"\u9a8c\u8bc1\u662f\u5426\u5b89\u88c5\u6210\u529f"),(0,a.kt)("p",null,"\u6253\u5f00\u4e00\u4e2a\u63a7\u5236\u53f0"),(0,a.kt)(o.Z,{defaultValue:"win",values:[{label:"win",value:"win"},{label:"ubuntu",value:"ubuntu"},{label:"mac",value:"mac"}],mdxType:"Tabs"},(0,a.kt)(u.Z,{value:"win",mdxType:"TabItem"},"\u5728\u5f00\u59cb\u83dc\u5355\u4e0a\u53f3\u952e\uff0c\u70b9\u51fbwindows \u7ec8\u7aef\uff08\u7ba1\u7406\u5458\uff09"),(0,a.kt)(u.Z,{value:"ubuntu",mdxType:"TabItem"},"Ctrl+Alt+T"),(0,a.kt)(u.Z,{value:"mac",mdxType:"TabItem"},"\u627e\u5230terminal app\uff0c\u7136\u540e\u6253\u5f00\u3002")),(0,a.kt)("p",null,"\u8f93\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node -v\n")),(0,a.kt)("p",null,"\u7136\u540e\u4f60\u4f1a\u770b\u5230\u4f60\u5b89\u88c5\u7684 node \u7248\u672c\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u6211\u7684\u7248\u672c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"v14.18.0\n")),(0,a.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u7528\u6700\u5c11\u7684\u77e5\u8bc6\u91cf\uff0c\u8ba9\u7a0b\u5e8f\u5b8c\u6574\u7684\u8dd1\u8d77\u6765\uff0c\u5c31\u662f Hello World \u7684\u76ee\u7684\u3002")),(0,a.kt)("p",null,"\u672c\u7bc7\u7684\u5b8c\u6574\u4ee3\u7801\uff0c\u53ef\u4ee5\u5728\u8fd9\u91cc\u627e\u5230\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/idealjs/web-tutorial/blob/main/examples/post-9/hello.js"},"examples/post-9/hello.js"))),(0,a.kt)("p",null,"\u5728\u6709 hello.js \u7684\u6587\u4ef6\u5939\u4e0b\u6253\u5f00\u63a7\u5236\u53f0\uff08\u5728\u6587\u4ef6\u5939\u4e0b\u6309\u4f4f shift \u9f20\u6807\u53f3\u51fb\uff09\uff0c\u5e76\u4e14\u8f93\u5165"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"node hello.js\n")),(0,a.kt)("p",null,"\u5982\u679c\u78b0\u5230\u4e86\u5982\u4e0b\u9519\u8bef\uff0c\u90a3\u4e48\u53ef\u80fd\u662f\u5f53\u524d\u6587\u4ef6\u5939\u4e0b\u6ca1\u6709 hello.js \u8fd9\u4e2a\u6587\u4ef6\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"internal/modules/cjs/loader.js:905\n  throw err;\n  ^\n\nError: Cannot find module 'xxx/xxx/hello.js'\n")),(0,a.kt)("p",null,"\u6b63\u5e38\u8fd0\u884c\u7684\u8bdd\uff0c\u4f1a\u663e\u793a\u5982\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"hello world\n")))}f.isMDXComponent=!0}}]);