(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d20f185"],{b1bb:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t._self._c;return s("div",{staticClass:"main_navs"},[s("Header"),s("div",{staticClass:"container mb-4"},[t.is_response?s("div",{staticClass:"ans_card"},[t._m(0),s("div",{staticClass:"row align-items-center my-4 pr-0 col-md-12"},[s("div",{staticClass:"JumbotronOfFirstTestResult__Jumbotron-sc-6tf6lm-0 irvewj"},[s("div",{staticClass:"JumbotronOfFirstTestResult__StyledRow-sc-6tf6lm-1 gDLYMP container row"},[s("div",{staticClass:"col-lg-12 col-md-12"},[s("div",{staticClass:"desc-bg"},t._l(t.an_res,(function(e,i){return s("p",{key:i},[s("b",[t._v(t._s(e.domain_title)+":")]),t._v(" "+t._s(e.domain_description)+".")])})),0)])])])])]):t._e()]),t.is_response?t._e():s("div",{staticClass:"container"},[s("div",{staticClass:"on_test_title"},[t._v(t._s(t.$store.state.testsId.title))]),s("div",{staticClass:"on-test"},[s("div",{staticClass:"one_test_progress"},[s("div",{staticClass:"on-test-count"},[t._v(" "+t._s(t.activeIndex+1)+"/"+t._s(t.$store.state.test_one.length)+" ")]),s("div",{staticClass:"on-test-range"},[s("range-slider",{staticClass:"slider",attrs:{min:"0",max:t.$store.state.test_one.length,step:"1"},model:{value:t.activeIndex,callback:function(s){t.activeIndex=s},expression:"activeIndex"}})],1),t._l(t.$store.state.test_one,(function(e,i){return s("div",{key:e.id,staticClass:"on-test-card"},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.activeIndex==i,expression:"activeIndex == i"}]},[s("div",[s("div",{staticClass:"on-test-quiz"},[t._v(" "+t._s(e.title)+" ")]),t._l(t.choices,(function(i,a){return s("div",{key:a,staticClass:"answers_quiz"},[s("div",{staticClass:"ans_wer_h"},[t._v(" "+t._s(i.letter)+" ")]),s("div",{staticClass:"answer_mains_f"},t._l(i.skill,(function(i,n){return s("div",{key:n,staticClass:"answer_mains"},[s("label",{staticClass:"ans_main_label container_input",attrs:{for:`option${i.id}${e.id}`}},[s("input",{attrs:{type:"radio",id:`option${i.id}${e.id}`,name:"op"+a},on:{input:function(s){return t.myFunc(i,e)}}}),s("span",{staticClass:"checkmark"}),s("span",{staticClass:"ans_text"},[t._v(t._s(i.text))])])])})),0)])}))],2),s("div",{staticClass:"on-test-button"},[s("button",{staticClass:"prev",on:{click:function(s){return t.prevStart()}}},[s("span",[t._v("Odldingisi")])]),s("button",{staticClass:"next",class:{actives:t.answers.length>t.activeIndex||0==e.choices.length||e.is_many_variants},on:{click:function(s){return t.endTest()}}},[s("span",[t._v("Tugatish")])]),s("button",{staticClass:"next",class:{actives:t.answers.length>t.activeIndex||0==e.choices.length||e.is_many_variants},on:{click:function(s){return t.nextStart(e,i)}}},[s("span",[t._v("Keyngisi")])])])])])}))],2)])]),s("Footer")],1)},a=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"row"},[s("div",{staticClass:"col-lg-6"},[s("h2",{staticClass:"section-title"},[t._v("Test natijasi")])])])}],n=e("0418"),o=e("fd2d"),r=e("c7e3"),l=e.n(r),c=(e("2760"),{components:{Footer:o["a"],Header:n["a"],RangeSlider:l.a},data(){return{ans_quiz:"",sliderValue:1,value:0,activeIndex:0,max:12,isActive:!1,userResponses:[],answer:[],activeAn:[],choices:[{id:1,letter:"a",skill:[{id:11,skill_child:2,text:"Men qoida bo'yichabajaraman"},{id:12,skill_child:1,text:"O'rtacha bajaraman"},{id:13,skill_child:0,text:"Men buni umuman bajara olmayman"}]},{id:2,letter:"b",skill:[{id:14,attitude_child:2,text:"Ijobiy"},{id:15,attitude_child:1,text:"Befarq"},{id:16,attitude_child:0,text:"Salbiy"}]},{id:3,letter:"c",skill:[{id:17,professional_wish_child:2,text:"Xa"},{id:18,professional_wish_child:1,text:"Baribir"},{id:19,professional_wish_child:0,text:"Yo'q"}]}],an_res:{},is_response:!1,series:[{name:"",data:[55,44,5,90,45,5,90]}],chartOptions:{chart:{height:100,type:"radar"},xaxis:{categories:["A:Art-Sanat","B:Business-Biznes","E:Experimental-experimental faolyat","O:Organisation-Tashkilot","P:Physical-jismoniy ish","Social-ijtimoiy ish","W:Words-so'zlar"]}},option:"",answers:[]}},mounted(){this.$store.dispatch("getQuizOne",this.$route.params.id),this.max=this.$store.state.test_one.length,this.$store.dispatch("getTestsId",this.$route.params.id),console.log(this.choices,"ans")},methods:{myFunc(t,s){console.log(t),this.answer[this.activeIndex]={question_id:s.id,value:1,skill:[{id:17,professional_wish_child:2,text:"Xa"},{id:18,professional_wish_child:1,text:"Baribir"},{id:19,professional_wish_child:0,text:"Yo'q"}],attitude:t.attitude_child,professional_wish:t.professional_wish_child},console.log(this.answer)},generateReport(){this.$refs.html2Pdf.generatePdf()},getAns(t){console.log(),this.answer[this.sliderValue-1]={question_id:this.$store.state.test_one[this.sliderValue-1].id,value:Number(t)},console.log(typeof Number(t))},nextStart(){this.activeIndex<this.$store.state.test_one.length&&this.activeIndex++},endTest(){this.$axiosDefault.post("test-result/",{answers:this.answer,test_id:this.$route.params.id},{headers:{Authorization:"Bearer "+localStorage.getItem("reg_token")}}).then(t=>{this.an_res=t.data.result,this.is_response=!0})},getOnetest(){this.is_response=!1,this.activeIndex=0,this.answer=[],this.answers=[]},prevStart(){this.activeIndex>0&&this.activeIndex--}}}),d=c,_=e("2877"),h=Object(_["a"])(d,i,a,!1,null,null,null);s["default"]=h.exports}}]);
//# sourceMappingURL=chunk-2d20f185.60917a21.js.map