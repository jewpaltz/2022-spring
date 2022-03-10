import{o as l,c as d,a as s,d as f,t as m,b as _,e as A,f as B,g as H,r as M,h as N,u as r,i as u,w as h,p as P,j as S,k as I,l as R,F as O,m as T,n as b,R as g,q as V,s as W}from"./vendor.396ea1e0.js";const q=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerpolicy&&(i.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?i.credentials="include":t.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(t){if(t.ep)return;t.ep=!0;const i=o(t);fetch(t.href,i)}};q();const F="modulepreload",C={},D="/",U=function(e,o){return!o||o.length===0?e():Promise.all(o.map(a=>{if(a=`${D}${a}`,a in C)return;C[a]=!0;const t=a.endsWith(".css"),i=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const c=document.createElement("link");if(c.rel=t?"stylesheet":F,t||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),t)return new Promise((L,E)=>{c.addEventListener("load",L),c.addEventListener("error",E)})})).then(()=>e())};var y=(n,e)=>{const o=n.__vccOpts||n;for(const[a,t]of e)o[a]=t;return o};const J={},K={class:"section"},Y=s("h1",{class:"title"},"Home Page",-1),z=[Y];function G(n,e){return l(),d("div",K,z)}var Q=y(J,[["render",G]]);const X={class:"section"},Z={class:"title"},v=f({props:{title:{type:String,default:"Hello World"}},setup(n){const e=n;return(o,a)=>(l(),d("div",X,[s("h1",Z,m(e.title),1)]))}}),ss={class:"section"},ts=s("h1",{class:"title"},"Login Page",-1),es=s("span",{class:"icon"},[s("i",{class:"fa fa-sign-in"})],-1),os=s("span",null,"Login",-1),ns=[es,os],as=_(" \xA0 "),is=s("span",{class:"icon"},[s("i",{class:"fa fa-sign-in"})],-1),rs=s("span",null,"Bad Login",-1),cs=[is,rs],ls=f({setup(n){function e(){x("Moshe Cohen","meme")}function o(){x("vp","password")}return(a,t)=>(l(),d("div",ss,[ts,s("button",{class:"button is-primary",onClick:o},ns),as,s("button",{class:"button is-warning",onClick:e},cs)]))}}),ds=[{path:"/",component:Q},{path:"/about",component:v,props:{title:"About Page!"}},{path:"/contact",component:v,props:{title:"Contact Page!"}},{path:"/login",component:ls},{path:"/signup",component:v,props:{title:"Signup Page!"}},{path:"/wall",component:()=>U(()=>import("./Wall.afea516d.js"),["assets/Wall.afea516d.js","assets/Wall.a0b51b7e.css","assets/vendor.396ea1e0.js"])},{path:"/hidden",component:v,props:{title:"You reached the hidden Page!"}}],$=A({history:B(),routes:ds,linkActiveClass:"is-active"});$.beforeEach((n,e)=>{console.log({to:n});const o=["/messages","/wall","/feed","/hidden"];if(console.log({protectedUrls:o}),o.includes(n.path)&&(console.log("requires login"),!p.user))return"/login"});const us=[{firstName:"John",lastName:"Doe",handle:"johndoe",password:"password",email:"jhon@doe.com",pic:"https://randomuser.me/api/portraits/men/1.jpg",id:1},{firstName:"Vladimir",lastName:"Putin",handle:"russian_dictator",password:"long table",email:"jhon@doe.com",pic:"https://randomuser.me/api/portraits/men/2.jpg",id:2},{firstName:"Kamala",lastName:"Harris",handle:"vp",password:"password",email:"kamala@whitehouse.org",pic:"https://randomuser.me/api/portraits/women/3.jpg",id:3}],j=H("messages",{state:()=>({notifications:[{type:"primary",message:"This is a primary notification"},{type:"link",message:"This is a link notification"},{type:"success",message:"Yay you did it!"},{type:"warning",message:"Uh Oh! Watch out!"},{type:"danger",message:"I cant believe you just did that!"}]}),actions:{close(n){this.notifications.splice(n,1)}}}),w=M({user:null});async function x(n,e){const o=us.find(t=>t.handle===n),a=j();try{if(!o)throw{message:"User not found"};if(o.password!==e)throw{message:"Incorrect password"};a.notifications.push({type:"success",message:`Welcome back ${o.firstName}!`}),w.user=o,$.push("/messages")}catch(t){a.notifications.push({type:"danger",message:t.message}),console.table(a.notifications)}}function _s(){w.user=null,$.push("/login")}var p=w;const k=n=>(P("data-v-2847418c"),n=n(),S(),n),ps={key:0,class:"buttons"},hs=k(()=>s("strong",null,"Sign up",-1)),ms=_(" Log in "),fs={key:1,class:"buttons"},gs={class:"avatar"},vs=["src"],bs=_(),$s=k(()=>s("br",null,null,-1)),ys=k(()=>s("strong",null,"Log out",-1)),ws=[ys],ks=f({setup(n){return(e,o)=>{const a=N("router-link");return r(p).user?(l(),d("div",fs,[s("div",gs,[s("img",{src:r(p).user.pic},null,8,vs),s("div",null,[s("strong",null,m(r(p).user.firstName)+" "+m(r(p).user.lastName),1),bs,$s,s("i",null,m(r(p).user.email),1)])]),s("a",{class:"button is-primary",onClick:o[0]||(o[0]=t=>r(_s)())},ws)])):(l(),d("div",ps,[u(a,{class:"button is-primary",to:"/signup"},{default:h(()=>[hs]),_:1}),u(a,{class:"button is-light",to:"/login"},{default:h(()=>[ms]),_:1})]))}}});var Ls=y(ks,[["__scopeId","data-v-2847418c"]]);const Cs=n=>(P("data-v-71b26f14"),n=n(),S(),n),xs=Cs(()=>s("span",{class:"icon"},[s("i",{class:"fas fa-bell"})],-1)),Ns={key:0,class:"tag is-danger"},Ps={class:"navbar-dropdown"},Ss=["onClick"],Is=f({setup(n){const e=j(),o=I(!1);return(a,t)=>(l(),d("div",{class:b(["navbar-item has-dropdown",{"is-active":o.value}])},[s("a",{class:"navbar-link",onClick:t[0]||(t[0]=i=>o.value=!o.value)},[xs,r(e).notifications.length?(l(),d("span",Ns,m(r(e).notifications.length),1)):R("",!0)]),s("div",Ps,[(l(!0),d(O,null,T(r(e).notifications,(i,c)=>(l(),d("div",{class:b(`notification is-light is-${i.type}`)},[s("button",{class:"delete",onClick:L=>r(e).close(c)},null,8,Ss),_(" "+m(i.message),1)],2))),256))])],2))}});var Os=y(Is,[["__scopeId","data-v-71b26f14"]]);const js={class:"navbar is-info",role:"navigation","aria-label":"main navigation"},Es={class:"container"},As={class:"navbar-brand"},Bs=s("a",{class:"navbar-item",href:"https://bulma.io"},[s("img",{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"})],-1),Hs=s("span",{"aria-hidden":"true"},null,-1),Ms=s("span",{"aria-hidden":"true"},null,-1),Rs=s("span",{"aria-hidden":"true"},null,-1),Ts=[Hs,Ms,Rs],Vs={class:"navbar-start"},Ws=_(" Home "),qs=_(" Messages "),Fs={class:"navbar-item has-dropdown is-hoverable"},Ds=s("a",{class:"navbar-link"}," More ",-1),Us={class:"navbar-dropdown"},Js=_(" About "),Ks=s("a",{class:"navbar-item"}," Jobs ",-1),Ys=_(" Contact "),zs=s("hr",{class:"navbar-divider"},null,-1),Gs=s("a",{class:"navbar-item"}," Report an issue ",-1),Qs={class:"navbar-end"},Xs={class:"navbar-item"},Zs=s("div",{class:"navbar-item"},[s("a",{class:"bd-tw-button button","data-social-network":"Twitter","data-social-action":"tweet","data-social-target":"https://bulma.io",target:"_blank",href:"https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"},[s("span",{class:"icon"},[s("i",{class:"fab fa-twitter"})]),s("span",null," Tweet ")])],-1),st=f({setup(n){const e=I(!1);return(o,a)=>(l(),d("nav",js,[s("div",Es,[s("div",As,[Bs,s("a",{role:"button",class:b(["navbar-burger",{"is-active":e.value}]),"aria-label":"menu","aria-expanded":"false",onClick:a[0]||(a[0]=t=>e.value=!e.value)},Ts,2)]),s("div",{class:b(["navbar-menu",{"is-active":e.value}])},[s("div",Vs,[u(r(g),{class:"navbar-item",to:"/"},{default:h(()=>[Ws]),_:1}),u(r(g),{class:"navbar-item",to:"/messages"},{default:h(()=>[qs]),_:1}),s("div",Fs,[Ds,s("div",Us,[u(r(g),{class:"navbar-item",to:"/about"},{default:h(()=>[Js]),_:1}),Ks,u(r(g),{class:"navbar-item",to:"/contact"},{default:h(()=>[Ys]),_:1}),zs,Gs])])]),s("div",Qs,[s("div",Xs,[u(Ls)]),u(Os),Zs])],2)])]))}}),tt={class:"container"},et=f({setup(n){return(e,o)=>{const a=N("router-view");return l(),d(O,null,[u(st),s("div",tt,[u(a)])],64)}}});V(et).use($).use(W()).mount("#app");
