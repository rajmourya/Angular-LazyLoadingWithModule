(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["albums-albums-module"],{

/***/ "./src/app/albums/albums-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/albums/albums-routing.module.ts ***!
  \*************************************************/
/*! exports provided: AlbumsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsRoutingModule", function() { return AlbumsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _albums_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./albums.component */ "./src/app/albums/albums.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _albums_component__WEBPACK_IMPORTED_MODULE_2__["AlbumsComponent"] }
];
var AlbumsRoutingModule = /** @class */ (function () {
    function AlbumsRoutingModule() {
    }
    AlbumsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AlbumsRoutingModule);
    return AlbumsRoutingModule;
}());



/***/ }),

/***/ "./src/app/albums/albums.component.html":
/*!**********************************************!*\
  !*** ./src/app/albums/albums.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Albums</h3>\n<table class=\"table table-bordered\">\n    <thead style=\"background:#eeeeee;\">\n      <tr>\n        <th>ID</th>\n        <th>User&nbsp;ID</th>\n        <th>Title</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor = \"let album of pagedItems\">\n        <td>{{album.id}}</td>\n        <td>a-{{album.userId}}</td>\n        <td>{{album.title}}</td>\n      </tr>\n    </tbody>    \n  </table>\n  <div class=\"text-center block\">\n      <!-- pager -->\n  <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n          <a (click)=\"setPage(1)\">First</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n          <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n      </li>\n      <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n          <a (click)=\"setPage(page)\">{{page}}</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n          <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n          <a (click)=\"setPage(pager.totalPages)\">Last</a>\n      </li>\n  </ul>\n  </div>\n  "

/***/ }),

/***/ "./src/app/albums/albums.component.ts":
/*!********************************************!*\
  !*** ./src/app/albums/albums.component.ts ***!
  \********************************************/
/*! exports provided: AlbumsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsComponent", function() { return AlbumsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlbumsComponent = /** @class */ (function () {
    function AlbumsComponent(cs) {
        this.cs = cs;
        this.albums = [];
        this.pager = {};
    }
    AlbumsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cs.getAlbums().subscribe(function (data) { _this.albums = data; _this.setPage(1); });
    };
    AlbumsComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.cs.getPager(this.albums.length, page);
        // get current page of items
        this.pagedItems = this.albums.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    AlbumsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-albums',
            template: __webpack_require__(/*! ./albums.component.html */ "./src/app/albums/albums.component.html")
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], AlbumsComponent);
    return AlbumsComponent;
}());



/***/ }),

/***/ "./src/app/albums/albums.module.ts":
/*!*****************************************!*\
  !*** ./src/app/albums/albums.module.ts ***!
  \*****************************************/
/*! exports provided: AlbumsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlbumsModule", function() { return AlbumsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _albums_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./albums.component */ "./src/app/albums/albums.component.ts");
/* harmony import */ var _albums_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./albums-routing.module */ "./src/app/albums/albums-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AlbumsModule = /** @class */ (function () {
    function AlbumsModule() {
    }
    AlbumsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _albums_routing_module__WEBPACK_IMPORTED_MODULE_3__["AlbumsRoutingModule"]
            ],
            declarations: [_albums_component__WEBPACK_IMPORTED_MODULE_2__["AlbumsComponent"]]
        })
    ], AlbumsModule);
    return AlbumsModule;
}());



/***/ })

}]);
//# sourceMappingURL=albums-albums-module.js.map