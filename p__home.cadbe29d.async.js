(self.webpackChunksafe_mint_dao=self.webpackChunksafe_mint_dao||[]).push([[364],{86610:function(D,h,t){"use strict";t.d(h,{Z:function(){return da}});var g=t(13062),l=t(71230),S=t(89032),F=t(15746),I=t(49111),y=t(19650),E=t(3182),N=t(43185),L=t(94412),G=t(34792),P=t(48086),v=t(57663),A=t(80226),x=t(2824),f=t(94043),p=t.n(f),V=t(43061),C=t(67294),s=t(32059),e={black:"#000",white:"#fff",dark0:"#000000ee",dark1:"#00000099",dark2:"#00000055",dark3:"#00000044",juiceOrange:"#f5a312",juiceLight:"#FFECBB",cta:"#18b4c7",ctaHighlight:"#25c4d8",ctaHint:"#18b4c722",green:"#0F8534",red:"#FF4524",yellow:"#BF7C08"},a={black:"#000",white:"#fff",light0:"#e1e0e8",light1:"#e1e0e8d8",light2:"#e1e0e8a4",light3:"#e1e0e844",dark0:"#1c1b21",dark1:"#2e2b3c",dark2:"#494361",juiceOrange:"#FFB32C",juiceLight:"#FFECBB",cta:"#32c8db",ctaHighlight:"#38e9ff",ctaHint:"#32c8db22",green:"#A0F3BA",red:"#FF9B8",yellow:"#FCDC9C"},i;(function(d){d.light="light",d.dark="dark"})(i||(i={}));var M,H=(M={},(0,s.Z)(M,i.light,{l0:"#FEFDFB",l1:"#e7e3dc",l2:"#f3f1ec",disabled:"#00000018",success:e.green,warn:e.yellow,failure:e.red,brand:{primary:e.juiceOrange,secondary:e.juiceLight},action:{primary:e.cta,secondary:"#32c8db44",highlight:"#3dd1e4"}}),(0,s.Z)(M,i.dark,{l0:a.dark0,l1:a.dark1,l2:a.dark2,disabled:a.light0+"44",success:a.green,warn:a.yellow,failure:a.red,brand:{primary:a.juiceOrange,secondary:a.juiceLight},action:{primary:a.cta,secondary:a.ctaHint,highlight:a.ctaHighlight}}),M),O,R=(O={},(0,s.Z)(O,i.light,{primary:e.dark0,secondary:e.dark1,tertiary:e.dark2,disabled:e.dark3,success:e.green,warn:e.yellow,failure:e.red,action:{primary:e.cta,secondary:e.cta},brand:{primary:e.juiceOrange,secondary:e.juiceLight},over:{brand:{primary:e.white,secondary:e.black},action:{primary:e.white,secondary:e.cta,highlight:e.ctaHighlight},success:e.white,warn:e.white,failure:e.white,disabled:e.dark2}}),(0,s.Z)(O,i.dark,{primary:a.light0,secondary:a.light1,tertiary:a.light2,disabled:a.light2,success:a.green,warn:a.yellow,failure:a.red,action:{primary:a.cta,secondary:a.cta},brand:{primary:a.juiceOrange,secondary:a.juiceLight},over:{brand:{primary:a.white,secondary:a.black},action:{primary:a.white,secondary:a.cta,highlight:a.dark0},success:a.white,warn:a.white,failure:a.white,disabled:a.light2}}),O),o,r=(o={},(0,s.Z)(o,i.light,{primary:"#00000048",secondary:"#00000032",tertiary:"#00000018",success:e.green,warn:e.yellow,failure:e.red,disabled:"#00000018",action:{primary:e.cta,secondary:"#32c8db44",highlight:"#3dd1e4"}}),(0,s.Z)(o,i.dark,{primary:a.light1,secondary:a.light2,tertiary:a.light3,success:a.green,warn:a.yellow,failure:a.red,disabled:a.light0+"24",action:{primary:a.cta,secondary:a.light3,highlight:a.ctaHighlight}}),o),n,Z=(n={},(0,s.Z)(n,i.light,{primary:e.dark0,secondary:e.dark1,tertiary:e.dark2,placeholder:e.dark2,disabled:e.dark3,success:e.green,warn:e.yellow,failure:e.red,header:e.juiceOrange,action:{primary:e.cta,secondary:e.cta,highlight:e.ctaHighlight},brand:{primary:e.juiceOrange,secondary:e.juiceLight},over:{brand:{primary:e.white,secondary:e.black},action:{primary:e.white,secondary:e.cta,highlight:e.dark0},success:e.white,warn:e.white,failure:e.white,disabled:e.dark2}}),(0,s.Z)(n,i.dark,{primary:a.light0,secondary:a.light1,tertiary:a.light2,placeholder:a.light3,disabled:a.light2,success:a.green,warn:a.yellow,failure:a.red,header:a.juiceOrange,action:{primary:a.cta,secondary:a.cta,highlight:a.ctaHighlight},brand:{primary:a.juiceOrange,secondary:a.juiceLight},over:{brand:{primary:a.white,secondary:a.black},action:{primary:a.dark0,secondary:a.light0,highlight:a.dark0},success:a.white,warn:a.white,failure:a.white,disabled:a.light2}}),n),T,aa=(T={},(0,s.Z)(T,i.light,{primary:"rgba(0, 0, 0, 0.1)"}),(0,s.Z)(T,i.dark,{primary:"#000000"}),T),ea=function(u){return{background:H[u],text:Z[u],icon:R[u],stroke:r[u],boxShadow:aa[u]}},ta={xs:"1px",sm:"1px",md:"1px",lg:"1px",xl:"1px"},ra=function(u){return{colors:ea(u),radii:ta}},K=i.dark,na=(0,C.createContext)({themeOption:K,theme:ra(K),setThemeOption:function(){},isDarkMode:K===i.dark}),J=t(88818),ia=t(7085),oa=t(49101),c=t(85893),b;(function(d){d.KB="KB",d.MB="MB"})(b||(b={}));function da(d){var u=d.initialUrl,Y=d.onSuccess,k=d.maxSizeKBs,sa=d.metadata,la=d.title,ca=(0,C.useState)(u),z=(0,x.Z)(ca,2),W=z[0],$=z[1],ua=(0,C.useState)(),Q=(0,x.Z)(ua,2),ga=Q[0],X=Q[1],ha=(0,C.useContext)(na),q=ha.theme,_=function(m){var j=m?(0,J.F)(m):void 0;$(j),Y&&Y(j)},ya=(0,c.jsxs)("div",{children:[ga?(0,c.jsx)(ia.Z,{}):(0,c.jsx)(oa.Z,{}),(0,c.jsx)("div",{style:{marginTop:8},children:la})]});return(0,C.useLayoutEffect)(function(){return $(u)},[u]),(0,c.jsx)(l.Z,{style:{color:q.colors.text.secondary},gutter:30,children:(0,c.jsx)(F.Z,{xs:24,md:7,children:(0,c.jsxs)(y.Z,{align:"start",children:[W&&(0,c.jsx)("img",{style:{maxHeight:80,maxWidth:120,objectFit:"cover",objectPosition:"center",borderRadius:q.radii.md},src:W,alt:"Uploaded image"}),W?(0,c.jsx)(A.Z,{icon:(0,c.jsx)(V.Z,{}),type:"text",onClick:function(){return _()}}):(0,c.jsx)(L.Z,{accept:"image/png, image/jpeg, image/jpg, image/gif",listType:"picture-card",beforeUpload:function(m){if(k!==void 0&&m.size>k*1e3){var j=k>999?b.MB:b.KB,U=j===b.MB?(k/1e3).toFixed(1):k.toString();return P.ZP.error("File must be less than ".concat(U).concat(j)),L.Z.LIST_IGNORE}},customRequest:function(){var w=(0,E.Z)(p().mark(function m(j){var U;return p().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:return X(!0),B.next=3,(0,J.eu)(j.file,sa);case 3:U=B.sent,_(U.IpfsHash),X(!1);case 6:case"end":return B.stop()}},m)}));return function(m){return w.apply(this,arguments)}}(),className:"avatar-uploader",children:ya})]})})})}},13174:function(D,h,t){"use strict";t.d(h,{M:function(){return g}});var g;(function(l){l[l.trending=0]="trending",l[l.trendingV2=1]="trendingV2"})(g||(g={}))},31802:function(D,h,t){"use strict";t.r(h);var g=t(58024),l=t(91894),S=t(67294),F=t(52473),I=t(86610),y=t(85893),E=function(){return(0,y.jsx)(F.ZP,{header:{title:"",breadcrumb:{}},children:(0,y.jsx)(l.Z,{children:(0,y.jsx)(I.Z,{})})})};h.default=E},88818:function(D,h,t){"use strict";t.d(h,{GU:function(){return R},F:function(){return e},eu:function(){return i},M4:function(){return H}});var g=t(32059),l=t(13174),S=t(11849),F=function(r){var n;return(0,S.Z)((0,S.Z)({},r),{},{payButton:(n=r.payButton)!==null&&n!==void 0?n:r.payText,version:4})},I=t(44019),y=t.n(I),E=t(9669),N=t.n(E),L="gateway.pinata.cloud",G={NODE_ENV:"production"}.REACT_APP_PINATA_GATEWAY_HOSTNAME||L,P=t(67361),v,A="9ecb30311e0fafe19531",x="4877f1294f61a6840f073ff4e46d9b51843629b30edde78397a8a594b259c5c7";if(!A||!x)throw new Error("Missing .env vars REACT_APP_PINATA_PINNER_KEY or REACT_APP_PINATA_PINNER_SECRET");var f=y()(A,x);console.log("name",P.vx.name);var p=(v={},(0,g.Z)(v,l.M.trending,"trending_projects_"+P.vx.name),(0,g.Z)(v,l.M.trendingV2,"trending_projects_v2_"+P.vx.name),(0,g.Z)(v,"METADATA","juicebox_project_metadata"),(0,g.Z)(v,"LOGO","juicebox_project_logo"),v),V=function(r,n){return r?f.hashMetadata(r,_objectSpread({},n)):void 0},C=function(r){return"juicebox-@".concat(r,"-logo")},s=function(r){return"juicebox-@".concat(r,"-metadata")},e=function(r){return"https://".concat(G,"/ipfs/").concat(r)},a=function(r){return r==null?void 0:r.split("/").pop()},i=function(r,n){var Z=new FormData;return console.log("upload image"),console.log(n),Z.append("file",r),n&&Z.append("pinataMetadata",JSON.stringify({keyvalues:n})),N().post("https://api.pinata.cloud/pinning/pinFileToIPFS",Z,{maxContentLength:Infinity,headers:{"Content-Type":"multipart/form-data;",pinata_api_key:A,pinata_secret_api_key:x}}).then(function(T){return T.data})},M=function(r){return r?f.unpin(r).catch(function(n){console.error("Failed to unpin file ",r,n)}):Promise.reject()},H=function(r,n){return f.pinJSONToIPFS(F(r),{pinataMetadata:{keyvalues:{tag:p.METADATA},name:n?s(n):"juicebox-project-metadata.json"}})},O=function(r,n){return f.pinJSONToIPFS(n,{pinataMetadata:{keyvalues:{tag:p[r]},name:p[r]+".json"}})},R=function(r){return f.pinList({pageLimit:1e3,status:"pinned",metadata:{keyvalues:{tag:{value:p[r],op:"eq"}}}})}},64534:function(){},48768:function(){},61363:function(){}}]);
