System.register(["./vendor-legacy.c830061d.js","./mobile-legacy.893d1dcd.js"],(function(e){"use strict";var t,c,n,o;return{setters:[function(e){t=e.d,c=e.f,n=e.Z},function(e){o=e.a}],execute:function(){const s=t(o),i={msg:"",id:"",duration:2e3,center:!0,type:"text",customClass:"",bottom:30,size:"base",icon:null,textAlignCenter:!0,loadingRotate:!0,bgColor:"rgba(0, 0, 0, 1)",onClose:null,unmount:null,cover:!1,coverColor:"rgba(0, 0, 0, 0)",closeOnClickOverlay:!1};let d=[],l=[];const m=e=>{if(e){const t=document.getElementById(e);l=l.filter((t=>t.id!==e)),d=d.filter((t=>t!==e)),t&&document.body.removeChild(t)}else d.forEach((e=>{const t=document.getElementById(e);t&&document.body.removeChild(t)})),l=[],d=[]},r=e=>{let t;if(e.unmount=m,e.id){if(t=e.id,d.find((t=>t===e.id)))return(e=>{const t=document.getElementById(e.id);if(t){const o=l.find((t=>t.id===e.id));e=o?{...i,...o,...e}:{...i,...e};const d=c(s,e);return n(d,t),d.component.ctx}})(e)}else t=(new Date).getTime()+"";(e={...i,...e}).id=t,d.push(e.id),l.push(e);const o=document.createElement("div");o.id=e.id;const r=c(s,e);return n(r,o),document.body.appendChild(o),console.log(r.component),r.component.ctx},u=e=>{e||console.warn("[NutUI Toast]: msg不能为空")};e("T",{text:(e,t={})=>(u(e),r({...t,type:"text",msg:e})),success:(e,t={})=>(u(e),r({icon:"success",...t,msg:e,type:"success"})),fail:(e,t={})=>(u(e),r({icon:"failure",...t,msg:e,type:"fail"})),warn:(e,t={})=>(u(e),r({icon:"tips",...t,msg:e,type:"warn"})),loading:(e,t={})=>r({icon:"data:image/svg+xml, %3Csvg class='icon' viewBox='0 0 1024 1024' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill='rgb(230,230,230)' d='M874.667 533.333h-192c-12.8 0-21.334-8.533-21.334-21.333 0-12.8 8.534-21.333 21.334-21.333h192c12.8 0 21.333 8.533 21.333 21.333 0 12.8-8.533 21.333-21.333 21.333zM648.533 407.467C640 416 627.2 416 618.667 407.467c-8.534-8.534-8.534-21.334 0-29.867L755.2 241.067c8.533-8.534 21.333-8.534 29.867 0 8.533 8.533 8.533 21.333 0 29.866L648.533 407.467zM512 896c-12.8 0-21.333-8.533-21.333-21.333v-192c0-12.8 8.533-21.334 21.333-21.334s21.333 8.534 21.333 21.334v192c0 12.8-8.533 21.333-21.333 21.333zm0-533.333c-12.8 0-21.333-8.534-21.333-21.334v-192c0-12.8 8.533-21.333 21.333-21.333s21.333 8.533 21.333 21.333v192c0 12.8-8.533 21.334-21.333 21.334zM270.933 782.933c-8.533 8.534-21.333 8.534-29.866 0s-8.534-21.333 0-29.866L377.6 616.533c8.533-8.533 21.333-8.533 29.867 0 8.533 8.534 8.533 21.334 0 29.867L270.933 782.933zm104.534-375.466L238.933 270.933c-8.533-8.533-8.533-21.333 0-29.866s21.334-8.534 29.867 0L405.333 377.6c8.534 8.533 8.534 21.333 0 29.867-6.4 6.4-21.333 6.4-29.866 0zM362.667 512c0 12.8-8.534 21.333-21.334 21.333h-192C136.533 533.333 128 524.8 128 512c0-12.8 8.533-21.333 21.333-21.333h192c12.8 0 21.334 8.533 21.334 21.333zm285.866 104.533l136.534 136.534c8.533 8.533 8.533 21.333 0 29.866-8.534 8.534-21.334 8.534-29.867 0L618.667 646.4c-8.534-8.533-8.534-21.333 0-29.867 6.4-6.4 21.333-6.4 29.866 0z'/%3E%3C/svg%3E",...t,msg:e,type:"loading"}),hide(){m()}})}}}));
