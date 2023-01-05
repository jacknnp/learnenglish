"use strict";(self.webpackChunkDynonary=self.webpackChunkDynonary||[]).push([[805],{1104:function(e,r,n){n.d(r,{Hp:function(){return i},ad:function(){return c},ls:function(){return a},tM:function(){return o}});var t=n(4942),o=function(e){var r;return{root:(r={height:"100%",display:"grid",gridTemplateColumns:"1fr",gridTemplateRows:"2fr 1fr 17fr",gridRowGap:"0.8rem"},(0,t.Z)(r,e.breakpoints.up("sm"),{height:"85%",gridRowGap:"1.2rem"}),(0,t.Z)(r,"& .disabled",{pointerEvents:"none"}),r),summary:{margin:"1.4rem 0","& > *":{fontSize:"1.6rem",fontWeight:400,color:"var(--label-color)"},"& b":{padding:"0 0.4rem",fontSize:"2rem"}},summaryIcon:{fontSize:"2.4rem",margin:"0 0.4rem"}}},a=function(){return{root:{marginTop:"3.2rem","& ::-webkit-scrollbar":{width:"2px"},"& ::-webkit-scrollbar-track":{background:"none"},"& ::-webkit-scrollbar-thumb":{borderRadius:"25px"}},contentWrap:{marginTop:"2.4rem"},listWrap:{padding:"1.2rem 0.4rem",backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--border-radius)",border:"solid 1px var(--border-color)"},list:{padding:"0 2.4rem",height:"calc(100vh - 24rem)",overflow:"auto"},listItem:{margin:"0.6rem 0"},skeleton:{height:"100%","& > *":{margin:"1.2rem 0",height:"calc(10% - 1.2rem)"}}}},i=function(){return{dialogPaper:{backgroundColor:"var(--bg-color-sec)"},title:{"& > *":{color:"var(--title-color)"}},content:{"& *":{color:"var(--text-color)"}},breakLine:{borderColor:"var(--border-color)"}}},c=function(){return{root:{padding:"2.4rem 3.6rem",boxShadow:"var(--box-shadow)",borderRadius:"var(--border-radius)",width:"35rem",backgroundColor:"var(--bg-color-sec)","& > *":{marginTop:"1.2rem",marginBottom:"1.2rem"}},title:{fontSize:"2.4rem",color:"var(--text-color)"},labelIcon:{fontSize:"3.6rem",color:"var(--text-color)"},forgotPw:{color:"var(--title-color)",opacity:.65,fontWeight:500,fontSize:"1.4rem",textAlign:"right","&:hover":{opacity:1}},icon:{fontSize:"1.8rem",color:"var(--grey)",cursor:"pointer"},visiblePw:{color:"var(--primary-color)"}}}},64580:function(e,r,n){n.d(r,{GR:function(){return a},NP:function(){return i},OS:function(){return c}});var t=n.p+"static/media/correct.369c0cd94ee0cf00b8a9.mp3",o=n(88032),a=function(e){new Audio(e).play()},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,o=new SpeechSynthesisUtterance;window.speechSynthesis.cancel(),o.lang="en",o.text=e,o.volume=t,o.voice=r,o.rate=n,window.speechSynthesis.speak(o)},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",r=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0,a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1e3,l=a>=0&&a<=1?a:1,u=c>=0&&c<=10?c:1,d=new Audio;d.volume=l,d.playbackRate=u,d.src=r?t:o,d.play(),setTimeout((function(){i(e,n,u,l)}),s)}},54286:function(e,r,n){var t=n(29439),o=n(72791),a=n(16030),i=[];r.Z=function(){var e=(0,o.useState)(i),r=(0,t.Z)(e,2),n=r[0],c=r[1],s=(0,a.v9)((function(e){return e.voice})),l=s.speed,u=s.voiceURI,d=s.volume,h=n.find((function(e){return e.voiceURI===u}));return(0,o.useEffect)((function(){if(!(i.length>0)){var e=setInterval((function(){var r=window.speechSynthesis.getVoices();r.length>0&&(i=r.filter((function(e){return-1!==e.lang.indexOf("en")})),c(r.filter((function(e){return-1!==e.lang.indexOf("en")}))),clearInterval(e))}),50);return function(){e&&clearInterval(e)}}}),[]),{speed:l,volume:d,voice:h}}},85980:function(e,r,n){n.r(r),n.d(r,{default:function(){return j}});var t=n(93433),o=n(74165),a=n(15861),i=n(29439),c=n(41350),s=n(22537),l=n(72791),u=n(16030),d=n(1413),h=n(74368),f=n(79965),v=n(5420),m=n(30313),g=n(63086),p=n(93963),b=n(45952),x=n(80184);function w(e){var r=e.list,n=e.loading,t=e.onLoadData,o=e.more,a=e.isFirstLoad,i=e.onSortTypeChange,c=e.onSearchWord,s=(0,b.Z)();return(0,x.jsxs)("div",{className:"".concat(s.root," dyno-container"),children:[(0,x.jsxs)("div",{className:"flex-center-between",children:[(0,x.jsx)("h1",{className:"dyno-title",children:"T\u1eeb \u0111i\u1ec3n c\u1ee7a b\u1ea1n"}),(0,x.jsx)("div",{children:(0,x.jsx)(m.Z,{onSelect:i,classNameIcon:"dyno-setting-icon mr-5"})})]}),(0,x.jsx)("div",{className:"dyno-break"}),(0,x.jsxs)("div",{className:s.contentWrap,children:[(0,x.jsx)(f.Z,{disabled:n,onSearch:c}),(0,x.jsx)("div",{className:"".concat(s.listWrap," w-100"),children:(0,x.jsx)("ul",{id:"dictionaryId",className:"".concat(s.list," flex-col w-100"),children:(0,x.jsx)(x.Fragment,{children:a?(0,x.jsx)(p.Z,{className:s.skeleton}):(0,x.jsx)(x.Fragment,{children:r&&r.length>0?(0,x.jsxs)(x.Fragment,{children:[r.map((function(e,r){return(0,x.jsx)("li",{className:s.listItem,children:(0,x.jsx)(g.Z,(0,d.Z)({},e))},r)})),!n&&o&&(0,x.jsx)(v.Z,{onTouchAnchor:t,threshold:1,children:(0,x.jsx)("div",{className:"w-100 t-center",children:(0,x.jsx)(h.Z,{className:"ani-spin"})})})]}):(0,x.jsx)("h3",{className:"notfound-title h-100 flex-center t-center",children:"B\u1ea1n ch\u01b0a \u0111\xe1nh d\u1ea5u t\u1eeb y\xeau th\xedch n\xe0o c\u1ea3. H\xe3y th\xeam t\u1eeb y\xeau th\xedch b\u1eb1ng c\xe1ch b\u1ea5m v\xe0o h\xecnh tr\xe1i tim ngay b\xean t\u1eeb v\u1ef1ng \u0111\xf3 nh\xe9 \ud83d\ude09"})})})})})]})]})}w.defaultProps={list:[],loading:!1,more:!0,isFirstLoad:!0,isTOEIC:!1,onLoadData:function(){},onSearchWord:function(){},onSettingWordPack:function(){},onSortTypeChange:function(){}};var y=w;var S=function(){var e=(0,l.useState)(1),r=(0,i.Z)(e,2),n=r[0],d=r[1],h=(0,l.useState)("rand"),f=(0,i.Z)(h,2),v=f[0],m=f[1],g=(0,l.useState)(!0),p=(0,i.Z)(g,2),b=p[0],w=p[1],S=(0,l.useState)([]),Z=(0,i.Z)(S,2),k=Z[0],j=Z[1],N=(0,l.useState)(!0),I=(0,i.Z)(N,2),T=I[0],C=I[1],L=(0,l.useState)(!0),R=(0,i.Z)(L,2),W=R[0],F=R[1],z=(0,u.v9)((function(e){return e.userInfo})).favoriteList.length,D=(0,l.useRef)([]),P=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(r){var n,t;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""!==r){e.next=5;break}return j(D.current),C(!0),e.abrupt("return");case 5:return e.next=7,c.Z.getSearchWord(r);case 7:200===(n=e.sent).status&&(t=n.data.packList,j(void 0===t?[]:t),C(!1)),e.next=13;break;case 11:e.prev=11,e.t0=e.catch(0);case 13:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(r){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){var e=!0;return(0,a.Z)((0,o.Z)().mark((function r(){var a,i,s,l;return(0,o.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,w(!0),r.next=4,c.Z.getUserFavoriteList(n,20,v);case 4:200===(a=r.sent).status&&e&&(i=a.data.packList,s=void 0===i?[]:i,l=[].concat((0,t.Z)(k),(0,t.Z)(s)),D.current=l,j(l)),r.next=10;break;case 8:r.prev=8,r.t0=r.catch(0);case 10:return r.prev=10,e&&(w(!1),W&&F(!1)),r.finish(10);case 13:case"end":return r.stop()}}),r,null,[[0,8,10,13]])})))(),function(){return e=!1}}),[n,v]),(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(y,{list:k,loading:b,onLoadData:function(){n<z?d(n+1):C(!1)},more:T,isFirstLoad:W,onSortTypeChange:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"rand";e!==v&&(D.current=[],m(e),d(1),j([]))},onSearchWord:P}),(0,x.jsx)(s.Z,{})]})},Z=n(1382),k=n(56647);var j=function(){return(0,k.Z)("Danh s\xe1ch t\u1eeb v\u1ef1ng y\xeau th\xedch"),(0,Z.Z)(),(0,x.jsx)(S,{})}},88032:function(e,r,n){e.exports=n.p+"static/media/incorrect.fdd769b06f367b7ed46f.mp3"}}]);
//# sourceMappingURL=805.2580fba8.chunk.js.map