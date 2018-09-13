(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["posts-posts-module"],{

/***/ "./src/app/posts/posts-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/posts/posts-routing.module.ts ***!
  \***********************************************/
/*! exports provided: PostsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsRoutingModule", function() { return PostsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.component */ "./src/app/posts/posts.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"] }
];
var PostsRoutingModule = /** @class */ (function () {
    function PostsRoutingModule() {
    }
    PostsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], PostsRoutingModule);
    return PostsRoutingModule;
}());



/***/ }),

/***/ "./src/app/posts/posts.component.html":
/*!********************************************!*\
  !*** ./src/app/posts/posts.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Posts</h3>\n<table class=\"table table-bordered\">\n    <thead style=\"background:#eeeeee;\">\n      <tr>\n        <th>ID</th>\n        <th>User&nbsp;ID</th>\n        <th>Title</th>\n        <th>Body</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor = \"let post of pagedItems\">\n        <td>{{post.id}}</td>\n        <td>p-{{post.userId}}</td>\n        <td>{{post.title}}</td>\n        <td>{{post.body}}</td>\n      </tr>\n    </tbody>    \n  </table>\n  <div class=\"text-center block\">\n      <!-- pager -->\n  <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n          <a (click)=\"setPage(1)\">First</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n          <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n      </li>\n      <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n          <a (click)=\"setPage(page)\">{{page}}</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n          <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n          <a (click)=\"setPage(pager.totalPages)\">Last</a>\n      </li>\n  </ul>\n  </div>\n  "

/***/ }),

/***/ "./src/app/posts/posts.component.ts":
/*!******************************************!*\
  !*** ./src/app/posts/posts.component.ts ***!
  \******************************************/
/*! exports provided: PostsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsComponent", function() { return PostsComponent; });
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


var PostsComponent = /** @class */ (function () {
    function PostsComponent(cs) {
        this.cs = cs;
        this.posts = [];
        this.pager = {};
    }
    PostsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cs.getPosts().subscribe(function (data) { _this.posts = data; _this.setPage(1); });
    };
    PostsComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.cs.getPager(this.posts.length, page);
        // get current page of items
        this.pagedItems = this.posts.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    PostsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-posts',
            template: __webpack_require__(/*! ./posts.component.html */ "./src/app/posts/posts.component.html")
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], PostsComponent);
    return PostsComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.module.ts":
/*!***************************************!*\
  !*** ./src/app/posts/posts.module.ts ***!
  \***************************************/
/*! exports provided: PostsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsModule", function() { return PostsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _posts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.component */ "./src/app/posts/posts.component.ts");
/* harmony import */ var _posts_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts-routing.module */ "./src/app/posts/posts-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PostsModule = /** @class */ (function () {
    function PostsModule() {
    }
    PostsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _posts_routing_module__WEBPACK_IMPORTED_MODULE_3__["PostsRoutingModule"]
            ],
            declarations: [_posts_component__WEBPACK_IMPORTED_MODULE_2__["PostsComponent"]]
        })
    ], PostsModule);
    return PostsModule;
}());



/***/ })

}]);
//# sourceMappingURL=posts-posts-module.js.map