function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}function _defineProperties(l,n){for(var e=0;e<n.length;e++){var u=n[e];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function _createClass(l,n,e){return n&&_defineProperties(l.prototype,n),e&&_defineProperties(l,e),l}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{dksV:function(l,n,e){"use strict";e.r(n);var u=e("8Y7J"),t=e("XNiG"),a=e("1G5W"),o=e("K7hc"),s=e("SVse"),r=function(){function l(n,e,u,a,o){_classCallCheck(this,l),this._documentService=n,this._router=e,this._services=u,this._searchService=a,this.modalService=o,this.ListPendingApproval=[],this.p=1,this.showMessage=!1,this.showData=!1,this.baseDocumentBodies=[],this.documentBodies=[],this.documentDatas=[],this.ngUnsubscribe=new t.a,this.datePipe=new s.d("en-US")}return _createClass(l,[{key:"ngOnDestroy",value:function(){this.ngUnsubscribe.next(),this.ngUnsubscribe.complete(),this.openModalLoader(!1)}},{key:"ngOnInit",value:function(){this._router.url=="".concat(o.a.basePath,"/nasabah/approval")?(this.superType="nasabah",this.getHeaderDocument(this.superType)):(this.superType="internal",this.getHeaderDocument(this.superType))}},{key:"getHeaderDocument",value:function(l){var n,e=this;(n="nasabah"==l?JSON.parse(sessionStorage.getItem("headerspv-nasabah")):JSON.parse(sessionStorage.getItem("headerspv-internal")))?(this.documentHeaders=n.output,this.buildHeader(this.documentHeaders),this.searchDocument(this.documentHeaders)):(this.openModalLoader(!0),this._searchService.getSearchHeaderDock("spv",l).pipe(Object(a.a)(this.ngUnsubscribe)).subscribe((function(n){"nasabah"==l?sessionStorage.setItem("headerspv-nasabah",JSON.stringify(n)):sessionStorage.setItem("headerspv-internal",JSON.stringify(n)),e.documentHeaders=n.output,e.buildHeader(e.documentHeaders),e.searchDocument(e.documentHeaders),e.openModalLoader(!1)})))}},{key:"buildHeader",value:function(l){var n=l.map((function(l){return l.label_name}));this.documentHeadersValue=Array.from(new Set(n)),this.statusHeaderIndex=this.documentHeadersValue.findIndex((function(l){return"aktivitas"==l.toLocaleLowerCase()}))+1}},{key:"searchDocument",value:function(l){var n=this,e=l.map((function(l){return l.object_type})),u=Array.from(new Set(e));this.openModalLoader(!0),u.forEach((function(l){n._documentService.getPendingDocument(l).subscribe((function(e){for(var u=0;u<e.output.length;u++)n.documentDatas.push(e.output[u]);e.output.forEach((function(l){return n.ListPendingApproval.push(l)})),n.mergeDocumentResult(l,e.output),n.openModalLoader(!1)}))}))}},{key:"mergeDocumentResult",value:function(l,n){var e=this;n.forEach((function(n){var u=[],t=e.documentHeaders.filter((function(n){return n.object_type==l}));u.push(n.r_object_id),t.forEach((function(l){var t=null!=n[l.attr_name]?n[l.attr_name]:"-";"date"==l.header_type.toLocaleLowerCase()&&"-"!=t&&(t=e.dataFormatter(t)),u.push(t)})),e.baseDocumentBodies.push(u),e.documentBodies.push(u)})),this.dataCheck()}},{key:"dataCheck",value:function(){this.showMessage=0==this.ListPendingApproval.length}},{key:"clearDataAndSearch",value:function(l){this.ListPendingApproval=[],this.documentHeaders=[],this.documentHeadersValue=[],this.baseDocumentBodies=[],this.documentBodies=[],this.superType=l,this.getHeaderDocument(l)}},{key:"sendData",value:function(l){for(var n,e=0;e<this.documentDatas.length;e++)this.documentDatas[e].r_object_id==l[0]&&(n=this.documentDatas[e]);this._router.url=="".concat(o.a.basePath,"/nasabah/approval")?(this._router.navigateByUrl("".concat(o.a.basePath,"/nasabah/review-document"),{state:{data:n}}),sessionStorage.setItem("current-document-pending",JSON.stringify(n)),sessionStorage.setItem("super_type",this.superType)):(this._router.navigateByUrl("".concat(o.a.basePath,"/internal/review-document"),{state:{data:n}}),sessionStorage.setItem("current-document-pending",JSON.stringify(n)),sessionStorage.setItem("super_type",this.superType))}},{key:"dataFormatter",value:function(l){var n=new Date(l);return"Invalid Date"!=n.toString()?this.datePipe.transform(n,"dd-MM-yyyy"):l}},{key:"openModalLoader",value:function(l){l?this.modalService.open(this.loader,{backdrop:"static",centered:!0,keyboard:!1}).result.then((function(l){}),(function(l){})):this.modalService.dismissAll()}}]),l}(),i=function l(){_classCallCheck(this,l)},c=e("pMnS"),b=e("9AJC"),d=e("xkgV"),h=e("abRS"),p=e("9F3s"),f=e("iInd"),m=e("k8hr"),g=e("dAmK"),v=e("G0yt"),y=u.xb({encapsulation:0,styles:[[""]],data:{}});function J(l){return u.Ub(0,[(l()(),u.zb(0,0,null,null,1,"th",[["scope","col"]],null,null,null,null,null)),(l()(),u.Sb(1,null,["",""]))],null,(function(l,n){l(n,1,0,n.context.$implicit)}))}function S(l){return u.Ub(0,[(l()(),u.zb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Sb(-1,null,[" Tambah Dokumen "]))],null,null)}function k(l){return u.Ub(0,[(l()(),u.zb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Sb(-1,null,[" Ubah Dokumen "]))],null,null)}function D(l){return u.Ub(0,[(l()(),u.zb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Sb(-1,null,[" Hapus Dokumen "]))],null,null)}function _(l){return u.Ub(0,[(l()(),u.zb(0,0,null,null,6,"span",[],null,null,null,null,null)),(l()(),u.ob(16777216,null,null,1,null,S)),u.yb(2,16384,null,0,s.m,[u.U,u.R],{ngIf:[0,"ngIf"]},null),(l()(),u.ob(16777216,null,null,1,null,k)),u.yb(4,16384,null,0,s.m,[u.U,u.R],{ngIf:[0,"ngIf"]},null),(l()(),u.ob(16777216,null,null,1,null,D)),u.yb(6,16384,null,0,s.m,[u.U,u.R],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,2,0,"PENDING_INSERT"==n.parent.context.$implicit),l(n,4,0,"PENDING_UPDATE"==n.parent.context.$implicit),l(n,6,0,"PENDING_DELETE"==n.parent.context.$implicit)}),null)}function I(l){return u.Ub(0,[(l()(),u.zb(0,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),u.Sb(1,null,[" "," "]))],null,(function(l,n){l(n,1,0,n.parent.context.$implicit)}))}function U(l){return u.Ub(0,[(l()(),u.zb(0,0,null,null,4,"td",[["style","text-align: left"]],[[8,"hidden",0]],null,null,null,null)),(l()(),u.ob(16777216,null,null,1,null,_)),u.yb(2,16384,null,0,s.m,[u.U,u.R],{ngIf:[0,"ngIf"]},null),(l()(),u.ob(16777216,null,null,1,null,I)),u.yb(4,16384,null,0,s.m,[u.U,u.R],{ngIf:[0,"ngIf"]},null)],(function(l,n){var e=n.component;l(n,2,0,n.context.index==e.statusHeaderIndex),l(n,4,0,n.context.index!=e.statusHeaderIndex)}),(function(l,n){l(n,0,0,0==n.context.index)}))}function z(l){return u.Ub(0,[(l()(),u.zb(0,0,null,null,2,"tr",[["style","cursor: pointer"]],null,[[null,"click"]],(function(l,n,e){var u=!0;return"click"===n&&(u=!1!==l.component.sendData(l.context.$implicit)&&u),u}),null,null)),(l()(),u.ob(16777216,null,null,1,null,U)),u.yb(2,278528,null,0,s.l,[u.U,u.R,u.v],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){l(n,2,0,n.context.$implicit)}),null)}function w(l){return u.Ub(0,[(l()(),u.zb(0,0,null,null,2,"div",[],null,null,null,null,null)),(l()(),u.zb(1,0,null,null,1,"p",[["class","text-center"]],null,null,null,null,null)),(l()(),u.Sb(-1,null,["Tidak ada dokumen baru"]))],null,null)}function x(l){return u.Ub(0,[(l()(),u.zb(0,0,null,null,1,"div",[["class","modal-body dea-modal-content dea-loaderBG"]],null,null,null,null,null)),(l()(),u.zb(1,0,null,null,0,"img",[["src","assets/img/dea_loading.gif"]],null,null,null,null,null))],null,null)}function P(l){return u.Ub(0,[u.Qb(402653184,1,{loader:0}),(l()(),u.zb(1,0,null,null,22,"div",[["class","app-content overflow-auto"]],null,null,null,null,null)),(l()(),u.zb(2,0,null,null,21,"div",[["class","dea-container"]],null,null,null,null,null)),(l()(),u.zb(3,0,null,null,4,"div",[["class","row"]],null,null,null,null,null)),(l()(),u.zb(4,0,null,null,3,"div",[["class","row col-10"]],null,null,null,null,null)),(l()(),u.zb(5,0,null,null,2,"h5",[["class","col-4 mt-4"]],null,null,null,null,null)),(l()(),u.zb(6,0,null,null,1,"b",[],null,null,null,null,null)),(l()(),u.Sb(-1,null,["Persetujuan Dokumen"])),(l()(),u.zb(8,0,null,null,15,"div",[],null,null,null,null,null)),(l()(),u.zb(9,0,null,null,9,"table",[["class","table table-hover dea-table mt-1"]],null,null,null,null,null)),(l()(),u.zb(10,0,null,null,3,"thead",[],null,null,null,null,null)),(l()(),u.zb(11,0,null,null,2,"tr",[],null,null,null,null,null)),(l()(),u.ob(16777216,null,null,1,null,J)),u.yb(13,278528,null,0,s.l,[u.U,u.R,u.v],{ngForOf:[0,"ngForOf"]},null),(l()(),u.zb(14,0,null,null,4,"tbody",[],null,null,null,null,null)),(l()(),u.ob(16777216,null,null,3,null,z)),u.yb(16,278528,null,0,s.l,[u.U,u.R,u.v],{ngForOf:[0,"ngForOf"]},null),u.Nb(17,{itemsPerPage:0,currentPage:1}),u.Mb(0,d.b,[d.e]),(l()(),u.ob(16777216,null,null,1,null,w)),u.yb(20,16384,null,0,s.m,[u.U,u.R],{ngIf:[0,"ngIf"]},null),(l()(),u.zb(21,0,null,null,2,"div",[["class","dea-pagination"]],null,null,null,null,null)),(l()(),u.zb(22,0,null,null,1,"pagination-controls",[],null,[[null,"pageChange"]],(function(l,n,e){var u=!0;return"pageChange"===n&&(u=!1!==(l.component.p=e)&&u),u}),h.b,h.a)),u.yb(23,49152,null,0,d.c,[],null,{pageChange:"pageChange"}),(l()(),u.ob(0,[[1,2],["loading",2]],null,0,null,x))],(function(l,n){var e=n.component;l(n,13,0,e.documentHeadersValue);var t=u.Tb(n,16,0,u.Lb(n,18).transform(e.documentBodies,l(n,17,0,10,e.p)));l(n,16,0,t),l(n,20,0,e.showMessage)}),null)}var H=u.vb("app-approval",r,(function(l){return u.Ub(0,[(l()(),u.zb(0,0,null,null,1,"app-approval",[],null,null,null,P,y)),u.yb(1,245760,null,0,r,[p.a,f.k,m.a,g.a,v.y],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),C=e("s7LF"),L=e("xxOi");e.d(n,"ApprovalModuleNgFactory",(function(){return O}));var O=u.wb(i,[],(function(l){return u.Ib([u.Jb(512,u.l,u.hb,[[8,[c.a,b.a,b.b,b.f,b.g,b.c,b.d,b.e,H]],[3,u.l],u.B]),u.Jb(4608,s.o,s.n,[u.x,[2,s.J]]),u.Jb(4608,C.z,C.z,[]),u.Jb(4608,C.e,C.e,[]),u.Jb(4608,v.y,v.y,[u.l,u.t,v.nb,v.z]),u.Jb(4608,d.e,d.e,[]),u.Jb(1073742336,s.b,s.b,[]),u.Jb(1073742336,f.o,f.o,[[2,f.t],[2,f.k]]),u.Jb(1073742336,C.y,C.y,[]),u.Jb(1073742336,C.j,C.j,[]),u.Jb(1073742336,C.v,C.v,[]),u.Jb(1073742336,v.d,v.d,[]),u.Jb(1073742336,v.g,v.g,[]),u.Jb(1073742336,v.h,v.h,[]),u.Jb(1073742336,v.l,v.l,[]),u.Jb(1073742336,v.m,v.m,[]),u.Jb(1073742336,v.t,v.t,[]),u.Jb(1073742336,v.u,v.u,[]),u.Jb(1073742336,v.A,v.A,[]),u.Jb(1073742336,v.C,v.C,[]),u.Jb(1073742336,v.G,v.G,[]),u.Jb(1073742336,v.J,v.J,[]),u.Jb(1073742336,v.M,v.M,[]),u.Jb(1073742336,v.P,v.P,[]),u.Jb(1073742336,v.S,v.S,[]),u.Jb(1073742336,v.X,v.X,[]),u.Jb(1073742336,v.ab,v.ab,[]),u.Jb(1073742336,v.bb,v.bb,[]),u.Jb(1073742336,v.cb,v.cb,[]),u.Jb(1073742336,v.B,v.B,[]),u.Jb(1073742336,L.a,L.a,[]),u.Jb(1073742336,d.a,d.a,[]),u.Jb(1073742336,i,i,[]),u.Jb(1024,f.i,(function(){return[[{path:"",component:r}]]}),[]),u.Jb(256,C.A,"never",[])])}))}}]);