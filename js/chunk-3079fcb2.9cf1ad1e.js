(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3079fcb2"],{6646:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main_navs"},[s("Header"),s("div",{staticClass:"container"},[s("div",{staticClass:"profile_title"},[t._v(" "+t._s(t.$t("prof1"))+" ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-xl-3"},[s("SidebarMain")],1),s("div",{staticClass:"col-xl-9"},t._l(t.mains,(function(e,i){return s("div",{key:i,staticClass:"peo_table"},[s("table",[s("thead",[s("tr",[s("th",[t._v(t._s(e.full_name))])])]),s("tbody",[s("tr",[s("td",[s("div",[s("table",[t._m(0,!0),s("tbody",t._l(e.questionnaire_answers,(function(e){return s("tr",{key:e},[s("td",[t._v(t._s(e.id))]),s("td",[t._v(t._s(e.test_title))]),s("td",[t._v(t._s(e.question_title))]),s("td",[t._v(t._s(e.choices[0].text))])])})),0)])])])])])])])})),0)])]),s("Footer")],1)},C=[function(){var t=this,s=t._self._c;return s("thead",[s("tr",[s("th",[t._v("ID")]),s("th",[t._v("Test nomi")]),s("th",[t._v("Test savoli")]),s("th",[t._v("Tanlangan javob")])])])}],r=(e("14d9"),e("0418")),a=e("fd2d"),o=e("c6d5"),l={components:{SidebarMain:o["a"],Footer:a["a"],Header:r["a"]},data(){return{results:[],meI:{},mains:[]}},mounted(){this.$axiosDefault.get("students/me/",{headers:{Authorization:"Bearer "+localStorage.getItem("reg_token"),"Accept-Language":"oz"}}).then(t=>{this.meI=t.data,console.log(t),this.$axiosDefault.get("https://api-kasb.maktab.uz/api/v1/admin/questionnaire-answers/?test_id=16&&test_id=18",{headers:{Authorization:"Bearer "+localStorage.getItem("reg_token")}}).then(t=>{console.log(this.meI.id),this.results=t.data.results,this.results.filter(t=>{console.log(t,"daoshn"),t.id===this.meI.id&&this.mains.push(t)}),console.log(this.mains,"dsakjdn")})})}},n=l,L=e("2877"),h=Object(L["a"])(n,i,C,!1,null,null,null);s["default"]=h.exports},c6d5:function(t,s,e){"use strict";var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main_sidebar"},[s("ul",[s("li",[s("router-link",{attrs:{to:"/profile"}},[s("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M13.3337 14V12.6667C13.3337 11.9594 13.0527 11.2811 12.5526 10.781C12.0525 10.281 11.3742 10 10.667 10H5.33366C4.62641 10 3.94814 10.281 3.44804 10.781C2.94794 11.2811 2.66699 11.9594 2.66699 12.6667V14M10.667 4.66667C10.667 6.13943 9.47308 7.33333 8.00033 7.33333C6.52757 7.33333 5.33366 6.13943 5.33366 4.66667C5.33366 3.19391 6.52757 2 8.00033 2C9.47308 2 10.667 3.19391 10.667 4.66667Z",stroke:"#043936","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "+t._s(t.$t("prof1"))+" ")])],1),s("li",[s("router-link",{attrs:{to:"/settings"}},[s("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M6.59375 1.5L6.51562 1.90625L6.21875 3.39062C5.74219 3.57812 5.3125 3.8418 4.92188 4.15625L3.46875 3.65625L3.07812 3.53125L2.875 3.89062L1.875 5.60938L1.67188 5.96875L1.96875 6.23438L3.09375 7.21875C3.05273 7.47461 3 7.73047 3 8C3 8.26953 3.05273 8.52539 3.09375 8.78125L1.96875 9.76562L1.67188 10.0312L1.875 10.3906L2.875 12.1094L3.07812 12.4688L3.46875 12.3438L4.92188 11.8438C5.3125 12.1582 5.74219 12.4219 6.21875 12.6094L6.51562 14.0938L6.59375 14.5H9.40625L9.48438 14.0938L9.78125 12.6094C10.2578 12.4219 10.6875 12.1582 11.0781 11.8438L12.5312 12.3438L12.9219 12.4688L13.125 12.1094L14.125 10.3906L14.3281 10.0312L14.0312 9.76562L12.9062 8.78125C12.9473 8.52539 13 8.26953 13 8C13 7.73047 12.9473 7.47461 12.9062 7.21875L14.0312 6.23438L14.3281 5.96875L14.125 5.60938L13.125 3.89062L12.9219 3.53125L12.5312 3.65625L11.0781 4.15625C10.6875 3.8418 10.2578 3.57812 9.78125 3.39062L9.48438 1.90625L9.40625 1.5H6.59375ZM7.40625 2.5H8.59375L8.84375 3.79688L8.90625 4.09375L9.1875 4.1875C9.75586 4.36523 10.2715 4.66602 10.7031 5.0625L10.9219 5.26562L11.2031 5.17188L12.4688 4.73438L13.0625 5.75L12.0625 6.64062L11.8281 6.82812L11.9062 7.125C11.9707 7.41016 12 7.70117 12 8C12 8.29883 11.9707 8.58984 11.9062 8.875L11.8438 9.17188L12.0625 9.35938L13.0625 10.25L12.4688 11.2656L11.2031 10.8281L10.9219 10.7344L10.7031 10.9375C10.2715 11.334 9.75586 11.6348 9.1875 11.8125L8.90625 11.9062L8.84375 12.2031L8.59375 13.5H7.40625L7.15625 12.2031L7.09375 11.9062L6.8125 11.8125C6.24414 11.6348 5.72852 11.334 5.29688 10.9375L5.07812 10.7344L4.79688 10.8281L3.53125 11.2656L2.9375 10.25L3.9375 9.35938L4.17188 9.17188L4.09375 8.875C4.0293 8.58984 4 8.29883 4 8C4 7.70117 4.0293 7.41016 4.09375 7.125L4.17188 6.82812L3.9375 6.64062L2.9375 5.75L3.53125 4.73438L4.79688 5.17188L5.07812 5.26562L5.29688 5.0625C5.72852 4.66602 6.24414 4.36523 6.8125 4.1875L7.09375 4.09375L7.15625 3.79688L7.40625 2.5ZM8 5.5C6.625 5.5 5.5 6.625 5.5 8C5.5 9.375 6.625 10.5 8 10.5C9.375 10.5 10.5 9.375 10.5 8C10.5 6.625 9.375 5.5 8 5.5ZM8 6.5C8.83398 6.5 9.5 7.16602 9.5 8C9.5 8.83398 8.83398 9.5 8 9.5C7.16602 9.5 6.5 8.83398 6.5 8C6.5 7.16602 7.16602 6.5 8 6.5Z",fill:"black"}})]),t._v(" "+t._s(t.$t("settings"))+" ")])],1),s("li",[s("router-link",{attrs:{to:"/sorovnoma_natijalari"}},[s("svg",{attrs:{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M4 0C1.83594 0 0 1.52734 0 3.5V5H3V3.5C3 3.42578 3.04492 3.31836 3.21875 3.20312C3.39258 3.08789 3.67578 3 4 3C4.32617 3 4.60938 3.08789 4.78125 3.20312C4.95312 3.31836 5 3.41797 5 3.5C5 3.78906 4.90625 3.99023 4.71875 4.21875C4.53125 4.44727 4.24023 4.68359 3.92188 4.95312C3.2832 5.49414 2.5 6.24805 2.5 7.5V8H5.5V7.5C5.5 7.33008 5.5625 7.21094 5.75 7.01562C5.9375 6.82031 6.24805 6.58984 6.57812 6.3125C7.23828 5.75781 8 4.9082 8 3.5C8 1.54492 6.16797 0 4 0ZM4 1C5.69727 1 7 2.18359 7 3.5C7 4.57227 6.51172 5.05078 5.92188 5.54688C5.62695 5.79492 5.3125 6.03711 5.03125 6.32812C4.85742 6.50781 4.72266 6.74219 4.625 7H3.65625C3.8125 6.49414 4.11719 6.10938 4.57812 5.71875C4.88477 5.46094 5.21875 5.19141 5.5 4.84375C5.78125 4.49609 6 4.04102 6 3.5C6 3.01953 5.71484 2.62109 5.34375 2.375C4.97266 2.12891 4.50195 2 4 2C3.49609 2 3.02539 2.12891 2.65625 2.375C2.28711 2.62109 2 3.02148 2 3.5V4H1V3.5C1 2.1582 2.29883 1 4 1ZM2.5 9V12H5.5V9H2.5ZM3.5 10H4.5V11H3.5V10Z",fill:"#043936"}})]),t._v(" "+t._s(t.$t("prof27"))+" ")])],1),s("li",[s("router-link",{attrs:{to:"/test-result"}},[s("svg",{attrs:{width:"8",height:"12",viewBox:"0 0 8 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M4 0C1.83594 0 0 1.52734 0 3.5V5H3V3.5C3 3.42578 3.04492 3.31836 3.21875 3.20312C3.39258 3.08789 3.67578 3 4 3C4.32617 3 4.60938 3.08789 4.78125 3.20312C4.95312 3.31836 5 3.41797 5 3.5C5 3.78906 4.90625 3.99023 4.71875 4.21875C4.53125 4.44727 4.24023 4.68359 3.92188 4.95312C3.2832 5.49414 2.5 6.24805 2.5 7.5V8H5.5V7.5C5.5 7.33008 5.5625 7.21094 5.75 7.01562C5.9375 6.82031 6.24805 6.58984 6.57812 6.3125C7.23828 5.75781 8 4.9082 8 3.5C8 1.54492 6.16797 0 4 0ZM4 1C5.69727 1 7 2.18359 7 3.5C7 4.57227 6.51172 5.05078 5.92188 5.54688C5.62695 5.79492 5.3125 6.03711 5.03125 6.32812C4.85742 6.50781 4.72266 6.74219 4.625 7H3.65625C3.8125 6.49414 4.11719 6.10938 4.57812 5.71875C4.88477 5.46094 5.21875 5.19141 5.5 4.84375C5.78125 4.49609 6 4.04102 6 3.5C6 3.01953 5.71484 2.62109 5.34375 2.375C4.97266 2.12891 4.50195 2 4 2C3.49609 2 3.02539 2.12891 2.65625 2.375C2.28711 2.62109 2 3.02148 2 3.5V4H1V3.5C1 2.1582 2.29883 1 4 1ZM2.5 9V12H5.5V9H2.5ZM3.5 10H4.5V11H3.5V10Z",fill:"#043936"}})]),t._v(" "+t._s(t.$t("prof2"))+" ")])],1),s("li",[s("router-link",{attrs:{to:"/tab/trainings"}},[s("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M5.17188 3C3.47656 3 1.70312 3.95312 1.70312 3.95312L1.46875 4.07812L1.4375 4.34375L0.5 12.4375L0.40625 13.2969L1.20312 12.9531C1.20312 12.9531 3.26172 12.0938 5.20312 12.0938C6.35352 12.0938 7.73438 12.9219 7.73438 12.9219L8 13.0938L8.26562 12.9219C8.26562 12.9219 9.64648 12.0938 10.7969 12.0938C12.7383 12.0938 14.7969 12.9531 14.7969 12.9531L15.5938 13.2969L15.5 12.4375L14.5625 4.34375L14.5312 4.07812L14.2969 3.95312C14.2969 3.95312 12.5234 3 10.8281 3C9.38867 3 8.3418 3.62891 8 3.84375C7.6582 3.62891 6.61133 3 5.17188 3ZM5.17188 4C6.46484 4 7.71875 4.8125 7.71875 4.8125L8 5L8.28125 4.8125C8.28125 4.8125 9.53516 4 10.8281 4C11.9668 4 13.2598 4.59375 13.5938 4.75L14.4062 11.7656C13.6406 11.4902 12.3789 11.0938 10.7969 11.0938C9.43555 11.0938 8.33789 11.7324 8 11.9375C7.66211 11.7324 6.56445 11.0938 5.20312 11.0938C3.62109 11.0938 2.35938 11.4902 1.59375 11.7656L2.40625 4.75C2.74023 4.59375 4.0332 4 5.17188 4ZM5.17188 4.75C4.44922 4.75 3.55273 5.06641 3.09375 5.25L2.46875 10.7188C3.44922 10.4746 4.36523 10.3438 5.20312 10.3438C6.26758 10.3438 7.29297 10.7324 8 11.0781C8.75391 10.7109 9.89062 10.3027 11.0156 10.3594L10.3906 4.79688C9.48438 4.93555 8.69727 5.43164 8.6875 5.4375L8 5.90625L7.29688 5.4375C7.28711 5.43164 6.24609 4.75 5.17188 4.75Z",fill:"#043936"}})]),t._v(" "+t._s(t.$t("prof3"))+" ")])],1),s("li",[s("router-link",{attrs:{to:"/my-resume"}},[s("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M1.5 2.5V11.5C1.5 12.6055 2.39453 13.5 3.5 13.5H12.5C13.6055 13.5 14.5 12.6055 14.5 11.5V6H11.5V2.5H1.5ZM2.5 3.5H10.5V11.5C10.5 11.8652 10.6113 12.2051 10.7812 12.5H3.5C2.9043 12.5 2.5 12.0957 2.5 11.5V3.5ZM3.5 4.5V7H9.5V4.5H3.5ZM4.5 5.5H8.5V6H4.5V5.5ZM11.5 7H13.5V11.5C13.5 12.0957 13.0957 12.5 12.5 12.5C11.9043 12.5 11.5 12.0957 11.5 11.5V7ZM3.5 7.5V8.5H6V7.5H3.5ZM7 7.5V8.5H9.5V7.5H7ZM3.5 9V10H6V9H3.5ZM7 9V10H9.5V9H7ZM3.5 10.5V11.5H6V10.5H3.5ZM7 10.5V11.5H9.5V10.5H7Z",fill:"#043936"}})]),t._v(" "+t._s(t.$t("prof5"))+" ")])],1),s("li",[s("router-link",{attrs:{to:"/"}},[s("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M7.50034 3C6.96909 3 6.5023 3.28125 6.23472 3.70312C6.01597 3.57812 5.76792 3.5 5.50034 3.5C4.67808 3.5 4.00034 4.17773 4.00034 5V6.82812L2.95347 8.17188C2.3148 8.99805 2.35776 10.1836 3.04722 10.9688L4.23472 12.3125C4.89878 13.0684 5.85386 13.5 6.85972 13.5H9.50034C11.4281 13.5 13.0003 11.9277 13.0003 10V5.5C13.0003 4.67773 12.3226 4 11.5003 4C11.2328 4 10.9847 4.07812 10.766 4.20312C10.4984 3.78125 10.0316 3.5 9.50034 3.5C9.23276 3.5 8.98472 3.57812 8.76597 3.70312C8.49839 3.28125 8.03159 3 7.50034 3ZM7.50034 4C7.78355 4 8.00034 4.2168 8.00034 4.5V6H9.00034V5C9.00034 4.7168 9.21714 4.5 9.50034 4.5C9.78355 4.5 10.0003 4.7168 10.0003 5V6H11.0003V5.5C11.0003 5.2168 11.2171 5 11.5003 5C11.7835 5 12.0003 5.2168 12.0003 5.5V10C12.0003 11.3867 10.8871 12.5 9.50034 12.5H6.85972C6.14097 12.5 5.45933 12.1973 4.98472 11.6562L3.79722 10.2969C3.42026 9.86719 3.40073 9.25 3.75034 8.79688L4.00034 8.46875V9H5.00034V5C5.00034 4.7168 5.21714 4.5 5.50034 4.5C5.78355 4.5 6.00034 4.7168 6.00034 5V6H7.00034V4.5C7.00034 4.2168 7.21714 4 7.50034 4Z",fill:"#043936"}})]),t._v(" "+t._s(t.$t("prof28"))+" ")])],1),s("li",[s("a",{attrs:{href:"#"},on:{click:function(s){return t.logOut()}}},[s("svg",{attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[s("path",{attrs:{d:"M6 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V3.33333C2 2.97971 2.14048 2.64057 2.39052 2.39052C2.64057 2.14048 2.97971 2 3.33333 2H6M10.6667 11.3333L14 8M14 8L10.6667 4.66667M14 8H6",stroke:"#043936","stroke-width":"1.5","stroke-linecap":"round","stroke-linejoin":"round"}})]),t._v(" "+t._s(t.$t("exit"))+" ")])])])])},C=[],r=(e("14d9"),{methods:{logOut(){this.$store.state.me=!1,localStorage.removeItem("reg_token"),this.$store.dispatch("getMenus"),this.$store.dispatch("getMe"),this.$router.push("/")}}}),a=r,o=e("2877"),l=Object(o["a"])(a,i,C,!1,null,null,null);s["a"]=l.exports}}]);
//# sourceMappingURL=chunk-3079fcb2.9cf1ad1e.js.map