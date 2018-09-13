(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["users-users-module"],{

/***/ "./src/app/users/user.component.html":
/*!*******************************************!*\
  !*** ./src/app/users/user.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n    <div class=\"col-md-6 col-md-offset-3\">\n        <div class=\"row\">\n\n            <div class=\"panel-group\">\n                <div class=\"panel panel-default\">\n                    <div class=\"panel-heading\"><h4>{{user.name}}</h4></div>\n                    <div class=\"panel-body\">\n                        <div class=\"col-md-3\">\n                            <img src=\"assets/users/{{user.id}}.jpg\" class=\"img-rounded\">\n                        </div>\n                        <div class=\"col-md-9\">\n                           <p><b>UserName:</b> {{user.username}} </p>\n                           <p><b>Email:</b> {{user.email}} </p>\n                           <p><b>Phone:</b> {{user.phone}} </p>\n                           <p><b>Website:</b> {{user.website}} </p>\n                           <p>&nbsp;</p>\n                        </div>\n                        <div class=\"col-md-12\">\n                                <div class=\"panel-group\" id=\"accordion\">\n                                        <div class=\"panel panel-default\">\n                                          <div class=\"panel-heading\">\n                                            <h4 class=\"panel-title\">\n                                              <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\n                                                Address\n                                              </a>\n                                            </h4>\n                                          </div>\n                                          <div id=\"collapseOne\" class=\"panel-collapse collapse\">\n                                            <div class=\"panel-body\">\n                                                    <p><b>Street:</b> {{user.address[\"street\"]}} </p> \n                                                    <p><b>Suite:</b> {{user.address[\"suite\"]}} </p> \n                                                    <p><b>City:</b> {{user.address[\"city\"]}} </p> \n                                                    <p><b>Zipcode:</b> {{user.address[\"zipcode\"]}} </p> \n                                                    <p><b>Latitude:</b> {{user.address[\"geo\"][\"lat\"]}} </p> \n                                                    <p><b>Longitude:</b> {{user.address[\"geo\"][\"lng\"]}} </p> \n                                            </div>\n                                          </div>\n                                        </div>\n                                        <div class=\"panel panel-default\">\n                                          <div class=\"panel-heading\">\n                                            <h4 class=\"panel-title\">\n                                              <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\n                                                Company\n                                              </a>\n                                            </h4>\n                                          </div>\n                                          <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\n                                            <div class=\"panel-body\">\n                                                    <p><b>Name:</b> {{user.company[\"name\"]}} </p> \n                                                    <p><b>Catch Phrase:</b> {{user.company[\"catchPhrase\"]}} </p> \n                                                    <p><b>BS:</b> {{user.company[\"bs\"]}} </p> \n                                            </div>\n                                          </div>\n                                        </div>\n                                    </div>                                      \n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/users/user.component.ts":
/*!*****************************************!*\
  !*** ./src/app/users/user.component.ts ***!
  \*****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common.service */ "./src/app/common.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(route, cs) {
        this.route = route;
        this.cs = cs;
        this.user = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userId = this.route.snapshot.paramMap.get('id');
        this.cs.getUserId(userId).subscribe(function (data) { return _this.user = data; });
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/users/user.component.html"),
            providers: [_common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _common_service__WEBPACK_IMPORTED_MODULE_2__["CommonService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/users/users-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/users/users-routing.module.ts ***!
  \***********************************************/
/*! exports provided: UsersRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersRoutingModule", function() { return UsersRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "./src/app/users/user.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', component: _users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"] },
    { path: 'user/:id', component: _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
];
var UsersRoutingModule = /** @class */ (function () {
    function UsersRoutingModule() {
    }
    UsersRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], UsersRoutingModule);
    return UsersRoutingModule;
}());



/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"text-center\">Users</h3>\n<table class=\"table table-bordered\">\n  <thead style=\"background:#eeeeee;\">\n    <tr>\n      <th>ID</th>\n      <th>Name</th>\n      <th>Email</th>\n      <th>Phone</th>\n      <th>City</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor = \"let user of users\">\n      <td>{{user.id}}</td>\n      <td><a routerLink=\"/users/user/{{user.id}}\">{{user.name}}</a></td>\n      <td>{{user.email}}</td>\n      <td>{{user.phone}}</td>\n      <td>{{user.address[\"city\"]}}</td>\n    </tr>\n  </tbody>\n</table>\n"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
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


var UsersComponent = /** @class */ (function () {
    function UsersComponent(cs) {
        this.cs = cs;
        this.users = [];
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cs.getUsers().subscribe(function (data) { return _this.users = data; });
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html")
        }),
        __metadata("design:paramtypes", [_common_service__WEBPACK_IMPORTED_MODULE_1__["CommonService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/users/users.module.ts":
/*!***************************************!*\
  !*** ./src/app/users/users.module.ts ***!
  \***************************************/
/*! exports provided: UsersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersModule", function() { return UsersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _users_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.component */ "./src/app/users/user.component.ts");
/* harmony import */ var _users_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users-routing.module */ "./src/app/users/users-routing.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var UsersModule = /** @class */ (function () {
    function UsersModule() {
    }
    UsersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _users_routing_module__WEBPACK_IMPORTED_MODULE_4__["UsersRoutingModule"]
            ],
            declarations: [_users_component__WEBPACK_IMPORTED_MODULE_2__["UsersComponent"], _user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"]]
        })
    ], UsersModule);
    return UsersModule;
}());



/***/ })

}]);
//# sourceMappingURL=users-users-module.js.map