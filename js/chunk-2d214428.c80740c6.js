(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d214428"],{afd1:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s._self._c;return t("div",{staticClass:"main_navs"},[t("div",{staticClass:"modal_main",class:{active:s.isActive}},[t("button",{staticClass:"exit_modal",on:{click:function(t){return s.exit_click()}}},[t("svg",{attrs:{width:"15",height:"15",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M84.9407 448.942C78.6923 455.19 68.5616 455.19 62.3132 448.942C56.0649 442.693 56.0649 432.563 62.3132 426.314L233 255.628L62.3132 84.9417C56.0649 78.6933 56.0649 68.5626 62.3132 62.3142C68.5616 56.0658 78.6923 56.0658 84.9407 62.3142L255.627 233.001L426.313 62.3142C432.562 56.0658 442.692 56.0658 448.941 62.3142C455.189 68.5626 455.189 78.6933 448.941 84.9417L278.254 255.628L448.941 426.314C455.189 432.563 455.189 442.693 448.941 448.942C442.692 455.19 432.562 455.19 426.313 448.942L255.627 278.255L84.9407 448.942Z",fill:"black"}})])]),t("div",{staticClass:"create_code"},[t("form",{on:{submit:function(t){return t.preventDefault(),s.createCode()}}},[t("div",[t("div",{staticClass:"title_code"},[s._v("Tasdiqlash kodi!")]),t("div",{staticClass:"code_input"},[t("input",{directives:[{name:"model",rawName:"v-model",value:s.code,expression:"code"}],attrs:{type:"text"},domProps:{value:s.code},on:{input:function(t){t.target.composing||(s.code=t.target.value)}}})]),s._m(0)])])])]),t("Header"),t("div",{staticClass:"container"},[t("div",{staticClass:"login"},[t("div",{staticClass:"row"},[t("div",{staticClass:"col-xl-5"},[t("div",{staticClass:"log_img"},[t("div",{staticClass:"log_img_title"},[s._v(s._s(s.$t("login")))]),t("img",{attrs:{src:a("684f"),alt:""}})])]),t("div",{staticClass:"col-xl-7"},[t("div",{staticClass:"log_form"},[t("div",[t("form",{on:{submit:function(t){return t.preventDefault(),s.regIstration()}}},[t("label",[s._v(s._s(s.$t("phone"))+" *")]),t("phone-mask-input",{attrs:{autoDetectCountry:"",showFlag:"",wrapperClass:"wrraper-example",inputClass:"input-example",flagClass:"flag-example"},model:{value:s.phone,callback:function(t){s.phone=t},expression:"phone"}}),t("label",[s._v(s._s(s.$t("password"))+"*")]),t("div",{staticClass:"input_text"},["checkbox"===s.passwordFieldType?t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{id:"password",placeholder:s.$t("password"),type:"checkbox"},domProps:{checked:Array.isArray(s.password)?s._i(s.password,null)>-1:s.password},on:{change:function(t){var a=s.password,e=t.target,o=!!e.checked;if(Array.isArray(a)){var i=null,r=s._i(a,i);e.checked?r<0&&(s.password=a.concat([i])):r>-1&&(s.password=a.slice(0,r).concat(a.slice(r+1)))}else s.password=o}}}):"radio"===s.passwordFieldType?t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{id:"password",placeholder:s.$t("password"),type:"radio"},domProps:{checked:s._q(s.password,null)},on:{change:function(t){s.password=null}}}):t("input",{directives:[{name:"model",rawName:"v-model",value:s.password,expression:"password"}],attrs:{id:"password",placeholder:s.$t("password"),type:s.passwordFieldType},domProps:{value:s.password},on:{input:function(t){t.target.composing||(s.password=t.target.value)}}}),t("a",{staticClass:"password_show",attrs:{href:"#"},on:{click:s.togglePasswordVisibility}},[t("b-icon",{attrs:{icon:"eye","aria-hidden":"true"}})],1)]),t("div",{staticClass:"forgot_password"},[t("router-link",{staticClass:"decoration",attrs:{to:"/"}},[s._v(" "+s._s(s.$t("forget_password"))+" ")])],1),t("div",{staticClass:"log_btn"},[t("button",[s._v(s._s(s.$t("login")))])]),t("div",{staticClass:"phone_link"},[t("router-link",{attrs:{to:"/email-login"}},[t("div",[s._v(" Email orqali kirish ")])])],1)],1),t("div",{staticClass:"reg_links"},[t("router-link",{attrs:{to:"/phone_reg"}},[t("div",[s._v(s._s(s.$t("reg_quiz"))+"? "),t("span",[s._v(s._s(s.$t("reg")))])])])],1)])])])])])]),t("Footer")],1)},o=[function(){var s=this,t=s._self._c;return t("div",{staticClass:"code_btn"},[t("button",[s._v("Tasdiqlash")])])}],i=(a("14d9"),a("0418")),r=a("fd2d"),l=a("a4cd"),d={components:{Footer:r["a"],Header:i["a"],PhoneMaskInput:l["a"]},data(){return{email:"",password:"",phone:"",code:"",isActive:!1,passwordVisible:!1}},computed:{passwordFieldType(){return this.passwordVisible?"text":"password"}},methods:{togglePasswordVisibility(){this.passwordVisible=!this.passwordVisible},regIstration(){this.$axiosDefault.post("/students/login/",{phone_number:this.phone,password:this.password}).then(s=>{localStorage.setItem("reg_token",s.data.access),this.$store.dispatch("getMe"),this.$router.push("/")}).catch(()=>{this.$toast("Login yoki parol xato",{timeout:1e3,type:"error"}),this.code=""})}}},n=d,c=a("2877"),p=Object(c["a"])(n,e,o,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d214428.c80740c6.js.map