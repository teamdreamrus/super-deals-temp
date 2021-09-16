(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{119:function(t,e,o){"use strict";o.r(e);var n=o(90),r=o.n(n),l=o(120),c=o(121),d={name:"VHeader",components:{LogoShape:r.a,VButton:l.default,Popup:c.default},data:function(){return{showPopup:!1}},methods:{openPopup:function(){this.showPopup=!0}}},f=(o(251),o(12)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("div",{staticClass:"header__logo"},[o("logo-shape",{staticClass:"header__icon"}),t._v(" "),o("span",{staticClass:"header__text"},[t._v(" Super Deals ")])],1),t._v(" "),o("v-button",{on:{click:t.openPopup}}),t._v(" "),t.showPopup?o("portal",{attrs:{to:"layout"}},[o("popup",{on:{close:function(e){t.showPopup=!1}}})],1):t._e()],1)}),[],!1,null,"3b21abaf",null);e.default=component.exports;installComponents(component,{VButton:o(120).default,Popup:o(121).default})},120:function(t,e,o){"use strict";o.r(e);var n={name:"VButton",props:{text:{type:String,default:"Get the App"}}},r=(o(247),o(12)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("button",{on:{click:function(e){return t.$emit("click")}}},[t._v("\n  "+t._s(t.text)+"\n")])}),[],!1,null,"3f864c98",null);e.default=component.exports},121:function(t,e,o){"use strict";o.r(e);var n=o(188),r=o.n(n),l=o(189),c=o.n(l),d={name:"Popup",components:{IconVector:r.a,IconClose:c.a}},f=(o(249),o(12)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"popup"},[n("div",{staticClass:"popup__body"},[n("div",{staticClass:"popup__left"},[n("icon-vector",{staticClass:"popup__vector"}),t._v(" "),n("img",{staticClass:"popup__qr",attrs:{src:o(198),alt:"qr code"}}),t._v("\n      Scan to download\n    ")],1),t._v(" "),t._m(0),t._v(" "),n("icon-close",{staticClass:"popup__close",on:{click:function(e){return t.$emit("close")}}})],1),t._v(" "),n("div",{staticClass:"popup__bg",on:{click:function(e){return t.$emit("close")}}})])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"popup__right"},[o("div",{staticClass:"popup__title"},[t._v("\n        Almost there!\n      ")]),t._v(" "),o("p",{staticClass:"popup__text"},[t._v("\n        You are just inches away from getting\n        exclusive deals, coupons and saving all kinds of money.\n        Choose your fate, don't hesitate!\n      ")])])}],!1,null,"5b700286",null);e.default=component.exports},122:function(t,e,o){"use strict";o.r(e);var n=o(90),r=o.n(n),l=o(190),c=o.n(l),d=o(191),f=o.n(d),h=o(130),v={name:"VFooter",components:{IconLogoShape:r.a,IconIos:c.a,IconAndroid:f.a},computed:{links:function(){return h.a}}},_=(o(253),o(12)),component=Object(_.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("footer",{staticClass:"footer"},[o("div",{staticClass:"footer__wrapper"},[o("div",{staticClass:"footer__logo"},[o("icon-logo-shape",{staticClass:"footer__logo-shape"}),t._v(" "),o("span",{staticClass:"footer__logo-text"},[t._v(" Super Deals ")])],1),t._v(" "),o("div",{staticClass:"footer__group"},[o("div",{staticClass:"footer__title"},[t._v("\n        Apps\n      ")]),t._v(" "),o("a",{staticClass:"footer__link",attrs:{target:"_blank",href:t.links.ios}},[o("icon-ios",{staticClass:"footer__icon"}),t._v("\n        Super Deals iOS\n      ")],1),t._v(" "),o("a",{staticClass:"footer__link",attrs:{target:"_blank",href:t.links.android}},[o("icon-android",{staticClass:"footer__icon"}),t._v("\n        Super Deals Android\n      ")],1)]),t._v(" "),t._m(0)])])}),[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer__group"},[o("div",{staticClass:"footer__title"},[t._v("\n        Company\n      ")]),t._v(" "),o("a",{staticClass:"footer__link",attrs:{href:"mailto:super-deals@superunlimited.com"}},[t._v("\n        Contact us\n      ")])])}],!1,null,"30d1d1f2",null);e.default=component.exports},126:function(t,e,o){"use strict";var n=o(0),r=o(192),l=o.n(r);n.default.use(l.a)},127:function(t,e,o){"use strict";var n=o(0),r=o(193),l=o.n(r);n.default.use(l.a)},128:function(t,e,o){"use strict";var n=o(0),r=o(194),l=o.n(r);n.default.use(l.a)},130:function(t,e,o){"use strict";o.d(e,"a",(function(){return d})),o.d(e,"d",(function(){return n})),o.d(e,"e",(function(){return r})),o.d(e,"b",(function(){return l})),o.d(e,"c",(function(){return c}));var n=[{icon:"IconFeatureDesign",title:"Awesome design",text:"User-friendly app with creative visuals"},{icon:"IconFeatureContent",title:"Clear content",text:"Easy to navigate with up-to-date deals and coupons"},{icon:"IconFeatureExperience",title:"Smooth experience",text:"Customer-oriented focus on your needs"}],r=[{bgColor:"#FAF8FF",bgGrad:"linear-gradient(158.88deg, rgba(250, 248, 255, 0.4) -8.07%, #E8DFFF 110.94%)",title:"1. Discover daily deals",imageName:"phone-slide-1.png",description:"Depending on which offer you’re targeted for, you can catch secret deals, discount codes and other promos using Super Deals App."},{bgColor:"#FFF8EA",bgGrad:"linear-gradient(150.56deg, rgba(255, 248, 234, 0.4) -3.75%, #FFF0D3 104.96%)",title:"2. Find favorite stores",imageName:"phone-slide-2.png",description:"Everyone loves a discount, so there’s nothing worse than finding out you missed your favourite brand's sale. Super Deals ensures that you never miss out again."},{bgColor:"#F5FAED",bgGrad:"linear-gradient(151.53deg, rgba(245, 250, 237, 0.4) -1.42%, #E7F4D2 106.56%)",title:"3. Enjoy seamless experience",imageName:"phone-slide-3.png",description:"Find products you love, try coupon codes, and shop quick and stress-free. Easily copy and paste codes to apply savings."},{bgColor:"#EEF3F6",bgGrad:"linear-gradient(150.08deg, rgba(209, 222, 228, 0.3) -4.5%, #B6DDEF 108.24%)",title:"4. Save on your needs",imageName:"phone-slide-4.png",description:"Super Deals is just a great app and saves all kinds of money. Choose your fate, don't hesitate!"}],l=["#91A8CF","#EE7F85","#0A9A67","#57B83E","#008DD0","#E8833A","#CE0000"],c=[{title:"Is Super Deals <strong>free</strong>?",article:"Our coupon codes are free.",opened:!1},{title:"How do I use a <strong>coupon code</strong>?",article:'\n    The coupon code can be applied in the online store at one \n    of the stages of purchase: most often in the "Shopping Cart" or \n    at the final step of confirming the order. There you can see the “Promo code” \n    field. Paste the code you got from Super Deals in this field and click the \n    “Apply” button if there is one. You’ll see that the total price got less. \n    After that complete the order.',opened:!1},{title:"What if a coupon code <strong>doesn’t work</strong>?",article:"\n    The coupon code most likely expired. \n    Message us with the name of the store and promo code that didn't work. \n    Thank you for helping us get better!",opened:!1},{title:"How <strong>many times</strong> can I use a coupon?",article:"\n    You can use the promo code unlimited until it \n    expires unless other terms of use are specified in the promotion description. \n    For example, if the promo code is valid only \n    for the first purchase then you will not be able to use it again.",opened:!1},{title:"Can I <strong>combine coupons</strong> with other discounts?",article:"\n    It depends on the conditions of the store. \n    The store sometimes allows you to combine a promo code \n    and a discount but the store also can disallow the use \n    of promo codes and discounts in one order.",opened:!1}],d={ios:"https://apps.apple.com/us/app/super-deals-shopping-coupons/id1567165863",android:"https://play.google.com/store/apps/details?id=com.super_deals&hl=en&gl=US"}},170:function(t,e,o){var content=o(248);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("7885b114",content,!0,{sourceMap:!1})},171:function(t,e,o){var content=o(250);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("68dd315b",content,!0,{sourceMap:!1})},172:function(t,e,o){var content=o(252);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("2fa8a1e9",content,!0,{sourceMap:!1})},173:function(t,e,o){var content=o(254);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("58460ad0",content,!0,{sourceMap:!1})},174:function(t,e,o){var content=o(256);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("10ec330d",content,!0,{sourceMap:!1})},188:function(t,e,o){o(19),o(15),o(18),o(26),o(16),o(27);var n=o(55),r=o(56),l=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}o(32),t.exports={functional:!0,render:function(t,e){var o=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,h=data.class,v=data.staticClass,style=data.style,_=data.staticStyle,m=data.attrs,y=void 0===m?{}:m,x=r(data,l);return o("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,v],style:[style,_],attrs:Object.assign({width:"230",height:"328",viewBox:"0 0 230 328",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y)},x),f.concat([o("path",{attrs:{d:"M5 323V29C5 15.7452 15.7452 5 29 5H201C214.255 5 225 15.7452 225 29V323",stroke:"url(#paint0_linear)","stroke-width":"10","stroke-linecap":"square"}}),o("defs",[o("linearGradient",{attrs:{id:"paint0_linear",x1:"115",y1:"5",x2:"115",y2:"323",gradientUnits:"userSpaceOnUse"}},[o("stop",{attrs:{"stop-color":"#F38CD1"}}),o("stop",{attrs:{offset:"1","stop-color":"#F38CD1","stop-opacity":"0"}})])])]))}}},189:function(t,e,o){o(19),o(15),o(18),o(26),o(16),o(27);var n=o(55),r=o(56),l=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}o(32),t.exports={functional:!0,render:function(t,e){var o=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,h=data.class,v=data.staticClass,style=data.style,_=data.staticStyle,m=data.attrs,y=void 0===m?{}:m,x=r(data,l);return o("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,v],style:[style,_],attrs:Object.assign({width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y)},x),f.concat([o("path",{attrs:{d:"M8 8L24 24",stroke:"#191615","stroke-width":"3","stroke-linecap":"square"}}),o("path",{attrs:{d:"M24 8L8 24",stroke:"#191615","stroke-width":"3","stroke-linecap":"square"}})]))}}},190:function(t,e,o){o(19),o(15),o(18),o(26),o(16),o(27);var n=o(55),r=o(56),l=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}o(32),t.exports={functional:!0,render:function(t,e){var o=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,h=data.class,v=data.staticClass,style=data.style,_=data.staticStyle,m=data.attrs,y=void 0===m?{}:m,x=r(data,l);return o("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,v],style:[style,_],attrs:Object.assign({width:"17",height:"16",viewBox:"0 0 17 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y)},x),f.concat([o("g",{attrs:{"clip-path":"url(#clip0)"}},[o("path",{attrs:{d:"M11.8209 0C10.9679 0.0589997 9.97095 0.604996 9.38995 1.31599C8.85996 1.96099 8.42397 2.91898 8.59396 3.84998C9.52595 3.87898 10.4889 3.31998 11.0469 2.59698C11.5689 1.92399 11.9639 0.971994 11.8209 0Z",fill:"white"}}),o("path",{attrs:{d:"M15.1918 5.36811C14.3728 4.34111 13.2218 3.74512 12.1348 3.74512C10.6999 3.74512 10.0929 4.43211 9.09586 4.43211C8.06787 4.43211 7.28688 3.74712 6.04588 3.74712C4.82689 3.74712 3.5289 4.49211 2.7059 5.76611C1.54891 7.56009 1.74691 10.9331 3.6219 13.8061C4.29289 14.8341 5.18889 15.99 6.36088 16C7.40387 16.01 7.69787 15.331 9.11087 15.324C10.5239 15.316 10.7919 16.009 11.8328 15.998C13.0058 15.989 13.9508 14.7081 14.6218 13.6801C15.1028 12.9431 15.2818 12.5721 15.6548 11.7401C12.9418 10.7071 12.5068 6.8491 15.1918 5.36811Z",fill:"white"}})]),o("defs",[o("clipPath",{attrs:{id:"clip0"}},[o("rect",{attrs:{width:"16",height:"16",fill:"white",transform:"translate(0.821289)"}})])])]))}}},191:function(t,e,o){o(19),o(15),o(18),o(26),o(16),o(27);var n=o(55),r=o(56),l=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}o(32),t.exports={functional:!0,render:function(t,e){var o=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,h=data.class,v=data.staticClass,style=data.style,_=data.staticStyle,m=data.attrs,y=void 0===m?{}:m,x=r(data,l);return o("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,v],style:[style,_],attrs:Object.assign({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y)},x),f.concat([o("path",{attrs:{d:"M14.3324 6.47294L3.41392 0.231829C3.14859 0.0801447 2.84672 0 2.54107 0C2.23145 0 1.92623 0.0821358 1.65841 0.237518C1.11795 0.551057 0.782227 1.13397 0.782227 1.75884V14.2411C0.782227 14.8659 1.11795 15.4489 1.65827 15.7624C1.92608 15.9179 2.23137 16.0001 2.541 16.0001C2.8465 16.0001 3.14838 15.9198 3.41385 15.7682L14.3322 9.52697C14.8788 9.2145 15.2183 8.62945 15.2183 7.99996C15.2183 7.37046 14.879 6.78541 14.3324 6.47294ZM9.60106 4.9972L8.10192 7.08537L4.51603 2.09052L9.60106 4.9972ZM2.47223 14.9272C2.37474 14.9178 2.27909 14.8893 2.19368 14.8398C1.98106 14.7164 1.84893 14.487 1.84893 14.2411V1.75877C1.84893 1.51293 1.98105 1.28352 2.19375 1.16014C2.27888 1.11072 2.37374 1.08128 2.47124 1.07125L7.44533 7.99996L2.47223 14.9272ZM4.51603 13.9095L8.10192 8.91455L9.60106 11.0027L4.51603 13.9095ZM13.803 8.60079L10.5321 10.4705L8.75844 7.99996L10.5321 5.52941L13.803 7.39912C14.0181 7.52208 14.1517 7.75227 14.1517 7.99996C14.1517 8.24764 14.0181 8.47791 13.803 8.60079Z",fill:"white"}})]))}}},197:function(t,e,o){"use strict";var n=o(119),r=o(122),l={name:"Default",components:{VHeader:n.default,VFooter:r.default}},c=(o(255),o(12)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"layout"},[o("portal-target",{attrs:{name:"layout"}}),t._v(" "),o("v-header"),t._v(" "),o("nuxt"),t._v(" "),o("v-footer")],1)}),[],!1,null,"4414f730",null);e.a=component.exports;installComponents(component,{VHeader:o(119).default,VFooter:o(122).default})},198:function(t,e,o){t.exports=o.p+"img/qr.c0be40b.png"},201:function(t,e,o){o(202),t.exports=o(203)},244:function(t,e,o){var content=o(245);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(40).default)("5c4322ab",content,!0,{sourceMap:!1})},245:function(t,e,o){var n=o(39)(!1);n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap);"]),n.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Kaisei+HarunoUmi:wght@400;500;700&display=swap);"]),n.push([t.i,"*,:after,:before{box-sizing:border-box}ul[class]{padding:0;margin:0}blockquote,body,dd,dl,figcaption,figure,h1,h2,h3,h4,h5,li,p{margin:0}body{min-height:100vh;scroll-behavior:smooth;text-rendering:optimizeSpeed;line-height:1.5}ol[class],ul[class]{list-style:none}a:not([class]){-webkit-text-decoration-skip:ink;text-decoration-skip-ink:auto}img{max-width:100%;display:block}article>*+*{margin-top:1em}button,input,select,textarea{font:inherit}@media (prefers-reduced-motion:reduce){*{-webkit-animation-duration:.01ms!important;animation-duration:.01ms!important;-webkit-animation-iteration-count:1!important;animation-iteration-count:1!important;transition-duration:.01ms!important;scroll-behavior:auto!important}}",""]),t.exports=n},247:function(t,e,o){"use strict";o(170)},248:function(t,e,o){var n=o(39)(!1);n.push([t.i,'button[data-v-3f864c98]{color:#fff;outline:none;border:none;padding:10px 16px;background:#191615;cursor:pointer;border-radius:20px;font-family:"Inter",sans-serif;font-style:normal;font-weight:500;font-size:18px;line-height:22px}',""]),t.exports=n},249:function(t,e,o){"use strict";o(171)},250:function(t,e,o){var n=o(39)(!1);n.push([t.i,'.popup[data-v-5b700286]{width:100%;height:100%;top:0;left:0;z-index:10;position:fixed;display:flex;justify-content:center;align-items:center}.popup__close[data-v-5b700286]{cursor:pointer;position:absolute;top:32px;right:32px}.popup__right[data-v-5b700286]{width:471px}.popup__title[data-v-5b700286]{font-family:"Inter",sans-serif;font-style:normal;font-weight:600;font-size:72px;line-height:87px;color:#191615;white-space:nowrap}.popup__text[data-v-5b700286]{font-family:"Kaisei HarunoUmi",serif;font-weight:400;font-size:24px;width:461px}.popup__left[data-v-5b700286],.popup__text[data-v-5b700286]{font-style:normal;line-height:40px;color:#191615}.popup__left[data-v-5b700286]{width:220px;height:318px;position:relative;margin-right:80px;padding:20px;font-family:"Inter",sans-serif;font-weight:600;font-size:20px;display:flex;flex-direction:column;align-items:center}.popup__qr[data-v-5b700286]{width:180px;height:180px;margin-bottom:10px}.popup__vector[data-v-5b700286]{position:absolute;width:220px;height:318px;left:0;top:0}.popup__body[data-v-5b700286]{padding:100px;background:#fff;width:971px;height:516px;border:1px solid #e8e8e8;border-radius:30px;display:flex;position:relative}.popup__bg[data-v-5b700286]{position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(18,18,29,.6);z-index:-1}',""]),t.exports=n},251:function(t,e,o){"use strict";o(172)},252:function(t,e,o){var n=o(39)(!1);n.push([t.i,'.header[data-v-3b21abaf]{position:absolute;display:flex;justify-content:space-between;align-items:center;width:clamp(320px,100%,1440px);padding:40px 40px 0}.header__icon[data-v-3b21abaf]{max-width:41px;max-height:42px}.header__text[data-v-3b21abaf]{margin-left:10px;font-family:"Inter",sans-serif;font-style:normal;font-weight:600;font-size:24px;line-height:40px}.header__logo[data-v-3b21abaf]{display:flex}',""]),t.exports=n},253:function(t,e,o){"use strict";o(173)},254:function(t,e,o){var n=o(39)(!1);n.push([t.i,'.footer[data-v-30d1d1f2]{width:100%;height:311px;background:#191615;border-top-right-radius:50px;border-top-left-radius:50px;display:flex;justify-content:center;color:#fff}.footer__wrapper[data-v-30d1d1f2]{width:clamp(320px,100%,1440px);height:100%;padding-top:80px;padding-left:160px;display:flex;align-items:flex-start}.footer__logo[data-v-30d1d1f2]{display:flex;align-items:center}.footer__logo-shape[data-v-30d1d1f2] path{fill:#fff}.footer__logo-text[data-v-30d1d1f2]{margin-left:8px;font-family:"Inter",sans-serif;font-weight:600}.footer__logo-text[data-v-30d1d1f2],.footer__title[data-v-30d1d1f2]{font-style:normal;font-size:24px;line-height:40px}.footer__title[data-v-30d1d1f2]{font-family:"Kaisei HarunoUmi",serif;font-weight:700;margin-bottom:20px}.footer__link[data-v-30d1d1f2]{text-decoration:none;color:#fff;font-family:"Inter",sans-serif;font-style:normal;font-weight:400;font-size:20px;line-height:40px;display:flex;align-items:center;margin-bottom:10px}.footer__group[data-v-30d1d1f2]{display:flex;flex-direction:column;margin-left:120px}.footer__icon[data-v-30d1d1f2]{margin-right:8px}',""]),t.exports=n},255:function(t,e,o){"use strict";o(174)},256:function(t,e,o){var n=o(39)(!1);n.push([t.i,".layout[data-v-4414f730]{display:flex;flex-direction:column;align-items:center}",""]),t.exports=n},90:function(t,e,o){o(19),o(15),o(18),o(26),o(16),o(27);var n=o(55),r=o(56),l=["class","staticClass","style","staticStyle","attrs"];function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}o(32),t.exports={functional:!0,render:function(t,e){var o=e._c,data=(e._v,e.data),d=e.children,f=void 0===d?[]:d,h=data.class,v=data.staticClass,style=data.style,_=data.staticStyle,m=data.attrs,y=void 0===m?{}:m,x=r(data,l);return o("svg",function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){n(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({class:[h,v],style:[style,_],attrs:Object.assign({width:"41",height:"42",viewBox:"0 0 41 42",fill:"none",xmlns:"http://www.w3.org/2000/svg"},y)},x),f.concat([o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M16.9894 0.106699C13.8674 0.447348 10.356 1.75628 7.40437 3.67938C5.92587 4.64266 2.81988 7.75678 1.77153 9.32672C1.31973 10.0034 0.950059 10.6083 0.950059 10.671C0.949866 10.7339 2.75437 10.7549 4.95985 10.7178C7.36205 10.6774 9.70589 10.7428 10.8056 10.8811C13.0965 11.169 17.7871 12.3177 21.3298 13.4584C22.8135 13.936 24.0472 14.3074 24.0712 14.2835C24.0951 14.2597 24.6072 13.2493 25.2094 12.0383C26.4921 9.45829 27.0544 8.60618 28.2771 7.38997C29.2756 6.39668 31.1821 5.33684 32.3209 5.1418C32.7288 5.07198 33.0682 4.92829 33.0751 4.8225C33.1087 4.30893 28.9074 1.91554 26.5549 1.10787C23.9274 0.205759 19.9222 -0.213369 16.9894 0.106699ZM33.3194 8.33036C32.4716 8.54367 31.295 9.58082 30.5264 10.792C29.7438 12.0256 28.4031 15.5742 28.6332 15.8033C28.6966 15.8664 29.5158 16.0895 30.4536 16.299C34.0199 17.0961 36.9257 16.5457 37.987 14.8721C38.6386 13.8448 38.6882 11.929 38.0934 10.7684C37.139 8.90606 35.1227 7.87642 33.3194 8.33036ZM39.3853 18.2596C38.1626 19.4071 37.0464 19.9921 35.2939 20.4033C33.863 20.7391 30.7467 20.7759 29.024 20.4773C28.3453 20.3596 27.7422 20.3108 27.684 20.3689C27.6257 20.427 27.4174 21.2806 27.221 22.2658C25.751 29.6451 23.2829 36.0533 20.3398 40.133C19.6471 41.0932 19.1253 41.9238 19.1804 41.9786C19.2353 42.0334 20.0909 41.9792 21.0819 41.858C27.1244 41.1198 30.8567 39.4069 34.6937 35.6111C37.2068 33.1252 38.9629 30.5132 40.1105 26.5579C41.1266 23.0557 41.2334 17.2359 40.6278 17.2359C40.4457 17.2359 39.981 17.7004 39.3853 18.2596ZM9.74279 18.5035C6.56047 19.1273 5.26613 19.5545 3.86339 20.4439C1.97985 21.6382 0.917787 23.0771 0.282985 25.2945C-0.0957709 26.6181 -0.0946114 27.5469 0.288202 29.0168C0.946194 31.5447 2.51803 33.5453 4.66515 34.5874C10.0499 37.2011 15.5097 34.0217 19.608 25.8856C20.461 24.1922 21.8668 20.7874 22.0817 19.8941C22.2288 19.2831 22.2899 19.3033 18.6909 18.7679C16.3302 18.4169 10.99 18.259 9.74279 18.5035Z",fill:"#191615"}})]))}}}},[[201,20,3,21]]]);