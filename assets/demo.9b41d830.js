import{c as s}from"./mobile.697e7beb.js";import{a as e,s as t,x as a,r as o,o as l,c as n,f as c,q as d,j as r}from"./vendor.e0b7d5c2.js";import"./index.02fa2e07.js";const{createDemo:u}=s("overlay");var h=u({props:{},setup:()=>({state:e({show:!1,show2:!1})})});const p=d("data-v-61ce3514");t("data-v-61ce3514");const w={class:"demo"},i=c("h2",null,"基础用法",-1),f=r("显示遮罩层"),v=c("h2",null,"嵌套内容",-1),m=r("嵌套内容"),_=c("div",{class:"wrapper"},[c("div",{class:"content"},"这里是正文")],-1);a();const b=p(((s,e,t,a,d,r)=>{const u=o("nut-button"),h=o("nut-overlay"),b=o("nut-cell");return l(),n("div",w,[i,c(b,null,{default:p((()=>[c(u,{type:"primary",onClick:e[1]||(e[1]=e=>s.state.show=!0)},{default:p((()=>[f])),_:1}),c(h,{show:s.state.show,"onUpdate:show":e[2]||(e[2]=e=>s.state.show=e),"z-index":2e3},null,8,["show"])])),_:1}),v,c(b,null,{default:p((()=>[c(u,{type:"success",onClick:e[3]||(e[3]=e=>s.state.show2=!0)},{default:p((()=>[m])),_:1}),c(h,{show:s.state.show2,"onUpdate:show":e[4]||(e[4]=e=>s.state.show2=e),"z-index":2e3},{default:p((()=>[_])),_:1},8,["show"])])),_:1})])}));h.render=b,h.__scopeId="data-v-61ce3514";export default h;
