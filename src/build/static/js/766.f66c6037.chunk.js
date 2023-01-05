"use strict";(self.webpackChunkDynonary=self.webpackChunkDynonary||[]).push([[766],{50718:function(e,r,t){t.d(r,{Z:function(){return u}});var n=t(1413),a=t(45987),o=t(93188),i=(t(72791),(0,t(38596).Z)((function(){return{root:{"& .MuiInputBase-root":{backgroundColor:"var(--bg-color-accent)",borderRadius:"var(--border-radius)",border:"solid 1px var(--border-color)",color:"var(--text-color)","& ::placeholder":{color:"var(--text-color)",fontSize:"1.6rem"}},"& .MuiInputBase-root.Mui-focused":{borderColor:"var(--secondary-color)"},"& .MuiFormLabel-root":{color:"var(--label-color)",fontSize:"1.5rem"},"& label.Mui-focused":{color:"var(--secondary-color)"},"& .MuiFormLabel-root.Mui-error":{color:"var(--error-color)"},"& .MuiInputBase-root.Mui-error":{borderColor:"var(--error-color)"}}}}))),s=t(80184),c=["endAdornment","error","inputProps"];function l(e){var r=e.endAdornment,t=e.error,l=e.inputProps,u=(0,a.Z)(e,c),d=i();return(0,s.jsx)(o.Z,(0,n.Z)({classes:d,error:t,InputProps:{disableUnderline:!0,endAdornment:r},inputProps:l,InputLabelProps:{shrink:!0},variant:"filled"},u))}l.defaultProps={endAdornment:null,error:!1,inputProps:{}};var u=l},13730:function(e,r,t){t.d(r,{Z:function(){return g}});var n=t(29439),a=t(26513),o=t(52417),i=t(57407),s=t(43264),c=t(85827),l=t.n(c),u=t(86193),d=t(72791),m=t(16030),p=t(57806),h=(0,t(38596).Z)((function(){return{input:{display:"none"},btn:{minHeight:"5.6rem",backgroundColor:"var(--bg-color-accent) !important",boxShadow:"none !important",border:"solid 1px var(--border-color)",color:"var(--label-color)",textTransform:"capitalize","&:hover, &:active":{opacity:"0.85"}},skeleton:{height:"100% !important",backgroundColor:"var(--bg-color-accent)"},review:{backgroundColor:"var(--bg-color-accent)",border:"solid 1px var(--border-color)",padding:"0.6rem 1.2rem",borderRadius:"var(--sm-border-radius)","& img":{height:"5.4rem",width:"5.4rem"},"& p":{color:"var(--text-color)",fontSize:"1.2rem",overflow:"hidden",whiteSpace:"nowrap",textOverflow:"ellipsis",padding:"0 0.4rem"},"& .icon":{color:"var(--label-color)",fontSize:"2.4rem",transition:"all 0.25s","&:hover, &:active":{transform:"scale(1.1)"}}}}})),v=t(80184);function f(e){var r,t,c,f=e.title,g=e.className,x=e.onChange,b=e.resetFlag,Z=h(),w=(0,m.I0)(),j=(0,d.useState)({status:0,data:null}),N=(0,n.Z)(j,2),k=N[0],y=N[1];(0,d.useEffect)((function(){b&&y({status:0,data:null})}),[b]);var S=function(){x(null),y({status:0}),w((0,p.PJ)({type:"error",message:"T\u1ea3i t\u1eadp tin th\u1ea5t b\u1ea1i, th\u1eed l\u1ea1i"}))},C=function(e){var r=function(e){if(!e)return{status:!1,message:"File kh\xf4ng h\u1ee3p l\u1ec7"};var r=e.type,t=e.size;return"image"!==r.split("/")[0]?{status:!1,message:"File g\u1eedi l\xean ph\u1ea3i l\xe0 m\u1ed9t \u1ea3nh"}:t/Math.pow(1024,2)>u.k2.IMG_SIZE?{status:!1,message:"K\xedch th\u01b0\u1edbc c\u1ee7a \u1ea3nh t\u1ed1i \u0111a l\xe0 ".concat(u.k2.IMG_SIZE," MB")}:{status:!0}}(e),t=r.status,n=r.message,a=void 0===n?"":n;if(!t)return w((0,p.PJ)({type:"error",message:a})),void x(null);y({status:1});var o=e.size/Math.pow(1024,2);new(l())(e,{quality:o>1?.6:.8,success:function(e){var r=new FileReader;r.readAsDataURL(e),r.onerror=S,r.onload=function(r){var t=r.target.result;x(t),y({status:2,data:{imgSrc:t,fileName:e.name,fileSize:(e.size/Math.pow(1024,2)).toFixed(2)}})}},error:function(){S()}})};return(0,v.jsxs)("div",{className:g,children:[0===k.status&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("input",{className:Z.input,accept:"image/*",id:"button-file",htmlFor:"contained-button-file",type:"file",onChange:function(e){return C(e.target.files[0])}}),(0,v.jsx)("label",{htmlFor:"button-file",children:(0,v.jsx)(a.Z,{className:"".concat(Z.btn," w-100 h-100"),variant:"contained",color:"primary",component:"span",endIcon:(0,v.jsx)(o.Z,{}),children:f})})]}),1===k.status&&(0,v.jsx)(s.Z,{variant:"rect",classes:{root:Z.skeleton}}),2===k.status&&(0,v.jsxs)("div",{className:"".concat(Z.review," w-100 h-100 flex-center-between"),children:[(0,v.jsx)("img",{src:null===(r=k.data)||void 0===r?void 0:r.imgSrc,alt:"photo"}),(0,v.jsxs)("p",{children:["".concat(null===(t=k.data)||void 0===t?void 0:t.fileName," (").concat(null===(c=k.data)||void 0===c?void 0:c.fileSize," MB)")," "]}),(0,v.jsx)(i.Z,{className:"icon cur-pointer",onClick:function(){x(null),y({status:0,data:null})}})]})]})}f.defaultProps={title:"Upload",className:"",onChange:function(){},resetFlag:0};var g=f},35766:function(e,r,t){t.r(r),t.d(r,{default:function(){return k}});var n=t(74165),a=t(15861),o=t(29439),i=t(83629),s=t(42997),c=t(72791),l=t(16030),u=t(57806),d=t(38915),m=t(1413),p=t(26513),h=t(21079),v=t(89302),f=t(50718),g=t(13730),x=t(86193),b=(0,t(38596).Z)((function(){return{wrap:{minHeight:"calc(100vh - 7.2rem)"},root:{backgroundColor:"var(--bg-color-sec)",padding:"3.6rem 5.6rem",borderRadius:"var(--border-radius)",textAlign:"center",boxShadow:"var(--box-shadow)"},avtWrap:{width:"15rem",height:"15rem",position:"relative"},avt:{borderRadius:"50%"},cameraIconWrap:{position:"absolute",right:0,bottom:0,width:"4.2rem",height:"4.2rem",padding:"1.2rem",backgroundColor:"var(--primary-color)",borderRadius:"50%",cursor:"pointer",border:"solid 5px var(--bg-color-sec)","&:hover, &:active":{opacity:.85}},cameraIcon:{color:"var(--text-color)",fontSize:"2rem"},fileInput:{position:"absolute",width:"4.2rem",height:"4.2rem",top:0,left:0,opacity:0,cursor:"pointer"},name:{fontSize:"2.4rem",lineHeight:1.5,letterSpacing:"0.75px"},username:{fontSize:"1.5rem",fontWeight:400,color:"var(--label-color)",letterSpacing:"0.75px"},info:{margin:"2.4rem 0","& p":{lineHeight:2,fontSize:"1.6rem",letterSpacing:"0.75px",color:"var(--text-color)"}},coin:{color:"var(--label-color)",fontWeight:"bold",fontSize:"2rem"}}})),Z=t(80184);var w=function(e){var r=e.onUpload,t=e.onUpdateProfile,n=e.email,a=e.createdDate,i=(0,l.v9)((function(e){return e.userInfo})),d=i.username,w=i.name,j=i.avt,N=i.coin,k=Boolean(j)?(0,s.gr)(j,150,150):x.Of.IMAGE_SRC,y=b(),S=(0,c.useState)(!1),C=(0,o.Z)(S,2),P=C[0],M=C[1],I=(0,c.useRef)({name:w,username:d}),E=(0,c.useState)({name:!1,username:!1}),z=(0,o.Z)(E,2),A=z[0],_=z[1],F=(0,l.I0)(),L=function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;r?(A.name&&""!==e&&_((0,m.Z)((0,m.Z)({},A),{},{name:!1})),I.current.name=e):(A.username&&""!==e&&_((0,m.Z)((0,m.Z)({},A),{},{username:!1})),I.current.username=e)};return(0,Z.jsx)("div",{className:"".concat(y.wrap," container flex-center"),children:(0,Z.jsxs)("div",{className:y.root,children:[(0,Z.jsx)("div",{className:"flex-center w-100 h-100",children:(0,Z.jsxs)("div",{className:y.avtWrap,children:[(0,Z.jsx)("img",{className:"".concat(y.avt," w-100 h-100"),src:k,alt:"Avatar Photo"}),(0,Z.jsxs)("div",{className:"".concat(y.cameraIconWrap," flex-center"),children:[(0,Z.jsx)(v.Z,{className:y.cameraIcon}),(0,Z.jsx)(g.Z,{className:y.fileInput,onChange:r})]})]})}),P?(0,Z.jsxs)("div",{className:"flex-center-col mt-8",children:[(0,Z.jsx)(f.Z,{onChange:function(e){return L(e.target.value,1)},className:"mb-8",placeholder:w,label:"Nh\u1eadp t\xean",error:A.name,defaultValue:w}),(0,Z.jsx)(f.Z,{onChange:function(e){return L(e.target.value,0)},placeholder:d,label:"Nh\u1eadp username",error:A.username,defaultValue:d})]}):(0,Z.jsxs)("div",{className:"mt-8",children:[(0,Z.jsx)("h2",{className:y.name,children:w}),(0,Z.jsx)("h4",{className:y.username,children:d})]}),(0,Z.jsxs)("div",{className:y.info,children:[Boolean(n)&&(0,Z.jsx)("p",{children:n}),Boolean(a)&&(0,Z.jsxs)("p",{children:["\u0110\xe3 tham gia v\xe0o ",a]}),(0,Z.jsxs)("p",{children:["S\u1ed1 coin hi\u1ec7n t\u1ea1i: ",(0,Z.jsx)("span",{className:y.coin,children:N})]})]}),P?(0,Z.jsxs)("div",{className:"d-flex w-100",children:[(0,Z.jsx)(p.Z,{onClick:function(){I.current={name:w,username:d},M(!1)},className:"".concat(y.editBtn," _btn _btn-outlined-accent w-50"),children:"Hu\u1ef7 b\u1ecf"}),(0,Z.jsx)(p.Z,{onClick:function(){var e=I.current,r=e.name,n=e.username;if(r!==w.trim()||d!==n.trim())return""===r.trim()?(_((0,m.Z)((0,m.Z)({},A),{},{name:!0})),void F((0,u.PJ)({type:"error",message:"Vui l\xf2ng nh\u1eadp t\xean"}))):""===n.trim()?(_((0,m.Z)((0,m.Z)({},A),{},{username:!0})),void F((0,u.PJ)({type:"error",message:"Vui l\xf2ng nh\u1eadp username"}))):-1!==n.indexOf(" ")?(_((0,m.Z)((0,m.Z)({},A),{},{username:!0})),void F((0,u.PJ)({type:"error",message:"username kh\xf4ng ch\u1ee9a kho\u1ea3ng tr\u1ed1ng"}))):n.length>x.k2.USERNAME_LEN?(_((0,m.Z)((0,m.Z)({},A),{},{username:!0})),void F((0,u.PJ)({type:"error",message:"username t\u1ed1i \u0111a ".concat(x.k2.USERNAME_LEN," k\xfd t\u1ef1")}))):r.length>x.k2.NAME_LEN?(_((0,m.Z)((0,m.Z)({},A),{},{name:!0})),void F((0,u.PJ)({type:"error",message:"T\xean t\u1ed1i \u0111a ".concat(x.k2.NAME_LEN," k\xfd t\u1ef1")}))):void t(r.trim(),n.trim())},className:"".concat(y.editBtn," _btn _btn-primary ml-4 w-50"),children:"C\u1eadp nh\u1eadt"})]}):(0,Z.jsx)(p.Z,{onClick:function(){return M(!0)},className:"".concat(y.editBtn," _btn _btn-primary w-100"),startIcon:(0,Z.jsx)(h.Z,{}),children:"Ch\u1ec9nh s\u1eeda"})]})})};var j=function(){var e=(0,c.useState)({email:null,createdDate:null}),r=(0,o.Z)(e,2),t=r[0],m=r[1],p=(0,l.I0)();(0,c.useEffect)((function(){var e=!0;return(0,a.Z)((0,n.Z)().mark((function r(){var t,a,o,c;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,i.Z.getUserProfile();case 3:200===(t=r.sent).status&&e&&(a=t.data,o=a.email,c=a.createdDate,m({email:o,createdDate:(0,s.p6)(c)})),r.next=9;break;case 7:r.prev=7,r.t0=r.catch(0);case 9:case"end":return r.stop()}}),r,null,[[0,7]])})))(),function(){return e=!1}}),[]);var h=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.putUpdateAvt(r);case 3:200===(t=e.sent).status&&(p((0,u.PJ)({type:"success",message:"C\u1eadp nh\u1eadt \u1ea3nh \u0111\u1ea1i di\u1ec7n th\xe0nh c\xf4ng"})),p((0,d.wY)(t.data.newSrc))),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p((0,u.PJ)({type:"error",message:"C\u1eadp nh\u1eadt \u1ea3nh \u0111\u1ea1i di\u1ec7n th\u1ea5t b\u1ea1i. Th\u1eed l\u1ea1i"}));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r){return e.apply(this,arguments)}}(),v=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r,t){var a,o,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.putUpdateProfile(r,t);case 3:200===e.sent.status&&(p((0,u.PJ)({type:"success",message:"C\u1eadp nh\u1eadt th\xf4ng tin th\xe0nh c\xf4ng",duration:500})),setTimeout((function(){location.reload()}),750)),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),s=(null===(a=e.t0.response)||void 0===a||null===(o=a.data)||void 0===o?void 0:o.message)||"Ch\u1ec9nh s\u1eeda th\xf4ng tin th\u1ea5t b\u1ea1i, th\u1eed l\u1ea1i !",p((0,u.PJ)({type:"error",message:s}));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(r,t){return e.apply(this,arguments)}}();return(0,Z.jsx)(w,{email:t.email,createdDate:t.createdDate,onUpload:h,onUpdateProfile:v})},N=t(56647);var k=function(){return(0,N.Z)("Qu\u1ea3n l\xfd t\xe0i kho\u1ea3n"),(0,Z.jsx)(j,{})}},21079:function(e,r,t){var n=t(64836),a=t(75263);r.Z=void 0;var o=a(t(72791)),i=(0,n(t(44894)).default)(o.createElement("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"}),"Edit");r.Z=i},89302:function(e,r,t){var n=t(64836),a=t(75263);r.Z=void 0;var o=a(t(72791)),i=(0,n(t(44894)).default)(o.createElement(o.Fragment,null,o.createElement("circle",{cx:"12",cy:"12",r:"3.2"}),o.createElement("path",{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"})),"PhotoCamera");r.Z=i}}]);
//# sourceMappingURL=766.f66c6037.chunk.js.map