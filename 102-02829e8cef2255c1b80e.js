(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{MsKa:function(e,t,n){"use strict";n.r(t);var i=n("q1tI"),a=n.n(i),c=n("vOnD"),M=n("ctXc");var o=n("aC/h"),u=c.c.div.withConfig({displayName:"livechat__StyledLiveChat",componentId:"sc-18xicvj-0"})(["position:fixed;bottom:1.6rem;right:1.6rem;background-color:var(--color-white);box-shadow:0 16px 20px 0 rgba(0,0,0,0.05),0 0 20px 0 rgba(0,0,0,0.05);padding:1.6rem;display:flex;cursor:pointer;border-radius:50%;z-index:9999;@media ","{padding:1rem;}"],o.a.tabletS);t.default=function(){var e=a.a.useState(!1),t=e[0],n=e[1],i=Object(M.a)(),c=i[0],o=i[1];return a.a.createElement(a.a.Fragment,null,c&&a.a.createElement(u,{className:"gtm-deriv-livechat",onClick:function(){o.open_chat_window()},onMouseEnter:function(){return n(!0)},onMouseLeave:function(){return n(!1)}},t?a.a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PGcgZmlsbD0ibm9uZSI+PHBhdGggZmlsbD0iIzg1QUNCMCIgZD0iTTIxIDJIM2EzIDMgMCAwMC0zIDN2MTZsLjAwNi4xMTRjLjA4Ny44MTQgMS4wOTkgMS4xOTYgMS43MDEuNTkzTDUuNDE0IDE4SDIxYTMgMyAwIDAwMy0zVjVhMyAzIDAgMDAtMy0zeiIvPjxwYXRoIGZpbGw9IiM4NUFDQjAiIGQ9Ik0yNiAxMHY2YzAgMi4yMS0xLjc5IDQtNCA0SDh2M2EzIDMgMCAwMDIuODI0IDIuOTk1TDExIDI2aDE1LjU4NmwzLjcwNyAzLjcwN2MuNjAyLjYwMyAxLjYxNC4yMiAxLjcwMS0uNTkzTDMyIDI5VjEzYTMgMyAwIDAwLTIuODI0LTIuOTk1TDI5IDEwaC0zeiIvPjxwYXRoIGZpbGw9IiNGRkYiIGQ9Ik0xMSAxMGExIDEgMCAwMS4xMTcgMS45OTNMMTEgMTJIN2ExIDEgMCAwMS0uMTE3LTEuOTkzTDcgMTBoNHptNi00YTEgMSAwIDAxLjExNyAxLjk5M0wxNyA4SDdhMSAxIDAgMDEtLjExNy0xLjk5M0w3IDZoMTB6Ii8+PC9nPjwvc3ZnPg==",alt:"livechat hover"}):a.a.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iIzg1QUNCMCIgZD0iTTI5IDEwbC4xNzYuMDA1QTMgMyAwIDAxMzIgMTN2MTZsLS4wMDYuMTE0Yy0uMDg3LjgxNC0xLjA5OSAxLjE5Ni0xLjcwMS41OTNMMjYuNTg2IDI2SDExbC0uMTc2LS4wMDVBMyAzIDAgMDE4IDIzdi0zaDJ2M2wuMDA3LjExN0ExIDEgMCAwMDExIDI0aDE2bC4xMzEuMDA5Yy4yMTcuMDI4LjQyLjEyOC41NzYuMjg0TDMwIDI2LjU4NFYxM2wtLjAwNy0uMTE3QTEgMSAwIDAwMjkgMTJoLTN2LTJoM3ptLTgtOGEzIDMgMCAwMTMgM3YxMGEzIDMgMCAwMS0zIDNINS40MTRsLTMuNzA3IDMuNzA3Yy0uNjAyLjYwMy0xLjYxNC4yMi0xLjcwMS0uNTkzTDAgMjFWNWEzIDMgMCAwMTMtM3ptMCAySDNhMSAxIDAgMDAtMSAxdjEzLjU4NGwyLjI5My0yLjI5MWEuOTk2Ljk5NiAwIDAxLjU3Ni0uMjg0TDUgMTZoMTZhMSAxIDAgMDAxLTFWNWExIDEgMCAwMC0xLTF6bS0xMCA2YTEgMSAwIDAxLjExNyAxLjk5M0wxMSAxMkg3YTEgMSAwIDAxLS4xMTctMS45OTNMNyAxMGg0em02LTRhMSAxIDAgMDEuMTE3IDEuOTkzTDE3IDhIN2ExIDEgMCAwMS0uMTE3LTEuOTkzTDcgNmgxMHoiLz48L3N2Zz4=",alt:"livechat ic"})))}},ctXc:function(e,t,n){"use strict";n.d(t,"a",(function(){return M}));var i=n("q1tI"),a=n.n(i),c=n("txul"),M=function(){var e=a.a.useState(!1),t=e[0],n=e[1],i=Object(c.o)()&&window.LC_API||{},M=a.a.useState(!1),o=M[0],u=M[1],l=new URLSearchParams(Object(c.o)()&&window.location.search||"").get("is_livechat_open");return a.a.useEffect((function(){var e=null,t=null;if(Object(c.o)()){var i=Object(c.g)();e=setInterval((function(){var e=Object(c.b)(i);u(!!e)}),1e3),t=setTimeout((function(){var e,t;e=function(){window.LiveChatWidget.on("ready",(function(){n(!0),"true"===(null==l?void 0:l.toLowerCase())&&window.LC_API.open_chat_window()}))},(t=document.createElement("script")).innerHTML='\n            window.__lc = window.__lc || {};\n            window.__lc.license = 12049137;\n            ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can’t use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))\n        ',document.body.appendChild(t),e&&e()}),2e3)}return function(){clearInterval(e),clearTimeout(t)}}),[]),a.a.useEffect((function(){if(Object(c.o)()){var e=Object(c.g)();t&&window.LiveChatWidget.on("ready",(function(){var t=Object(c.m)(e),n=Object(c.b)(e),i=t||{},a=i.utm_source,M=i.utm_medium,u=i.utm_campaign,l=n||{},r=l.loginid,w=l.email,g=l.landing_company_shortcode,I=l.currency,d=l.residence,s=l.first_name,D=l.last_name,m={is_logged_in:o,loginid:null!=r?r:"",landing_company_shortcode:null!=g?g:"",currency:null!=I?I:"",residence:null!=d?d:"",email:null!=w?w:"",utm_source:null!=a?a:"",utm_medium:null!=M?M:"",utm_campaign:null!=u?u:""};window.LiveChatWidget.call("set_session_variables",m),o?(w&&window.LiveChatWidget.call("set_customer_email",w),s&&D&&window.LiveChatWidget.call("set_customer_name",s+" "+D)):(window.LiveChatWidget.call("set_customer_email"," "),window.LiveChatWidget.call("set_customer_name"," "),window.LC_API.on_chat_ended=function(){window.LiveChatWidget.call("set_customer_email"," "),window.LiveChatWidget.call("set_customer_name"," ")});var A=new URLSearchParams(window.location.search).get("is_livechat_open");"true"===(null==A?void 0:A.toLowerCase())&&window.LC_API.open_chat_window()}))}}),[o,t]),[t,i]}}}]);
//# sourceMappingURL=102-02829e8cef2255c1b80e.js.map