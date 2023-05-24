"use strict";(self["webpackChunkphotoslide"]=self["webpackChunkphotoslide"]||[]).push([[489],{705:function(e,l,t){t.d(l,{Z:function(){return m}});var a=t(252),o=t(577);const n=["name","id","required","value","disabled"],i={key:0,value:"",disabled:!1};function r(e,l,t,r,s,d){const c=(0,a.up)("Icon");return(0,a.wg)(),(0,a.iD)("label",{class:(0,o.C_)(["form","form-select",e.disabled&&"form-select--disabled"])},[(0,a._)("select",{name:e.name,id:e.id,required:e.required,value:e.modelValue,disabled:e.disabled,class:"form-select__body",onChange:l[0]||(l[0]=(...l)=>e.onChange&&e.onChange(...l)),onBlur:l[1]||(l[1]=l=>e.$emit("blur:modelValue",l.target.value))},[e.placeholder?((0,a.wg)(),(0,a.iD)("option",i,(0,o.zw)(e.placeholder),1)):(0,a.kq)("",!0),(0,a.WI)(e.$slots,"default",{},void 0,!0)],40,n),(0,a.Wm)(c,{"icon-name":"arrow-down",class:"form-select__icon"})],2)}var s=t(875),d=t(698),c=(0,a.aZ)({name:"FormSelect",components:{Icon:d.Z},props:{name:{type:String,required:!0},id:String,disabled:Boolean,required:Boolean,placeholder:{type:[String,null],default:null},modelType:String,modelValue:[String,Number]},setup(e,l){function t(t){l.emit("update:modelValue",s.Ge(e.modelType,t.target.value))}return{onChange:t}},emits:{"update:modelValue":null,"blur:modelValue":null}}),p=t(744);const u=(0,p.Z)(c,[["render",r],["__scopeId","data-v-6eb56a14"]]);var m=u},482:function(e,l,t){t.d(l,{Z:function(){return m}});var a=t(252),o=t(577);const n=["type","name","id","value","placeholder","required","min","max","step","maxlength","rows","size"],i=["type","name","id","value","placeholder","required","min","max","step","maxlength","size"];function r(e,l,t,r,s,d){return"textarea"===e.type?((0,a.wg)(),(0,a.iD)("textarea",{key:0,ref:"root",type:e.type,name:e.name,id:e.id,value:e.modelValue,placeholder:e.placeholder,required:e.required,min:e.min,max:e.max,step:e.step,maxlength:e.maxlength,rows:e.rows,size:e.size,class:(0,o.C_)(["form","form-text",e.inline&&"form-text--inline",e.color&&`form-text--color-${e.color}`]),onInput:l[0]||(l[0]=(...l)=>e.onChange&&e.onChange(...l)),onBlur:l[1]||(l[1]=l=>e.$emit("blur:modelValue",l.target.value))},null,42,n)):((0,a.wg)(),(0,a.iD)("input",{key:1,ref:"root",type:e.type,name:e.name,id:e.id,value:e.modelValue,placeholder:e.placeholder,required:e.required,min:e.min,max:e.max,step:e.step,maxlength:e.maxlength,size:e.size,class:(0,o.C_)(["form","form-text",e.inline&&"form-text--inline",e.color&&`form-text--color-${e.color}`]),onInput:l[2]||(l[2]=(...l)=>e.onChange&&e.onChange(...l)),onBlur:l[3]||(l[3]=l=>e.$emit("blur:modelValue",l.target.value))},null,42,i))}var s=t(262),d=t(875),c=(0,a.aZ)({name:"FormText",props:{type:{type:String,default:"text"},name:String,id:String,placeholder:String,required:Boolean,min:Number,max:Number,step:Number,maxlength:Number,inline:Boolean,rows:{type:Number,default:3},size:{type:Number,default:10},color:String,modelType:String,modelValue:[String,Number,Boolean,Array]},setup(e,l){const t=(0,s.iH)(0);function a(t){l.emit("update:modelValue",d.Ge(e.modelType,t.target.value))}function o(){t.value&&t.value.focus()}return{root:t,onChange:a,focus:o}},emits:{"update:modelValue":null,"blur:modelValue":null}}),p=t(744);const u=(0,p.Z)(c,[["render",r],["__scopeId","data-v-0f4796d2"]]);var m=u},489:function(e,l,t){t.r(l),t.d(l,{default:function(){return R}});var a=t(252),o=t(577);const n=e=>((0,a.dD)("data-v-20395ab4"),e=e(),(0,a.Cn)(),e),i=n((()=>(0,a._)("legend",null,"Style fields",-1))),r={class:"fields"},s={class:"field-basic"},d={class:"field-title"},c={for:"pref_screenColor"},p={class:"field-description"},u={class:"field-basic__body"},m={value:"system"},f={value:"light"},_={value:"dark"},g=n((()=>(0,a._)("hr",{class:"field-line"},null,-1))),y={class:"field-basic"},v={class:"field-title"},b={for:"pref_imageType"},h={class:"field-description"},S={class:"field-basic__body"},V={value:"none"},w={value:"contain"},x={value:"cover"},C={class:"field-basic"},z={class:"field-title"},$={for:"pref_imageScale"},T={class:"field-description"},q={class:"field-basic__body"},U=n((()=>(0,a._)("hr",{class:"field-line"},null,-1))),P={class:"field-basic"},Z={class:"field-title"},k={for:"pref_captionScale"},I={class:"field-description"},B={class:"field-basic__inline"},N={class:"label"},W=n((()=>(0,a._)("span",null,"%",-1))),D={class:"field-basic"},F={class:"field-title"},j={for:"pref_captionPosition"},G={class:"field-description"},A={class:"field-basic__body"};function H(e,l,t,n,H,J){const O=(0,a.up)("FormSelect"),E=(0,a.up)("FormText");return(0,a.wg)(),(0,a.iD)("fieldset",null,[i,(0,a._)("div",r,[(0,a._)("div",s,[(0,a._)("h3",d,[(0,a._)("label",c,(0,o.zw)(e.$t("preference.style.screenColor.title")),1)]),(0,a._)("p",p,(0,o.zw)(e.$t("preference.style.screenColor.description")),1),(0,a._)("div",u,[(0,a.Wm)(O,{name:"pref_screenColor",id:"pref_screenColor",modelValue:e.state.screenColor,"onUpdate:modelValue":[l[0]||(l[0]=l=>e.state.screenColor=l),e.onSave]},{default:(0,a.w5)((()=>[(0,a._)("option",m,(0,o.zw)(e.$t("preference.style.screenColor.option_system")),1),(0,a._)("option",f,(0,o.zw)(e.$t("preference.style.screenColor.option_light")),1),(0,a._)("option",_,(0,o.zw)(e.$t("preference.style.screenColor.option_dark")),1)])),_:1},8,["modelValue","onUpdate:modelValue"])])]),g,(0,a._)("div",y,[(0,a._)("h3",v,[(0,a._)("label",b,(0,o.zw)(e.$t("preference.style.imageType.title")),1)]),(0,a._)("p",h,(0,o.zw)(e.$t("preference.style.imageType.description")),1),(0,a._)("div",S,[(0,a.Wm)(O,{name:"pref_imageType",id:"pref_imageType",modelValue:e.state.imageType,"onUpdate:modelValue":[l[1]||(l[1]=l=>e.state.imageType=l),e.onSave]},{default:(0,a.w5)((()=>[(0,a._)("option",V,(0,o.zw)(e.$t("preference.style.imageType.option_none")),1),(0,a._)("option",w,(0,o.zw)(e.$t("preference.style.imageType.option_contain")),1),(0,a._)("option",x,(0,o.zw)(e.$t("preference.style.imageType.option_cover")),1)])),_:1},8,["modelValue","onUpdate:modelValue"])])]),(0,a._)("div",C,[(0,a._)("h3",z,[(0,a._)("label",$,(0,o.zw)(e.$t("preference.style.imageScale.title")),1)]),(0,a._)("p",T,(0,o.zw)(e.$t("preference.style.imageScale.description")),1),(0,a._)("div",q,[(0,a.Wm)(E,{type:"text",name:"pref_imageScale",id:"pref_imageScale",modelValue:e.state.imageScale,"onUpdate:modelValue":[l[2]||(l[2]=l=>e.state.imageScale=l),e.onUpdateImageScale],placeholder:"80%,80%","model-type":"array",inline:!0,size:16},null,8,["modelValue","onUpdate:modelValue"])])]),U,(0,a._)("div",P,[(0,a._)("h3",Z,[(0,a._)("label",k,(0,o.zw)(e.$t("preference.style.captionScale.title")),1)]),(0,a._)("p",I,(0,o.zw)(e.$t("preference.style.captionScale.description")),1),(0,a._)("div",B,[(0,a._)("label",N,[(0,a.Wm)(E,{type:"tel",name:"pref_captionScale",id:"pref_captionScale",modelValue:e.state.captionScale,"onUpdate:modelValue":[l[3]||(l[3]=l=>e.state.captionScale=l),e.onSave],placeholder:"100",inline:!0,maxlength:3,size:5,"model-type":"number"},null,8,["modelValue","onUpdate:modelValue"]),W])])]),(0,a._)("div",D,[(0,a._)("h3",F,[(0,a._)("label",j,(0,o.zw)(e.$t("preference.style.captionPosition.title")),1)]),(0,a._)("p",G,(0,o.zw)(e.$t("preference.style.captionPosition.description")),1),(0,a._)("div",A,[(0,a.Wm)(E,{type:"text",name:"pref_captionPosition",id:"pref_captionPosition",modelValue:e.state.captionPosition,"onUpdate:modelValue":[l[4]||(l[4]=l=>e.state.captionPosition=l),e.onUpdateCaptionPosition],placeholder:"30px,30px","model-type":"array",inline:!0,size:16},null,8,["modelValue","onUpdate:modelValue"])])])])])}var J=t(262),O=t(903),E=t(482),K=t(705),L=(0,a.aZ)({name:"PreferenceStyle",components:{FormText:E.Z,FormSelect:K.Z},props:{structure:Object},setup(e,l){let t=(0,J.qj)({screenColor:e.structure.screenColor,imageType:e.structure.imageType,imageScale:e.structure.imageScale,captionScale:e.structure.captionScale,captionPosition:e.structure.captionPosition});function a(){const e=O.Jl(t);l.emit("update",e)}function o(e){t.imageScale=e.split(","),a()}function n(e){t.captionPosition=e.split(","),a()}return{state:t,onSave:a,onUpdateImageScale:o,onUpdateCaptionPosition:n}},emits:{update:null}}),M=t(744);const Q=(0,M.Z)(L,[["render",H],["__scopeId","data-v-20395ab4"]]);var R=Q}}]);