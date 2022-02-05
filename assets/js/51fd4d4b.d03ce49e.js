"use strict";(self.webpackChunkweb_tutorial=self.webpackChunkweb_tutorial||[]).push([[492],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||l;return n?r.createElement(f,u(u({ref:t},p),{},{components:n})):r.createElement(f,u({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,u=new Array(l);u[0]=m;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,u[1]=o;for(var c=2;c<l;c++)u[c]=n[c];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5807:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return v},metadata:function(){return h},toc:function(){return y}});var r=n(7462),a=n(3366),l=n(7294),u=n(3905),o=n(2389),i=n(9548),c=n(6010),p="tabItem_LplD";function s(e){var t,n,a,u=e.lazy,o=e.block,s=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=l.Children.map(e.children,(function(e){if((0,l.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===s?s:null!=(t=null!=s?s:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(a=v[0])?void 0:a.props.value;if(null!==y&&!b.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),g=k.tabGroupChoices,w=k.setTabGroupChoices,N=(0,l.useState)(y),O=N[0],T=N[1],x=[],E=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var j=g[d];null!=j&&j!==O&&b.some((function(e){return e.value===j}))&&T(j)}var D=function(e){var t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==O&&(E(t),T(r),null!=d&&w(d,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return l.createElement("div",{className:"tabs-container"},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":o},f)},b.map((function(e){var t=e.value,n=e.label,a=e.attributes;return l.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:D,onClick:D},a,{className:(0,c.Z)("tabs__item",p,null==a?void 0:a.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),u?(0,l.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):l.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function m(e){var t=(0,o.Z)();return l.createElement(s,(0,r.Z)({key:String(t)},e))}var d=function(e){var t=e.children,n=e.hidden,r=e.className;return l.createElement("div",{role:"tabpanel",hidden:n,className:r},t)},f=["components"],v={},b="Node \u5165\u95e8",h={unversionedId:"post-8",id:"post-8",title:"Node \u5165\u95e8",description:"\u5728\u7ee7\u7eed\u5b66\u4e60\u524d\u7aef\u7684\u5e93\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u6253\u65ad\u4e00\u4e0b\u3002",source:"@site/docs/post-8.mdx",sourceDirName:".",slug:"/post-8",permalink:"/web-tutorial/docs/post-8",editUrl:"https://github.com/idealjs/web-tutorial/tree/main/docs/post-8.mdx",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6a21\u5757\u548c\u5e93",permalink:"/web-tutorial/docs/post-7"}},y=[{value:"\u6784\u5efa\u5982\u4f55\u6267\u884c",id:"\u6784\u5efa\u5982\u4f55\u6267\u884c",children:[],level:2},{value:"\u6784\u5efa\u7684\u6267\u884c\u4f4d\u7f6e",id:"\u6784\u5efa\u7684\u6267\u884c\u4f4d\u7f6e",children:[],level:2},{value:"\u672c\u5730\u6784\u5efa\u73af\u5883\u642d\u5efa",id:"\u672c\u5730\u6784\u5efa\u73af\u5883\u642d\u5efa",children:[],level:2}],k={toc:y};function g(e){var t=e.components,l=(0,a.Z)(e,f);return(0,u.kt)("wrapper",(0,r.Z)({},k,l,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"node-\u5165\u95e8"},"Node \u5165\u95e8"),(0,u.kt)("p",null,"\u5728\u7ee7\u7eed\u5b66\u4e60\u524d\u7aef\u7684\u5e93\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u6253\u65ad\u4e00\u4e0b\u3002"),(0,u.kt)("p",null,"\u6211\u4eec\u9700\u8981\u4e00\u4e9b\u8865\u5145\u77e5\u8bc6\u505a\u6211\u4eec\u7684\u624b\u811a\u67b6\u3002"),(0,u.kt)("p",null,"\u524d\u6587\u63d0\u5230\u8fc7\uff0c\u73b0\u4ee3\u5316\u7684\u524d\u7aef\u5de5\u7a0b\u901a\u8fc7\u6784\u5efa\u7684\u65b9\u5f0f\uff0c\u5f97\u5230\u6211\u4eec\u9700\u8981\u7684\u4ea7\u7269\u3002"),(0,u.kt)("p",null,"\u800c\u6784\u5efa\u600e\u4e48\u6267\u884c\uff0c\u6267\u884c\u5728\u54ea\u91cc\u4e5f\u662f\u4e00\u4e2a\u590d\u6742\u7684\u95ee\u9898\u3002"),(0,u.kt)("h2",{id:"\u6784\u5efa\u5982\u4f55\u6267\u884c"},"\u6784\u5efa\u5982\u4f55\u6267\u884c"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u8bed\u8a00\u8bed\u6cd5\u8f6c\u6362"),(0,u.kt)("p",{parentName:"li"},"\u5982\uff1atypescript \u8f6c\u6362\u4e3a javascript\u3002\u9ad8\u7ea7\u8bed\u8a00\u7279\u6027\u8f6c\u6362\u4e3a\u517c\u5bb9\u8bed\u53e5\u3002")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u8d44\u6e90\u6253\u5305"),(0,u.kt)("p",{parentName:"li"},"\u5982\uff1a\u56fe\u7247\uff0c\u6837\u5f0f\uff0c\u6253\u5305\u6210\u6587\u4ef6\u8d44\u6e90\u3002"))),(0,u.kt)("h2",{id:"\u6784\u5efa\u7684\u6267\u884c\u4f4d\u7f6e"},"\u6784\u5efa\u7684\u6267\u884c\u4f4d\u7f6e"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u4eba\u5de5\u6267\u884c\n\u7b80\u5355\u7684\u5355\u673a\u90e8\u7f72\u7f51\u7ad9\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4eba\u5de5\u90e8\u7f72\u7684\u65b9\u5f0f\u3002"),(0,u.kt)("p",{parentName:"li"},"\u4efb\u9009\u4e00\u53f0\u673a\u5668\uff0c\u8fdb\u884c\u6784\u5efa\uff0c\u7136\u540e\u5c06\u6784\u5efa\u4ea7\u7269\u590d\u5236\u5230\u63d0\u4f9b\u5bf9\u5916\u670d\u52a1\u7684\u670d\u52a1\u5668\u4e0a\u3002")),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u81ea\u52a8\u6267\u884c"),(0,u.kt)("p",{parentName:"li"},"\u7531\u7279\u6b8a\u7684\u6784\u5efa\u8f6f\u4ef6\u76d1\u542c\uff0c\u7136\u540e\u5728\u914d\u7f6e\u597d\u673a\u5668/\u5bb9\u5668\u4e2d\u6784\u5efa\u3002"))),(0,u.kt)("h2",{id:"\u672c\u5730\u6784\u5efa\u73af\u5883\u642d\u5efa"},"\u672c\u5730\u6784\u5efa\u73af\u5883\u642d\u5efa"),(0,u.kt)("p",null,"\u4e24\u79cd\u65b9\u6848\u90fd\u9700\u8981\u4e00\u4e2a\u673a\u5668\uff0c\u6216\u8005\u73af\u5883\u6765\u6784\u5efa\u3002"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("p",{parentName:"li"},"\u5b89\u88c5 Node"),(0,u.kt)("p",{parentName:"li"},"node \u7684\u7248\u672c\u5f88\u591a\uff0c\u5165\u95e8\u5efa\u8bae\u4f7f\u7528 \u5b98\u7f51\u7684 LTS \u7248\u672c\u3002"),(0,u.kt)("p",{parentName:"li"},(0,u.kt)("img",{alt:"node \u5b98\u7f51\u622a\u56fe",src:n(554).Z,width:"1441",height:"881"})))),(0,u.kt)(m,{defaultValue:"win",values:[{label:"win",value:"win"},{label:"linux",value:"linux"},{label:"mac",value:"mac"}],mdxType:"Tabs"},(0,u.kt)(d,{value:"win",mdxType:"TabItem"}),(0,u.kt)(d,{value:"linux",mdxType:"TabItem"}),(0,u.kt)(d,{value:"mac",mdxType:"TabItem"})))}g.isMDXComponent=!0},554:function(e,t,n){t.Z=n.p+"assets/images/post-8-1-ba81906b48bf7fbf07b505489afe1b87.png"}}]);