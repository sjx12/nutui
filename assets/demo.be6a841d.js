var e=Object.assign;import{c as o}from"./mobile.697e7beb.js";import{a as s,k as t,z as n,s as c,x as d,r as l,o as a,c as i,f as r,q as m}from"./vendor.e0b7d5c2.js";import"./index.02fa2e07.js";const{createDemo:u}=o("address");var h=u({props:{},setup(){const o=s({province:[{id:1,name:"北京"},{id:2,name:"广西"},{id:3,name:"江西"},{id:4,name:"四川"}],city:[{id:7,name:"朝阳区"},{id:8,name:"崇文区"},{id:9,name:"昌平区"},{id:6,name:"石景山区"}],country:[{id:3,name:"八里庄街道"},{id:9,name:"北苑"},{id:4,name:"常营乡"}],town:[]}),c=s({normal:!1,exist:!1,customImg:!1,other:!1}),d=s({selectedIcon:"heart-fill",defaultIcon:"heart1",closeBtnIcon:"close",backBtnIcon:"left"}),l=t([{id:1,addressDetail:"th ",cityName:"石景山区",countyName:"城区",provinceName:"北京",selectedAddress:!0,townName:""},{id:2,addressDetail:"12_ ",cityName:"电饭锅",countyName:"扶绥县",provinceName:"北京",selectedAddress:!1,townName:""},{id:3,addressDetail:"发大水比 ",cityName:"放到",countyName:"广宁街道",provinceName:"钓鱼岛全区",selectedAddress:!1,townName:""},{id:4,addressDetail:"还是想吧百度吧 ",cityName:"研发",countyName:"八里庄街道",provinceName:"北京",selectedAddress:!1,townName:""}]),a=s({one:"请选择地址",two:"请选择地址",three:"请选择地址",four:"请选择地址"});return e(e(e(e({showAddress:()=>{c.normal=!c.normal},showPopup:c,onChange:(e,s)=>{o[e.next].length<1&&(c[s]=!1)},close1:e=>{console.log(e),a.one=e.data.addressStr},showAddressExist:()=>{c.exist=!0},close2:e=>{if(console.log(e),"exist"==e.type){const{provinceName:o,cityName:s,countyName:t,townName:n,addressDetail:c}=e.data;a.two=o+s+t+n+c}else a.two=e.data.addressStr},selected:(e,o,s)=>{console.log(e),console.log(o)},existAddress:l,showAddressOther:()=>{c.other=!0},showCustomImg:()=>{c.customImg=!0},close3:e=>{if(console.log(e),"exist"==e.type){const{provinceName:o,cityName:s,countyName:t,townName:n,addressDetail:c}=e.data;a.three=o+s+t+n+c}else a.three=e.data.addressStr},close4:e=>{if(console.log(e),"exist"==e.type){const{provinceName:o,cityName:s,countyName:t,townName:n,addressDetail:c}=e.data;a.four=o+s+t+n+c}else a.four=e.data.addressStr},switchModule:e=>{"custom"==e.type?console.log("点击了“选择其他地址”按钮"):console.log("点击了自定义地址左上角的返回按钮")},closeMask:e=>{console.log("关闭弹层",e)}},n(d)),n(a)),n(c)),n(o))}});const w=m("data-v-2ced430b");c("data-v-2ced430b");const p={class:"demo"},y=r("h2",null,"选择自定义地址",-1),C=r("h2",null,"选择已有地址",-1),x=r("h2",null,"自定义图标",-1),N=r("h2",null,"自定义地址与已有地址切换",-1);d();const g=w(((e,o,s,t,n,c)=>{const d=l("nut-cell"),m=l("nut-address");return a(),i("div",p,[y,r(d,{title:"选择地址",desc:e.one,"is-link":"",onClick:e.showAddress},null,8,["desc","onClick"]),r(m,{show:e.normal,"onUpdate:show":o[1]||(o[1]=o=>e.normal=o),province:e.province,city:e.city,country:e.country,town:e.town,onOnChange:o[2]||(o[2]=o=>e.onChange(o,"normal")),onClose:e.close1,customAddressTitle:"请选择所在地区"},null,8,["show","province","city","country","town","onClose"]),C,r(d,{title:"选择地址",desc:e.two,"is-link":"",onClick:e.showAddressExist},null,8,["desc","onClick"]),r(m,{show:e.exist,"onUpdate:show":o[3]||(o[3]=o=>e.exist=o),type:"exist",existAddress:e.existAddress,onOnChange:o[4]||(o[4]=o=>e.onChange(o,"exist")),onClose:e.close2,isShowCustomAddress:!1,onSelected:e.selected,existAddressTitle:"配送至"},null,8,["show","existAddress","onClose","onSelected"]),x,r(d,{title:"选择地址",desc:e.three,"is-link":"",onClick:e.showCustomImg},null,8,["desc","onClick"]),r(m,{show:e.customImg,"onUpdate:show":o[5]||(o[5]=o=>e.customImg=o),type:"exist",existAddress:e.existAddress,onOnChange:o[6]||(o[6]=o=>e.onChange(o,"customImg")),onClose:e.close3,isShowCustomAddress:!1,onSelected:e.selected,defaultIcon:e.defaultIcon,selectedIcon:e.selectedIcon,closeBtnIcon:e.closeBtnIcon},null,8,["show","existAddress","onClose","onSelected","defaultIcon","selectedIcon","closeBtnIcon"]),N,r(d,{title:"选择地址",desc:e.four,"is-link":"",onClick:e.showAddressOther},null,8,["desc","onClick"]),r(m,{show:e.other,"onUpdate:show":o[7]||(o[7]=o=>e.other=o),type:"exist",existAddress:e.existAddress,province:e.province,city:e.city,country:e.country,town:e.town,backBtnIcon:e.backBtnIcon,onOnChange:o[8]||(o[8]=o=>e.onChange(o,"other")),onClose:e.close4,onSelected:e.selected,customAndExistTitle:"选择其他地址",onSwitchModule:e.switchModule,onCloseMask:e.closeMask},null,8,["show","existAddress","province","city","country","town","backBtnIcon","onClose","onSelected","onSwitchModule","onCloseMask"])])}));h.render=g,h.__scopeId="data-v-2ced430b";export default h;
