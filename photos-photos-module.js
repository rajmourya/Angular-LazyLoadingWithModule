(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["photos-photos-module"],{

/***/ "./src/app/photos/photos-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/photos/photos-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PhotosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosRoutingModule", function() { return PhotosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _photos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photos.component */ "./src/app/photos/photos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _photos_component__WEBPACK_IMPORTED_MODULE_2__["PhotosComponent"] }
];
var PhotosRoutingModule = /** @class */ (function () {
    function PhotosRoutingModule() {
    }
    PhotosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PhotosRoutingModule);
    return PhotosRoutingModule;
}());



/***/ }),

/***/ "./src/app/photos/photos.component.html":
/*!**********************************************!*\
  !*** ./src/app/photos/photos.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Photos</h3>\n<table class=\"table table-bordered\">\n    <thead style=\"background:#eeeeee;\">\n      <tr>\n        <th>ID</th>\n        <th>User&nbsp;ID</th>\n        <th>Title</th>\n        <th>Url</th>\n        <th>Thumbnail Url</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor = \"let photo of pagedItems\">\n        <td>{{photo.id}}</td>\n        <td>p-{{photo.albumId}}</td>\n        <td>{{photo.title}}</td>\n        <td>{{photo.url}}</td>\n        <td><img src=\"{{photo.thumbnailUrl}}\" style=\"width:30px;\"></td>\n      </tr>\n    </tbody>    \n  </table>\n  <div class=\"text-center block\">\n      <!-- pager -->\n  <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n          <a (click)=\"setPage(1)\">First</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n          <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n      </li>\n      <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n          <a (click)=\"setPage(page)\">{{page}}</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n          <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n          <a (click)=\"setPage(pager.totalPages)\">Last</a>\n      </li>\n  </ul>\n  </div>\n  "

/***/ }),

/***/ "./src/app/photos/photos.component.ts":
/*!********************************************!*\
  !*** ./src/app/photos/photos.component.ts ***!
  \********************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
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


var PhotosComponent = /** @class */ (function () {
    function PhotosComponent(cs) {
        this.cs = cs;
        this.photos = [];
        this.pager = {};
    }
    PhotosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cs.getPhotos().subscribe(function (data) { _this.photos = data; _this.setPage(1); });
    };
    PhotosComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.cs.getPager(this.photos.length, page);
        // get current page of items
        this.pagedItems = this.photos.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    PhotosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-photos',
            template: __webpack_require__(/*! ./photos.component.html */ "./src/app/photos/photos.component.html")
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], PhotosComponent);
    return PhotosComponent;
}());



/***/ }),

/***/ "./src/app/photos/photos.module.ts":
/*!*****************************************!*\
  !*** ./src/app/photos/photos.module.ts ***!
  \*****************************************/
/*! exports provided: PhotosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosModule", function() { return PhotosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _photos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photos.component */ "./src/app/photos/photos.component.ts");
/* harmony import */ var _photos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./photos-routing.module */ "./src/app/photos/photos-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PhotosModule = /** @class */ (function () {
    function PhotosModule() {
    }
    PhotosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _photos_routing_module__WEBPACK_IMPORTED_MODULE_3__["PhotosRoutingModule"]
            ],
            declarations: [_photos_component__WEBPACK_IMPORTED_MODULE_2__["PhotosComponent"]]
        })
    ], PhotosModule);
    return PhotosModule;
}());



/***/ })

}]);
//# sourceMappingURL=photos-photos-module.js.map