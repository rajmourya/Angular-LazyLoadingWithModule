(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["todos-todos-module"],{

/***/ "./src/app/todos/todos-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/todos/todos-routing.module.ts ***!
  \***********************************************/
/*! exports provided: TodosRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosRoutingModule", function() { return TodosRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _todos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos.component */ "./src/app/todos/todos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _todos_component__WEBPACK_IMPORTED_MODULE_2__["TodosComponent"] }
];
var TodosRoutingModule = /** @class */ (function () {
    function TodosRoutingModule() {
    }
    TodosRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], TodosRoutingModule);
    return TodosRoutingModule;
}());



/***/ }),

/***/ "./src/app/todos/todos.component.html":
/*!********************************************!*\
  !*** ./src/app/todos/todos.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Todos</h3>\n<table class=\"table table-bordered\">\n    <thead style=\"background:#eeeeee;\">\n      <tr>\n        <th>ID</th>\n        <th>User&nbsp;ID</th>\n        <th>Title</th>\n        <th>Status</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor = \"let todo of pagedItems\">\n        <td>{{todo.id}}</td>\n        <td>t-{{todo.userId}}</td>\n        <td>{{todo.title}}</td>\n        <td [ngStyle]=\"{ 'color': (todo.completed ? 'green' : 'red') }\">{{todo.completed}}</td>\n      </tr>\n    </tbody>    \n  </table>\n  <div class=\"text-center block\">\n      <!-- pager -->\n  <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination\">\n      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n          <a (click)=\"setPage(1)\">First</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\n          <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\n      </li>\n      <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\n          <a (click)=\"setPage(page)\">{{page}}</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n          <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\n      </li>\n      <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\n          <a (click)=\"setPage(pager.totalPages)\">Last</a>\n      </li>\n  </ul>\n  </div>\n  "

/***/ }),

/***/ "./src/app/todos/todos.component.ts":
/*!******************************************!*\
  !*** ./src/app/todos/todos.component.ts ***!
  \******************************************/
/*! exports provided: TodosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosComponent", function() { return TodosComponent; });
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


var TodosComponent = /** @class */ (function () {
    function TodosComponent(cs) {
        this.cs = cs;
        this.todos = [];
        this.pager = {};
    }
    TodosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cs.getTodos().subscribe(function (data) { _this.todos = data; _this.setPage(1); });
    };
    TodosComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        // get pager object from service
        this.pager = this.cs.getPager(this.todos.length, page);
        // get current page of items
        this.pagedItems = this.todos.slice(this.pager.startIndex, this.pager.endIndex + 1);
    };
    TodosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-todos',
            template: __webpack_require__(/*! ./todos.component.html */ "./src/app/todos/todos.component.html")
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], TodosComponent);
    return TodosComponent;
}());



/***/ }),

/***/ "./src/app/todos/todos.module.ts":
/*!***************************************!*\
  !*** ./src/app/todos/todos.module.ts ***!
  \***************************************/
/*! exports provided: TodosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosModule", function() { return TodosModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _todos_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos.component */ "./src/app/todos/todos.component.ts");
/* harmony import */ var _todos_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos-routing.module */ "./src/app/todos/todos-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var TodosModule = /** @class */ (function () {
    function TodosModule() {
    }
    TodosModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _todos_routing_module__WEBPACK_IMPORTED_MODULE_3__["TodosRoutingModule"]
            ],
            declarations: [_todos_component__WEBPACK_IMPORTED_MODULE_2__["TodosComponent"]]
        })
    ], TodosModule);
    return TodosModule;
}());



/***/ })

}]);
//# sourceMappingURL=todos-todos-module.js.map