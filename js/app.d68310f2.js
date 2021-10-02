(function(t){function e(e){for(var s,n,o=e[0],c=e[1],l=e[2],u=0,h=[];u<o.length;u++)n=o[u],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&h.push(r[n][0]),r[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(h.length)h.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,n=1;n<a.length;n++){var c=a[n];0!==r[c]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},i=[];function n(t){return o.p+"js/"+({about:"about"}[t]||t)+"."+{about:"ccac42d2"}[t]+".js"}function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.e=function(t){var e=[],a=r[t];if(0!==a)if(a)e.push(a[2]);else{var s=new Promise((function(e,s){a=r[t]=[e,s]}));e.push(a[2]=s);var i,c=document.createElement("script");c.charset="utf-8",c.timeout=120,o.nc&&c.setAttribute("nonce",o.nc),c.src=n(t);var l=new Error;i=function(e){c.onerror=c.onload=null,clearTimeout(u);var a=r[t];if(0!==a){if(a){var s=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+s+": "+i+")",l.name="ChunkLoadError",l.type=s,l.request=i,a[1](l)}r[t]=void 0}};var u=setTimeout((function(){i({type:"timeout",target:c})}),12e4);c.onerror=c.onload=i,document.head.appendChild(c)}return Promise.all(e)},o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/",o.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",flat:""}},[a("v-spacer"),[a("p",{staticClass:"text-center font-weight-black ma-0",staticStyle:{"font-family":"'Times New Roman',serif","font-size":"20px"}},[t._v("Academy of Magic")]),a("v-btn-toggle",{attrs:{group:"",color:"black",borderless:""}},[a("v-btn",{attrs:{text:""},on:{click:t.toHome}},[t._v("Home")]),a("v-btn",{attrs:{text:""},on:{click:t.toMembers}},[t._v("Members")]),a("v-btn",{attrs:{text:""},on:{click:t.toPublications}},[t._v("Publications")]),a("v-btn",{attrs:{text:""}},[t._v("Gallery")])],1)],a("v-spacer"),a("v-btn",{attrs:{text:""}},[t._v("中文")]),a("v-spacer")],2),a("v-main",[a("v-container",{attrs:{fluid:""}},[a("router-view")],1)],1),a("v-toolbar",{attrs:{padless:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-text",{staticClass:"black--text text-center"},[a("hr")]),a("v-card-text",{staticClass:"py-2 black--text text-center"},[t._v(" Copyright © "+t._s((new Date).getFullYear())+" "),a("a",{attrs:{href:"https://judgementh.github.io/"}},[t._v("Judgement.")]),t._v(" All rights reserved. ")])],1)],1)],1)},i=[],n={name:"App",data:function(){return{}},methods:{toHome:function(){this.$router.push({path:"./"})},toAbout:function(){this.$router.push({path:"./About"})},toMembers:function(){this.$router.push({path:"./members"})},toPublications:function(){this.$router.push({path:"./publications"})}}},o=n,c=(a("6385"),a("2877")),l=a("6544"),u=a.n(l),d=a("7496"),h=a("40dc"),p=a("8336"),v=a("a609"),m=a("b0af"),f=a("99d9"),b=a("a523"),g=a("f6c4"),w=a("2fa4"),_=a("71d9"),x=Object(c["a"])(o,r,i,!1,null,"88a36d1e",null),y=x.exports;u()(x,{VApp:d["a"],VAppBar:h["a"],VBtn:p["a"],VBtnToggle:v["a"],VCard:m["a"],VCardText:f["a"],VContainer:b["a"],VMain:g["a"],VSpacer:w["a"],VToolbar:_["a"]});a("d3b7"),a("3ca3"),a("ddb0");var C=a("8c4f"),j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"8"}},[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{"align-self":"center"}},[a("p",{staticClass:"text-h4"},[t._v("About the Lab")]),a("p",{staticClass:"text-body-1"},[a("strong",[t._v("Hogwarts School of Witchcraft and Wizardry")]),t._v(", often shortened to Hogwarts, was the British wizarding school, located in the Scottish Highlands. It accepted magical students from Great Britain and Ireland for enrolment. It was a state-owned school, funded by the Ministry of Magic. ")]),a("p",{staticClass:"text-body-1"},[t._v(" wizarding school, located in the Scottish Highlands. It accepted magical students from Great Britain and Ireland for enrolment. It was a state-owned school, funded by the Ministry of Magic. ")]),a("p",{staticClass:"text-body-1"},[t._v(" wizarding school, located in the Scottish Highlands. It accepted magical students from Great Britain and Ireland for enrolment. It was a state-owned school, funded by the Ministry of Magic. ")])])],1),a("v-row",[a("v-col",{attrs:{cols:"4"}},[a("div",[a("v-img",{attrs:{src:"https://cdn.jsdelivr.net/gh/JudgementH/image-host/anime/touhou/youmu.jpg","max-width":"500"}}),a("p",{staticClass:"text-center subtitle-1 font-weight-bold"},[t._v("fig.1")])],1)]),a("v-col",{attrs:{cols:"4"}},[a("div",[a("v-img",{attrs:{src:"https://cdn.jsdelivr.net/gh/JudgementH/image-host/anime/touhou/youmu.jpg","max-width":"500"}}),a("p",{staticClass:"text-center subtitle-1 font-weight-bold"},[t._v("fig.2")])],1)]),a("v-col",{attrs:{cols:"4"}},[a("div",[a("v-img",{attrs:{src:"https://cdn.jsdelivr.net/gh/JudgementH/image-host/anime/touhou/youmu.jpg","max-width":"500"}}),a("p",{staticClass:"text-center subtitle-1 font-weight-bold"},[t._v("fig.3")])],1)])],1),a("v-row",{attrs:{justify:"center"}},[a("v-col",[a("p",{staticClass:"text-h4"},[t._v("News")]),a("ul",t._l(t.news,(function(e){return a("li",{key:e.id},[t._v(t._s(e))])})),0)])],1)],1)],1)],1)},k=[],V={name:"Home",components:{},data:function(){return{news:["2021-10-02: Update","2021-09-30: Hello World!"]}},methods:{}},H=V,M=a("62ad"),P=a("adda"),A=a("0fd9"),O=Object(c["a"])(H,j,k,!1,null,null,null),S=O.exports;u()(O,{VCol:M["a"],VImg:P["a"],VRow:A["a"]});var I=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"8"}},[t.professor.length>0?a("div",{staticClass:"pb-10"},[a("p",{staticClass:"text-h4"},[t._v("Professors")]),a("v-row",t._l(t.professor,(function(e,s){return a("v-col",{key:s,attrs:{cols:"2"}},[a("div",{staticClass:"text-center"},[a("v-img",{staticClass:"rounded-circle",attrs:{src:e.avatar,"min-width":"130","max-width":"130"}}),a("div",{staticClass:"font-weight-bold"},[t._v(t._s(e.name))]),a("div",[e.website?a("a",{attrs:{href:e.website}},[t._v("[web]")]):t._e(),e.github?a("a",{attrs:{href:e.github}},[t._v("[github]")]):t._e()])],1)])})),1)],1):t._e(),t.phd.length>0?a("div",{staticClass:"pb-10"},[a("p",{staticClass:"text-h4"},[t._v("PhD Students")]),a("v-row",t._l(t.phd,(function(e,s){return a("v-col",{key:s,attrs:{cols:"2"}},[a("div",{staticClass:"text-center"},[a("v-img",{staticClass:"rounded-circle",attrs:{src:e.avatar,"min-width":"130","max-width":"130"}}),a("div",{staticClass:"font-weight-bold"},[t._v(t._s(e.name))]),a("div",[e.website?a("a",{attrs:{href:e.website}},[t._v("[web]")]):t._e(),e.github?a("a",{attrs:{href:e.github}},[t._v("[github]")]):t._e()])],1)])})),1)],1):t._e(),t.master.length>0?a("div",{staticClass:"pb-10"},[a("p",{staticClass:"text-h4"},[t._v("Master Students")]),a("v-row",t._l(t.master,(function(e,s){return a("v-col",{key:s,attrs:{cols:"2"}},[a("div",{staticClass:"text-center"},[a("v-img",{staticClass:"rounded-circle",attrs:{src:e.avatar,"min-width":"130","max-width":"130"}}),a("div",{staticClass:"font-weight-bold"},[t._v(t._s(e.name))]),a("div",[e.website?a("a",{attrs:{href:e.website}},[t._v("[web]")]):t._e(),e.github?a("a",{attrs:{href:e.github}},[t._v("[github]")]):t._e()])],1)])})),1)],1):t._e(),t.undergraduate.length>0?a("div",{staticClass:"pb-10"},[a("p",{staticClass:"text-h4"},[t._v("Undergraduate Students")]),a("v-row",t._l(t.undergraduate,(function(e,s){return a("v-col",{key:s,attrs:{cols:"2"}},[a("div",{staticClass:"text-center"},[a("v-img",{staticClass:"rounded-circle",attrs:{src:e.avatar,"min-width":"130","max-width":"130"}}),a("div",{staticClass:"font-weight-bold"},[t._v(t._s(e.name))]),a("div",[e.website?a("a",{attrs:{href:e.website}},[t._v("[web]")]):t._e(),e.github?a("a",{attrs:{href:e.github}},[t._v("[github]")]):t._e()])],1)])})),1)],1):t._e(),t.alumni.length>0?a("div",{staticClass:"pb-10"},[a("p",{staticClass:"text-h4"},[t._v("Alumni")]),a("v-row",t._l(t.alumni,(function(e,s){return a("v-col",{key:s,attrs:{cols:"2"}},[a("div",{staticClass:"text-center"},[a("v-img",{staticClass:"rounded-circle",attrs:{src:e.avatar,"min-width":"130","max-width":"130"}}),a("div",{staticClass:"font-weight-bold"},[t._v(t._s(e.name))]),a("div",[e.website?a("a",{attrs:{href:e.website}},[t._v("[web]")]):t._e(),e.github?a("a",{attrs:{href:e.github}},[t._v("[github]")]):t._e()])],1)])})),1)],1):t._e()])],1)],1)},J=[],T={name:"Members",data:function(){return{professor:[{avatar:"https://cdn.jsdelivr.net/gh/JudgementH/image-host/anime/avatar/akari.jpeg",name:"Akari",website:"https://www.baidu.com",github:"https://www.github.com"},{avatar:"https://cdn.jsdelivr.net/gh/JudgementH/image-host/anime/avatar/akari.jpeg",name:"Akari",website:"https://www.baidu.com",github:"https://www.github.com"},{avatar:"https://cdn.jsdelivr.net/gh/JudgementH/image-host/anime/avatar/akari.jpeg",name:"Akari",website:"https://www.baidu.com",github:"https://www.github.com"}],phd:[],master:[],undergraduate:[],alumni:[]}}},$=T,B=Object(c["a"])($,I,J,!1,null,"1c2ebb8c",null),E=B.exports;u()(B,{VCol:M["a"],VImg:P["a"],VRow:A["a"]});var z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"8"}},[a("div",[a("p",{staticClass:"text-h4"},[t._v("Publications")]),a("p",{staticClass:"subtitle-1"},[a("em",[t._v("'*' indicates corresponding author.")])]),t._l(t.papers,(function(e,s){return a("v-row",{key:s},[e.image?a("v-col",{attrs:{cols:"3"}},[a("v-img",{attrs:{src:e.image,alt:"","max-width":"300px"}})],1):t._e(),a("v-col",{attrs:{cols:"9"}},[a("p",{staticClass:"text-h5 font-weight-bold ma-0"},[t._v(t._s(e.title))]),a("p",{staticClass:"subtitle-1 ma-0"},[t._v(t._s(e.authors))]),a("p",{staticClass:"subtitle-2 ma-0"},[t._v(t._s(e.platform))]),a("p",{staticClass:"body-1"},[e.page?a("a",{attrs:{href:e.page}},[t._v("[page]")]):t._e(),e.paper?a("a",{attrs:{href:e.paper}},[t._v("[paper]")]):t._e(),e.supplementary?a("a",{attrs:{href:e.supplementary}},[t._v("[supplementary]")]):t._e(),e.code?a("a",{attrs:{href:e.code}},[t._v("[code]")]):t._e()])])],1)}))],2)])],1)],1)},G=[],R={name:"Publications",data:function(){return{papers:[{image:"https://cdn.jsdelivr.net/gh/JudgementH/image-host/anime/touhou/youmu.jpg",title:"fox say this is paper's title.",authors:"Author1#,author2#,author3*",platform:"xxx Conference",page:"https://www.baidu.com",paper:"https://www.baidu.com",supplementary:"https://www.baidu.com",code:"github.com"},{title:"fox2 say this is paper's title.",authors:"Author1#,author2#,author3*",platform:"xxx Conference",page:"https://www.baidu.com",code:"github.com"}]}}},L=R,W=Object(c["a"])(L,z,G,!1,null,"56861bdd",null),D=W.exports;u()(W,{VCol:M["a"],VImg:P["a"],VRow:A["a"]}),s["a"].use(C["a"]);var N=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}},{path:"/members",name:"Members",component:E},{path:"/publications",name:"Publications",component:D}],U=new C["a"]({routes:N}),q=U,F=a("f309");s["a"].use(F["a"]);var Y=new F["a"]({});s["a"].config.productionTip=!1,new s["a"]({router:q,vuetify:Y,render:function(t){return t(y)}}).$mount("#app")},6385:function(t,e,a){"use strict";a("7e9a")},"7e9a":function(t,e,a){}});
//# sourceMappingURL=app.d68310f2.js.map