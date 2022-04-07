var M=Object.defineProperty;var L=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var E=(t,i,r)=>i in t?M(t,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[i]=r,N=(t,i)=>{for(var r in i||(i={}))S.call(i,r)&&E(t,r,i[r]);if(L)for(var r of L(i))I.call(i,r)&&E(t,r,i[r]);return t};import{j as R,R as g,r as d,N as j,a as B,b as D}from"./vendor.400010eb.js";const O=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))o(a);new MutationObserver(a=>{for(const n of a)if(n.type==="childList")for(const s of n.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(a){const n={};return a.integrity&&(n.integrity=a.integrity),a.referrerpolicy&&(n.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?n.credentials="include":a.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function o(a){if(a.ep)return;a.ep=!0;const n=r(a);fetch(a.href,n)}};O();const e=R.exports.jsx,c=R.exports.jsxs;function T(t){return c("header",{className:t.black?"black":"",children:[e("div",{className:"header--logo",children:e("a",{href:"./",children:e("img",{alt:"Logo main",src:"https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"})})}),e("div",{className:"header--user",children:e("a",{href:"./user",children:e("img",{alt:"Logo user default",src:"https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"})})})]})}function H(){return c("footer",{children:["Feito com ",e("span",{role:"img","aria-label":"cora\xE7\xE3o",children:"\u2764\uFE0F"})," e React"]})}function Y(){return e("div",{className:"loading",children:e("img",{alt:"Load icon",src:"https://media.filmelier.com/noticias/br/2020/03/Netflix_LoadTime.gif"})})}function P(t){var n,s,u;const i="https://image.tmdb.org/t/p/original",r=new Date(t.movie.first_air_date),o=(n=t.movie.genres)==null?void 0:n.map(w=>w.name),a=200;return e(g.Fragment,{children:e("section",{className:"featured",style:{backgroundSize:"cover",backgroundPosition:"center",backgroundImage:`url(${i}${t.movie.backdrop_path})`},children:e("div",{className:"featured--vertical",children:c("div",{className:"featured--horizontal",children:[e("div",{className:"featured--name",children:t.movie.original_name}),c("div",{className:"featured--info",children:[c("div",{className:"featured--points",children:[t.movie.vote_average," pontos"]}),e("div",{className:"featured--year",children:r.getFullYear()}),c("div",{className:"featured--seasons",children:[t.movie.number_of_seasons," temporada",t.movie.number_of_seasons!==1&&"s"]})]}),c("div",{className:"featured--description",children:[(s=t.movie.overview)==null?void 0:s.slice(0,a).trim(),((u=t.movie.overview)==null?void 0:u.length)>a&&"..."]}),c("div",{className:"featured--buttons",children:[e("a",{href:`/watch/${t.movie.id}`,className:"featured--watchbutton",children:"\u25BA Assistir"}),e("a",{href:`/list/add/${t.movie.id}`,className:"featured--mylistbutton",children:"+ Minha Lista"})]}),(o==null?void 0:o.length)?c("div",{className:"featured--genres",children:["G\xEAneros: ",o.join(", ")]}):e("span",{})]})})})})}function z(t){const[i,r]=d.exports.useState(-400),o="https://image.tmdb.org/t/p/w300",a=()=>{const s=i+Math.round(window.innerWidth/2);r(s>0?0:s)},n=()=>{const s=window.innerWidth-t.items.results.length*150,u=i-Math.round(window.innerWidth/2);r(s>u?s-60:u)};return e(g.Fragment,{children:c("div",{className:"movieRow",children:[e("h2",{children:t.title}),e("div",{className:"movieRow--left",onClick:a,children:e(j,{style:{fontSize:50}})}),e("div",{className:"movieRow--right",onClick:n,children:e(B,{style:{fontSize:50}})}),e("div",{className:"movieRow--listarea",children:e("div",{className:"movieRow--list",style:{marginLeft:i,width:t.items.results.length*150},children:t.items.results.map((s,u)=>e("div",{className:"movieRow--item",children:e("img",{src:`${o}${s.poster_path}`,alt:s.original_title})},u))})})]})})}function C(t){var a;const i="https://image.tmdb.org/t/p/original",r=new Date(t.movie.first_air_date),o=(a=t.movie.genres)==null?void 0:a.map(n=>n.name);return e(g.Fragment,{children:c("section",{className:"banner",children:[e("img",{src:i+t.movie.backdrop_path,alt:"movies",className:"banner--image"}),e("div",{className:"banner--vertical",children:c("div",{className:"banner--horizontal",children:[e("div",{className:"banner--name",children:t.movie.original_name}),c("div",{className:"banner--info",children:[c("div",{className:"banner--points",children:[t.movie.vote_average," pontos"]}),e("div",{className:"banner--year",children:r.getFullYear()}),c("div",{className:"banner--seasons",children:[t.movie.number_of_seasons," temporada",t.movie.number_of_seasons!==1&&"s"]})]}),(o==null?void 0:o.length)?c("div",{className:"banner--genres",children:["G\xEAneros: ",o.join(", ")]}):""]})})]})})}const U="18f51557b115ce80fb270427b011ca46",q="https://api.themoviedb.org/3",m=async(t,i={})=>{const r=Object.entries(N({language:"pt-BR",api_key:U},i)).map(n=>n.join("=")).join("&");return await(await fetch(`${q}${t}${r?"?"+r:""}`)).json()},A={getHomeList:async()=>[{slug:"originals",title:"Originais do Netflix",items:await m("/discover/tv",{with_network:213})},{slug:"trending",title:"Recomendados oara Voc\xEA",items:await m("/trending/all/week")},{slug:"toprated",title:"Em Alta",items:await m("/movie/top_rated")},{slug:"action",title:"A\xE7\xE3o",items:await m("/discover/movie",{with_genres:28})},{slug:"comedy",title:"Com\xE9dia",items:await m("/discover/movie",{with_genres:35})},{slug:"horror",title:"Terror",items:await m("/discover/movie",{with_genres:27})},{slug:"romance",title:"Romance",items:await m("/discover/movie",{with_genres:10749})},{slug:"documentary",title:"Document\xE1rios",items:await m("/discover/movie",{with_genres:99})}],getMovieInfo:async(t,i)=>{switch(i){case"movie":return await m(`/movie/${t}`);case"tv":return await m(`/tv/${t}`)}}};function G(){const t="https://image.tmdb.org/t/p/original",i=60,[r,o]=d.exports.useState([]),[a,n]=d.exports.useState(!1),[s,u]=d.exports.useState(!1),[w,b]=d.exports.useState(i);let _=d.exports.useRef(0),p=d.exports.useRef(0);const k=async l=>new Promise((v,f)=>{const h=new Image;h.src=l,h.onload=()=>v(!0)}),y=async l=>{let v=Math.floor(Math.random()*(l.length-1)),f=l[v],h=await A.getMovieInfo(f.id,"tv");return await k(`${t}${h.backdrop_path}`),n(h),p.current=setTimeout(()=>{y(l)},15e3),()=>clearTimeout(p.current)},x=()=>{u(window.scrollY>10)};d.exports.useEffect(()=>{(async()=>{let v=await A.getHomeList();o(v);const f=v.find(h=>h.slug==="originals");if(f){const h=f.items.results.filter($=>$.backdrop_path);await y(h)}})()},[]),d.exports.useEffect(()=>(window.addEventListener("scroll",x),()=>{window.removeEventListener("scroll",x)}),[]);const F=()=>b(l=>(document.body.style.overflowY=l?"auto":"hidden",l&&l-1));return d.exports.useEffect(()=>(_.current=setInterval(F,1e3),document.onmousemove=function(){document.body.style.overflowY="auto",b(i)},()=>{document.body.style.overflowY="auto",b(i),clearInterval(_.current)}),[]),c(g.Fragment,{children:[e(T,{black:s}),a?e(P,{movie:a}):"",e("main",{className:"page",children:e("section",{className:"lists",children:r.map((l,v)=>e(z,N({},l),v))})}),e(H,{}),r.length&&a?"":e(Y,{}),!w&&a?e(C,{movie:a}):""]})}function V(){return e("div",{className:"App",children:e(G,{})})}D.render(e(g.StrictMode,{children:e(V,{})}),document.getElementById("root"));