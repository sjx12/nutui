var t=Object.defineProperty,e=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,a,l)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:l}):e[a]=l;import{c as i}from"./mobile.ddaa7463.js";import{_ as o}from"./index.8b2edc29.js";import{a as d,m as u,A as f,r as p,e as b,j as r,k as _,c as m,s as h,g as y,o as g,F as T,i as j,t as w,l as v}from"./vendor.9cc7b6f2.js";const{createDemo:O}=i("tab"),x=O({props:{},setup(){const t=d({editList:[{title:"标签一"},{title:"标签二"}]}),i=u(1);return o=((t,e)=>{for(var a in e||(e={}))n.call(e,a)&&c(t,a,e[a]);if(l)for(var a of l(e))s.call(e,a)&&c(t,a,e[a]);return t})({},f(t)),e(o,a({defaultIndexs:i,changeList:function(){t.editList.push({title:"标签"+t.editList.length})},switchTab:function(t){console.log(t)}}));var o}}),L={class:"demo full"},k=y("h2",null,"基础用法，默认tab-title宽度均分相等",-1),P=y("p",{class:"content"},"这里是页签全部内容",-1),I=y("p",{class:"content"},"这里是页签待付款内容",-1),S=y("p",{class:"content"},"这里是页签待收获内容",-1),C=y("p",{class:"content"},"这里是页签已完成内容",-1),D=y("h2",null,"defaultIndex设置默认显示tab,iconType为half时切换选中icon样式",-1),A=y("h2",null,"switchTab监听切换tab返回事件",-1),E=y("p",{class:"content"},"这里是页签全部内容",-1),F=y("p",{class:"content"},"这里是页签待付款内容",-1),q=y("p",{class:"content"},"这里是页签待收获内容",-1),z=y("p",{class:"content"},"这里是页签已完成内容",-1),B=y("h2",null," animatedTime 开启切换标签内容时的转场动画时间",-1),G=y("p",{class:"content"},"这里是页签全部内容",-1),H=y("p",{class:"content"},"这里是页签待付款内容",-1),J=y("p",{class:"content"},"这里是页签待收获内容",-1),K=y("p",{class:"content"},"这里是页签已完成内容",-1),M=y("h2",null," 禁止tab内容滑动",-1),N=y("p",{class:"content"},"这里是页签全部内容",-1),Q=y("p",{class:"content"},"这里是页签待付款内容",-1),R=y("p",{class:"content"},"这里是页签待收获内容",-1),U=y("p",{class:"content"},"这里是页签已完成内容",-1),V=y("h2",null,' 设置scrollType="scroll"，标签栏可以在水平方向上滚动，切换时会自动将当前标签居中。',-1),W=y("p",{class:"content"},"这里是页签全部内容",-1),X=y("p",{class:"content"},"这里是页签待付款内容",-1),Y=y("p",{class:"content"},"这里是页签待收获内容",-1),Z=y("p",{class:"content"},"这里是页签已完成内容",-1),$=y("p",{class:"content"},"这里是页签已取消内容",-1),tt=y("p",{class:"content"},"这里是页签待评价内容",-1),et=y("h2",null,"设置slot:header可以自定义标签",-1),at=y("p",{class:"content"},"这里是页签全部内容",-1),lt=y("p",{class:"content"},"这里是页签待付款内容",-1),nt=y("p",{class:"content"},"这里是页签待收获内容",-1),st=y("p",{class:"content"},"这里是页签已完成内容",-1),ct=y("p",{class:"content"},"这里是页签已取消内容",-1),it=y("p",{class:"content"},"这里是页签待评价内容",-1),ot=y("h2",null,"左右tab布局",-1),dt=y("p",{class:"content"},"这里是页签一内容",-1),ut=y("p",{class:"content"},"这里是页签二内容",-1),ft=y("p",{class:"content"},"这里是页签三内容",-1),pt=y("p",{class:"content"},"这里是页签四内容",-1),bt=y("p",{class:"content"},"这里是页签五内容",-1),rt=y("p",{class:"content"},"这里是页签六内容",-1),_t=y("p",{class:"content"},"这里是页签七内容",-1),mt=y("h2",null,"异步操作",-1),ht={class:"content"},yt=v("改变数据");var gt=o(x,[["render",function(t,e,a,l,n,s){const c=p("nut-tab-panel"),i=p("nut-tab"),o=p("nut-icon"),d=p("nut-button");return g(),b("div",L,[k,r(i,null,{default:_((()=>[r(c,{"tab-title":"全部"},{default:_((()=>[P])),_:1}),r(c,{"tab-title":"待付款"},{default:_((()=>[I])),_:1}),r(c,{"tab-title":"待收获"},{default:_((()=>[S])),_:1}),r(c,{"tab-title":"已完成"},{default:_((()=>[C])),_:1})])),_:1}),D,A,r(i,{"default-index":t.defaultIndexs,onSwitchTab:t.switchTab},{default:_((()=>[r(c,{"tab-title":"全部"},{default:_((()=>[E])),_:1}),r(c,{"tab-title":"待付款"},{default:_((()=>[F])),_:1}),r(c,{"tab-title":"待收获"},{default:_((()=>[q])),_:1}),r(c,{"tab-title":"已完成"},{default:_((()=>[z])),_:1})])),_:1},8,["default-index","onSwitchTab"]),B,r(i,{"animated-time":500},{default:_((()=>[r(c,{"tab-title":"全部"},{default:_((()=>[G])),_:1}),r(c,{"tab-title":"待付款"},{default:_((()=>[H])),_:1}),r(c,{"tab-title":"待收获"},{default:_((()=>[J])),_:1}),r(c,{"tab-title":"已完成"},{default:_((()=>[K])),_:1})])),_:1}),M,r(i,{"no-swiping":!0},{default:_((()=>[r(c,{"tab-title":"全部"},{default:_((()=>[N])),_:1}),r(c,{"tab-title":"待付款"},{default:_((()=>[Q])),_:1}),r(c,{"tab-title":"待收获"},{default:_((()=>[R])),_:1}),r(c,{"tab-title":"已完成"},{default:_((()=>[U])),_:1})])),_:1}),V,r(i,{"animated-time":500,scrollType:"scroll"},{default:_((()=>[r(c,{"tab-title":"全部"},{default:_((()=>[W])),_:1}),r(c,{"tab-title":"待付款"},{default:_((()=>[X])),_:1}),r(c,{"tab-title":"待收获"},{default:_((()=>[Y])),_:1}),r(c,{"tab-title":"已完成"},{default:_((()=>[Z])),_:1}),r(c,{"tab-title":"已取消"},{default:_((()=>[$])),_:1}),r(c,{"tab-title":"待评价"},{default:_((()=>[tt])),_:1})])),_:1}),et,r(i,{scrollType:"scroll"},{default:_((()=>[r(c,{"tab-title":"全部"},{header:_((()=>[r(o,{name:"dongdong"})])),default:_((()=>[at])),_:1}),r(c,{"tab-title":"待付款"},{default:_((()=>[lt])),_:1}),r(c,{"tab-title":"待收获"},{default:_((()=>[nt])),_:1}),r(c,{"tab-title":"已完成"},{default:_((()=>[st])),_:1}),r(c,{"tab-title":"已取消"},{default:_((()=>[ct])),_:1}),r(c,{"tab-title":"待评价"},{default:_((()=>[it])),_:1})])),_:1}),ot,r(i,{direction:"vertical","animated-time":500,"default-index":2,scrollType:"scroll","icon-type":"half"},{default:_((()=>[r(c,{"tab-title":"页签一"},{default:_((()=>[dt])),_:1}),r(c,{"tab-title":"页签二"},{default:_((()=>[ut])),_:1}),r(c,{"tab-title":"页签三"},{default:_((()=>[ft])),_:1}),r(c,{"tab-title":"页签四"},{default:_((()=>[pt])),_:1}),r(c,{"tab-title":"页签五"},{default:_((()=>[bt])),_:1}),r(c,{"tab-title":"页签六"},{default:_((()=>[rt])),_:1}),r(c,{"tab-title":"页签七"},{default:_((()=>[_t])),_:1})])),_:1}),mt,t.editList.length>0?(g(),m(i,{key:0,"animated-time":500},{default:_((()=>[(g(!0),b(T,null,j(t.editList,((t,e)=>(g(),m(c,{"tab-title":t.title,key:e},{default:_((()=>[y("p",ht,"这里是页签"+w(e)+"内容",1)])),_:2},1032,["tab-title"])))),128))])),_:1})):h("",!0),r(d,{type:"primary",onClick:t.changeList},{default:_((()=>[yt])),_:1},8,["onClick"])])}]]);export{gt as default};