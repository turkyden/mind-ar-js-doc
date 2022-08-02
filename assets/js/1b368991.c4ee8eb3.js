"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[3348],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),d=a,m=f["".concat(l,".").concat(d)]||f[d]||s[d]||i;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4338:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return s},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var n=r(3117),a=(r(7294),r(3905));const i={id:"wrapup",title:"Wrapup",sidebar_label:"Wrapping Up"},o=void 0,c={unversionedId:"face-tracking-quick-start/wrapup",id:"face-tracking-quick-start/wrapup",title:"Wrapup",description:"That's more or less everything you need to know about face tracking in MindAR. It's extremely to use, you pick anchor points and put objects there.",source:"@site/docs/face-tracking-quick-start/wrapup.md",sourceDirName:"face-tracking-quick-start",slug:"/face-tracking-quick-start/wrapup",permalink:"/mind-ar-js-doc/face-tracking-quick-start/wrapup",draft:!1,tags:[],version:"current",frontMatter:{id:"wrapup",title:"Wrapup",sidebar_label:"Wrapping Up"},sidebar:"docs",previous:{title:"Occluder",permalink:"/mind-ar-js-doc/face-tracking-quick-start/occluder"},next:{title:"Summary",permalink:"/mind-ar-js-doc/face-tracking-examples/summary"}},l={},u=[{value:"Toggle visibility",id:"toggle-visibility",level:3},{value:"Full Example",id:"full-example",level:3}],p={toc:u};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"That's more or less everything you need to know about face tracking in MindAR. It's extremely to use, you pick anchor points and put objects there. "),(0,a.kt)("p",null,"To make a fully functional virtual try-on application, you just need to prepare more 3D objects and add them to the scene. Then you programmatically control their visibilities."),(0,a.kt)("h3",{id:"toggle-visibility"},"Toggle visibility"),(0,a.kt)("p",null,'To toggle visibility, you can set a property "visible" for the model, e.g.'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'<a-entity mindar-face-target="anchorIndex: 10">\n  <a-gltf-model rotation="0 -0 0" position="0 1.0 -0.5" scale="0.35 0.35 0.35" src="#hatModel" visible="false"></a-gltf-model>\n</a-entity>\n')),(0,a.kt)("h3",{id:"full-example"},"Full Example"),(0,a.kt)("p",null,"The rest is just standard javascript and HTML, and we will not go into details. The full source code can be found here: ",(0,a.kt)("a",{href:"../face-tracking-examples/tryon"},"Virtual Try-On Example")))}s.isMDXComponent=!0}}]);