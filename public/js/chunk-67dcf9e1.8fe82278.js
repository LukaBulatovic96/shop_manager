(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67dcf9e1"],{"2ca0":function(e,t,n){"use strict";var a=n("23e7"),r=n("06cf").f,c=n("50c4"),i=n("5a34"),o=n("1d80"),u=n("ab13"),s=n("c430"),l="".startsWith,d=Math.min,m=u("startsWith"),b=!s&&!m&&!!function(){var e=r(String.prototype,"startsWith");return e&&!e.writable}();a({target:"String",proto:!0,forced:!b&&!m},{startsWith:function(e){var t=String(o(this));i(e);var n=c(d(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return l?l.call(t,a,n):t.slice(n,n+a.length)===a}})},a389:function(e,t,n){"use strict";n.r(t);n("4de4"),n("b0c0");var a=n("7a23"),r=Object(a["I"])("data-v-4e36dd16");Object(a["t"])("data-v-4e36dd16");var c={class:"home"},i={class:"addTreatmanDiv"},o=Object(a["h"])("h4",{id:"dodajH4"},"Dodaj tretman",-1),u={class:"card-body"},s={class:"form-group"},l=Object(a["h"])("label",{for:"name"},"Naziv",-1),d={class:"form-group"},m=Object(a["h"])("label",{for:"price"},"Cena",-1),b={class:"form-group"},h=Object(a["h"])("label",{for:"price"},"Trajanje tretmana",-1),j={class:"form-group row"},O={class:"col-5"},p=Object(a["h"])("label",null,":",-1),f={class:"col-5"},v=Object(a["h"])("input",{type:"submit",class:"btn btn-dark",value:"submit"},null,-1),T={class:"tretmaniNaslovFilterDiv"},g=Object(a["h"])("h2",{id:"tretmaniH2"},"Tretmani",-1),k={class:"centriraj50"},w={class:"centriraj"},N={class:"firstDiv"},I={class:"secondDiv"},C={class:"thirdDiv"},z={key:0},y={key:1},x={class:"fourthDiv"},H={class:"itemsList"},M=Object(a["h"])("h5",null,"Proizvodi",-1),V={class:"additemPanel"},D={class:"form-group"},R=Object(a["h"])("label",null,"Naziv proizvoda",-1),U={class:"checkedItemsList"};Object(a["r"])();var q=r((function(e,t,n,r,q,G){return Object(a["q"])(),Object(a["d"])("div",c,[Object(a["h"])("div",i,[o,Object(a["h"])("div",u,[Object(a["h"])("form",{onSubmit:t[5]||(t[5]=Object(a["H"])((function(){return G.postTreatmanThis.apply(G,arguments)}),["prevent"]))},[Object(a["h"])("div",s,[l,Object(a["G"])(Object(a["h"])("input",{id:"name",class:"form-control",type:"text",name:"name",placeholder:"Naziv","onUpdate:modelValue":t[1]||(t[1]=function(e){return q.name=e})},null,512),[[a["C"],q.name]])]),Object(a["h"])("div",d,[m,Object(a["G"])(Object(a["h"])("input",{id:"price",class:"form-control",type:"number",name:"price",placeholder:"Cena","onUpdate:modelValue":t[2]||(t[2]=function(e){return q.price=e})},null,512),[[a["C"],q.price]])]),Object(a["h"])("div",b,[h,Object(a["h"])("div",j,[Object(a["h"])("div",O,[Object(a["G"])(Object(a["h"])("input",{id:"durationH",type:"number",class:"form-control",name:"durationH",placeholder:"durationH","onUpdate:modelValue":t[3]||(t[3]=function(e){return q.durationH=e})},null,512),[[a["C"],q.durationH]])]),p,Object(a["h"])("div",f,[Object(a["G"])(Object(a["h"])("input",{id:"durationM",type:"number",class:"form-control",name:"durationM",placeholder:"durationM","onUpdate:modelValue":t[4]||(t[4]=function(e){return q.durationM=e})},null,512),[[a["C"],q.durationM]])])])]),v],32)])]),Object(a["h"])("div",T,[g,Object(a["h"])("div",k,[Object(a["G"])(Object(a["h"])("input",{id:"filter",type:"text",class:"form-control","onUpdate:modelValue":t[6]||(t[6]=function(e){return q.filter=e})},null,512),[[a["C"],q.filter]]),Object(a["h"])("div",w,[Object(a["h"])("button",{id:"filterBtn",class:"btn btn-dark",onClick:t[7]||(t[7]=function(t){return e.filterTreatmans(q.filter)})},"Filter")])])]),(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(e.filteredTreatmans,(function(e,t){return Object(a["q"])(),Object(a["d"])("div",{class:"grid-containerTreatman",key:e.name},[Object(a["h"])("div",N,[Object(a["h"])("h5",null," Naziv: "+Object(a["z"])(e.name),1)]),Object(a["h"])("div",I,[Object(a["h"])("h5",null," Cena: "+Object(a["z"])(e.price)+"din ",1)]),Object(a["h"])("div",C,[e.duration%60<10?(Object(a["q"])(),Object(a["d"])("h5",z," Trajanje: "+Object(a["z"])(Math.floor(e.duration/60))+":0"+Object(a["z"])(e.duration%60),1)):Object(a["e"])("",!0),e.duration%60>=10?(Object(a["q"])(),Object(a["d"])("h5",y," Trajanje: "+Object(a["z"])(Math.floor(e.duration/60))+":"+Object(a["z"])(e.duration%60),1)):Object(a["e"])("",!0)]),Object(a["h"])("div",x,[Object(a["h"])("button",{class:"btn btn-dark",onClick:function(t){return G.deleteTreatmanThis(e._id)}},"Ukloni",8,["onClick"])]),Object(a["h"])("div",H,[M,Object(a["h"])("ul",null,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(e.itemName,(function(e){return Object(a["q"])(),Object(a["d"])("li",{key:e},Object(a["z"])(e),1)})),128))])]),Object(a["h"])("div",V,[Object(a["h"])("div",D,[R,Object(a["G"])(Object(a["h"])("input",{class:"form-control","onUpdate:modelValue":function(e){return q.itemNameInput[t]=e}},null,8,["onUpdate:modelValue"]),[[a["C"],q.itemNameInput[t]]]),Object(a["h"])("button",{class:"btn btn-dark",onClick:function(n){return G.addItemToTreatman(e.name,q.itemNameInput[t])}},"Dodaj",8,["onClick"]),Object(a["h"])("button",{class:"btn btn-dark",onClick:function(e){return G.checkItems(q.itemNameInput[t],t)}},"proveri u bazi",8,["onClick"])])]),Object(a["h"])("div",U,Object(a["z"])(q.checkValue[t]),1)])})),128))])})),G=(n("a9e3"),n("2ca0"),n("96cf"),n("1da1")),S=n("5530"),W=n("5502"),L=(n("f50d"),n("b7e4"),{data:function(){return{name:"",price:"",duration:0,durationM:0,durationH:0,itemNameInput:[],treatmanItemData:{},itemNames:[],filter:"",checkValue:[]}},computed:Object(W["c"])(["treatmans","filteredTreatmans","items"]),methods:Object(S["a"])(Object(S["a"])({},Object(W["b"])(["getTreatmans","postTreatman","putItemToTreatman","filterTreatmans","getItems","fillItemNames","deleteTreatman"])),{},{postTreatmanThis:function(){var e=this;return Object(G["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={name:e.name,price:e.price,duration:60*Number(e.durationH)+Number(e.durationM)},t.next=3,e.postTreatman(n);case 3:return t.next=5,e.getTreatmans();case 5:case"end":return t.stop()}}),t)})))()},deleteTreatmanThis:function(e){var t=this;return Object(G["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.deleteTreatman(e);case 2:return n.next=4,t.getTreatmans();case 4:case"end":return n.stop()}}),n)})))()},addItemToTreatman:function(){var e=Object(G["a"])(regeneratorRuntime.mark((function e(t,n){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(n),a={treatmanName:t,itemName:n},e.next=4,this.putItemToTreatman(a);case 4:return e.next=6,this.getTreatmans();case 6:case"end":return e.stop()}}),e,this)})));function t(t,n){return e.apply(this,arguments)}return t}(),fillItemNames:function(){var e=this;return Object(G["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getItems();case 2:for(n=0;n<e.items.length;n++)a=e.items[n].name.toLowerCase(),e.itemNames.push(a);case 3:case"end":return t.stop()}}),t)})))()},checkItems:function(e,t){var n,a=e.toLowerCase(),r="{ ";for(n=0;n<this.itemNames.length;n++)this.itemNames[n].startsWith(a)&&(r=r+this.itemNames[n]+" ");r+="}",this.checkValue[t]=r}}),created:function(){this.getTreatmans(),this.fillItemNames()}});n("fb67");L.render=q,L.__scopeId="data-v-4e36dd16";t["default"]=L},ea70:function(e,t,n){},fb67:function(e,t,n){"use strict";n("ea70")}}]);
//# sourceMappingURL=chunk-67dcf9e1.8fe82278.js.map