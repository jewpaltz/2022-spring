import{g as m,d as _,o as c,c as r,a as s,t as o,l as d,F as h,n as v,u as f,q as l,y as p,z as b}from"./vendor.3d1c9552.js";import{a as g}from"./index.c8eb49ac.js";const k=m("posts",{state:()=>({list:[]}),actions:{async fetchPosts(){const t=await g("posts");this.list=t.data}}}),$={class:"card"},P={class:"card-image"},y={class:"image is-4by3"},C=["src"],S=s("button",{class:"delete"},null,-1),x={class:"card-content"},A={class:"media"},T={class:"media-left"},B={class:"image is-48x48"},F=["src"],N={class:"media-content"},q={class:"title is-4"},M={class:"subtitle is-6"},V={class:"content"},z=s("br",null,null,-1),D=s("a",null,"@bulmaio",-1),E=d(". "),W=s("a",{href:"#"},"#css",-1),j=d(),w=s("a",{href:"#"},"#responsive",-1),G=s("br",null,null,-1),I=s("time",{datetime:"2016-1-1"},"11:09 PM - 1 Jan 2016",-1),J=_({props:{post:null},setup(t){const{post:n}=t;return console.log(n),(a,u)=>(c(),r("div",$,[s("div",P,[s("figure",y,[s("img",{src:t.post.src,alt:"Placeholder image"},null,8,C)])]),S,s("div",x,[s("div",A,[s("div",T,[s("figure",B,[s("img",{src:t.post.user.pic,alt:"Placeholder image"},null,8,F)])]),s("div",N,[s("p",q,o(t.post.user.firstName)+" "+o(t.post.user.lastName),1),s("p",M,"@"+o(t.post.user.handle),1)])]),s("div",V,[d(o(t.post.caption)+" }} ",1),z,D,E,W,j,w,G,I])])]))}});const L={class:"section"},Y={class:"columns"},H=p('<div class="column is-one-quarter"><aside class="menu"><p class="menu-label"> General </p><ul class="menu-list"><li><a>Dashboard</a></li><li><a>Customers</a></li></ul><p class="menu-label"> Administration </p><ul class="menu-list"><li><a>Team Settings</a></li><li><a class="is-active">Manage Your Team</a><ul><li><a>Members</a></li><li><a>Plugins</a></li><li><a>Add a member</a></li></ul></li><li><a>Invitations</a></li><li><a>Cloud Storage Environment Settings</a></li><li><a>Authentication</a></li></ul><p class="menu-label"> Transactions </p><ul class="menu-list"><li><a>Payments</a></li><li><a>Transfers</a></li><li><a>Balance</a></li></ul></aside></div>',1),K={class:"column is-half"},O={class:"column is-one-quarter"},Q={class:"panel is-primary"},R=s("p",{class:"panel-heading"}," Primary ",-1),U={class:"panel-tabs"},X=s("span",{class:"icon is-left"},[s("i",{class:"fas fa-search","aria-hidden":"true"})],-1),Z=p('<a class="panel-block is-active"><span class="panel-icon"><i class="fas fa-book" aria-hidden="true"></i></span> bulma </a><a class="panel-block"><span class="panel-icon"><i class="fas fa-book" aria-hidden="true"></i></span> marksheet </a><a class="panel-block"><span class="panel-icon"><i class="fas fa-book" aria-hidden="true"></i></span> minireset.css </a><a class="panel-block"><span class="panel-icon"><i class="fas fa-book" aria-hidden="true"></i></span> jgthms.github.io </a>',4),es=_({setup(t){const n=k();n.fetchPosts();const a="All",u="What's on your mind?";return(ss,e)=>(c(),r("div",L,[s("div",Y,[H,s("div",K,[(c(!0),r(h,null,v(f(n).list,i=>(c(),b(J,{key:i._id,post:i},null,8,["post"]))),128))]),s("div",O,[s("article",Q,[R,s("p",U,[s("a",{class:l({"is-active":a=="All"}),onClick:e[0]||(e[0]=i=>a="All")},"All",2),s("a",{class:l({"is-active":a=="Public"}),onClick:e[1]||(e[1]=i=>a="Public")},"Public",2),s("a",{class:l({"is-active":a=="Private"}),onClick:e[2]||(e[2]=i=>a="Private")},"Private",2),s("a",{class:l({"is-active":a=="Sources"}),onClick:e[3]||(e[3]=i=>a="Sources")},"Sources",2),s("a",{class:l({"is-active":a=="Forks"}),onClick:e[4]||(e[4]=i=>a="Forks")},"Forks",2)]),s("div",{class:"panel-block"},[s("p",{class:"control has-icons-left"},[s("input",{class:"input is-primary",type:"text",placeholder:u}),X])]),Z])])])]))}});export{es as default};
