import{s as a,j as b,L as h,r as c,u as E,R,a as v,B as S}from"./vendor.ade61f6d.js";const L=function(){const d=document.createElement("link").relList;if(d&&d.supports&&d.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&l(s)}).observe(document,{childList:!0,subtree:!0});function i(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerpolicy&&(o.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?o.credentials="include":t.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(t){if(t.ep)return;t.ep=!0;const o=i(t);fetch(t.href,o)}};L();const z=a.nav`
  margin: auto;
  margin-bottom: 1em;
  background-color: #F8F9FA;
  // background-color: green;
  // border: 1px solid black;
  
  ul {
    // border: 1px solid black;
    padding: 0.8em 0;
    display: flex;
  }

  .link {
    text-decoration: none;
    // border: 1px solid black;
    font-size: 1.1em;
    color: rgba(0,0,0,.5);
    padding: 0.4em 1em;
    &:hover {
      color: black
    }
  }
  
  li {
    // border-bottom: 1px solid black;
    list-style-type: none;
  }

  // @media (min-width: 320px) and (max-width: 759px) {
  //   background-color: black;
  // }
`,e=b.exports.jsx,n=b.exports.jsxs,x=()=>e(z,{children:n("ul",{children:[e(h,{className:"link",to:"/",children:e("li",{children:"Home"})}),e(h,{className:"link",to:"/desafio",children:e("li",{children:"Desafio"})})]})});var j="/52-semanas-react/assets/tabela52semanas.5d31abee.png";const B=a.main`
  // background-color: black;
  max-width: 95%;
  margin: auto;

  h1 {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 0.5em;
    text-align: center;
  }

  @media (min-width: 760px) {
    h1 {
      text-align: left;
    }
  }

  @media (min-width: 1100px) {
    max-width: 90%;
  }

`,F=a.section`

  .imgBlock {
  margin-bottom: 2em;
  
  }

  @media (min-width: 760px) {
    display: flex;
    justify-content: space-between;
    // border: 1px solid black;
  }
`,M=a.img`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  display: block;

  @media (min-width: 760px) {
    // display: inline;
    // border: 1px solid black;
  }
`,N=a.article`
  // border: 1px solid black;
  padding: 0 1em;

  .content {
    margin-bottom: 2em;
  }
  
  h3 {
    font-size: 1.3em;
    font-weight: bold;
    line-height: 1.2em;
    margin-bottom: 1em;
  }

  p {
    font-size: 1.2em;
    line-height: 1.2em;
  }

  .card {
    // border: 1px solid black;
    // padding: 1.2em 1.2em;
    p {
      margin-bottom: 1.2em;
      font-weight: 600;
    }

    button {
      width: 8em;
      height: 2em;
      color: white;
      background-color: #4985E8;
      font-size: 1.3em;
      border: none;
      cursor: pointer;
    }
    a {
      text-decoration: none;
      color: white;
    }
  }

  @media (min-width: 760px){
    width: 50%;
  }
`,$=()=>n(B,{children:[e(x,{}),e("h1",{children:"Desafio 52 Semanas"}),n(F,{children:[e("div",{className:"imgBlock",children:e(M,{src:j,alt:"Tabela do desafio 52 semanas"})}),n(N,{children:[n("div",{className:"content",children:[e("h3",{children:"O que \xE9 o desafio 52 semanas para poupar dinheiro?"}),n("p",{children:["Como o pr\xF3prio nome j\xE1 diz, o desafio estimula a economia semanal de certa quantia, durante um ano.",e("br",{}),e("br",{}),"A proposta original \xE9 come\xE7ar a primeira semana guardando R$1, na segunda semana R$ 2, na terceira semana R$ 3 e assim por diante, at\xE9 chegar \xE0 semana 52 poupando R$ 52.",e("br",{}),e("br",{}),"No final do per\xEDodo, caso o plano seja seguido corretamente, voc\xEA ter\xE1 guardado a quantia de R$1.378!"]})]}),n("div",{className:"card",children:[e("p",{children:"Fa\xE7a sua simula\xE7\xE3o em nossa calculadora."}),e("button",{children:e(h,{to:"/desafio",children:"Clique Aqui!"})})]})]})]})]}),A=a.main`
  // display: block;
  // margin: 0 auto;
`,D=a.form`
  input {
    width: 162px;
    // width: 7em;
    height: 1.7em;
    font-size: 1.3em;
    margin-bottom: 1em;
  }
  button {
    width: 110px;
    // width: 6em;
    height: 2em;
    color: white;
    background-color: #4985E8;
    font-size: 1.3em;
    border: none;
    cursor: pointer;
    border-radius: 2px;
  }
`,q=a.table`
  
  text-align: center;

  td {
    padding: 10px;
    border: 1px solid black;
    // text-align: center;
  }
  
`,I=()=>{const[p,d]=c.exports.useState(!1),[i,l]=c.exports.useState(""),[t,o]=c.exports.useState(0),[s,f]=c.exports.useState([]);let w=0,g=[],m=[];for(let r=1;r<=52;r++)m.push(r);const y=()=>{m.forEach(r=>{let k=w+=i*r;g.push(k)})};return n(A,{children:[n(D,{onSubmit:r=>{r.preventDefault(),i&&(o(i),y(),f(g)),l(""),d(!0)},children:[e("input",{type:"text",value:i,onChange:r=>l(r.target.value.replace(",",".")),autoFocus:"on"}),e("button",{type:"submit",children:"Calcular"})]}),p&&n(q,{children:[e("thead",{children:n("tr",{children:[e("td",{children:"Semana"}),e("td",{children:"Depositar"}),e("td",{children:"Guardado"})]})}),e("tbody",{children:m.map((r,u)=>n("tr",{children:[e("td",{children:r}),e("td",{children:(r*t).toLocaleString("pt-BR",{style:"currency",currency:"BRL"})}),e("td",{children:s[u].toLocaleString("pt-BR",{style:"currency",currency:"BRL"})})]},u))})]})]})},O=a.main`
  max-width: 90%;
  margin: 0 auto;

  h1 {
    font-size: 2em;
    font-weight: bold;
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: 1.3em;
    font-weight: 600;
    line-height: 1.2em;
    margin-bottom: 1em;
  }

  @media (min-width: 1100px) {
    max-width: 90%;
  }
`,C=()=>n(O,{children:[e(x,{}),e("h1",{children:"Fa\xE7a sua simula\xE7\xE3o"}),e("h3",{children:"Informe o valor inicial do desafio."}),e(I,{})]}),G=()=>E([{path:"/",element:e($,{})},{path:"/desafio",element:e(C,{})}]),T=()=>e(G,{});R.render(e(v.StrictMode,{children:e(S,{children:e(T,{})})}),document.getElementById("root"));
