(self.webpackChunksafe_mint_dao=self.webpackChunksafe_mint_dao||[]).push([[754],{16617:function(){},20728:function(vt,S,r){"use strict";r.r(S),r.d(S,{default:function(){return $n},getPassed:function(){return hn}});var o=r(20310),ht=r(34669),mt=r(59250),Nn=r(13013),ut=r(57663),xn=r(80226),ft=r(49111),Zn=r(19650),pt=r(63185),bn=r(9676),jt=r(30887),Pn=r(28682),Nt=r(13062),p=r(71230),On=r(2824),w=r(3182),yn=r(94043),b=r.n(yn),N=r(77350),C=r(43134),I=r(67361),Sn=r(69610),wn=r(54941),Cn=r(53587),E=r(80711),In=r(34216),En=r(93226),Tn=function(g,i,e,d){function s(l){return l instanceof e?l:new e(function(m){m(l)})}return new(e||(e=Promise))(function(l,m){function v(c){try{h(d.next(c))}catch(u){m(u)}}function x(c){try{h(d.throw(c))}catch(u){m(u)}}function h(c){c.done?l(c.value):s(c.value).then(v,x)}h((d=d.apply(g,i||[])).next())})};const Z=new E.Yd(In.i);class zn extends En.r{detectNetwork(){const i=Object.create(null,{detectNetwork:{get:()=>super.detectNetwork}});return Tn(this,void 0,void 0,function*(){let e=this.network;return e==null&&(e=yield i.detectNetwork.call(this),e||Z.throwError("no network detected",E.Yd.errors.UNKNOWN_ERROR,{}),this._network==null&&((0,Cn.zG)(this,"_network",e),this.emit("network",e,null))),e})}}class T extends null{constructor(i,e){Z.checkAbstract(new.target,T),i=getStatic(new.target,"getNetwork")(i),e=getStatic(new.target,"getApiKey")(e);const d=getStatic(new.target,"getUrl")(i,e);super(d,i);typeof e=="string"?defineReadOnly(this,"apiKey",e):e!=null&&Object.keys(e).forEach(s=>{defineReadOnly(this,s,e[s])})}_startPending(){Z.warn("WARNING: API provider does not support pending filters")}isCommunityResource(){return!1}getSigner(i){return Z.throwError("API provider does not support signing",Logger.errors.UNSUPPORTED_OPERATION,{operation:"getSigner"})}listAccounts(){return Promise.resolve([])}static getApiKey(i){return i}static getUrl(i,e){return Z.throwError("not implemented; sub-classes must override getUrl",Logger.errors.NOT_IMPLEMENTED,{operation:"getUrl"})}}var z=function(){function g(){(0,Sn.Z)(this,g)}return(0,wn.Z)(g,null,[{key:"getProviderUrl",value:function(e){return I.g5[e].rpcUrl}},{key:"getStaticProvider",value:function(e){return this._privicerCache[e]||(this._privicerCache[e]=new zn(this.getProviderUrl(e))),this._privicerCache[e]}}]),g}();z._privicerCache={};var Rn=r(62376),Un=r(18058),n=r(24480),An=r(57254),R=r(67294),Ln=r(73727),a=r(58804),t=r(85893),U,A,L,$,D,M,F,Y,B,W,H,J,G,K,Q,V,X,k,q,_,nn,tn,en,rn,on,an,sn,ln,dn,cn,gn,vn;r(16617);var hn=function(){var g=(0,w.Z)(b().mark(function i(){var e,d,s,l;return b().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return console.log("getPassed start"),e=z.getStaticProvider(I.B9.TESTNET_RINKEBY),d=Rn.S.connect("0x3b68C1Cd8DD6C40aFFf144EA7094a7097FbBEdca",e),v.next=5,d.getPending(0,10);case 5:return s=v.sent,console.log("getPassed info"),l=[],s.length>0&&s.forEach(function(){var x=(0,w.Z)(b().mark(function h(c,u){var j,O,y,jn;return b().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:if(u!=0){f.next=2;break}return f.abrupt("return");case 2:if(j=c.ipfsAddress,O=localStorage.getItem(j),O!=null){f.next=12;break}return f.next=7,(0,Un.jW)(j);case 7:y=f.sent,l.push(y),localStorage.setItem(j,JSON.stringify(y)),f.next=14;break;case 12:jn=JSON.parse(O),l.push(jn);case 14:case"end":return f.stop()}},h)}));return function(h,c){return x.apply(this,arguments)}}()),v.abrupt("return",l);case 10:case"end":return v.stop()}},i)}));return function(){return g.apply(this,arguments)}}();function $n(){var g=(0,R.useState)([]),i=(0,On.Z)(g,2),e=i[0],d=i[1];return(0,R.useEffect)(function(){var s=hn();s.then(function(l){d(l)})},[]),(0,t.jsxs)(Qn,{children:[(0,t.jsx)(Xn,{children:"Explore Projects"}),(0,t.jsx)(Mn,{}),(0,t.jsx)(Kn,{children:e==null?void 0:e.map(function(s){return(0,t.jsx)(Ln.rU,{to:{pathname:"/preview",info:s},children:(0,t.jsx)(Dn,{item:s})})})})]})}var Dn=function(i){var e,d,s,l,m,v,x,h,c,u,j;return console.log("\u5185\u5BB9"),console.log(i.item),(0,t.jsxs)(kn,{children:[(0,t.jsx)("img",{src:(e=i.item)!==null&&e!==void 0&&e.banner?(d=i.item)===null||d===void 0?void 0:d.banner:N.Z.banner_preview,style:{width:"100%",height:80}}),(0,t.jsxs)(qn,{children:[(0,t.jsx)(p.Z,{justify:"center",children:(0,t.jsx)(_n,{src:((s=i.item)===null||s===void 0?void 0:s.logol)!=null?(l=i.item)===null||l===void 0?void 0:l.logol:N.Z.user_icon})}),(0,t.jsxs)(it,{children:[(0,t.jsx)("div",{}),(0,t.jsxs)("div",{children:[(0,t.jsx)(nt,{children:i.item.name}),(0,t.jsxs)(p.Z,{justify:"center",align:"middle",children:[(0,t.jsx)(tt,{children:"Contract\uFF1A"}),(0,t.jsx)(et,{children:(0,n.z)(i.item.address)}),(0,t.jsx)(rt,{src:N.Z.ETH})]})]})]}),(0,t.jsxs)(ot,{children:[i.item.description,(0,t.jsx)(Vn,{children:"Read More"})]}),(0,t.jsxs)(at,{children:[(0,t.jsxs)("div",{children:[(0,t.jsx)(mn,{children:"TOTAL SUPPLY"}),(0,t.jsx)(un,{children:((m=i.item)===null||m===void 0?void 0:m.supply)==""?"UnKnow":(v=i.item)===null||v===void 0?void 0:v.supply})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)(mn,{children:"Refundable?"}),(0,t.jsx)(un,{children:(x=i.item)!==null&&x!==void 0&&x.refundable?"YES":"NO"})]}),(0,t.jsx)("div",{children:(0,t.jsx)(st,{children:"WHITELIST ONLY"})})]}),(0,t.jsx)(lt,{}),(0,t.jsx)(Fn,{}),(0,t.jsxs)(Bn,{justify:"space-between",align:"middle",children:[(0,t.jsxs)(p.Z,{children:[((h=i.item)===null||h===void 0?void 0:h.website)!=""?(0,t.jsx)(P,{src:N.Z.website}):null,((c=i.item)===null||c===void 0?void 0:c.twitter)!=""?(0,t.jsx)(P,{src:N.Z.twitter}):null,((u=i.item)===null||u===void 0?void 0:u.discord)!=""?(0,t.jsx)(P,{src:N.Z.discord}):null,((j=i.item)===null||j===void 0?void 0:j.telegram)!=""?(0,t.jsx)(P,{src:N.Z.telegram}):null]}),(0,t.jsx)(dt,{children:"Safemint"})]})]})]})};function Mn(){var g=(0,t.jsx)(Pn.Z,{items:[{label:"Latest",key:"1"}]});return(0,t.jsxs)(Yn,{justify:"end",align:"middle",children:[(0,t.jsx)(bn.Z,{children:"Have whitelist"}),(0,t.jsx)(fn,{children:"Price Range :"}),(0,t.jsx)(pn,{placeholder:"Min"}),(0,t.jsx)(ct,{children:"-"}),(0,t.jsx)(pn,{placeholder:"Max"}),(0,t.jsx)(gt,{children:"Set"}),(0,t.jsx)(fn,{children:"Sort :"}),(0,t.jsx)(Nn.Z,{overlay:g,children:(0,t.jsx)(xn.Z,{children:(0,t.jsxs)(Zn.Z,{children:["Latest",(0,t.jsx)(An.Z,{})]})})})]})}function Fn(){return(0,t.jsxs)(p.Z,{justify:"center",align:"middle",children:[(0,t.jsx)(Jn,{}),(0,t.jsx)(Gn,{children:"Not Live Yet"})]})}function xt(){return _jsxs(_Row,{justify:"space-between",children:[_jsx("div",{style:{width:"70%"},children:_jsx(_Progress,{percent:30,showInfo:!1})}),_jsxs("span",{children:[_jsx(Wn,{children:"8k"}),_jsx(Hn,{children:"/16k"})]})]})}var Yn=(0,a.ZP)(p.Z)(U||(U=(0,o.Z)([`
  border-bottom: 1px solid rgba(166, 166, 166, 1);
  padding-bottom: `,`;
  margin-bottom: `,`;
`])),(0,n.N)(15),(0,n.N)(35)),Bn=(0,a.ZP)(p.Z)(A||(A=(0,o.Z)([`
  margin-top: `,`;
`])),(0,n.N)(15)),Wn=a.ZP.span(L||(L=(0,o.Z)([`
  color: rgba(0, 0, 0, 1);
  font-size: `,`;
`])),(0,n.N)(16)),Hn=a.ZP.span($||($=(0,o.Z)([`
  color: rgba(128, 128, 128, 1);
  font-size: `,`;
`])),(0,n.N)(16)),Jn=a.ZP.div(D||(D=(0,o.Z)([`
  width: `,`;
  height: `,`;
  border-radius: `,`;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.25);
  margin-right: `,`;
`])),(0,n.N)(8),(0,n.N)(8),(0,n.N)(4),(0,n.N)(5)),Gn=a.ZP.span(M||(M=(0,o.Z)([`
  color: rgba(128, 128, 128, 0.85);
  font-size: `,`;
  line-height: `,`;
`])),(0,n.N)(14),(0,n.N)(22)),Kn=a.ZP.div(F||(F=(0,o.Z)([`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-column-gap: 5%;
`]))),Qn=a.ZP.div(Y||(Y=(0,o.Z)([`
  background: #ffffff;
  padding: 5%;
`]))),Vn=a.ZP.span(B||(B=(0,o.Z)([`
  color: rgba(40, 233, 95, 1);
  font-size: `,`;
  cursor: pointer;
`])),(0,n.N)(14)),Xn=a.ZP.div(W||(W=(0,o.Z)([`
  color: rgba(0, 0, 0, 0.85);
  font-size: `,`;
  line-height: `,`;
  margin-bottom: `,`;
  text-align: center;
`])),(0,n.N)(28),(0,n.N)(30),(0,n.N)(40)),kn=a.ZP.div(H||(H=(0,o.Z)([`
  background: rgba(255, 255, 255, 1);
  background-blend-mode: normal;
  box-shadow: 0px 5px 12px 4px rgba(0, 0, 0, 0.25), 0px 1px 2px rgba(0, 0, 0, 0.25),
    0px 3px 6px rgba(0, 0, 0, 0.25);
  border-radius: `,`;
  overflow: hidden;
  cursor: pointer;
  margin-bottom: `,`;
`])),(0,n.N)(20),(0,n.N)(40)),qn=a.ZP.div(J||(J=(0,o.Z)([`
  width: 80%;
  margin: 0 auto;
  padding-top: `,`;
  padding-bottom: `,`;
  position: relative;
`])),(0,n.N)(50),(0,n.N)(50)),_n=a.ZP.img(G||(G=(0,o.Z)([`
  width: `,`;
  border-radius: `,`;
  position: absolute;
  transform: translateY(-50%);
  top: 0;
`])),(0,n.N)(100),(0,n.N)(15)),nt=a.ZP.div(K||(K=(0,o.Z)([`
  color: rgba(0, 0, 0, 0.85);
  font-size: `,`;
  line-height: `,`;
  text-align: center;
`])),(0,n.N)(22),(0,n.N)(30)),tt=a.ZP.div(Q||(Q=(0,o.Z)([`
  color: rgba(128, 128, 128, 1);
  font-size: `,`;
  line-height: `,`;
`])),(0,n.N)(10),(0,n.N)(22)),et=a.ZP.div(V||(V=(0,o.Z)([`
  color: rgba(98, 126, 234, 1);
  font-size: `,`;
  line-height: `,`;
  margin-right: `,`;
`])),(0,n.N)(12),(0,n.N)(22),(0,n.N)(10)),rt=a.ZP.img(X||(X=(0,o.Z)([`
  width: `,`;
  height: `,`;
`])),(0,n.N)(15),(0,n.N)(15)),it=a.ZP.div(k||(k=(0,o.Z)([`
  display: grid;
  grid-template-columns: 20% 60% 20%;
`]))),P=a.ZP.img(q||(q=(0,o.Z)([`
  width: `,`;
  height: `,`;
  margin-right: `,`;
`])),(0,n.N)(15),(0,n.N)(15),(0,n.N)(8)),Zt=a.ZP.img(_||(_=(0,o.Z)([`
  width: `,`;
  height: `,`;
  margin-right: `,`;
`])),(0,n.N)(10),(0,n.N)(10),(0,n.N)(10)),bt=(0,a.ZP)(p.Z)(nn||(nn=(0,o.Z)([`
  color: rgba(0, 0, 0, 0.85);
  font-size: `,`;
  line-height: `,`;
`])),(0,n.N)(14),(0,n.N)(22)),ot=a.ZP.div(tn||(tn=(0,o.Z)([`
  color: rgba(128, 128, 128, 100);
  font-size: `,`;
  margin-top: `,`;
  line-height: `,`;
`])),(0,n.N)(12),(0,n.N)(10),(0,n.N)(22)),at=a.ZP.div(en||(en=(0,o.Z)([`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-row-gap: `,`;
  margin-top: `,`;
  align-items: center;
  text-align: center;
`])),(0,n.N)(10),(0,n.N)(10)),mn=a.ZP.div(rn||(rn=(0,o.Z)([`
  color: rgba(128, 128, 128, 1);
  font-size: `,`;
  line-height: `,`;
`])),(0,n.N)(10),(0,n.N)(22)),un=a.ZP.div(on||(on=(0,o.Z)([`
  color: rgba(0, 0, 0, 1);
  font-size: `,`;
`])),(0,n.N)(18)),st=(0,a.ZP)(C.Kp)(an||(an=(0,o.Z)([`
  // padding-left:`,`;
  // padding-right:`,`;
  height: `,`;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(40, 233, 95, 1);
  color: rgba(56, 56, 56, 1);
  font-size: `,`;
  line-height: 22px;
  cursor: pointer;
`])),(0,n.N)(5),(0,n.N)(5),(0,n.N)(20),(0,n.N)(10)),lt=a.ZP.div(sn||(sn=(0,o.Z)([`
  border-bottom: 1px solid rgba(166, 166, 166, 1);
  margin-top: `,`;
  margin-bottom: `,`;
`])),(0,n.N)(20),(0,n.N)(10)),dt=(0,a.ZP)(p.Z).attrs({justify:"center",align:"middle"})(ln||(ln=(0,o.Z)([`
  width: fit-content;
  width: `,`;
  //height: `,`;
  background: rgba(3, 101, 31, 1);
  border-radius: 2px;
  color: rgba(255, 255, 255, 1);
  font-size: `,`;
  line-height: `,`;
  //margin-right:`,`;
  cursor: pointer;
`])),(0,n.N)(120),(0,n.N)(22),(0,n.N)(18),(0,n.N)(30),(0,n.N)(30)),fn=a.ZP.div(dn||(dn=(0,o.Z)([`
  color: rgba(0, 0, 0, 0.85);
  font-size: `,`;
  line-height: `,`;
  margin-left: `,`;
  margin-right: `,`;
`])),(0,n.N)(14),(0,n.N)(22),(0,n.N)(40),(0,n.N)(10)),pn=(0,a.ZP)(C.Qc)(cn||(cn=(0,o.Z)([`
  width: `,`;
  height: `,`;
  background: rgba(255, 255, 255, 1);
  border: 0.6px solid rgba(0, 0, 0, 0.15);
  border-radius: 2px;
  text-align: center;
  margin: 0 `,`;
`])),(0,n.N)(61),(0,n.N)(25),(0,n.N)(10)),ct=a.ZP.div(gn||(gn=(0,o.Z)([`
  color: rgba(0, 0, 0, 0.8);
  font-size: `,`;
  line-height: `,`;
`])),(0,n.N)(12),(0,n.N)(22)),gt=a.ZP.div(vn||(vn=(0,o.Z)([`
  color: rgba(40, 233, 95, 1);
  font-size: `,`;
  line-height: `,`;
  cursor: pointer;
`])),(0,n.N)(10),(0,n.N)(22))}}]);
