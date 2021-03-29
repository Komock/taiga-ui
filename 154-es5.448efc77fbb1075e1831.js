function _templateObject5(){var e=_taggedTemplateLiteral([":\u241f856efa24b2b203ad1c001649937b5c5738e38f97\u241f8042412267862615798:Add to the template:"]);return _templateObject5=function(){return e},e}function _templateObject4(){var e=_taggedTemplateLiteral([":\u241f2815c1d92b1eaaa37c5f388f11f3e450c73397a1\u241f5193005719774783855: Import an Angular module for forms and ",":START_TAG_CODE:TuiReorderModule",":CLOSE_TAG_CODE: in the same module where you want to use our component: "]);return _templateObject4=function(){return e},e}function _templateObject3(){var e=_taggedTemplateLiteral([":\u241f45f210b96a2a6e91f52f153a4f8dc30662629f8e\u241f142654590491855672:Usage"]);return _templateObject3=function(){return e},e}function _templateObject2(){var e=_taggedTemplateLiteral([":\u241fa2f4cf6efd7f3c55087058b16fa01f2dce618b72\u241f7330041947239599779:Component to change order of elements in an array"]);return _templateObject2=function(){return e},e}function _templateObject(){var e=_taggedTemplateLiteral([":\u241fff3774138bffaf62a4b812046dfbb9939c42657e\u241f6492831808763156510:Setup"]);return _templateObject=function(){return e},e}function _taggedTemplateLiteral(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{"3G/7":function(e,t,n){"use strict";n.r(t),n.d(t,"ExampleTuiReorderModule",(function(){return E}));var a,r,l=n("2kYt"),o=n("sEIs"),i=n("SVIu"),c=n("m/Iy"),m=n("EM62"),d=n("OZlg"),p=n("e0eB"),s=n("iyc4"),u=n("u/Vf"),f=((a=function e(){_classCallCheck(this,e),this.items=["John Cleese","Eric Idle","Michael Palin","Terry Gilliam","Terry Jones","Graham Chapman"],this.enabled=this.items}).\u0275fac=function(e){return new(e||a)},a.\u0275cmp=m["\u0275\u0275defineComponent"]({type:a,selectors:[["tui-reorder-example-1"]],decls:1,vars:2,consts:[[1,"list",3,"items","enabled","itemsChange","enabledChange"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-reorder",0),m["\u0275\u0275listener"]("itemsChange",(function(e){return t.items=e}))("enabledChange",(function(e){return t.enabled=e})),m["\u0275\u0275elementEnd"]()),2&e&&m["\u0275\u0275property"]("items",t.items)("enabled",t.enabled)},directives:[u.a],styles:[".list[_ngcontent-%COMP%]{width:200px}"],changeDetection:0}),a),b=n("u8jZ"),h=["pageTab",$localize(_templateObject())];r=$localize(_templateObject2());var g,C,_=["heading",$localize(_templateObject3())];function T(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"p"),m["\u0275\u0275i18n"](1,r),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](2,"tui-doc-example",3),m["\u0275\u0275i18nAttributes"](3,_),m["\u0275\u0275element"](4,"tui-reorder-example-1"),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](2),m["\u0275\u0275property"]("content",n.example1)}}function O(e,t){if(1&e&&(m["\u0275\u0275elementStart"](0,"ol",4),m["\u0275\u0275elementStart"](1,"li"),m["\u0275\u0275elementStart"](2,"p"),m["\u0275\u0275i18nStart"](3,g),m["\u0275\u0275element"](4,"code"),m["\u0275\u0275i18nEnd"](),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](5,"tui-doc-code",5),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementStart"](6,"li"),m["\u0275\u0275elementStart"](7,"p"),m["\u0275\u0275i18n"](8,C),m["\u0275\u0275elementEnd"](),m["\u0275\u0275element"](9,"tui-doc-code",6),m["\u0275\u0275elementEnd"](),m["\u0275\u0275elementEnd"]()),2&e){var n=m["\u0275\u0275nextContext"]();m["\u0275\u0275advance"](5),m["\u0275\u0275property"]("code",n.exampleImportModule),m["\u0275\u0275advance"](4),m["\u0275\u0275property"]("code",n.exampleInsertTemplate)}}g=$localize(_templateObject4(),"\ufffd#4\ufffd","\ufffd/#4\ufffd"),C=$localize(_templateObject5());var y,j,x=((j=function e(){_classCallCheck(this,e),this.example1={TypeScript:"import {Component} from '@angular/core';\nimport {changeDetection} from '../../../../../change-detection-strategy';\nimport {encapsulation} from '../../../../../view-encapsulation';\n\n@Component({\n    selector: 'tui-reorder-example-1',\n    templateUrl: './index.html',\n    styleUrls: ['./index.less'],\n    changeDetection,\n    encapsulation,\n})\nexport class TuiReorderExample1 {\n    items = [\n        'John Cleese',\n        'Eric Idle',\n        'Michael Palin',\n        'Terry Gilliam',\n        'Terry Jones',\n        'Graham Chapman',\n    ];\n\n    enabled = this.items;\n}\n",HTML:'<tui-reorder class="list" [(items)]="items" [(enabled)]="enabled"></tui-reorder>\n'},this.exampleImportModule="import {TuiReorderModule} from '@taiga-ui/addon-table/components/reorder';\n\n...\n\n@NgModule({\n    imports: [\n        ...\n        TuiReorderModule,\n    ],\n...\n",this.exampleInsertTemplate='<tui-reorder [(items)]="items" [(enabled)]="enabled"></tui-reorder>\n'}).\u0275fac=function(e){return new(e||j)},j.\u0275cmp=m["\u0275\u0275defineComponent"]({type:j,selectors:[["example-tui-reorder"]],decls:4,vars:0,consts:[["header","Reorder","package","ADDON-TABLE","type","components"],["pageTab",""],[6,"pageTab"],["id","usage",3,"content",6,"heading"],[1,"b-demo-steps"],["filename","myComponent.module.ts",3,"code"],["filename","myComponent.template.html",3,"code"]],template:function(e,t){1&e&&(m["\u0275\u0275elementStart"](0,"tui-doc-page",0),m["\u0275\u0275template"](1,T,5,1,"ng-template",1),m["\u0275\u0275template"](2,O,10,2,"ng-template",2),m["\u0275\u0275i18nAttributes"](3,h),m["\u0275\u0275elementEnd"]())},directives:[d.a,p.a,s.a,f,b.a],encapsulation:2,changeDetection:0}),j),E=((y=function e(){_classCallCheck(this,e)}).\u0275mod=m["\u0275\u0275defineNgModule"]({type:y}),y.\u0275inj=m["\u0275\u0275defineInjector"]({factory:function(e){return new(e||y)},imports:[[l.c,c.a,i.h,o.f.forChild(Object(i.o)(x))]]}),y)}}]);