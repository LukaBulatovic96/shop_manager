(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-528e333f"],{"04a9":function(t,e,n){"use strict";n("7e21")},"5b8f":function(t,e,n){"use strict";n.r(e);n("4de4"),n("b0c0"),n("a9e3");var r=n("7a23"),c=Object(r["I"])("data-v-754a738c");Object(r["t"])("data-v-754a738c");var a={class:"addItemDiv"},i=Object(r["h"])("h4",{id:"dodajH4"},"Dodaj Proizvod",-1),u={class:"card-body"},o={class:"form-group"},s=Object(r["h"])("label",{for:"name"},"Naziv",-1),l={class:"form-group"},b=Object(r["h"])("label",{for:"price"},"Cena",-1),d={class:"form-group"},m=Object(r["h"])("label",{for:"quantity"},"Kolicina",-1),p=Object(r["h"])("input",{class:"btn btn-dark",type:"submit",value:"submit"},null,-1),h={class:"ItemsNaslovFilterDiv"},j=Object(r["h"])("h2",{id:"ItemsH2"},"Proizvodi",-1),f={class:"centriraj50"},O={class:"centriraj"},v={class:"firstDiv"},y={class:"secondDiv"},g={class:"thirdDiv"},I={class:"input-group mb-3"},k={class:"input-group-append"},w={class:"fifthDiv"};Object(r["r"])();var q=c((function(t,e,n,c,q,C){return Object(r["q"])(),Object(r["d"])(r["a"],null,[Object(r["h"])("div",a,[i,Object(r["h"])("div",u,[Object(r["h"])("form",{onSubmit:e[4]||(e[4]=Object(r["H"])((function(){return C.postItemThis.apply(C,arguments)}),["prevent"]))},[Object(r["h"])("div",o,[s,Object(r["G"])(Object(r["h"])("input",{id:"name",class:"form-control",type:"text",name:"name",placeholder:"Naziv","onUpdate:modelValue":e[1]||(e[1]=function(t){return q.name=t})},null,512),[[r["C"],q.name]])]),Object(r["h"])("div",l,[b,Object(r["G"])(Object(r["h"])("input",{id:"price",class:"form-control",type:"number",name:"price",placeholder:"Cena","onUpdate:modelValue":e[2]||(e[2]=function(t){return q.price=t})},null,512),[[r["C"],q.price]])]),Object(r["h"])("div",d,[m,Object(r["G"])(Object(r["h"])("input",{id:"quantity",class:"form-control",type:"number",name:"quantity",placeholder:"Kolicina","onUpdate:modelValue":e[3]||(e[3]=function(t){return q.quantity=t})},null,512),[[r["C"],q.quantity]])]),p],32)])]),Object(r["h"])("div",h,[j,Object(r["h"])("div",f,[Object(r["G"])(Object(r["h"])("input",{id:"filter",type:"text",class:"form-control","onUpdate:modelValue":e[5]||(e[5]=function(e){return t.filter=e})},null,512),[[r["C"],t.filter]]),Object(r["h"])("div",O,[Object(r["h"])("button",{id:"filterBtn",class:"btn btn-dark",onClick:e[6]||(e[6]=function(e){return t.filterItems(t.filter)})},"Filter")])])]),(Object(r["q"])(!0),Object(r["d"])(r["a"],null,Object(r["w"])(t.filteredItems,(function(t,e){return Object(r["q"])(),Object(r["d"])("div",{class:"grid-container5",key:t.name},[Object(r["h"])("div",v," Naziv: "+Object(r["z"])(t.name),1),Object(r["h"])("div",y," Cena: "+Object(r["z"])(t.price)+"din ",1),Object(r["h"])("div",g," Kolicina: "+Object(r["z"])(t.quantity),1),Object(r["h"])("div",I,[Object(r["G"])(Object(r["h"])("input",{"onUpdate:modelValue":function(t){return q.quant[e]=t},class:"form-control"},null,8,["onUpdate:modelValue"]),[[r["C"],q.quant[e]]]),Object(r["h"])("div",k,[Object(r["h"])("button",{class:"btn btn-dark",onClick:function(n){return C.changeQuantity(t.name,Number(q.quant[e]))}},"+",8,["onClick"]),Object(r["h"])("button",{class:"btn btn-dark",onClick:function(n){return C.changeQuantity(t.name,-Number(q.quant[e]))}},"-",8,["onClick"])])]),Object(r["h"])("div",w,[Object(r["h"])("button",{class:"btn btn-dark",onClick:function(e){return C.deleteItemThis(t._id)}},"ukloni",8,["onClick"])])])})),128))],64)})),C=(n("96cf"),n("1da1")),x=n("5530"),z=n("5502"),R=(n("b7e4"),{data:function(){return{name:"",price:"",quantity:"",quant:{}}},computed:Object(z["c"])(["items","filteredItems"]),methods:Object(x["a"])(Object(x["a"])({},Object(z["b"])(["getItems","postItem","addQuantity","filterItems","deleteItem"])),{},{postItemThis:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n={name:t.name,price:t.price,quantity:t.quantity},e.next=3,t.postItem(n);case 3:return e.next=5,t.getItems();case 5:case"end":return e.stop()}}),e)})))()},deleteItemThis:function(t){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,e.deleteItem(t);case 2:return n.next=4,e.getItems(t);case 4:case"end":return n.stop()}}),n)})))()},changeQuantity:function(){var t=Object(C["a"])(regeneratorRuntime.mark((function t(e,n){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e+"||"+n),r={itemName:e,quantity:n},t.next=4,this.addQuantity(r);case 4:return t.next=6,this.getItems();case 6:case"end":return t.stop()}}),t,this)})));function e(e,n){return t.apply(this,arguments)}return e}()}),created:function(){var t=this;return Object(C["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getItems();case 2:case"end":return e.stop()}}),e)})))()}});n("04a9");R.render=q,R.__scopeId="data-v-754a738c";e["default"]=R},"7e21":function(t,e,n){}}]);
//# sourceMappingURL=chunk-528e333f.2c1aba48.js.map