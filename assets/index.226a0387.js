import{o as l,c as d,a as s,d as f,t as m,b as _,e as E,f as A,r as B,g as N,u as r,h as u,w as h,p as S,i as P,j as H,k as I,l as M,F as O,m as R,n as g,R as v,q as T,s as V}from"./vendor.30b7fc15.js";const F=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function n(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerpolicy&&(i.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?i.credentials="include":e.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(e){if(e.ep)return;e.ep=!0;const i=n(e);fetch(e.href,i)}};F();const W="modulepreload",C={},q="/",D=function(t,n){return!n||n.length===0?t():Promise.all(n.map(a=>{if(a=`${q}${a}`,a in C)return;C[a]=!0;const e=a.endsWith(".css"),i=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const c=document.createElement("link");if(c.rel=e?"stylesheet":W,e||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),e)return new Promise((L,j)=>{c.addEventListener("load",L),c.addEventListener("error",j)})})).then(()=>t())};var $=(o,t)=>{const n=o.__vccOpts||o;for(const[a,e]of t)n[a]=e;return n};const J={},K={class:"section"},U=s("h1",{class:"title"},"Home Page",-1),z=[U];function Y(o,t){return l(),d("div",K,z)}var G=$(J,[["render",Y]]);const Q={class:"section"},X={class:"title"},b=f({props:{title:{type:String,default:"Hello World"}},setup(o){const t=o;return(n,a)=>(l(),d("div",Q,[s("h1",X,m(t.title),1)]))}}),Z={class:"section"},ss=s("h1",{class:"title"},"Login Page",-1),ts=s("span",{class:"icon"},[s("i",{class:"fa fa-sign-in"})],-1),es=s("span",null,"Login",-1),os=[ts,es],as=_(" \xA0 "),ns=s("span",{class:"icon"},[s("i",{class:"fa fa-sign-in"})],-1),is=s("span",null,"Bad Login",-1),rs=[ns,is],cs=f({setup(o){function t(){x("Moshe Cohen","meme")}function n(){x("vp","password")}return(a,e)=>(l(),d("div",Z,[ss,s("button",{class:"button is-primary",onClick:n},os),as,s("button",{class:"button is-warning",onClick:t},rs)]))}}),ls=[{path:"/",component:G},{path:"/about",component:b,props:{title:"About Page!"}},{path:"/contact",component:b,props:{title:"Contact Page!"}},{path:"/login",component:cs},{path:"/signup",component:b,props:{title:"Signup Page!"}},{path:"/messages",component:()=>D(()=>import("./Wall.b0f340f3.js"),["assets/Wall.b0f340f3.js","assets/Wall.a0b51b7e.css","assets/vendor.30b7fc15.js"])}],y=E({history:A(),routes:ls,linkActiveClass:"is-active"});y.beforeEach((o,t)=>{if(["/messages","/wall","/feed"].includes(o.path)&&!p.user)return"/login"});const ds=[{firstName:"John",lastName:"Doe",handle:"johndoe",password:"password",email:"jhon@doe.com",pic:"https://randomuser.me/api/portraits/men/1.jpg",id:1},{firstName:"Vladimir",lastName:"Putin",handle:"russian_dictator",password:"long table",email:"jhon@doe.com",pic:"https://randomuser.me/api/portraits/men/2.jpg",id:2},{firstName:"Kamala",lastName:"Harris",handle:"vp",password:"password",email:"kamala@whitehouse.org",pic:"https://randomuser.me/api/portraits/women/3.jpg",id:3}],w=B({user:null});async function x(o,t){const n=ds.find(a=>a.handle===o);if(!n)throw{message:"User not found"};if(n.password!==t)throw{message:"Incorrect password"};w.user=n,y.push("/messages")}function us(){w.user=null}var p=w;const k=o=>(S("data-v-2847418c"),o=o(),P(),o),_s={key:0,class:"buttons"},ps=k(()=>s("strong",null,"Sign up",-1)),hs=_(" Log in "),ms={key:1,class:"buttons"},fs={class:"avatar"},vs=["src"],gs=_(),bs=k(()=>s("br",null,null,-1)),$s=k(()=>s("strong",null,"Log out",-1)),ys=[$s],ws=f({setup(o){return(t,n)=>{const a=N("router-link");return r(p).user?(l(),d("div",ms,[s("div",fs,[s("img",{src:r(p).user.pic},null,8,vs),s("div",null,[s("strong",null,m(r(p).user.firstName)+" "+m(r(p).user.lastName),1),gs,bs,s("i",null,m(r(p).user.email),1)])]),s("a",{class:"button is-primary",onClick:n[0]||(n[0]=e=>r(us)())},ys)])):(l(),d("div",_s,[u(a,{class:"button is-primary",to:"/signup"},{default:h(()=>[ps]),_:1}),u(a,{class:"button is-light",to:"/login"},{default:h(()=>[hs]),_:1})]))}}});var ks=$(ws,[["__scopeId","data-v-2847418c"]]);const Ls=H("messages",{state:()=>({notifications:[{type:"primary",message:"This is a primary notification"},{type:"link",message:"This is a link notification"},{type:"success",message:"Yay you did it!"},{type:"warning",message:"Uh Oh! Watch out!"},{type:"danger",message:"I cant believe you just did that!"}]}),actions:{close(o){this.notifications.splice(o,1)}}});const Cs=o=>(S("data-v-71b26f14"),o=o(),P(),o),xs=Cs(()=>s("span",{class:"icon"},[s("i",{class:"fas fa-bell"})],-1)),Ns={key:0,class:"tag is-danger"},Ss={class:"navbar-dropdown"},Ps=["onClick"],Is=f({setup(o){const t=Ls(),n=I(!1);return(a,e)=>(l(),d("div",{class:g(["navbar-item has-dropdown",{"is-active":n.value}])},[s("a",{class:"navbar-link",onClick:e[0]||(e[0]=i=>n.value=!n.value)},[xs,r(t).notifications.length?(l(),d("span",Ns,m(r(t).notifications.length),1)):M("",!0)]),s("div",Ss,[(l(!0),d(O,null,R(r(t).notifications,(i,c)=>(l(),d("div",{class:g(`notification is-light is-${i.type}`)},[s("button",{class:"delete",onClick:L=>r(t).close(c)},null,8,Ps),_(" "+m(i.message),1)],2))),256))])],2))}});var Os=$(Is,[["__scopeId","data-v-71b26f14"]]);const js={class:"navbar is-info",role:"navigation","aria-label":"main navigation"},Es={class:"container"},As={class:"navbar-brand"},Bs=s("a",{class:"navbar-item",href:"https://bulma.io"},[s("img",{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"})],-1),Hs=s("span",{"aria-hidden":"true"},null,-1),Ms=s("span",{"aria-hidden":"true"},null,-1),Rs=s("span",{"aria-hidden":"true"},null,-1),Ts=[Hs,Ms,Rs],Vs={class:"navbar-start"},Fs=_(" Home "),Ws=_(" Messages "),qs={class:"navbar-item has-dropdown is-hoverable"},Ds=s("a",{class:"navbar-link"}," More ",-1),Js={class:"navbar-dropdown"},Ks=_(" About "),Us=s("a",{class:"navbar-item"}," Jobs ",-1),zs=_(" Contact "),Ys=s("hr",{class:"navbar-divider"},null,-1),Gs=s("a",{class:"navbar-item"}," Report an issue ",-1),Qs={class:"navbar-end"},Xs={class:"navbar-item"},Zs=s("div",{class:"navbar-item"},[s("a",{class:"bd-tw-button button","data-social-network":"Twitter","data-social-action":"tweet","data-social-target":"https://bulma.io",target:"_blank",href:"https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"},[s("span",{class:"icon"},[s("i",{class:"fab fa-twitter"})]),s("span",null," Tweet ")])],-1),st=f({setup(o){const t=I(!1);return(n,a)=>(l(),d("nav",js,[s("div",Es,[s("div",As,[Bs,s("a",{role:"button",class:g(["navbar-burger",{"is-active":t.value}]),"aria-label":"menu","aria-expanded":"false",onClick:a[0]||(a[0]=e=>t.value=!t.value)},Ts,2)]),s("div",{class:g(["navbar-menu",{"is-active":t.value}])},[s("div",Vs,[u(r(v),{class:"navbar-item",to:"/"},{default:h(()=>[Fs]),_:1}),u(r(v),{class:"navbar-item",to:"/messages"},{default:h(()=>[Ws]),_:1}),s("div",qs,[Ds,s("div",Js,[u(r(v),{class:"navbar-item",to:"/about"},{default:h(()=>[Ks]),_:1}),Us,u(r(v),{class:"navbar-item",to:"/contact"},{default:h(()=>[zs]),_:1}),Ys,Gs])])]),s("div",Qs,[s("div",Xs,[u(ks)]),u(Os),Zs])],2)])]))}}),tt={class:"container"},et=f({setup(o){return(t,n)=>{const a=N("router-view");return l(),d(O,null,[u(st),s("div",tt,[u(a)])],64)}}});T(et).use(y).use(V()).mount("#app");
