"use strict";(self["webpackChunkphotoslide"]=self["webpackChunkphotoslide"]||[]).push([[174],{705:function(e,a,l){l.d(a,{Z:function(){return c}});var i=l(252),t=l(577);const n=["name","id","required","value","disabled"],o={key:0,value:"",disabled:!1};function d(e,a,l,d,r,s){const p=(0,i.up)("Icon");return(0,i.wg)(),(0,i.iD)("label",{class:(0,t.C_)(["form","form-select",e.disabled&&"form-select--disabled"])},[(0,i._)("select",{name:e.name,id:e.id,required:e.required,value:e.modelValue,disabled:e.disabled,class:"form-select__body",onChange:a[0]||(a[0]=(...a)=>e.onChange&&e.onChange(...a)),onBlur:a[1]||(a[1]=a=>e.$emit("blur:modelValue",a.target.value))},[e.placeholder?((0,i.wg)(),(0,i.iD)("option",o,(0,t.zw)(e.placeholder),1)):(0,i.kq)("",!0),(0,i.WI)(e.$slots,"default",{},void 0,!0)],40,n),(0,i.Wm)(p,{"icon-name":"arrow-down",class:"form-select__icon"})],2)}var r=l(875),s=l(698),p=(0,i.aZ)({name:"FormSelect",components:{Icon:s.Z},props:{name:{type:String,required:!0},id:String,disabled:Boolean,required:Boolean,placeholder:{type:[String,null],default:null},modelType:String,modelValue:[String,Number]},setup(e,a){function l(l){a.emit("update:modelValue",r.Ge(e.modelType,l.target.value))}return{onChange:l}},emits:{"update:modelValue":null,"blur:modelValue":null}}),m=l(744);const u=(0,m.Z)(p,[["render",d],["__scopeId","data-v-6eb56a14"]]);var c=u},909:function(e,a,l){l.d(a,{Z:function(){return u}});var i=l(252),t=l(577);const n=e=>((0,i.dD)("data-v-56586f56"),e=e(),(0,i.Cn)(),e),o=["name","id","required","disabled","checked"],d=n((()=>(0,i._)("i",{class:"form-switch__icon"},null,-1)));function r(e,a,l,n,r,s){return(0,i.wg)(),(0,i.iD)("label",{class:(0,t.C_)(["form","form-switch",e.disabled&&"form-switch--disabled"])},[(0,i._)("input",{type:"checkbox",name:e.name,id:e.id,required:e.required,disabled:e.disabled,checked:e.modelValue,onChange:a[0]||(a[0]=a=>e.$emit("update:modelValue",Boolean(a.target.checked))),class:"form-switch__body"},null,40,o),d],2)}var s=(0,i.aZ)({name:"FormSwitch",props:{name:{type:String,required:!0},id:String,disabled:Boolean,required:Boolean,modelValue:Boolean},emits:{"update:modelValue":null,"blur:modelValue":null}}),p=l(744);const m=(0,p.Z)(s,[["render",r],["__scopeId","data-v-56586f56"]]);var u=m},482:function(e,a,l){l.d(a,{Z:function(){return c}});var i=l(252),t=l(577);const n=["type","name","id","value","placeholder","required","min","max","step","maxlength","rows","size"],o=["type","name","id","value","placeholder","required","min","max","step","maxlength","size"];function d(e,a,l,d,r,s){return"textarea"===e.type?((0,i.wg)(),(0,i.iD)("textarea",{key:0,ref:"root",type:e.type,name:e.name,id:e.id,value:e.modelValue,placeholder:e.placeholder,required:e.required,min:e.min,max:e.max,step:e.step,maxlength:e.maxlength,rows:e.rows,size:e.size,class:(0,t.C_)(["form","form-text",e.inline&&"form-text--inline",e.color&&`form-text--color-${e.color}`]),onInput:a[0]||(a[0]=(...a)=>e.onChange&&e.onChange(...a)),onBlur:a[1]||(a[1]=a=>e.$emit("blur:modelValue",a.target.value))},null,42,n)):((0,i.wg)(),(0,i.iD)("input",{key:1,ref:"root",type:e.type,name:e.name,id:e.id,value:e.modelValue,placeholder:e.placeholder,required:e.required,min:e.min,max:e.max,step:e.step,maxlength:e.maxlength,size:e.size,class:(0,t.C_)(["form","form-text",e.inline&&"form-text--inline",e.color&&`form-text--color-${e.color}`]),onInput:a[2]||(a[2]=(...a)=>e.onChange&&e.onChange(...a)),onBlur:a[3]||(a[3]=a=>e.$emit("blur:modelValue",a.target.value))},null,42,o))}var r=l(262),s=l(875),p=(0,i.aZ)({name:"FormText",props:{type:{type:String,default:"text"},name:String,id:String,placeholder:String,required:Boolean,min:Number,max:Number,step:Number,maxlength:Number,inline:Boolean,rows:{type:Number,default:3},size:{type:Number,default:10},color:String,modelType:String,modelValue:[String,Number,Boolean,Array]},setup(e,a){const l=(0,r.iH)(0);function i(l){a.emit("update:modelValue",s.Ge(e.modelType,l.target.value))}function t(){l.value&&l.value.focus()}return{root:l,onChange:i,focus:t}},emits:{"update:modelValue":null,"blur:modelValue":null}}),m=l(744);const u=(0,m.Z)(p,[["render",d],["__scopeId","data-v-0f4796d2"]]);var c=u},174:function(e,a,l){l.r(a),l.d(a,{default:function(){return Re}});var i=l(252),t=l(577);const n=e=>((0,i.dD)("data-v-ecdf8ab2"),e=e(),(0,i.Cn)(),e),o=n((()=>(0,i._)("legend",null,"Slides fields",-1))),d={className:"fields"},r={className:"field-basic"},s={className:"field-title"},p={htmlFor:"pref_initialNumber"},m={className:"field-description"},u={className:"field-basic__body"},c=n((()=>(0,i._)("hr",{className:"field-line"},null,-1))),f={className:"field-basic"},_={className:"field-title"},y={htmlFor:"pref_animationType"},h={className:"field-description"},v={className:"field-basic__body"},b={value:"none"},w={value:"fade"},N={value:"horizontal"},V={className:"field-basic"},g={className:"field-title"},S={htmlFor:"pref_animationSpeed"},z={className:"field-description"},$={className:"field-basic__inline"},x={className:"label"},T=n((()=>(0,i._)("span",null,"ms",-1))),D=n((()=>(0,i._)("hr",{className:"field-line"},null,-1))),F={className:"field-basic"},A={className:"field-title"},C={htmlFor:"pref_captionAnimationType"},U={className:"field-description"},q={className:"field-basic__body"},k={value:"none"},Z={value:"shuffle"},B={className:"field-basic"},W={className:"field-title"},H={htmlFor:"pref_captionAnimationSpeed"},I={className:"field-description"},O={className:"field-basic__inline"},P=n((()=>(0,i._)("hr",{className:"field-line"},null,-1))),G={className:"field-switch"},R={className:"field-switch__body"},j={className:"field-title"},J={htmlFor:"pref_autoplay"},K={className:"field-description"},Y={className:"field-switch__input"},E={className:"field-basic"},L={className:"field-title"},M={htmlFor:"pref_autoplayDelay"},Q={className:"field-description"},X={className:"field-basic__inline"},ee={className:"label"},ae=n((()=>(0,i._)("span",null,"ms",-1))),le={className:"field-basic"},ie={className:"field-title"},te={htmlFor:"pref_autoplayDirection"},ne={className:"field-description"},oe={className:"field-basic__inline"},de={className:"field-switch"},re={className:"field-switch__body"},se={className:"field-title"},pe={htmlFor:"pref_autoplayPauseOnHover"},me={className:"field-description"},ue={className:"field-switch__input"},ce=n((()=>(0,i._)("hr",{className:"field-line"},null,-1))),fe={className:"field-switch"},_e={className:"field-switch__body"},ye={className:"field-title"},he={htmlFor:"pref_loop"},ve={className:"field-description"},be={className:"field-switch__input"},we={className:"field-switch"},Ne={className:"field-switch__body"},Ve={className:"field-title"},ge={htmlFor:"pref_swipe"},Se={className:"field-description"},ze={className:"field-switch__input"};function $e(e,a,l,n,$e,xe){const Te=(0,i.up)("FormText"),De=(0,i.up)("FormSelect"),Fe=(0,i.up)("FormSwitch"),Ae=(0,i.up)("FormRadio");return(0,i.wg)(),(0,i.iD)("fieldset",null,[o,(0,i._)("div",d,[(0,i._)("div",r,[(0,i._)("h3",s,[(0,i._)("label",p,(0,t.zw)(e.$t("preference.slides.initialNumber.title")),1)]),(0,i._)("p",m,(0,t.zw)(e.$t("preference.slides.initialNumber.description")),1),(0,i._)("div",u,[(0,i.Wm)(Te,{type:"tel",name:"pref_initialNumber",id:"pref_initialNumber",modelValue:e.state.initialNumber,"onUpdate:modelValue":[a[0]||(a[0]=a=>e.state.initialNumber=a),e.onSave],placeholder:"0",inline:!0,maxlength:3,size:5,"model-type":"number"},null,8,["modelValue","onUpdate:modelValue"])])]),c,(0,i._)("div",f,[(0,i._)("h3",_,[(0,i._)("label",y,(0,t.zw)(e.$t("preference.slides.animationType.title")),1)]),(0,i._)("p",h,(0,t.zw)(e.$t("preference.slides.animationType.description")),1),(0,i._)("div",v,[(0,i.Wm)(De,{name:"pref_animationType",id:"pref_animationType",modelValue:e.state.animationType,"onUpdate:modelValue":[a[1]||(a[1]=a=>e.state.animationType=a),e.onSave]},{default:(0,i.w5)((()=>[(0,i._)("option",b,(0,t.zw)(e.$t("preference.slides.animationType.option_none")),1),(0,i._)("option",w,(0,t.zw)(e.$t("preference.slides.animationType.option_fade")),1),(0,i._)("option",N,(0,t.zw)(e.$t("preference.slides.animationType.option_horizontal")),1)])),_:1},8,["modelValue","onUpdate:modelValue"])])]),(0,i._)("div",V,[(0,i._)("h3",g,[(0,i._)("label",S,(0,t.zw)(e.$t("preference.slides.animationSpeed.title")),1)]),(0,i._)("p",z,(0,t.zw)(e.$t("preference.slides.animationSpeed.description")),1),(0,i._)("div",$,[(0,i._)("label",x,[(0,i.Wm)(Te,{type:"tel",name:"pref_animationSpeed",id:"pref_animationSpeed",modelValue:e.state.animationSpeed,"onUpdate:modelValue":[a[2]||(a[2]=a=>e.state.animationSpeed=a),e.onSave],placeholder:"1000",inline:!0,maxlength:4,size:5,"model-type":"number"},null,8,["modelValue","onUpdate:modelValue"]),T])])]),D,(0,i._)("div",F,[(0,i._)("h3",A,[(0,i._)("label",C,(0,t.zw)(e.$t("preference.slides.captionAnimationType.title")),1)]),(0,i._)("p",U,(0,t.zw)(e.$t("preference.slides.captionAnimationType.description")),1),(0,i._)("div",q,[(0,i.Wm)(De,{name:"pref_captionAnimationType",id:"pref_captionAnimationType",modelValue:e.state.captionAnimationType,"onUpdate:modelValue":[a[3]||(a[3]=a=>e.state.captionAnimationType=a),e.onSave]},{default:(0,i.w5)((()=>[(0,i._)("option",k,(0,t.zw)(e.$t("preference.slides.captionAnimationType.option_none")),1),(0,i._)("option",Z,(0,t.zw)(e.$t("preference.slides.captionAnimationType.option_shuffle")),1)])),_:1},8,["modelValue","onUpdate:modelValue"])])]),(0,i._)("div",B,[(0,i._)("h3",W,[(0,i._)("label",H,(0,t.zw)(e.$t("preference.slides.captionAnimationSpeed.title")),1)]),(0,i._)("p",I,(0,t.zw)(e.$t("preference.slides.captionAnimationSpeed.description")),1),(0,i._)("div",O,[(0,i.Wm)(Te,{type:"tel",name:"pref_captionAnimationSpeed",id:"pref_captionAnimationSpeed",modelValue:e.state.captionAnimationSpeed,"onUpdate:modelValue":[a[4]||(a[4]=a=>e.state.captionAnimationSpeed=a),e.onSave],placeholder:"1000",inline:!0,maxlength:4,size:5,"model-type":"number"},null,8,["modelValue","onUpdate:modelValue"])])]),P,(0,i._)("div",G,[(0,i._)("div",R,[(0,i._)("h3",j,[(0,i._)("label",J,(0,t.zw)(e.$t("preference.slides.autoplay.title")),1)]),(0,i._)("p",K,(0,t.zw)(e.$t("preference.slides.autoplay.description")),1)]),(0,i._)("div",Y,[(0,i.Wm)(Fe,{name:"pref_autoplay",id:"pref_autoplay",modelValue:e.state.autoplay,"onUpdate:modelValue":[a[5]||(a[5]=a=>e.state.autoplay=a),e.onSave]},null,8,["modelValue","onUpdate:modelValue"])])]),(0,i._)("div",E,[(0,i._)("h3",L,[(0,i._)("label",M,(0,t.zw)(e.$t("preference.slides.autoplayDelay.title")),1)]),(0,i._)("p",Q,(0,t.zw)(e.$t("preference.slides.autoplayDelay.description")),1),(0,i._)("div",X,[(0,i._)("label",ee,[(0,i.Wm)(Te,{type:"tel",name:"pref_autoplayDelay",id:"pref_autoplayDelay",modelValue:e.state.autoplayDelay,"onUpdate:modelValue":[a[6]||(a[6]=a=>e.state.autoplayDelay=a),e.onSave],placeholder:"1000",inline:!0,maxlength:4,size:5,"model-type":"number"},null,8,["modelValue","onUpdate:modelValue"]),ae])])]),(0,i._)("div",le,[(0,i._)("h3",ie,[(0,i._)("label",te,(0,t.zw)(e.$t("preference.slides.autoplayDirection.title")),1)]),(0,i._)("p",ne,(0,t.zw)(e.$t("preference.slides.autoplayDirection.description")),1),(0,i._)("div",oe,[(0,i.Wm)(Ae,{name:"pref_autoplayDirection",id:"pref_autoplayDirection",items:[{key:!1,label:e.$t("preference.slides.autoplayDirection.option_prev")},{key:!0,label:e.$t("preference.slides.autoplayDirection.option_next")}],"model-type":"boolean",modelValue:e.state.autoplayDirection,"onUpdate:modelValue":[a[7]||(a[7]=a=>e.state.autoplayDirection=a),e.onSave]},null,8,["items","modelValue","onUpdate:modelValue"])])]),(0,i._)("div",de,[(0,i._)("div",re,[(0,i._)("h3",se,[(0,i._)("label",pe,(0,t.zw)(e.$t("preference.slides.autoplayPauseOnHover.title")),1)]),(0,i._)("p",me,(0,t.zw)(e.$t("preference.slides.autoplayPauseOnHover.description")),1)]),(0,i._)("div",ue,[(0,i.Wm)(Fe,{name:"pref_autoplayPauseOnHover",id:"pref_autoplayPauseOnHover",modelValue:e.state.autoplayPauseOnHover,"onUpdate:modelValue":[a[8]||(a[8]=a=>e.state.autoplayPauseOnHover=a),e.onSave]},null,8,["modelValue","onUpdate:modelValue"])])]),ce,(0,i._)("div",fe,[(0,i._)("div",_e,[(0,i._)("h3",ye,[(0,i._)("label",he,(0,t.zw)(e.$t("preference.slides.loop.title")),1)]),(0,i._)("p",ve,(0,t.zw)(e.$t("preference.slides.loop.description")),1)]),(0,i._)("div",be,[(0,i.Wm)(Fe,{name:"pref_loop",id:"pref_loop",modelValue:e.state.loop,"onUpdate:modelValue":[a[9]||(a[9]=a=>e.state.loop=a),e.onSave]},null,8,["modelValue","onUpdate:modelValue"])])]),(0,i._)("div",we,[(0,i._)("div",Ne,[(0,i._)("h3",Ve,[(0,i._)("label",ge,(0,t.zw)(e.$t("preference.slides.swipe.title")),1)]),(0,i._)("p",Se,(0,t.zw)(e.$t("preference.slides.swipe.description")),1)]),(0,i._)("div",ze,[(0,i.Wm)(Fe,{name:"pref_swipe",id:"pref_swipe",modelValue:e.state.swipe,"onUpdate:modelValue":[a[10]||(a[10]=a=>e.state.swipe=a),e.onSave]},null,8,["modelValue","onUpdate:modelValue"])])])])])}var xe=l(262),Te=l(903),De=l(482),Fe=l(705),Ae=l(909);const Ce={class:"form form-radio"},Ue={class:"form-radio__wrap"},qe={class:""},ke=["name","id","value","checked"];function Ze(e,a,l,n,o,d){return(0,i.wg)(),(0,i.iD)("nav",Ce,[(0,i._)("div",Ue,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.items,((l,n)=>((0,i.wg)(),(0,i.iD)("label",qe,[(0,i._)("input",{type:"radio",name:e.name,id:0===n?e.id:void 0,value:l.key,checked:e.modelValue===l.key||!e.modelValue&&0===n,onChange:a[0]||(a[0]=(...a)=>e.onChange&&e.onChange(...a)),onBlur:a[1]||(a[1]=a=>e.$emit("blur:modelValue",a.target.value))},null,40,ke),(0,i._)("em",null,(0,t.zw)(l.label),1)])))),256))])])}var Be=l(875),We=(0,i.aZ)({name:"FormRadio",props:{items:{type:Array,required:!0},name:String,id:String,modelType:String,modelValue:[String,Number,Boolean]},setup(e,a){function l(l){a.emit("update:modelValue",Be.Ge(e.modelType,l.target.value))}return{onChange:l}},emits:{"update:modelValue":null,"blur:modelValue":null}}),He=l(744);const Ie=(0,He.Z)(We,[["render",Ze],["__scopeId","data-v-5457c80b"]]);var Oe=Ie,Pe=(0,i.aZ)({name:"PreferenceSlides",components:{FormText:De.Z,FormSelect:Fe.Z,FormSwitch:Ae.Z,FormRadio:Oe},props:{structure:Object},setup(e,a){let l=(0,xe.qj)({initialNumber:e.structure.initialNumber,animationType:e.structure.animationType,animationSpeed:e.structure.animationSpeed,captionAnimationType:e.structure.captionAnimationType,captionAnimationSpeed:e.structure.captionAnimationSpeed,autoplay:e.structure.autoplay,autoplayDelay:e.structure.autoplayDelay,autoplayDirection:e.structure.autoplayDirection,autoplayPauseOnHover:e.structure.autoplayPauseOnHover,loop:e.structure.loop,swipe:e.structure.swipe});function i(){const e=Te.Jl(l);a.emit("update",e)}return{state:l,onSave:i}},emits:{update:null}});const Ge=(0,He.Z)(Pe,[["render",$e],["__scopeId","data-v-ecdf8ab2"]]);var Re=Ge}}]);