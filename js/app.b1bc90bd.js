(function(){"use strict";var t={8290:function(t,e,a){var i=a(144),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"white",elevation:"5"}},[a("span",{staticClass:"text-h4 primary--text font-weight-bold",staticStyle:{"text-overflow":"initial"}},[t._v(" Crystal Cars ")]),a("v-spacer")],1),a("v-main",[a("HomeCarousel"),a("div",{staticClass:"mx-6"},[a("v-row",{staticClass:"d-flex mt-5",attrs:{dense:""}},t._l(t.services,(function(t){return a("v-col",{key:t.id,staticClass:"ma-auto"},[a("ServicesCard",{attrs:{icon:t.icon,title:t.title,content:t.content}})],1)})),1),a("div",{staticClass:"text-h6 text-center font-weight-bold primary--text ma-2 text-uppercase mt-10"},[t._v(" //Buy our Pre-owned cars// ")]),a("div",{staticClass:"text-h5 text-center font-weight-bold secondary--text ma-2"},[t._v(" Featured Cars ")]),a("v-row",{staticClass:"d-flex",attrs:{dense:""}},t._l(t.services,(function(t){return a("v-col",{key:t.id,staticClass:"ma-auto",attrs:{cols:"12",md:"4",xl:"4"}},[a("CarsCard")],1)})),1),a("AboutUs",{staticClass:"mt-10"}),a("v-divider")],1),a("StatsTile",{staticClass:"mt-10"}),a("HomeFooter",{staticClass:"mt-10"})],1)],1)},r=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-carousel",{attrs:{"hide-delimiters":"",cycle:""}},t._l(t.items,(function(e,i){return a("v-carousel-item",{key:i,attrs:{src:e.src,"reverse-transition":"fade-transition",transition:"fade-transition"}},[a("v-overlay",{staticClass:"text-center",attrs:{absolute:"",opacity:"0.7"}},[a("div",{staticClass:"text-h6 white--text"},[t._v("//CRYSTAL CARS//")]),a("div",{staticClass:"text-h4 white--text font-weight-bold mt-2"},[t._v(" "+t._s(e.text)+" ")])])],1)})),1)},o=[],l={name:"HomeCarousel",data(){return{items:[{src:a(9037),text:"Buying, Selling, Financing for Used Cars"},{src:a(6459),text:"All Brands of used Cars from Benz to Maruthi"}]}}},c=l,v=a(1001),u=a(3453),d=a.n(u),f=a(2695),m=a(4062),p=a(1058),h=(0,v.Z)(c,n,o,!1,null,null,null),C=h.exports;d()(h,{VCarousel:f.Z,VCarouselItem:m.Z,VOverlay:p.Z});var x=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"ma-2 pa-2",attrs:{elevation:"5"}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-avatar",{attrs:{tile:"",right:""}},[a("v-icon",{attrs:{color:"primary",large:""}},[t._v(" "+t._s(t.icon)+" ")])],1),a("v-list-item-content",[a("v-list-item-title",{staticClass:"text-h5 font-weight-bold"},[t._v(t._s(t.title))]),a("v-list-item-content",{staticClass:"text-p"},[t._v(" "+t._s(t.content)+" ")])],1)],1)],1)},w=[],g={name:"ServicesCard",props:{title:String,content:String,icon:String}},_=g,b=a(2628),y=a(6428),Z=a(7620),V=a(5457),S=a(456),k=(0,v.Z)(_,x,w,!1,null,"6337b7c8",null),A=k.exports;d()(k,{VCard:b.Z,VIcon:y.Z,VListItem:Z.Z,VListItemAvatar:V.Z,VListItemContent:S.km,VListItemTitle:S.V9});var B=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-card",{staticClass:"ma-2",attrs:{elevation:"10",color:"#F2F2F2"}},[i("v-img",{attrs:{"max-height":"350",src:a(4736)}}),i("div",{staticClass:"ma-2"},[i("v-card-title",{staticClass:"text-h5 font-weight-bold"},[t._v("2021 SUV")]),i("v-card-subtitle",{staticClass:"text-p"},[t._v("Model Number: #123 ")]),i("div",{staticClass:"d-flex justify-space-between"},[i("v-chip-group",{staticClass:"justify-center ma-auto"},[i("v-chip",{attrs:{label:""}},[t._v("1st Owner")]),i("v-chip",{attrs:{label:""}},[t._v("20,000KM")]),i("v-chip",{attrs:{label:""}},[t._v("Pertrol")])],1)],1),i("v-divider"),i("v-card-actions",[i("v-card-text",{staticClass:"text-h6 font-weight-bold"},[t._v(" ₹20,000 ")]),i("v-btn",{staticClass:"white--text",attrs:{color:"primary",dark:"",depressed:"",large:"",outlined:""}},[t._v(" Buy Now ")])],1)],1)],1)},F=[],I={},O=I,T=a(680),j=a(7118),M=a(5424),E=a(2102),L=a(1418),U=a(7047),P=(0,v.Z)(O,B,F,!1,null,null,null),$=P.exports;d()(P,{VBtn:T.Z,VCard:b.Z,VCardActions:j.h7,VCardSubtitle:j.Qq,VCardText:j.ZB,VCardTitle:j.EB,VChip:M.Z,VChipGroup:E.Z,VDivider:L.Z,VImg:U.Z});var H=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"text-h6 text-center font-weight-bold primary--text ma-2 text-uppercase"},[t._v(" // About us // ")]),a("v-row",[a("v-col",[a("div",[a("div",{staticClass:"text-p secondary--text font-weight-bold text-capitalize ma-2 p-content"},[a("span",{staticClass:"text-h4 primary--text font-weight-bold p-content"},[t._v("Crystal Cars")]),t._v(" Is The Best Place For Selling or Buying Your Used Cars ")]),a("div",{staticClass:"text-p ma-4 p-content"},[t._v(" We deal Buying and Selling of Used Cars in the Market more than 15 years. we have more than 500 valuable customers in our data base. as being in the market for a long period we are well versed in identifying the problem of used cars. ")])])]),a("v-col",t._l(t.aboutus,(function(e){return a("v-list-item-group",{key:e.id},[a("v-list-item",{attrs:{"two-line":""}},[a("v-list-item-avatar",{staticClass:"secondary--text font-weight-bold",attrs:{left:"",tile:"",color:"#F2F2F2"}},[t._v(" "+t._s(e.id)+" ")]),a("v-list-item-content",{staticClass:"pa-1 ma-1"},[a("v-list-item-title",{staticClass:"text-p font-weight-bold secondary--text p-tile"},[t._v(" "+t._s(e.title)+" ")]),a("v-list-item-subtitle",{staticClass:"text-capitalize p-tile"},[t._v(" "+t._s(e.content)+" ")])],1)],1)],1)})),1)],1)],1)},R=[],D={name:"AboutUs",data(){return{aboutus:[{id:1,title:"Buy a used car",content:"Used cars in good quality"},{id:2,title:"Sell a used car",content:"Sell or Exchange your used car"},{id:3,title:"Finanace and Insurance",content:"we provide finanicing and insurance for used cars"}]}}},z=D,Y=a(6824),G=a(7874),N=a(2877),W=(0,v.Z)(z,H,R,!1,null,null,null),q=W.exports;d()(W,{VCol:Y.Z,VListItem:Z.Z,VListItemAvatar:V.Z,VListItemContent:S.km,VListItemGroup:G.Z,VListItemSubtitle:S.oZ,VListItemTitle:S.V9,VRow:N.Z});var K=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"text-center StatsTile"},[a("v-row",{attrs:{justify:"center"}},t._l(t.stats,(function(e){return a("v-col",{key:e.id,staticClass:"ma-2 pa-2",attrs:{cols:"12",sm:"3",lg:"3",md:"3"}},[a("v-icon",{attrs:{color:"white",large:""}},[t._v(t._s(e.icon)+" ")]),a("div",{staticClass:"text-h4 white--text font-weight-bold ma-2"},[t._v(" "+t._s(e.title)+" ")]),a("div",{staticClass:"text-p white--text"},[t._v(t._s(e.content))])],1)})),1)],1)},Q=[],J={name:"StatsTile",data(){return{stats:[{id:1,icon:"fa-check",title:"15",content:"Years Experience"},{id:2,icon:"fa-users",title:"500",content:"Satisfied Clients"},{id:3,icon:"fa-car",title:"300",content:"Cars Holding"}]}}},X=J,tt=a(9846),et=(0,v.Z)(X,K,Q,!1,null,"bf95df86",null),at=et.exports;d()(et,{VCol:Y.Z,VContainer:tt.Z,VIcon:y.Z,VRow:N.Z});var it=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"white--text FooterBackground",staticStyle:{width:"100%"}},[a("div",{staticClass:"mt-10 mx-3"},[a("v-row",[a("v-col",{attrs:{cols:"12",sm:"12",lg:"4",md:"4"}},[a("div",{staticClass:"ma-1 pa-1"},[a("div",{staticClass:"text-h6 white--text font-weight-bold"},[t._v("Address")]),a("div",{staticClass:"text-p white--text ma-2"},[a("v-icon",{staticClass:"ma-1",attrs:{color:"white",small:""}},[t._v("fa-map-marker-alt")]),t._v(" No 26.11A, Govindarajapuram, Adyar, Chennai ")],1),a("div",{staticClass:"text-p white--text ma-2"},[a("v-icon",{staticClass:"ma-1",attrs:{color:"white",small:""}},[t._v("fa-phone")]),t._v(" +91 9876543210 ")],1),a("div",{staticClass:"text-p white--text ma-2"},[a("v-icon",{staticClass:"ma-1",attrs:{color:"white",small:""}},[t._v("fa-envelope")]),t._v(" crystalcars07@gmail.com ")],1)])]),a("v-col",{attrs:{cols:"12",sm:"12",lg:"4",md:"4"}},[a("div",{staticClass:"ma-1 pa-1"},[a("div",{staticClass:"text-h6 white--text font-weight-bold"},[t._v(" Opening Hours ")]),a("div",{staticClass:"ma-2"},[a("div",{staticClass:"text-p white--text"},[t._v("Monday - Friday")]),a("div",{staticClass:"text-p white--text"},[t._v("9:00 AM - 5:00 PM")])]),a("div",{staticClass:"ma-2"},[a("div",{staticClass:"text-p white--text"},[t._v("Saturday - Sunday")]),a("div",{staticClass:"text-p white--text"},[t._v("9:00 AM - 1:00 PM")])])])])],1),a("div",{staticClass:"text-p text-center mt-5"},[t._v(" © Crystal Cars | All Rights Reserved | Designed and Developed by "),a("a",{staticStyle:{color:"white"},attrs:{href:"www.deonte.in"}},[t._v("Deonte.in")])])],1)])},st=[],rt={name:"HomeFooter"},nt=rt,ot=(0,v.Z)(nt,it,st,!1,null,null,null),lt=ot.exports;d()(ot,{VCol:Y.Z,VContainer:tt.Z,VIcon:y.Z,VRow:N.Z});var ct={name:"App",components:{HomeCarousel:C,ServicesCard:A,CarsCard:$,AboutUs:q,StatsTile:at,HomeFooter:lt},computed:{isMobile(){return this.$vuetify.breakpoint.xs}},data(){return{services:[{id:1,icon:"fa-car",title:"Buy a used car",content:" We always have stock flow of mixed varieties of Cars from Benz to Maruti and ranges from 2 lakhs Onwards."},{id:2,icon:"fa-car-side",title:"Sell a Used Cars",content:"Sell Your Used Car with us. we are well versed in identifying the problems of Used Cars."},{id:3,icon:"fa-certificate",title:"Financing",content:"We also deal with financing through various banks. we are titled as value partner with TVS Credit Servies."}]}}},vt=ct,ut=a(7524),dt=a(3583),ft=a(7877),mt=a(9762),pt=(0,v.Z)(vt,s,r,!1,null,null,null),ht=pt.exports;d()(pt,{VApp:ut.Z,VAppBar:dt.Z,VCol:Y.Z,VDivider:L.Z,VMain:ft.Z,VRow:N.Z,VSpacer:mt.Z});var Ct=a(1910);i.Z.use(Ct.Z);var xt=new Ct.Z({icons:{iconfont:"fa"},theme:{themes:{light:{primary:"#ff0000",secondary:"#0B2154",accent:"#8c9eff",error:"#b71c1c"}}}}),wt=a(8345);i.Z.use(wt.Z);const gt=[],_t=new wt.Z({mode:"history",base:"/",routes:gt});var bt=_t;i.Z.config.productionTip=!1,new i.Z({router:bt,vuetify:xt,render:t=>t(ht)}).$mount("#app")},4736:function(t,e,a){t.exports=a.p+"img/car1.2ab1fb28.jpg"},9037:function(t,e,a){t.exports=a.p+"img/carousel-01.7d42b1a1.jpg"},6459:function(t,e,a){t.exports=a.p+"img/carousel-02.b2002bfa.jpg"}},e={};function a(i){var s=e[i];if(void 0!==s)return s.exports;var r=e[i]={exports:{}};return t[i](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,i,s,r){if(!i){var n=1/0;for(v=0;v<t.length;v++){i=t[v][0],s=t[v][1],r=t[v][2];for(var o=!0,l=0;l<i.length;l++)(!1&r||n>=r)&&Object.keys(a.O).every((function(t){return a.O[t](i[l])}))?i.splice(l--,1):(o=!1,r<n&&(n=r));if(o){t.splice(v--,1);var c=s();void 0!==c&&(e=c)}}return e}r=r||0;for(var v=t.length;v>0&&t[v-1][2]>r;v--)t[v]=t[v-1];t[v]=[i,s,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var i in e)a.o(e,i)&&!a.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){a.p="/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,i){var s,r,n=i[0],o=i[1],l=i[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(s in o)a.o(o,s)&&(a.m[s]=o[s]);if(l)var v=l(a)}for(e&&e(i);c<n.length;c++)r=n[c],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(v)},i=self["webpackChunkcrystalcars"]=self["webpackChunkcrystalcars"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=a.O(void 0,[998],(function(){return a(8290)}));i=a.O(i)})();
//# sourceMappingURL=app.b1bc90bd.js.map