"use strict";(self["webpackChunkphotoslide"]=self["webpackChunkphotoslide"]||[]).push([[305],{409:function(e,l,t){t.d(l,{Z:function(){return c}});var n=t(252),a=t(577);const r=["disabled","title"];function i(e,l,t,i,o,d){return(0,n.wg)(),(0,n.iD)("button",{type:"button",disabled:e.disabled,title:e.title,class:(0,a.C_)(["button-basic",e.color&&`button-basic--color-${e.color}`]),onClick:l[0]||(l[0]=l=>e.$emit("click"))},[(0,n.WI)(e.$slots,"default",{},void 0,!0)],10,r)}var o=(0,n.aZ)({name:"ButtonBasic",props:{type:String,title:String,color:String,disabled:Boolean},emits:{click:null}}),d=t(744);const s=(0,d.Z)(o,[["render",i],["__scopeId","data-v-ba84435a"]]);var c=s},705:function(e,l,t){t.d(l,{Z:function(){return m}});var n=t(252),a=t(577);const r=["name","id","required","value","disabled"],i={key:0,value:"",disabled:!1};function o(e,l,t,o,d,s){const c=(0,n.up)("Icon");return(0,n.wg)(),(0,n.iD)("label",{class:(0,a.C_)(["form","form-select",e.disabled&&"form-select--disabled"])},[(0,n._)("select",{name:e.name,id:e.id,required:e.required,value:e.modelValue,disabled:e.disabled,class:"form-select__body",onChange:l[0]||(l[0]=(...l)=>e.onChange&&e.onChange(...l)),onBlur:l[1]||(l[1]=l=>e.$emit("blur:modelValue",l.target.value))},[e.placeholder?((0,n.wg)(),(0,n.iD)("option",i,(0,a.zw)(e.placeholder),1)):(0,n.kq)("",!0),(0,n.WI)(e.$slots,"default",{},void 0,!0)],40,r),(0,n.Wm)(c,{"icon-name":"arrow-down",class:"form-select__icon"})],2)}var d=t(875),s=t(698),c=(0,n.aZ)({name:"FormSelect",components:{Icon:s.Z},props:{name:{type:String,required:!0},id:String,disabled:Boolean,required:Boolean,placeholder:{type:[String,null],default:null},modelType:String,modelValue:[String,Number]},setup(e,l){function t(t){l.emit("update:modelValue",d.Ge(e.modelType,t.target.value))}return{onChange:t}},emits:{"update:modelValue":null,"blur:modelValue":null}}),u=t(744);const p=(0,u.Z)(c,[["render",o],["__scopeId","data-v-6eb56a14"]]);var m=p},909:function(e,l,t){t.d(l,{Z:function(){return p}});var n=t(252),a=t(577);const r=e=>((0,n.dD)("data-v-56586f56"),e=e(),(0,n.Cn)(),e),i=["name","id","required","disabled","checked"],o=r((()=>(0,n._)("i",{class:"form-switch__icon"},null,-1)));function d(e,l,t,r,d,s){return(0,n.wg)(),(0,n.iD)("label",{class:(0,a.C_)(["form","form-switch",e.disabled&&"form-switch--disabled"])},[(0,n._)("input",{type:"checkbox",name:e.name,id:e.id,required:e.required,disabled:e.disabled,checked:e.modelValue,onChange:l[0]||(l[0]=l=>e.$emit("update:modelValue",Boolean(l.target.checked))),class:"form-switch__body"},null,40,i),o],2)}var s=(0,n.aZ)({name:"FormSwitch",props:{name:{type:String,required:!0},id:String,disabled:Boolean,required:Boolean,modelValue:Boolean},emits:{"update:modelValue":null,"blur:modelValue":null}}),c=t(744);const u=(0,c.Z)(s,[["render",d],["__scopeId","data-v-56586f56"]]);var p=u},482:function(e,l,t){t.d(l,{Z:function(){return m}});var n=t(252),a=t(577);const r=["type","name","id","value","placeholder","required","min","max","step","maxlength","rows","size"],i=["type","name","id","value","placeholder","required","min","max","step","maxlength","size"];function o(e,l,t,o,d,s){return"textarea"===e.type?((0,n.wg)(),(0,n.iD)("textarea",{key:0,ref:"root",type:e.type,name:e.name,id:e.id,value:e.modelValue,placeholder:e.placeholder,required:e.required,min:e.min,max:e.max,step:e.step,maxlength:e.maxlength,rows:e.rows,size:e.size,class:(0,a.C_)(["form","form-text",e.inline&&"form-text--inline",e.color&&`form-text--color-${e.color}`]),onInput:l[0]||(l[0]=(...l)=>e.onChange&&e.onChange(...l)),onBlur:l[1]||(l[1]=l=>e.$emit("blur:modelValue",l.target.value))},null,42,r)):((0,n.wg)(),(0,n.iD)("input",{key:1,ref:"root",type:e.type,name:e.name,id:e.id,value:e.modelValue,placeholder:e.placeholder,required:e.required,min:e.min,max:e.max,step:e.step,maxlength:e.maxlength,size:e.size,class:(0,a.C_)(["form","form-text",e.inline&&"form-text--inline",e.color&&`form-text--color-${e.color}`]),onInput:l[2]||(l[2]=(...l)=>e.onChange&&e.onChange(...l)),onBlur:l[3]||(l[3]=l=>e.$emit("blur:modelValue",l.target.value))},null,42,i))}var d=t(262),s=t(875),c=(0,n.aZ)({name:"FormText",props:{type:{type:String,default:"text"},name:String,id:String,placeholder:String,required:Boolean,min:Number,max:Number,step:Number,maxlength:Number,inline:Boolean,rows:{type:Number,default:3},size:{type:Number,default:10},color:String,modelType:String,modelValue:[String,Number,Boolean,Array]},setup(e,l){const t=(0,d.iH)(0);function n(t){l.emit("update:modelValue",s.Ge(e.modelType,t.target.value))}function a(){t.value&&t.value.focus()}return{root:t,onChange:n,focus:a}},emits:{"update:modelValue":null,"blur:modelValue":null}}),u=t(744);const p=(0,u.Z)(c,[["render",o],["__scopeId","data-v-0f4796d2"]]);var m=p},305:function(e,l,t){t.r(l),t.d(l,{default:function(){return ye}});var n=t(252),a=t(577);const r=e=>((0,n.dD)("data-v-2efcbf1e"),e=e(),(0,n.Cn)(),e),i=r((()=>(0,n._)("legend",null,"General fields",-1))),o={class:"fields"},d={class:"field-basic"},s={class:"field-title"},c={for:"pref_name"},u={class:"field-description"},p={class:"field-basic__body"},m={class:"field-basic"},f={class:"field-title"},b={for:"pref_description"},_={class:"field-description"},g={class:"field-basic__body"},h=r((()=>(0,n._)("hr",{class:"field-line"},null,-1))),v={class:"field-basic"},V={class:"field-title"},C={for:"pref_language"},w={class:"field-description"},k={class:"field-basic__body"},y={value:"en"},$={value:"ko"},x=r((()=>(0,n._)("hr",{class:"field-line"},null,-1))),S={class:"field-switch"},z={class:"field-switch__body"},U={class:"field-title"},H={for:"pref_hud"},q={class:"field-description"},B={class:"field-switch__input"},Z={class:"field-switch"},W={class:"field-switch__body"},D={class:"field-title"},F={for:"pref_hoverVisibleHud"},I={class:"field-description"},N={class:"field-switch__input"},T={class:"field-basic"},R={class:"field-title"},j={for:"pref_hudContents"},A={class:"field-description"},J={class:"field-basic__body"},E={class:"field-checks"},G=r((()=>(0,n._)("hr",{class:"field-line"},null,-1))),O={class:"field-basic"},P={class:"field-title"},L={class:"field-description"},M={class:"field-basic__body"},K={class:"grid import-data"},Q={class:"field-basic"},Y={class:"field-title"},X={class:"field-description"},ee={class:"field-basic__body"};function le(e,l,t,r,le,te){const ne=(0,n.up)("FormText"),ae=(0,n.up)("FormSelect"),re=(0,n.up)("FormSwitch"),ie=(0,n.up)("FormCheckbox"),oe=(0,n.up)("ButtonBasic");return(0,n.wg)(),(0,n.iD)("fieldset",null,[i,(0,n._)("div",o,[(0,n._)("div",d,[(0,n._)("h3",s,[(0,n._)("label",c,(0,a.zw)(e.$t("preference.general.name.title")),1)]),(0,n._)("p",u,(0,a.zw)(e.$t("preference.general.name.description")),1),(0,n._)("div",p,[(0,n.Wm)(ne,{name:"pref_name",id:"pref_name",placeholder:e.$t("base.inputText"),maxlength:30,modelValue:e.state.name,"onUpdate:modelValue":[l[0]||(l[0]=l=>e.state.name=l),e.onSave]},null,8,["placeholder","modelValue","onUpdate:modelValue"])])]),(0,n._)("div",m,[(0,n._)("h3",f,[(0,n._)("label",b,(0,a.zw)(e.$t("preference.general.description.title")),1)]),(0,n._)("p",_,(0,a.zw)(e.$t("preference.general.description.description")),1),(0,n._)("div",g,[(0,n.Wm)(ne,{type:"textarea",name:"pref_description",id:"pref_description",placeholder:e.$t("base.inputText"),modelValue:e.state.description,"onUpdate:modelValue":[l[1]||(l[1]=l=>e.state.description=l),e.onSave]},null,8,["placeholder","modelValue","onUpdate:modelValue"])])]),h,(0,n._)("div",v,[(0,n._)("h3",V,[(0,n._)("label",C,(0,a.zw)(e.$t("preference.general.language.title")),1)]),(0,n._)("p",w,(0,a.zw)(e.$t("preference.general.language.description")),1),(0,n._)("div",k,[(0,n.Wm)(ae,{name:"pref_language",id:"pref_language",modelValue:e.state.language,"onUpdate:modelValue":[l[2]||(l[2]=l=>e.state.language=l),e.onSave]},{default:(0,n.w5)((()=>[(0,n._)("option",y,(0,a.zw)(e.$t("preference.general.language.option_en")),1),(0,n._)("option",$,(0,a.zw)(e.$t("preference.general.language.option_ko")),1)])),_:1},8,["modelValue","onUpdate:modelValue"])])]),x,(0,n._)("div",S,[(0,n._)("div",z,[(0,n._)("h3",U,[(0,n._)("label",H,(0,a.zw)(e.$t("preference.general.hud.title")),1)]),(0,n._)("p",q,(0,a.zw)(e.$t("preference.general.hud.description")),1)]),(0,n._)("div",B,[(0,n.Wm)(re,{name:"pref_hud",id:"pref_hud",modelValue:e.state.hud,"onUpdate:modelValue":[l[3]||(l[3]=l=>e.state.hud=l),e.onSave]},null,8,["modelValue","onUpdate:modelValue"])])]),(0,n._)("div",Z,[(0,n._)("div",W,[(0,n._)("h3",D,[(0,n._)("label",F,(0,a.zw)(e.$t("preference.general.hoverVisibleHud.title")),1)]),(0,n._)("p",I,(0,a.zw)(e.$t("preference.general.hoverVisibleHud.description")),1)]),(0,n._)("div",N,[(0,n.Wm)(re,{name:"pref_hoverVisibleHud",id:"pref_hoverVisibleHud",modelValue:e.state.hoverVisibleHud,"onUpdate:modelValue":[l[4]||(l[4]=l=>e.state.hoverVisibleHud=l),e.onSave]},null,8,["modelValue","onUpdate:modelValue"])])]),(0,n._)("div",T,[(0,n._)("h3",R,[(0,n._)("label",j,(0,a.zw)(e.$t("preference.general.visibleContents.title")),1)]),(0,n._)("p",A,(0,a.zw)(e.$t("preference.general.visibleContents.description")),1),(0,n._)("div",J,[(0,n._)("ul",E,[(0,n._)("li",null,[(0,n.Wm)(ie,{name:"pref_hudContents",id:"pref_hudContents",label:e.$t("preference.general.visibleContents.item_menu"),modelValue:e.state.visibleHudContents.menu,"onUpdate:modelValue":l[5]||(l[5]=l=>e.onUpdateHudContents("menu",l))},null,8,["label","modelValue"])]),(0,n._)("li",null,[(0,n.Wm)(ie,{name:"pref_hudContents",label:e.$t("preference.general.visibleContents.item_thumbnail"),modelValue:e.state.visibleHudContents.thumbnail,"onUpdate:modelValue":l[6]||(l[6]=l=>e.onUpdateHudContents("thumbnail",l))},null,8,["label","modelValue"])]),(0,n._)("li",null,[(0,n.Wm)(ie,{name:"pref_hudContents",label:e.$t("preference.general.visibleContents.item_caption"),modelValue:e.state.visibleHudContents.caption,"onUpdate:modelValue":l[7]||(l[7]=l=>e.onUpdateHudContents("caption",l))},null,8,["label","modelValue"])]),(0,n._)("li",null,[(0,n.Wm)(ie,{name:"pref_hudContents",label:e.$t("preference.general.visibleContents.item_controller"),modelValue:e.state.visibleHudContents.controller,"onUpdate:modelValue":l[8]||(l[8]=l=>e.onUpdateHudContents("controller",l))},null,8,["label","modelValue"])]),(0,n._)("li",null,[(0,n.Wm)(ie,{name:"pref_hudContents",label:e.$t("preference.general.visibleContents.item_paginate"),modelValue:e.state.visibleHudContents.paginate,"onUpdate:modelValue":l[9]||(l[9]=l=>e.onUpdateHudContents("paginate",l))},null,8,["label","modelValue"])]),(0,n._)("li",null,[(0,n.Wm)(ie,{name:"pref_hudContents",label:e.$t("preference.general.visibleContents.item_autoplay"),modelValue:e.state.visibleHudContents.autoplay,"onUpdate:modelValue":l[10]||(l[10]=l=>e.onUpdateHudContents("autoplay",l))},null,8,["label","modelValue"])])])])]),G,(0,n._)("div",O,[(0,n._)("h3",P,[(0,n._)("label",null,(0,a.zw)(e.$t("preference.general.backup.title")),1)]),(0,n._)("p",L,(0,a.zw)(e.$t("preference.general.backup.description")),1),(0,n._)("div",M,[(0,n._)("div",K,[(0,n._)("div",null,[(0,n.Wm)(oe,{color:"key",onClick:e.onClickBackup},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.$t("base.backup")),1)])),_:1},8,["onClick"])]),(0,n._)("div",null,[(0,n.Wm)(oe,{color:"key",onClick:e.onClickRestore},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.$t("base.restore")),1)])),_:1},8,["onClick"])])])])]),(0,n._)("div",Q,[(0,n._)("h3",Y,[(0,n._)("label",null,(0,a.zw)(e.$t("preference.general.reset.title")),1)]),(0,n._)("p",X,(0,a.zw)(e.$t("preference.general.reset.description")),1),(0,n._)("div",ee,[(0,n.Wm)(oe,{color:"danger",onClick:e.onClickReset},{default:(0,n.w5)((()=>[(0,n.Uk)((0,a.zw)(e.$t("preference.general.reset.label")),1)])),_:1},8,["onClick"])])])])])}var te=t(262),ne=t(907),ae=t(150),re=t(903),ie=t(63),oe=t(928),de=t(482),se=t(705),ce=t(909);const ue={class:"form-checkbox"},pe={class:"form-checkbox__body"},me=["name","id","required","disabled","checked"],fe={key:0,class:"form-checkbox__label"};function be(e,l,t,r,i,o){const d=(0,n.up)("Icon");return(0,n.wg)(),(0,n.iD)("label",ue,[(0,n._)("span",pe,[(0,n._)("input",{type:"checkbox",name:e.name,id:e.id,required:e.required,disabled:e.disabled,checked:e.modelValue,onChange:l[0]||(l[0]=l=>e.$emit("update:modelValue",Boolean(l.target.checked)))},null,40,me),(0,n._)("i",null,[(0,n.Wm)(d,{"icon-name":"check"})])]),e.label?((0,n.wg)(),(0,n.iD)("em",fe,(0,a.zw)(e.label),1)):(0,n.kq)("",!0)])}var _e=t(698),ge=(0,n.aZ)({name:"FormCheckbox",components:{Icon:_e.Z},props:{name:{type:String,required:!0},id:String,disabled:Boolean,required:Boolean,label:String,modelValue:Boolean},emits:{"update:modelValue":null,"blur:modelValue":null}}),he=t(744);const ve=(0,he.Z)(ge,[["render",be],["__scopeId","data-v-8df57106"]]);var Ve=ve,Ce=t(409),we=(0,n.aZ)({name:"PreferenceGeneral",components:{FormText:de.Z,FormSelect:se.Z,FormSwitch:ce.Z,FormCheckbox:Ve,ButtonBasic:Ce.Z},props:{structure:Object},setup(e,l){const t=(0,ne.oR)(),{t:n}=(0,ae.QT)({useScope:"global"});let a=(0,te.qj)({name:e.structure.name,description:e.structure.description,language:e.structure.language,hud:e.structure.hud,hoverVisibleHud:e.structure.hoverVisibleHud,visibleHudContents:re.Jl(e.structure.visibleHudContents)});function r(){const e=re.Jl(a);l.emit("update",e)}function i(e,l){a.visibleHudContents[e]=l,r()}function o(){if(!confirm(n("preference.general.confirms.backup")))return;let e={preference:re.Jl(t.state.preference),slides:re.Jl(t.state.slides)};const l=new Date;let a=`${l.getFullYear()}${oe.j(l.getMonth()+1)}${oe.j(l.getDate())}`;const r=document.createElement("a");r.setAttribute("href",`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(e,null,2))}`),r.setAttribute("download",`slideshow_${a}.json`),r.click()}function d(){return new Promise(((e,l)=>{const a=document.createElement("input");a.setAttribute("type","file"),a.setAttribute("accept","application/json"),a.addEventListener("change",(e=>{if(!(e.target.files&&e.target.files.length>0))return void alert(n("preference.general.alerts.noSelectedFile"));const l=e.target.files[0],a=new FileReader;a.onload=async e=>{try{let l=JSON.parse(String(e.target.result));if(!confirm(n("preference.general.confirms.restore")))return;if(!l.preference||!l.slides)throw new Error("no data");t.dispatch("changePreference",l.preference),t.dispatch("changeSlides",l.slides),t.dispatch("changeMode",null),t.dispatch("changeActiveSlide",l.preference.slides.initialNumber),t.commit("updateUseKeyboardEvent",!0),alert(n("preference.general.alerts.completeRestore")),ie.DH.restart()}catch(e){alert(n("preference.general.alerts.failedRestore"))}},a.readAsText(l)}),!1),a.click()}))}function s(){confirm(n("preference.general.confirms.reset"))&&(t.dispatch("reset"),ie.DH.restart())}return{state:a,onSave:r,onUpdateHudContents:i,onClickBackup:o,onClickRestore:d,onClickReset:s}},emits:{update:null}});const ke=(0,he.Z)(we,[["render",le],["__scopeId","data-v-2efcbf1e"]]);var ye=ke},928:function(e,l,t){function n(e){return`0${e}`.slice(-2)}function a(e){let l;try{l=new URL(e)}catch(t){return!1}return"http:"===l.protocol||"https:"===l.protocol}t.d(l,{D:function(){return a},j:function(){return n}})}}]);