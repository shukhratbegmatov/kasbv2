(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ac1eb"],{"17d3":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main_navs"},[s("Header"),s("div",{staticClass:"container"},[s("div",{staticClass:"new_reg"},[s("div",{staticClass:"log_form dark_main_reg"},[s("div",[s("div",{staticClass:"reg_people_title mt-4 text-center text-white"},[t._v(" Oddiy foydalanuvchi ")]),s("form",{on:{submit:function(s){return s.preventDefault(),t.regIstration()}}},[s("label",{staticClass:"text-white"},[t._v(t._s(t.$t("email"))+" *")]),s("div",{staticClass:"input_text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",placeholder:"Email"},domProps:{value:t.email},on:{input:function(s){s.target.composing||(t.email=s.target.value)}}})]),s("label",{staticClass:"text-white"},[t._v(t._s(t.$t("password"))+"*")]),s("div",{staticClass:"input_text"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",placeholder:t.$t("password")},domProps:{value:t.password},on:{input:function(s){s.target.composing||(t.password=s.target.value)}}})]),s("div",{staticClass:"forgot_password"},[s("router-link",{staticClass:"decoration text-white",attrs:{to:"/"}},[t._v(" "+t._s(t.$t("forget_password"))+" ")])],1),s("div",{staticClass:"log_btn"},[s("button",[t._v(" "+t._s(t.$t("reg")))])])]),s("div",{staticClass:"reg_links"},[s("router-link",{staticClass:"text-decoration-none",attrs:{to:"/email-login"}},[s("div",{staticClass:"text-white"},[t._v(t._s(t.$t("reg_quiz"))+"? "),s("span",{staticClass:"text-white"},[t._v(t._s(t.$t("login")))])])])],1)])])])]),s("Footer")],1)},i=[],o=e("0418"),r=e("fd2d"),l={components:{Footer:r["a"],Header:o["a"]},data(){return{email:"",password:""}},methods:{regIstration(){this.$axiosDefault.post("/students/register/",{email:this.email,password:this.password}).then(()=>{this.$toast("Emailga xabar jo'natildi iltimos tekshirib ko'ring",{timeout:1e4,type:"success"})}).catch(t=>{console.log(t),this.$toast(`${t.response.data.email},${t.response.data.password}`,{timeout:1e4,type:"error"})})}}},n=l,d=e("2877"),c=Object(d["a"])(n,a,i,!1,null,null,null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-2d0ac1eb.0bcd26ac.js.map