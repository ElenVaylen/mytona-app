(this["webpackJsonpmytona-app"]=this["webpackJsonpmytona-app"]||[]).push([[0],{36:function(e,t,a){e.exports=a(54)},43:function(e,t,a){},47:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n,r=a(0),c=a.n(r),l=a(22),i=a.n(l),s=a(14),o=a(35),u=a(7),m=a(8),d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{type:e,payload:t}},f=function(e){try{var t=localStorage.getItem(e);if(null===t)return;return JSON.parse(t)}catch(a){return}},E=function(e,t){try{localStorage.setItem(e,JSON.stringify(t))}catch(a){}},v=function(e){return d("GET_NEWS_SUCCESS",e)},p=function(e){return d("GET_NEWS_ERROR",e)},g={news:(f("news")?f("news"):[])||{},loading:!1,error:null},b=(n={},Object(u.a)(n,"GET_NEWS",(function(e){return Object(m.a)(Object(m.a)({},e),{},{loading:!0,error:null})})),Object(u.a)(n,"GET_NEWS_SUCCESS",(function(e,t){return Object(m.a)(Object(m.a)({},e),{},{loading:!1,news:t})})),Object(u.a)(n,"GET_NEWS_ERROR",(function(e,t){return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:t})})),Object(u.a)(n,"DEFAULT",(function(e){return e})),n);var h,O=function(e){var t=e.error;return d("USER_LOGIN_ERROR",{error:t})},N=f("currentUser"),_={loggedIn:!!N,loginError:null,user:N?{email:N.email,name:N.name}:null},w=(h={},Object(u.a)(h,"USER_LOGIN",(function(e,t){return Object(m.a)(Object(m.a)({},e),{},{loggedIn:!0,loginError:null,user:t})})),Object(u.a)(h,"USER_LOGIN_ERROR",(function(e,t){var a=t.error;return Object(m.a)(Object(m.a)({},e),{},{loggedIn:!1,loginError:a,user:null})})),Object(u.a)(h,"USER_REGISTER_SUCCESS",(function(e,t){var a=t.success;return Object(m.a)(Object(m.a)({},e),{},{success:a})})),Object(u.a)(h,"USER_LOGIN_SUCCESS",(function(e,t){var a=t.success;return Object(m.a)(Object(m.a)({},e),{},{success:a})})),Object(u.a)(h,"USER_LOGOUT",(function(){return{loggedIn:!1,loginError:null,user:null}})),Object(u.a)(h,"DEFAULT",(function(e){return e})),h);var S=a(16),j=a.n(S),y=a(19),k=j.a.mark(I),C=j.a.mark(R),x=j.a.mark(U);function I(e){var t,a,n,r,c,l;return j.a.wrap((function(i){for(;;)switch(i.prev=i.next){case 0:return i.prev=0,t=e.payload,a=t.currentPage,n=t.itemsPage,r="http://newsapi.org/v2/everything?q=dark+souls+games+fantasy&language=en&page=".concat(a,"&pageSize=").concat(n,"&apiKey=3439bdf38f944b5ca672b849c3415d76"),i.next=5,fetch(r);case 5:return c=i.sent,i.next=8,c.json();case 8:return l=i.sent,i.next=11,Object(y.c)(v(l));case 11:i.next=17;break;case 13:return i.prev=13,i.t0=i.catch(0),i.next=17,Object(y.c)(p(i.t0));case 17:case"end":return i.stop()}}),k,null,[[0,13]])}function R(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.d)("GET_NEWS",I);case 2:case"end":return e.stop()}}),C)}function U(){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(y.a)([Object(y.b)(R)]);case 2:case"end":return e.stop()}}),x)}var T=Object(o.a)(),P=Object(s.e)(Object(s.c)({news:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=b[t.type]||b.DEFAULT;return a(e,t.payload)},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:_,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=w[t.type]||w.DEFAULT;return a(e,t.payload)}}),Object(s.a)(T));T.run(U);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var G=a(15),L=a(5),F=(a(43),function(e){var t=e.children;return c.a.createElement("div",{className:"content-bg container"},c.a.createElement("div",{className:"content-bg__wrap"},t))}),D=function(e){var t=e.title,a=void 0===t?"":t;return c.a.createElement("h1",{className:"page-title"},a)},q=function(){return c.a.createElement("div",{className:"main-page"},c.a.createElement(F,null,c.a.createElement(D,{title:"Dark Souls 3"}),c.a.createElement("div",{className:"text-container"},c.a.createElement("h3",{className:"page-sub-title"},"Overview"),c.a.createElement("p",{className:"text-container__paragraph"},'Dark Souls III is an action role-playing video game developed by and published by for PlayStation 4, Xbox One, and Microsoft Windows. The third entry in the "Dark Souls" series, Dark Souls III was released in Japan in March 24th 2016, and worldwide in April 12th 2016. See New Player Help for an overview of game basics, and Common Souls Terms for an evolving glossary of the community lexicon.')),c.a.createElement("div",{className:"text-container"},c.a.createElement("h3",{className:"page-sub-title"},"Gameplay"),c.a.createElement("p",{className:"text-container__paragraph"},"In Dark Souls III the player controls a character from a third-person perspective through the dark fantasy world of Lothric. The gameplay is similar to other entries in the series, players are equipped with a variety of weapons, items, and magic to battle against enemies. Similarities to other titles in the series, such as Bonfires, which serve as progress-saving \"checkpoints\", and Estus Flasks, which serve as health and magic/skill replenishing itmes return. New gameplay elements include the return of the magic meter from Demon's Souls, and a new combat system, giving player's additional weapon-specific skills that provide power-ups or deliver powerful special attacks. Combat is faster and more fluid in Dark Souls III than previous installments, and players' movements, such as backstepping and swinging heavy weapons, are performed more rapidly."))))},W=a(10),A=a(18),J=a.n(A),M=function(e){var t=e.type,a=void 0===t?"text":t,n=e.htmlFor,r=void 0===n?"":n,l=e.title,i=void 0===l?"":l,s=e.value,o=void 0===s?"":s,u=e.required,m=void 0!==u&&u,d=e.error,f=void 0!==d&&d,E=e.onChange,v=void 0===E?function(){}:E,p=J()({"form-control":!0,"is-invalid":f});return c.a.createElement(c.a.Fragment,null,c.a.createElement("label",{htmlFor:r},i),c.a.createElement("input",{type:a,className:p,id:r,value:o,onChange:v,required:m,name:r}))},Y=function(e){var t=e.title,a=void 0===t?"":t,n=e.type,r=void 0===n?"button":n,l=e.disabled,i=void 0!==l&&l,s=e.typeClass,o=void 0===s?"primary":s,m=e.onClick,d=void 0===m?function(){}:m,f=e.onSubmit,E=void 0===f?function(){}:f,v=J()(Object(u.a)({btn:!0},"btn-".concat(o),o));return c.a.createElement("button",{className:v,type:r,disabled:i,onClick:d,onSubmit:E},a)},B=a(9),H=(a(47),function(e){var t=e.msg,a=void 0===t?"Some error happened":t;return c.a.createElement("div",{className:"error d-flex justify-content-center mt-3 mb-3"},c.a.createElement("div",{className:"error__message"},a))}),z=function(){var e=Object(r.useState)(""),t=Object(W.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(""),i=Object(W.a)(l,2),s=i[0],o=i[1],u=Object(r.useState)(""),m=Object(W.a)(u,2),v=m[0],p=m[1],g=Object(B.b)(),b=Object(L.g)();return c.a.createElement("div",{className:"login"},c.a.createElement(F,null,c.a.createElement(D,{title:"Sign in"}),c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var t=f("users").find((function(e){return e.email===a}));return t?t.password===s&&t.email===a?(g(function(e){var t=e.email,a=e.name;return d("USER_LOGIN",{email:t,name:a})}({email:a,name:t.name})),g(function(e){var t=e.success;return d("USER_LOGIN_SUCCESS",{success:t})}({success:"You are logged in"})),E("currentUser",{email:a,name:t.name}),b.push("/")):(p("Incorrect login data"),g(O({error:"Incorrect login data"}))):(p("You need to register first"),g(O({error:"You need to register first"}))),!1}},c.a.createElement("div",{className:"form-row"},c.a.createElement("div",{className:"form-group col-md-6"},c.a.createElement(M,{type:"email",htmlFor:"email",title:"Email",required:!0,onChange:function(e){return n(e.target.value)},value:a})),c.a.createElement("div",{className:"form-group col-md-6"},c.a.createElement(M,{type:"password",htmlFor:"password",title:"Password",required:!0,onChange:function(e){return o(e.target.value)},value:s}))),v&&c.a.createElement(H,{msg:v}),c.a.createElement("div",{className:"d-flex justify-content-end mt-2"},c.a.createElement(Y,{title:"Login",type:"submit"})))))},K=a(34),X=function(){var e=Object(r.useState)(""),t=Object(W.a)(e,2),a=t[0],n=t[1],l=Object(r.useState)(""),i=Object(W.a)(l,2),s=i[0],o=i[1],u=Object(r.useState)(""),m=Object(W.a)(u,2),v=m[0],p=m[1],g=Object(r.useState)(""),b=Object(W.a)(g,2),h=b[0],O=b[1],N=Object(r.useState)(!1),_=Object(W.a)(N,2),w=_[0],S=_[1],j=Object(r.useState)(""),y=Object(W.a)(j,2),k=y[0],C=y[1],x=Object(r.useState)([]),I=Object(W.a)(x,2),R=I[0],U=I[1],T=Object(L.g)(),P=Object(B.b)(),G=function(e){return R.find((function(t){return t===e}))};return c.a.createElement("div",{className:"register"},c.a.createElement(F,null,c.a.createElement(D,{title:"Sign up"}),c.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),S(!0),C(""),U([]),v!==h)return C("Different passwords"),U(["password","passwordCopy"]),S(!1),!1;var t=f("users");if(t.find((function(e){return e.email===a})))return C("Such user already exists"),S(!1),!1;var n={email:a,name:s,password:v};return E("users",t?[].concat(Object(K.a)(t),[n]):[n]),S(!1),P(function(e){var t=e.success;return d("USER_REGISTER_SUCCESS",{success:t})}({success:"You have successfully registered"})),T.push("/login"),!1}},c.a.createElement("div",{className:"form-row"},c.a.createElement("div",{className:"form-group col-md-6"},c.a.createElement(M,{type:"email",htmlFor:"email",title:"Email",required:!0,onChange:function(e){return n(e.target.value)},value:a})),c.a.createElement("div",{className:"form-group col-md-6"},c.a.createElement(M,{type:"text",htmlFor:"name",title:"Name",required:!0,onChange:function(e){return o(e.target.value)},value:s})),c.a.createElement("div",{className:"form-group col-md-6"},c.a.createElement(M,{error:G("password"),type:"password",htmlFor:"password",title:"Password",required:!0,onChange:function(e){return p(e.target.value)},value:v})),c.a.createElement("div",{className:"form-group col-md-6"},c.a.createElement(M,{error:G("passwordCopy"),type:"password",htmlFor:"passwordCopy",title:"Repeat password",required:!0,onChange:function(e){return O(e.target.value)},value:h}))),k&&c.a.createElement(H,{msg:k}),c.a.createElement("div",{className:"d-flex justify-content-end mt-2"},c.a.createElement(Y,{title:"Create account",type:"submit",disabled:w})))))},$=function(){return c.a.createElement("div",{className:"d-flex justify-content-center mt-3 mb-3"},c.a.createElement("div",{className:"spinner-border",role:"status"}))},Q=a(33),V=a.n(Q),Z=(a(49),function(e){var t=e.newsArr,a=void 0===t?[]:t;return c.a.createElement("div",{className:"news-list"},a.map((function(e,t){return c.a.createElement("div",{className:"news-list__item",key:t},c.a.createElement("div",{className:"news-list__item-wrap row"},c.a.createElement("div",{className:"news-list__item-left col-auto"},c.a.createElement("div",{className:"news-list__item-img"},c.a.createElement("img",{src:e.urlToImage,alt:""}))),c.a.createElement("div",{className:"news-list__item-right col"},c.a.createElement("p",{className:"news-list__item-date"},V()(e.publishedAt,"dddd, mmmm dS, yyyy")),c.a.createElement("h4",{className:"news-list__item-title"},e.title),c.a.createElement("p",{className:"news-list__item-desc"},e.description),c.a.createElement("p",{className:"news-list__item-source"},"Source: ",c.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"},e.source.name)))))})))}),ee=(a(50),function(e){var t=e.total,a=void 0===t?0:t,n=e.itemsPerPage,l=void 0===n?0:n,i=e.currentPage,s=void 0===i?1:i,o=e.setPage,u=void 0===o?function(){}:o,m=Object(r.useRef)(null),d=Math.ceil(a/l);if(0!==a)return c.a.createElement("div",{className:"pagination d-flex align-items-center justify-content-end",ref:m},c.a.createElement("div",{className:"pagination__item"},c.a.createElement("button",{className:"pagination__link","aria-label":"Previous",onClick:function(){return u(1)},disabled:1===s},c.a.createElement("span",{"aria-hidden":"true"},"\xab"))),c.a.createElement("div",{className:"pagination__item"},c.a.createElement("button",{className:"pagination__link","aria-label":"Previous",onClick:function(){return u(s-1)},disabled:1===s},c.a.createElement("span",{"aria-hidden":"true"},"Previous"))),function(e,t){var a=[],n=t,r=6;e>6&&(t<=2?n=1:t>=e-2?(n=e-4,r=e):r=(n=t-2)+5);for(var l=function(e){a.push(c.a.createElement("div",{key:e,className:"pagination__item"},c.a.createElement("button",{className:"pagination__link".concat(t===e?" active":""),onClick:function(){return u(e)}},e)))},i=n;i<=r;i++)l(i);return a}(d,s),c.a.createElement("div",{className:"pagination__item"},c.a.createElement("button",{className:"pagination__link",href:"#","aria-label":"Next",onClick:function(){return u(s+1)},disabled:s===d},c.a.createElement("span",{"aria-hidden":"true"},"Next"))),c.a.createElement("div",{className:"pagination__item"},c.a.createElement("button",{className:"pagination__link",href:"#","aria-label":"Next",onClick:function(){return u(d)},disabled:s===d},c.a.createElement("span",{"aria-hidden":"true"},"\xbb"))))}),te=function(){var e=Object(r.useState)(1),t=Object(W.a)(e,2),a=t[0],n=t[1],l=Object(B.b)(),i=Object(B.c)((function(e){return e.news})),s=i.news,o=s.articles,u=s.totalResults,m=i.loading,f=i.error;Object(r.useEffect)((function(){l(d("GET_NEWS",{currentPage:a,itemsPage:5}))}),[a]);return c.a.createElement("div",{className:"news"},c.a.createElement(F,null,c.a.createElement(D,{title:"News"}),m&&c.a.createElement($,null),f&&c.a.createElement(H,null),!m&&o&&c.a.createElement(c.a.Fragment,null,c.a.createElement(Z,{newsArr:o}),c.a.createElement(ee,{total:u,itemsPerPage:5,setPage:function(e){n(e)},currentPage:a}))))},ae=function(e){var t=e.title,a=void 0===t?"":t,n=e.to,r=void 0===n?"":n,l=e.extraClass,i=void 0===l?"":l,s=e.exact,o=void 0!==s&&s;return c.a.createElement(G.b,{to:r,className:"header__link ".concat(i),activeClassName:"active",exact:o},a)},ne=(a(51),function(){var e=Object(B.c)((function(e){return e.user.loggedIn})),t=Object(B.b)(),a=function(){t(d("USER_LOGOUT")),f("currentUser")&&localStorage.removeItem("currentUser")};return c.a.createElement("header",{className:"header"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"header__wrap d-flex justify-content-between align-items-center"},c.a.createElement(ae,{to:"/",title:"Home",extraClass:"header__link-left",exact:!0}),c.a.createElement("nav",{className:"menu d-flex"},!e&&c.a.createElement(c.a.Fragment,null,c.a.createElement(ae,{to:"/login",title:"Sign in"}),c.a.createElement(ae,{to:"/register",title:"Sign up"})),e&&c.a.createElement("button",{className:"header__link",onClick:function(){return a()}},"Logout"),c.a.createElement(ae,{to:"/news",title:"News"})))))}),re=(a(52),function(e){var t,a=e.text,n=void 0===a?null:a,l=e.color,i=void 0===l?"success":l,s=Object(r.useRef)(null),o=function(){s.current&&s.current.classList.add("alert-hide")};Object(r.useEffect)((function(){t&&clearTimeout(t),null!==n&&(s.current.classList.remove("alert-hide"),t=setTimeout((function(){return o()}),2700))}),[n]);var u=J()("alert",{"alert-hide":null===n,"alert-success":"success"===i,"alert-error":"error"===i});return c.a.createElement("div",{className:u,onClick:function(){return o()},ref:s},c.a.createElement("div",{className:"alert__wrap"},n))}),ce=function(){var e=!1?c.a.createElement(L.d,null):c.a.createElement(L.d,null,c.a.createElement(L.b,{path:"/",exact:!0},c.a.createElement(q,null)),c.a.createElement(L.b,{path:"/login"},c.a.createElement(z,null)),c.a.createElement(L.b,{path:"/register"},c.a.createElement(X,null)),c.a.createElement(L.b,{path:"/news"},c.a.createElement(te,null)),c.a.createElement(L.a,{to:"/"})),t=Object(B.c)((function(e){return e.user.success}));return c.a.createElement(G.a,null,c.a.createElement("div",{className:"app"},c.a.createElement(ne,null),c.a.createElement("div",{className:"content"},t&&c.a.createElement(re,{text:t}),e)))};a(53);i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(B.a,{store:P},c.a.createElement(ce,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.a4c2729f.chunk.js.map