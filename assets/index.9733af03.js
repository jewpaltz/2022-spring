var q=Object.defineProperty;var S=Object.getOwnPropertySymbols;var W=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable;var x=(n,t,e)=>t in n?q(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,P=(n,t)=>{for(var e in t||(t={}))W.call(t,e)&&x(n,e,t[e]);if(S)for(var e of S(t))M.call(t,e)&&x(n,e,t[e]);return n};import{o as d,c as _,a as s,d as f,t as m,r as b,w as A,b as E,v as N,u as r,e as p,f as H,g as z,h as B,i as T,j as u,k as h,p as j,l as R,m as D,F as U,n as F,q as $,R as g,s as G,x as J}from"./vendor.6e8e6ee9.js";const K=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const c of i.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}};K();const Y="modulepreload",O={},Q="/",I=function(t,e){return!e||e.length===0?t():Promise.all(e.map(a=>{if(a=`${Q}${a}`,a in O)return;O[a]=!0;const o=a.endsWith(".css"),i=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${i}`))return;const c=document.createElement("link");if(c.rel=o?"stylesheet":Y,o||(c.as="script",c.crossOrigin=""),c.href=a,document.head.appendChild(c),o)return new Promise((l,V)=>{c.addEventListener("load",l),c.addEventListener("error",V)})})).then(()=>t())};var k=(n,t)=>{const e=n.__vccOpts||n;for(const[a,o]of t)e[a]=o;return e};const X={},Z={class:"section"},ss=s("h1",{class:"title"},"Home Page",-1),ts=[ss];function es(n,t){return d(),_("div",Z,ts)}var os=k(X,[["render",es]]);const ns={class:"section"},as={class:"title"},v=f({props:{title:{type:String,default:"Hello World"}},setup(n){const t=n;return(e,a)=>(d(),_("div",ns,[s("h1",as,m(t.title),1)]))}}),is={class:"section"},cs={class:"columns"},rs={class:"column is-half is-offset-one-quarter"},ls={class:"card"},us=["onSubmit"],ds=s("h1",{class:"title"},"Login Page",-1),_s={class:"field"},ps={class:"control has-icons-left has-icons-right"},hs=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-envelope"})],-1),ms=s("span",{class:"icon is-small is-right"},[s("i",{class:"fas fa-check"})],-1),fs={class:"field"},gs={class:"control has-icons-left"},vs=s("span",{class:"icon is-small is-left"},[s("i",{class:"fas fa-lock"})],-1),bs={class:"field"},$s={class:"control"},ws=s("button",{class:"button is-success"}," Login ",-1),ys=p(" \xA0 "),ks=f({setup(n){const t=L(),e=b(""),a=b("");function o(){t.Login(e.value,a.value)}return(i,c)=>(d(),_("div",is,[s("div",cs,[s("div",rs,[s("div",ls,[s("form",{class:"card-content",onSubmit:A(o,["prevent"])},[ds,s("div",_s,[s("p",ps,[E(s("input",{class:"input",type:"email",placeholder:"Email","onUpdate:modelValue":c[0]||(c[0]=l=>e.value=l)},null,512),[[N,e.value]]),hs,ms])]),s("div",fs,[s("p",gs,[E(s("input",{class:"input",type:"password",placeholder:"Password","onUpdate:modelValue":c[1]||(c[1]=l=>a.value=l)},null,512),[[N,a.value]]),vs])]),s("div",bs,[s("p",$s,[ws,ys,s("button",{class:"button is-success",onClick:c[2]||(c[2]=A(l=>r(t).GoogleLogin(),["prevent"]))}," Google Login ")])])],40,us)])])])]))}}),Ls=[{path:"/",component:os},{path:"/about",component:v,props:{title:"About Page!"}},{path:"/contact",component:v,props:{title:"Contact Page!"}},{path:"/login",component:ks},{path:"/signup",component:v,props:{title:"Signup Page!"}},{path:"/wall/:handle?",component:()=>I(()=>import("./Wall.fc4b37b2.js"),["assets/Wall.fc4b37b2.js","assets/Wall.a0b51b7e.css","assets/vendor.6e8e6ee9.js"])},{path:"/hidden",component:v,props:{title:"You reached the hidden Page!"}},{path:"/weather",component:()=>I(()=>import("./Weather.eba48fb0.js"),["assets/Weather.eba48fb0.js","assets/vendor.6e8e6ee9.js"])}],w=H({history:z(),routes:Ls,linkActiveClass:"is-active"});w.beforeEach((n,t)=>{const e=L();e.destinationUrl==null&&n.path!="/login"&&(e.destinationUrl=n.path),console.log({to:n});const a=["/messages","/wall","/feed","/hidden"];if(console.log({protectedUrls:a}),a.includes(n.path.toLowerCase())&&(console.log("requires login"),!e.user))return"/login"});const y=B("messages",{state:()=>({notifications:[]}),actions:{close(n){this.notifications.splice(n,1)}}}),Cs="https://spring-2022.herokuapp.com/api/";function Ss(n,t,e,a){let o={headers:a};return t&&(o={method:e!=null?e:"POST",cache:"no-cache",headers:P({"Content-Type":"application/json"},a),body:JSON.stringify(t)}),fetch(Cs+n,o).then(i=>i.json())}function xs(n,t){return new Promise((e,a)=>{if(document.getElementById(t)){e();return}const o=document.createElement("script");o.src=n,o.id=t,o.onload=()=>e(),o.onerror=()=>a(),document.head.appendChild(o)})}const L=B("session",{state:()=>({user:void 0,destinationUrl:null}),actions:{async GoogleLogin(){await xs("https://accounts.google.com/gsi/client","google-signin"),google.accounts.oauth2.initTokenClient({client_id:"795421440566-mug3ric0m155ive7brsutqigvm6t1pgc.apps.googleusercontent.com",scope:"email profile",callback:async t=>{const e=await fetch("https://www.googleapis.com/oauth2/v3/userinfo?alt=json",{headers:{Authorization:`Bearer ${t.access_token}`}}).then(o=>o.json());console.log(e),this.user={id:e.sub,email:e.email,firstName:e.given_name,lastName:e.family_name,pic:e.picture,handle:e.email,password:""};const a=await fetch("https://www.googleapis.com/calendar/v3/calendars/primary/events",{headers:{Authorization:`Bearer ${t.access_token}`}}).then(o=>o.json());console.log(a)}}).requestAccessToken()},async Login(n,t){var a;const e=y();try{const o=await this.api("users/login",{email:n,password:t});o&&(e.notifications.push({type:"success",message:`Welcome back ${o.firstName}!`}),this.user=o,w.push((a=this.destinationUrl)!=null?a:"/wall"))}catch(o){e.notifications.push({type:"danger",message:o.message}),console.table(e.notifications)}},Logout(){this.user=void 0,w.push("/login")},async api(n,t,e,a={}){var i,c;const o=y();((i=this.user)==null?void 0:i.token)&&(a.Authorization=`Bearer ${this.user.token}`);try{const l=await Ss(n,t,e,a);if((c=l.errors)==null?void 0:c.length)throw{message:l.errors.join(", ")};return await l.data}catch(l){o.notifications.push({type:"danger",message:l.message})}}}});const C=n=>(j("data-v-f919c938"),n=n(),R(),n),Ps={key:0,class:"buttons"},As=C(()=>s("strong",null,"Sign up",-1)),Es=p(" Log in "),Ns={key:1,class:"buttons"},Os={class:"avatar"},Is=["src"],Bs=p(),Ts=C(()=>s("br",null,null,-1)),js=C(()=>s("strong",null,"Log out",-1)),Rs=[js],Us=f({setup(n){const t=L();return(e,a)=>{const o=T("router-link");return r(t).user?(d(),_("div",Ns,[s("div",Os,[s("img",{src:r(t).user.pic},null,8,Is),s("div",null,[s("strong",null,m(r(t).user.firstName)+" "+m(r(t).user.lastName),1),Bs,Ts,s("i",null,m(r(t).user.email),1)])]),s("a",{class:"button is-primary",onClick:a[0]||(a[0]=i=>r(t).Logout())},Rs)])):(d(),_("div",Ps,[u(o,{class:"button is-primary",to:"/signup"},{default:h(()=>[As]),_:1}),u(o,{class:"button is-light",to:"/login"},{default:h(()=>[Es]),_:1})]))}}});var Vs=k(Us,[["__scopeId","data-v-f919c938"]]);const qs=n=>(j("data-v-bfffe1a4"),n=n(),R(),n),Ws=qs(()=>s("span",{class:"icon"},[s("i",{class:"fas fa-bell"})],-1)),Ms={key:0,class:"tag is-danger"},Hs={class:"navbar-dropdown"},zs=["onClick"],Ds=f({setup(n){const t=y(),e=b(!1);return(a,o)=>(d(),_("div",{class:$(["navbar-item has-dropdown",{"is-active":e.value}])},[s("a",{class:"navbar-link",onClick:o[0]||(o[0]=i=>e.value=!e.value)},[Ws,r(t).notifications.length?(d(),_("span",Ms,m(r(t).notifications.length),1)):D("",!0)]),s("div",Hs,[(d(!0),_(U,null,F(r(t).notifications,(i,c)=>(d(),_("div",{class:$(`notification is-light is-${i.type}`)},[s("button",{class:"delete",onClick:l=>r(t).close(c)},null,8,zs),p(" "+m(i.message),1)],2))),256))])],2))}});var Fs=k(Ds,[["__scopeId","data-v-bfffe1a4"]]);const Gs={class:"navbar is-info",role:"navigation","aria-label":"main navigation"},Js={class:"container"},Ks={class:"navbar-brand"},Ys=s("a",{class:"navbar-item",href:"https://bulma.io"},[s("img",{src:"https://bulma.io/images/bulma-logo.png",width:"112",height:"28"})],-1),Qs=s("span",{"aria-hidden":"true"},null,-1),Xs=s("span",{"aria-hidden":"true"},null,-1),Zs=s("span",{"aria-hidden":"true"},null,-1),st=[Qs,Xs,Zs],tt={class:"navbar-start"},et=p(" Home "),ot=p(" Wall "),nt=p(" Weather "),at={class:"navbar-item has-dropdown is-hoverable"},it=s("a",{class:"navbar-link"}," More ",-1),ct={class:"navbar-dropdown"},rt=p(" About "),lt=s("a",{class:"navbar-item"}," Jobs ",-1),ut=p(" Contact "),dt=s("hr",{class:"navbar-divider"},null,-1),_t=s("a",{class:"navbar-item"}," Report an issue ",-1),pt={class:"navbar-end"},ht={class:"navbar-item"},mt=s("div",{class:"navbar-item"},[s("a",{class:"bd-tw-button button","data-social-network":"Twitter","data-social-action":"tweet","data-social-target":"https://bulma.io",target:"_blank",href:"https://twitter.com/intent/tweet?text=Bulma: a modern CSS framework based on Flexbox&hashtags=bulmaio&url=https://bulma.io&via=jgthms"},[s("span",{class:"icon"},[s("i",{class:"fab fa-twitter"})]),s("span",null," Tweet ")])],-1),ft=f({setup(n){const t=b(!1);return(e,a)=>(d(),_("nav",Gs,[s("div",Js,[s("div",Ks,[Ys,s("a",{role:"button",class:$(["navbar-burger",{"is-active":t.value}]),"aria-label":"menu","aria-expanded":"false",onClick:a[0]||(a[0]=o=>t.value=!t.value)},st,2)]),s("div",{class:$(["navbar-menu",{"is-active":t.value}])},[s("div",tt,[u(r(g),{class:"navbar-item",to:"/"},{default:h(()=>[et]),_:1}),u(r(g),{class:"navbar-item",to:"/Wall"},{default:h(()=>[ot]),_:1}),u(r(g),{class:"navbar-item",to:"/weather"},{default:h(()=>[nt]),_:1}),s("div",at,[it,s("div",ct,[u(r(g),{class:"navbar-item",to:"/about"},{default:h(()=>[rt]),_:1}),lt,u(r(g),{class:"navbar-item",to:"/contact"},{default:h(()=>[ut]),_:1}),dt,_t])])]),s("div",pt,[s("div",ht,[u(Vs)]),u(Fs),mt])],2)])]))}}),gt={class:"container"},vt=f({setup(n){return(t,e)=>{const a=T("router-view");return d(),_(U,null,[u(ft),s("div",gt,[u(a)])],64)}}});G(vt).use(w).use(J()).mount("#app");export{L as u};
