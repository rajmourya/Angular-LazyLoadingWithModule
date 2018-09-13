(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["comments-comments-module"],{

/***/ "./src/app/comments/comments-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/comments/comments-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CommentsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsRoutingModule", function() { return CommentsRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _comments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.component */ "./src/app/comments/comments.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _comments_component__WEBPACK_IMPORTED_MODULE_2__["CommentsComponent"] }
];
var CommentsRoutingModule = /** @class */ (function () {
    function CommentsRoutingModule() {
    }
    CommentsRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], CommentsRoutingModule);
    return CommentsRoutingModule;
}());



/***/ }),

/***/ "./src/app/comments/comments.component.html":
/*!**************************************************!*\
  !*** ./src/app/comments/comments.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Comments</h3>\n<table class=\"table table-bordered\">\n    <thead style=\"background:#eeeeee;\">\n      <tr>\n        <th>ID</th>\n        <th>Post&nbsp;ID</th>\n        <th>Name</th>\n        <th>Email</th>\n        <th>Body</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor = \"let comment of pagedItems\">\n        <td>{{comment.id}}</td>\n        <td>c-{{comment.postId}}</td>\n        <td>{{comment.name}}</td>\n        <td>{{comment.email}}</td>\n        <td>{{comment.body}}</td>\n      </tr>\n    </tbody>    \n  </table>\n<div class=\"text-center block\">\n    <!-- pager -->\n<ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n    <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n        <a (click)=\"setPage(1)\">First</a>\n    </li>\n    <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n        <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n    </li>\n    <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n        <a (click)=\"setPage(page)\">{{page}}</a>\n    </li>\n    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n        <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n    </li>\n    <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n        <a (click)=\"setPage(pager.totalPages)\">Last</a>\n    </li>\n</ul>\n</div>\n"

/***/ }),

/***/ "./src/app/comments/comments.component.ts":
/*!************************************************!*\
  !*** ./src/app/comments/comments.component.ts ***!
  \************************************************/
/*! exports provided: CommentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsComponent", function() { return CommentsComponent; });
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


var CommentsComponent = /** @class */ (function () {
    function CommentsComponent(cs) {
        this.cs = cs;
        this.comments = [];
        this.pager = {};
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cs.getComments().subscribe(function (data) { _this.comments = data; _this.setPage(1); });
    };
    CommentsComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.cs.getPager(this.comments.length, page);
        // get current page of items
        this.pagedItems = this.comments.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    CommentsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-comments',
            template: __webpack_require__(/*! ./comments.component.html */ "./src/app/comments/comments.component.html")
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], CommentsComponent);
    return CommentsComponent;
}());



/***/ }),

/***/ "./src/app/comments/comments.module.ts":
/*!*********************************************!*\
  !*** ./src/app/comments/comments.module.ts ***!
  \*********************************************/
/*! exports provided: CommentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommentsModule", function() { return CommentsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _comments_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comments.component */ "./src/app/comments/comments.component.ts");
/* harmony import */ var _comments_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comments-routing.module */ "./src/app/comments/comments-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CommentsModule = /** @class */ (function () {
    function CommentsModule() {
    }
    CommentsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _comments_routing_module__WEBPACK_IMPORTED_MODULE_3__["CommentsRoutingModule"]
            ],
            declarations: [_comments_component__WEBPACK_IMPORTED_MODULE_2__["CommentsComponent"]]
        })
    ], CommentsModule);
    return CommentsModule;
}());



/***/ })

}]);
//# sourceMappingURL=comments-comments-module.js.map