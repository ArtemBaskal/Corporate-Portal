(this.webpackJsonprostelekom=this.webpackJsonprostelekom||[]).push([[0],{189:function(e,n,t){"use strict";t.r(n);var a=t(0),i=t.n(a),l=t(17),d=t.n(l),r=t(20),s=t(30),o=t(21),c=t(14),m=t(22),_=(t(33),t(29)),g=t.n(_);var u,p,A,v=t(45),y=function(e){var n=e.target,t=function(e){var n=e.getBoundingClientRect();return{top:n.top+window.pageYOffset,left:n.left+window.pageXOffset}}(n),a=e.pageX-t.left,i=e.pageY-t.top;function l(e){n.style.left=e.pageX-a+"px",n.style.top=e.pageY-i+"px"}l(e);var d=function(e){return l(e)};document.addEventListener("mousemove",d),n.addEventListener("mouseup",(function(){document.removeEventListener("mousemove",d),n.removeEventListener("mouseup",d)})),n.addEventListener("dragstart",(function(){return!1}))},S=function(e){var n=e.coords,t=e.setCoords,l=e.isWindowOpened,d=e.toggleOpen,r=e.title,s=e.content,o=Object(a.useState)(!0),c=Object(m.a)(o,2),_=c[0],u=c[1],p=Object(a.useState)(!0),A=Object(m.a)(p,2),S=A[0],R=A[1],E=Object(a.useState)(!1),F=Object(m.a)(E,2),b=F[0],f=F[1],h=Object(a.useState)({width:"50vw",height:"50vh"}),C=Object(m.a)(h,2),O=C[0],M=C[1],I=g()({"draggable-window":_&&S,"draggable-window--large":!_&&S,"draggable-window--hidden":!S});return i.a.createElement("div",{onMouseDown:y,className:I,style:{top:n.y,left:n.x}},i.a.createElement(v.Window,Object.assign({padding:"10px",isFullscreen:b},O,{style:{},onMouseDown:y}),i.a.createElement(v.TitleBar,{title:r,controls:!0,onCloseClick:function(e){d(!l);var n=l?"block":"none";e.target.parentElement.parentElement.parentElement.style.display=n},onMinimizeClick:function(){return R(!S)},onResizeClick:function(){t({x:0,y:0}),f(!b),M(b?{width:"50vw",height:"50vh"}:{width:"100vw",height:"100vh"}),R(!0),u(!_)},isFullscreen:b}),s))},R=Object(c.b)((function(e){return{apps:e.apps,accessRights:e.accessRights}}))((function(e){var n=e.label,t=e.apps,l=e.handleSelect,d=e.handleDelete,r=e.accessRights,s=e.isCatalog,o=e.onDragStart,c=e.onDragOver,_=e.onDragEnd,u=Object(a.useState)(!1),p=Object(m.a)(u,2),A=p[0],v=p[1],y=Object(a.useState)({x:0,y:0}),R=Object(m.a)(y,2),E=R[0],F=R[1],b=g()({card__pin:!0,Admin_System:t[n].pinnedBy.Admin_System,Admin_MRF:t[n].pinnedBy.Admin_MRF,Admin_RF:t[n].pinnedBy.Admin_RF});return i.a.createElement("div",null,A&&i.a.createElement(S,{isWindowOpened:A,toggleOpen:v,coords:E,setCoords:F,title:n,content:i.a.createElement("svg",{width:"100",height:"100"},i.a.createElement("image",{className:"card__img",href:"".concat("/corporate-portal-demo","/SVG/").concat(n,".svg")}))}),n&&i.a.createElement("div",{onClick:l,onMouseDown:function(e){F({x:e.clientX,y:e.clientY}),!s&&v(!0)},className:"card"},i.a.createElement("svg",{width:"100",height:"100"},i.a.createElement("image",{className:"card__img",href:"".concat("/corporate-portal-demo","/SVG/").concat(n,".svg")})),t[n]&&t[n].isSelected&&i.a.createElement("span",{className:"card__check"},"\u2713"),r.status&&"Admin"===r.status.slice(0,5)&&r.level>0&&s&&i.a.createElement(a.Fragment,null,i.a.createElement("span",{className:"card__basketwaste",onClick:d},"\u2612"),i.a.createElement("img",{className:"card__drag",src:"".concat("/corporate-portal-demo","/drag-and-drop.png"),onDragStart:o,onDragOver:c,onDragEnd:_})),t[n]&&Object.values(t[n].pinnedBy).some((function(e){return!0===e}))&&i.a.createElement("span",{className:b},"\ud83d\udccc"),i.a.createElement("h1",{className:"card__title"},n[0].toUpperCase()+n.slice(1))))}));!function(e){e.TOGGLE_SELECT="TOGGLE_SELECT",e.DELETE_FROM_SELECTED="DELETE_FROM_SELECTED",e.CHANGE_ACCESS_RIGHTS="CHANGE_ACCESS_RIGHTS",e.DELETE_FROM_CATALOG="DELETE_FROM_CATALOG",e.TOGGLE_PIN="TOGGLE_PIN",e.DRAG="DRAG"}(u||(u={})),function(e){e.Admin_System="Admin_System",e.Admin_MRF="Admin_MRF",e.Admin_RF="Admin_RF"}(p||(p={})),function(e){e.User="User"}(A||(A={}));var E=function(e){var n=e.label,t=e.accessRights;return{type:u.TOGGLE_PIN,payload:{label:n,accessRights:t}}},F=function(e){var n=e.idx,t=e.draggedIdx;return{type:u.DRAG,payload:{idx:n,draggedIdx:t}}};function b(e,n){return Math.floor(Math.abs(e)/Math.pow(10,n))%10}function f(e,n,t){for(var a=function(e){for(var n,t=0,a=0;a<e.length;a++)t=Math.max(t,0===(n=e[a])?1:Math.floor(Math.log10(Math.abs(n)))+1);return t}(e.map((function(e){return e[n]||0}))),i=function(a){for(var i=Array.from({length:10},(function(){return[]})),l=0;l<e.length;l++){var d=b(e[l][n]||0,a);i[d].push(e[l])}!function(){e=[];var n=function(n,t){return e=n.concat(t)};"ASC"===t?i.reduce(n):i.reduceRight(n)}()},l=0;l<a;l++)i(l);return e}var h=Object(c.b)((function(e){return{apps:e.apps}}),{deleteFromSelected:function(e){return{type:u.DELETE_FROM_SELECTED,payload:e}},togglePin:E,handleDrag:F})((function(e){var n=e.apps,t=e.deleteFromSelected;return i.a.createElement("div",{className:"card-container"},f(Object.values(n),"order","ASC").map((function(e,n){var a=e.label,l=e.isSelected,d=e.pinnedBy;if(l||Object.values(d).some((function(e){return!0===e})))return i.a.createElement(R,{key:a,label:a,isSelected:Boolean(l),handleDelete:function(){return t(a)}})})))})),C=t(73),O=t(74),M=t(78),I=t(75),B=t(79),w=function(e){function n(e,t,a){var i;return Object(C.a)(this,n),(i=Object(M.a)(this,Object(I.a)(n).call(this,e))).draggedIdx=t,i.draggedOverIdx=a,i.onDragStart=function(e,n){var t=i.props.accessRights.status;t&&"Admin"===t.slice(0,5)&&(i.draggedIdx=n,e.dataTransfer.effectAllowed="grabbing",e.dataTransfer.setDragImage(e.target.parentNode.parentNode,50,50))},i.onDragOver=function(e){var n=i.props,t=n.accessRights,a=(n.apps,n.handleDrag);if(t.status&&"Admin"===t.status.slice(0,5)){if(i.draggedOverIdx=e,i.draggedIdx===i.draggedOverIdx)return;a({idx:e,draggedIdx:i.draggedIdx})}},i.onDragEnd=function(){var e=i.props.accessRights;e.status&&"Admin"===e.status.slice(0,5)&&(i.draggedIdx=null)},i}return Object(B.a)(n,e),Object(O.a)(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.accessRights,a=n.apps,l=n.selectFromCatalog,d=n.deleteFromCatalog,r=n.togglePin;return i.a.createElement("div",{className:"card-container"},f(Object.values(a),"order","ASC").map((function(n){var a=n.isInCatalog,s=n.label;return a&&i.a.createElement(R,{onDragStart:function(n){return e.onDragStart(n,s)},onDragOver:function(){return e.onDragOver(s)},onDragEnd:e.onDragEnd,label:s,key:s,isCatalog:!0,handleSelect:function(e){return e.stopPropagation(),t&&t.status&&"Admin"===t.status.slice(0,5)?r({label:s,accessRights:t}):l(s)},handleDelete:function(e){return e.stopPropagation(),d(s)}})})))}}]),n}(i.a.Component),D=Object(c.b)((function(e){return{accessRights:e.accessRights,apps:e.apps}}),{selectFromCatalog:function(e){return{type:u.TOGGLE_SELECT,payload:e}},deleteFromCatalog:function(e){return{type:u.DELETE_FROM_CATALOG,payload:e}},togglePin:E,handleDrag:F})(w),T={User:{status:A.User,level:0},Admin_System:{status:p.Admin_System,level:1},Admin_MRF:{status:p.Admin_MRF,level:2},Admin_RF:{status:p.Admin_RF,level:3}},x=Object(c.b)(null,{accessRightsChange:function(e){return{type:u.CHANGE_ACCESS_RIGHTS,payload:e}}})((function(e){var n=e.accessRightsChange;return i.a.createElement("div",{className:"access-control__select"},i.a.createElement("select",{name:"access",id:"access",onChange:function(e){return n(T[e.target.value])}},Object.values(T).map((function(e){var n=e.status;return i.a.createElement("option",{key:n},n)}))))})),j=function(){return i.a.createElement(s.a,{basename:"/"},i.a.createElement("nav",{className:"navigation__nav"},i.a.createElement(s.b,{to:"/"},"\u041d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"),i.a.createElement(s.b,{to:"/catalog"},"\u041a\u0430\u0442\u0430\u043b\u043e\u0433 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0439"),i.a.createElement(x,null)),i.a.createElement(o.c,null,i.a.createElement(o.a,{path:"/",exact:!0,component:h}),i.a.createElement(o.a,{path:"/catalog",exact:!0,component:D})))},G=t(77),L={yandex:{order:0,label:"yandex",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!0,level:0},isInCatalog:!0},react:{order:1,label:"react",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!0,Admin_RF:!1,level:0},isInCatalog:!0},"vue-dot-js":{order:2,label:"vue-dot-js",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},angular:{order:3,label:"angular",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_RF:!1,Admin_MRF:!1,level:3},isInCatalog:!0},css3:{order:4,label:"css3",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},docker:{order:5,label:"docker",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},"dot-net":{order:6,label:"dot-net",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},electron:{order:7,label:"electron",isSelected:!1,pinnedBy:{Admin_System:!0,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},github:{order:8,label:"github",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},gmail:{order:9,label:"gmail",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},googlechrome:{order:10,label:"googlechrome",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},graphql:{order:11,label:"graphql",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},html5:{order:12,label:"html5",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},huawei:{order:13,label:"huawei",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},instagram:{order:14,label:"instagram",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},java:{order:15,label:"java",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},linux:{order:16,label:"linux",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},microsoftaccess:{order:17,label:"microsoftaccess",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},microsoftexcel:{order:18,label:"microsoftexcel",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},microsoftonedrive:{order:19,label:"microsoftonedrive",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},microsoftonenote:{order:20,label:"microsoftonenote",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},microsoftoutlook:{order:21,label:"microsoftoutlook",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},microsoftpowerpoint:{order:22,label:"microsoftpowerpoint",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},microsoftword:{order:23,label:"microsoftword",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},mongodb:{order:24,label:"mongodb",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},nvidia:{order:25,label:"nvidia",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},php:{order:26,label:"php",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},python:{order:27,label:"python",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},r:{order:28,label:"r",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},youtube:{order:29,label:"youtube",isSelected:!1,pinnedBy:{Admin_System:!0,Admin_MRF:!1,Admin_RF:!1,level:1},isInCatalog:!0},redux:{order:30,label:"redux",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},skype:{order:31,label:"skype",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},twitter:{order:32,label:"twitter",isSelected:!0,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},visa:{order:33,label:"visa",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},visualstudiocode:{order:34,label:"visualstudiocode",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},vk:{order:35,label:"vk",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},vlcmediaplayer:{order:36,label:"vlcmediaplayer",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},apple:{order:37,label:"apple",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:2},isInCatalog:!0},wikipedia:{order:38,label:"wikipedia",isSelected:!0,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0},bitcoin:{order:39,label:"bitcoin",isSelected:!1,pinnedBy:{Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},isInCatalog:!0}},k=Object(G.a)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0,t=n.type,a=n.payload;switch(t){case u.DRAG:var i=a,l=i.idx,d=i.draggedIdx,r=[e[d].order,e[l].order];return e[l].order=r[0],e[d].order=r[1],e;case u.DELETE_FROM_SELECTED:return e[a].isSelected=!1,e[a].pinnedBy={Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},e;case u.DELETE_FROM_CATALOG:return e[a].isSelected=!1,e[a].isInCatalog=!1,e[a].pinnedBy={Admin_System:!1,Admin_MRF:!1,Admin_RF:!1,level:0},e;case u.TOGGLE_SELECT:return e[a].isSelected=!e[a].isSelected,e;case u.TOGGLE_PIN:var s=a,o=s.label,c=s.accessRights,m=c.status,_=c.level,g=e[o].pinnedBy.level;return e[o].pinnedBy[m]=!e[o].pinnedBy[m],e[o].pinnedBy.level=_>g?_:g,e;default:return e}})),N={status:A.User,level:0},P=Object(r.b)({apps:k,accessRights:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case u.CHANGE_ACCESS_RIGHTS:return n.payload;default:return e}}}),H=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.c;d.a.render(i.a.createElement((function(e){var n=e.children,t=e.initialState,a=void 0===t?{}:t,l=e.enhancer,d=Object(r.d)(P,a,l);return i.a.createElement(c.a,{store:d},n)}),{enhancer:H()},i.a.createElement(j,null)),document.getElementById("root"))},33:function(e,n,t){},80:function(e,n,t){e.exports=t(189)}},[[80,1,2]]]);
//# sourceMappingURL=main.00fc390f.chunk.js.map