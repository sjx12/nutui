import{c as e}from"./mobile.697e7beb.js";import{r as l,o as n,c as s,f as o,i as r}from"./vendor.e0b7d5c2.js";import"./index.02fa2e07.js";const{createDemo:t}=e("price");var u=t({props:{}});const a={class:"demo"},c=o("h2",null,"基本用法",-1),d=o("h2",null,"无人民币符号，有千位分隔",-1),i=o("h2",null,"带人民币符号，有千位分隔，保留小数点后三位",-1);u.render=function(e,t,u,p,m,f){const b=l("nut-price"),h=l("nut-cell");return n(),s("div",a,[c,o(h,null,{default:r((()=>[o(b,{price:1010,"need-symbol":!1,thousands:!0})])),_:1}),d,o(h,null,{default:r((()=>[o(b,{price:10010.01,"need-symbol":!0,thousands:!1},null,8,["price"])])),_:1}),i,o(h,null,{default:r((()=>[o(b,{price:15213.1221,"decimal-digits":3,"need-symbol":!0,thousands:!0},null,8,["price"])])),_:1})])};export default u;
