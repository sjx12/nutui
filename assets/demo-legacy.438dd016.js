System.register(["./mobile-legacy.893d1dcd.js","./vendor-legacy.c830061d.js","./index-legacy.bba154b7.js"],(function(e){"use strict";var t,i,l,n,s,o;return{setters:[function(e){t=e.c},function(e){i=e.k,l=e.r,n=e.o,s=e.c,o=e.f},function(){}],execute:function(){const{createDemo:c}=t("picker");var a=e("default",c({props:{},setup(){const e=["南京市","无锡市","海北藏族自治区","北京市","连云港市","浙江市","江苏市"],t=[{values:["周一","周二","周三","周四","周五"],defaultIndex:2},{values:["上午","下午","晚上"],defaultIndex:1}],l=[{text:"浙江",children:[{text:"杭州",children:[{text:"西湖区"},{text:"余杭区"}]},{text:"温州",children:[{text:"鹿城区"},{text:"瓯海区"}]}]},{text:"福建",children:[{text:"福州",children:[{text:"鼓楼区"},{text:"台江区"}]},{text:"厦门",children:[{text:"思明区"},{text:"海沧区"}]}]}],n=i(!1),s=i(!1),o=i(!1),c=[n,s,o],a=i(e[0]),d=i(`${t[0].values[t[0].defaultIndex]} ${t[1].values[t[1].defaultIndex]}`),r=i(`${l[0].text} \n      ${l[0].children[0].text} \n      ${l[0].children[0].children[0].text}`);return{listData1:e,listData2:t,listData3:l,show:n,show2:s,show3:o,desc:a,desc2:d,desc3:r,open:e=>{c[e-1].value=!0},confirm:e=>{a.value=e},confirm2:e=>{d.value=e.join(" ")},confirm3:e=>{r.value=e.join(" ")}}}}));const d={class:"demo"},r=o("h2",null,"基础用法",-1),u=o("h2",null,"多列样式",-1),f=o("h2",null,"多级联动",-1);a.render=function(e,t,i,c,a,x){const h=l("nut-cell"),v=l("nut-picker");return n(),s("div",d,[r,o(h,{title:"请选择城市",desc:e.desc,onClick:t[1]||(t[1]=t=>e.open(1))},null,8,["desc"]),u,o(h,{title:"请选择时间",desc:e.desc2,onClick:t[2]||(t[2]=t=>e.open(2))},null,8,["desc"]),f,o(h,{title:"请选择地址",desc:e.desc3,onClick:t[3]||(t[3]=t=>e.open(3))},null,8,["desc"]),o(v,{"is-visible":e.show,"onUpdate:is-visible":t[4]||(t[4]=t=>e.show=t),"list-data":e.listData1,title:"城市选择",onConfirm:e.confirm,onClose:e.close},null,8,["is-visible","list-data","onConfirm","onClose"]),o(v,{"is-visible":e.show2,"onUpdate:is-visible":t[5]||(t[5]=t=>e.show2=t),"list-data":e.listData2,title:"多列选择",onConfirm:e.confirm2,onClose:e.close},null,8,["is-visible","list-data","onConfirm","onClose"]),o(v,{"is-visible":e.show3,"onUpdate:is-visible":t[6]||(t[6]=t=>e.show3=t),"list-data":e.listData3,title:"地址选择",onConfirm:e.confirm3},null,8,["is-visible","list-data","onConfirm"])])}}}}));
