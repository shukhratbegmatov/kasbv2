(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0aeb19"],{"0ac5":function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"main_navs"},[t("Header"),e.is_up?t("div",[t("my-upload",{attrs:{field:"img",width:300,height:300,url:"/upload",params:e.params,headers:e.headers,langType:"en","img-format":"png"},on:{"crop-success":e.trySubmitFile},model:{value:e.show,callback:function(t){e.show=t},expression:"show"}}),t("img",{attrs:{src:e.imgDataUrl}})],1):e._e(),t("div",{staticClass:"container"},[t("div",{staticClass:"profile_title"},[e._v(" Profil sozlamalari ")]),t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-3"},[t("SidebarMain")],1),t("div",{staticClass:"col-xl-9"},[t("div",{staticClass:"settings_prof",style:{"background-image":"url("+e.imageUrl[0]+")"}},[e.imageUrl1.length>0?t("div",{staticClass:"new_profile_img"},[t("img",{attrs:{src:e.imageUrl1[0],alt:""}})]):t("div",{staticClass:"new_profile_img"},[t("svg",{attrs:{width:"177",height:"163",viewBox:"0 0 177 163",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("circle",{attrs:{cx:"88.6019",cy:"161.603",r:"88.0385",fill:"#9DB3C8"}}),t("circle",{attrs:{cx:"88.6027",cy:"44.218",r:"43.3205",fill:"#33587C","fill-opacity":"0.8"}})])]),t("label",{staticClass:"edit_icon",attrs:{for:"change_profile"}},[t("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M7.5 2.5V7.5H2.5V8.5H7.5V13.5H8.5V8.5H13.5V7.5H8.5V2.5H7.5Z",fill:"#043936"}})])]),t("div",{staticClass:"prof_data"},[t("div",[t("div",{staticClass:"pro_names"},[e._v(e._s(this.full_name))]),t("div",{staticClass:"prof_mail"},[e._v(e._s(e.$store.state.me.email))])]),t("div",[t("input",{ref:"datafiles1",staticClass:"d-none",attrs:{type:"file",id:"change_profile",accept:"*",name:"datafiles1"},on:{change:e.trySubmitFile1}}),t("input",{ref:"datafiles",staticClass:"form-control d-none",attrs:{type:"file",id:"info_img1",accept:"*",name:"datafiles"},on:{change:e.trySubmitFile}}),t("label",{staticClass:"change_pro_img",attrs:{for:"info_img1"}},[e._v(e._s(e.$t("edt_pro")))])])])]),t("div",{staticClass:"search_data"},[t("div",{staticClass:"passport_datass change_input"},[t("div",{staticClass:"filt_users row"},[t("div",{staticClass:"col-xl-12"},[e._m(0),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.jshshr,expression:"jshshr"}],attrs:{type:"number",id:"jshshr",placeholder:"JShShIR "},domProps:{value:e.jshshr},on:{input:[function(t){t.target.composing||(e.jshshr=t.target.value)},function(t){return e.filtCount()}]}})])]),t("div",{staticClass:"text-end"},[t("button",{staticClass:"btn btn-primary mt-4",on:{click:function(t){return e.filtUser()}}},[e._v("Qidiruv")])])])])]),t("div",{staticClass:"card_profiles_change"},[t("div",{staticClass:"container"},[t("div",{staticClass:"change_input"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-6"},[e._m(1),t("div",[e._v(" "+e._s(e.full_name)+" "),t("input",{directives:[{name:"model",rawName:"v-model",value:e.full_name,expression:"full_name"}],attrs:{type:"text"},domProps:{value:e.full_name},on:{input:function(t){t.target.composing||(e.full_name=t.target.value)}}})])]),t("div",{staticClass:"col-xl-6"},[e._m(2),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.date_of_birth,expression:"date_of_birth"}],attrs:{type:"text",placeholder:"dd-mm-yyyy"},domProps:{value:e.date_of_birth},on:{input:function(t){t.target.composing||(e.date_of_birth=t.target.value)}}})])]),t("div",{staticClass:"col-xl-6"},[e._m(3),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.region_name,expression:"region_name"}],attrs:{type:"text"},domProps:{value:e.region_name},on:{input:function(t){t.target.composing||(e.region_name=t.target.value)}}})])]),t("div",{staticClass:"col-xl-6"},[e._m(4),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.district_name,expression:"district_name"}],attrs:{type:"text"},domProps:{value:e.district_name},on:{input:function(t){t.target.composing||(e.district_name=t.target.value)}}})])]),t("div",{staticClass:"col-xl-6"},[e._m(5),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.school_name,expression:"school_name"}],attrs:{type:"text"},domProps:{value:e.school_name},on:{input:function(t){t.target.composing||(e.school_name=t.target.value)}}})])]),t("div",{staticClass:"col-xl-6"},[e._m(6),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.class_name,expression:"class_name"}],attrs:{type:"text"},domProps:{value:e.class_name},on:{input:function(t){t.target.composing||(e.class_name=t.target.value)}}})])]),t("div",{staticClass:"col-xl-6"},[e._m(7),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.interests,expression:"interests"}],attrs:{type:"text"},domProps:{value:e.interests},on:{input:function(t){t.target.composing||(e.interests=t.target.value)}}})])])])]),e.$store.state.me?t("div",{staticClass:"change_input mt-4"},[t("div",{staticClass:"row"},[e._m(8),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.$store.state.me.email,expression:"$store.state.me.email"}],attrs:{type:"email"},domProps:{value:e.$store.state.me.email},on:{input:function(t){t.target.composing||e.$set(e.$store.state.me,"email",t.target.value)}}})])])]):e._e()]),t("div",{staticClass:"button_main_p"},[t("button",{staticClass:"remove"},[e._v("Bekor qilish")]),t("button",{staticClass:"save",on:{click:function(t){return e.putUsers()}}},[e._v(" O'zgarishlarni saqlash")])])]),t("div",{staticClass:"card_profiles_change passport_datass change_input"},[t("form",{on:{submit:function(t){return t.preventDefault(),e.changePasword()}}},[t("div",{staticClass:"filt_users row"},[t("div",{staticClass:"col-xl-4"},[e._m(9),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.change_password,expression:"change_password"}],attrs:{type:"text",placeholder:"Iltimos, eski parolni kiriting"},domProps:{value:e.change_password},on:{input:function(t){t.target.composing||(e.change_password=t.target.value)}}})])]),t("div",{staticClass:"col-xl-4"},[e._m(10),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.change_confirm_pass,expression:"change_confirm_pass"}],attrs:{type:"text",placeholder:"Iltimos, yangi parolni kiriting"},domProps:{value:e.change_confirm_pass},on:{input:function(t){t.target.composing||(e.change_confirm_pass=t.target.value)}}})])]),t("div",{staticClass:"col-xl-4"},[e._m(11),t("div",[t("input",{directives:[{name:"model",rawName:"v-model",value:e.change_mail,expression:"change_mail"}],staticClass:"phone_or_mail",attrs:{type:"text",placeholder:"Iltimos, yangi parolni kiriting"},domProps:{value:e.change_mail},on:{input:function(t){t.target.composing||(e.change_mail=t.target.value)}}})])]),e._m(12)])])])])])]),t("Footer")],1)},i=[function(){var e=this,t=e._self._c;return t("div",[t("label",[e._v("JShShIR ")])])},function(){var e=this,t=e._self._c;return t("div",[t("label",[e._v("F.I.SH")])])},function(){var e=this,t=e._self._c;return t("div",[t("label",[e._v("Tugulgan sanasi")])])},function(){var e=this,t=e._self._c;return t("div",[t("label",[e._v("Viloyat")])])},function(){var e=this,t=e._self._c;return t("div",[t("label",[e._v("Tuman")])])},function(){var e=this,t=e._self._c;return t("div",[t("label",[e._v("Maktab nomi")])])},function(){var e=this,t=e._self._c;return t("div",[t("label",[e._v("Sinif nomi")])])},function(){var e=this,t=e._self._c;return t("div",[t("label",[e._v("Qiziqishlar")])])},function(){var e=this,t=e._self._c;return t("div",[t("label",[e._v("E-mail")])])},function(){var e=this,t=e._self._c;return t("div",[t("label",[e._v("Eski parol")])])},function(){var e=this,t=e._self._c;return t("div",[t("label",[e._v("Yangi parol")])])},function(){var e=this,t=e._self._c;return t("div",[t("label",[e._v("Telefon raqam yoki email")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"text-end mt-4"},[t("button",{staticClass:"btn btn-primary"},[e._v("Saqlash")])])}],n=(a("14d9"),a("0418")),o=a("fd2d"),r=a("c6d5"),l=a("4bac"),d={components:{SidebarMain:r["a"],Footer:o["a"],Header:n["a"],"my-upload":l["a"]},data(){return{change_mail:"",headers:{smail:"*_~"},is_up:!1,imgDataUrl:"",change_password:"",change_confirm_pass:"",jshshr:"",class_name:"",school_name:"",school_id:"",district_name:"",district_id:"",gender_name:"",date_of_birth:"",full_name:"sknksnjk",region_id:"",region_name:"",gender_id:"",class_id:"",imageUrl:[],myImages:[],files_name:[],imageUrl1:[],myImages1:[],files_name1:[],interests:"",profile_cover:"",profile_image:"",documentnumber:"",documentseries:"",dateofbirth:""}},mounted(){this.$axiosDefault.get("students/me/",{headers:{Authorization:"Bearer "+localStorage.getItem("reg_token"),"Accept-Language":"oz"}}).then(e=>{this.$axiosDefault.get(`students/${e.data.id}/profile-settings`,{headers:{Authorization:"Bearer "+localStorage.getItem("reg_token")}}).then(e=>{this.class_name=e.data.class_name,this.school_name=e.data.school_name,this.school_id=e.data.school_id,this.district_name=e.data.district_name,this.district_id=e.data.district_id,this.gender_name=e.data.gender_name,this.gender=e.data.gender,this.full_name=e.data.full_name,this.region_id=e.data.region_id,this.region_name=e.data.region_name,this.class_id=e.data.class_id,this.profile_image=e.data.profile_image_url,this.profile_cover=e.data.profile_cover_url,this.interests=e.data.interests,this.imageUrl1.push(e.data.profile_image_url),this.imageUrl.push(e.data.profile_cover_url),this.date_of_birth=new Date(e.data.date_of_birth).toJSON().slice(0,10).split("-").reverse().join("-"),console.log(this.imageUrl)})})},methods:{cropSuccess(e,t){console.log(t,"hello"),this.imgDataUrl=e},cropUploadSuccess(e,t){console.log("-------- upload success --------"),console.log(e),console.log("field: "+t)},cropUploadFail(e,t){console.log("-------- upload fail --------"),console.log(e),console.log("field: "+t),console.log("dskajdnsak11")},filtCount(){this.jshshr>999999999999&&(document.getElementById("jshshr").style.border="1px solid red")},changePasword(){const e=new FormData;e.append("password",this.change_password),e.append("confirm_password",this.change_confirm_pass),e.append("by_phone_number",this.change_mail),this.$axiosDefault.post("students/reset-password/",e).then(()=>{localStorage.setItem("reg_token",this.$route.query.token)}).catch(e=>{console.log(e.message),this.$toast(""+e.message,{timeout:4e3,type:"error"})})},trySubmitFile(e){this.imageUrl=[];for(let a=0;a<e.target.files.length;a++)this.files_name.push(e.target.files[a]);var t=Array.from(e.target.files);console.log(typeof t),console.log(t,"dnskajn"),t.forEach(e=>{this.myImages.push(e),console.log(this.myImages[0],"sdnsakj");var t=new FileReader,a=this;t.onload=function(e){a.imageUrl.push(e.target.result)},t.readAsDataURL(e)})},trySubmitFile1(e){this.imageUrl1=[];for(let a=0;a<e.target.files.length;a++)this.files_name1.push(e.target.files[a]);var t=Array.from(e.target.files);console.log(typeof t),console.log(t,"dnskajn"),t.forEach(e=>{this.myImages1.push(e),console.log(this.myImages1[0],"sdnsakj");var t=new FileReader,a=this;t.onload=function(e){a.imageUrl1.push(e.target.result)},t.readAsDataURL(e)})},filtUser(){this.$axiosDefault.get("integration/student",{params:{pinf:this.jshshr,token:localStorage.getItem("reg_token")}}).then(e=>{console.log(e.data,"nkdndksjan"),this.full_name=e.data.full_name,this.region_name=e.data.region_name,this.class_name=e.data.class_name,this.school_name=e.data.school_name,this.school_id=e.data.school_id,this.district_name=e.data.district_name,this.district_id=e.data.district_id,this.gender_name=e.data.gender_name,this.gender=e.data.gender_id,this.region_id=e.data.region_id,this.class_id=e.data.class_id,this.date_of_birth=new Date(e.data.date_of_birth).toJSON().slice(0,10).split("-").reverse().join("-")}).catch(()=>{})},filtUserP(){this.$axiosDefault.get("integration/teacher",{params:{documentseries:this.documentseries,documentnumber:this.documentnumber,dateofbirth:this.dateofbirth,token:localStorage.getItem("reg_token")}}).then(e=>{this.class_name=e.data.class_name,this.school_name=e.data.school_name,this.school_id=e.data.school_id,this.district_name=e.data.district_name,this.district_id=e.data.district_id,this.gender_name=e.data.gender_name,this.gender=e.data.gender_id,this.date_of_birth=new Date(e.data.date_of_birth).toJSON().slice(0,10).split("-").reverse().join("-"),this.full_name=e.data.full_name,this.region_id=e.data.region_id,this.region_name=e.data.region_name,this.class_id=e.data.class_id})},putUsers(){console.log(this.myImages1[0]);const e=new FormData;e.append("profile_image",this.myImages1[0]),e.append("profile_cover",this.myImages[0]),e.append("full_name",this.full_name),e.append("date_of_birth",this.date_of_birth),e.append("gender",this.gender),e.append("interests",this.interests),e.append("region_id",this.region_id),e.append("region_name",this.region_name),e.append("district_id",this.district_id),e.append("district_name",this.district_name),e.append("school_id",this.school_id),e.append("school_name",this.school_name),e.append("class_id",this.class_id),e.append("class_name",this.class_name),this.$axiosDefault.patch(`students/${this.$store.state.me.id}/profile-settings/`,e,{headers:{Authorization:"Bearer "+localStorage.getItem("reg_token")}}).then(()=>{this.$axiosDefault.get("students/me/",{headers:{Authorization:"Bearer "+localStorage.getItem("reg_token"),"Accept-Language":"oz"}}).then(e=>{this.$axiosDefault.get(`students/${e.data.id}/profile-settings`,{headers:{Authorization:"Bearer "+localStorage.getItem("reg_token")}}).then(e=>{this.$toast("Ma'lumot yangilandi",{timeout:1e4,type:"success"}),this.class_name=e.data.class_name,this.school_name=e.data.school_name,this.school_id=e.data.school_id,this.district_name=e.data.district_name,this.district_id=e.data.district_id,this.gender_name=e.data.gender_name,this.gender=e.data.gender,this.date_of_birth=new Date(e.data.date_of_birth).toJSON().slice(0,10).split("-").reverse().join("-"),this.full_name=e.data.full_name,this.region_id=e.data.region_id,this.region_name=e.data.region_name,this.class_id=e.data.class_id,this.profile_image=e.data.profile_image_url,this.profile_cover=e.data.profile_cover_url,this.interests=e.data.interests})})}).catch(e=>{console.log(e.response.data),e.response.data.profile_image&&this.$toast("Iltimos profil va banner uchun rasm joylang",{timeout:4e3,type:"error"}),e.response.data.date_of_birth&&this.$toast(""+e.response.data.date_of_birth,{timeout:4e3,type:"error"})})}}},c=d,m=a("2877"),_=Object(m["a"])(c,s,i,!1,null,null,null);t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d0aeb19.51e5ac3f.js.map