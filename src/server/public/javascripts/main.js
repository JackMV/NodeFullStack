(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/client/$$_lazy_route_resource lazy recursive":
/*!*****************************************************************!*\
  !*** ./src/client/$$_lazy_route_resource lazy namespace object ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/client/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/client/app/about-me/about-me.component.css":
/*!********************************************************!*\
  !*** ./src/client/app/about-me/about-me.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/client/app/about-me/about-me.component.html":
/*!*********************************************************!*\
  !*** ./src/client/app/about-me/about-me.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\n  <ul class='list-group-flush'>\n    <li class='list-group-item'>\n      <h4>Infosys Ltd</h4>\n      <h6 class='mt-1'>Software Developer contracted to AT&T</h6>\n    </li>\n    <li class='list-group-item'>\n      <h4>Revature</h4>\n      <h6>Software Developer</h6>\n    </li>\n    <li class='list-group-item'>\n      <h4>Walkabout Outdoors</h4>\n      <h6>Landscaper</h6>\n    </li>\n    <li class='list-group-item'>\n      <h4>FedEx Express</h4>\n      <h6>Material Handler</h6>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/client/app/about-me/about-me.component.ts":
/*!*******************************************************!*\
  !*** ./src/client/app/about-me/about-me.component.ts ***!
  \*******************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent() {
    }
    AboutMeComponent.prototype.ngOnInit = function () {
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-me',
            template: __webpack_require__(/*! ./about-me.component.html */ "./src/client/app/about-me/about-me.component.html"),
            styles: [__webpack_require__(/*! ./about-me.component.css */ "./src/client/app/about-me/about-me.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/client/app/app.component.css":
/*!******************************************!*\
  !*** ./src/client/app/app.component.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/client/app/app.component.html":
/*!*******************************************!*\
  !*** ./src/client/app/app.component.html ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<html>\n<head>\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\n</head>\n<body>\n  <app-navigation></app-navigation>\n  <router-outlet></router-outlet>\n</body>\n</html>\n"

/***/ }),

/***/ "./src/client/app/app.component.ts":
/*!*****************************************!*\
  !*** ./src/client/app/app.component.ts ***!
  \*****************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'sample-proj';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/client/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/client/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/client/app/app.module.ts":
/*!**************************************!*\
  !*** ./src/client/app/app.module.ts ***!
  \**************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/client/app/app.component.ts");
/* harmony import */ var _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-form/input-form.component */ "./src/client/app/input-form/input-form.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/client/app/navigation/navigation.component.ts");
/* harmony import */ var _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-me/about-me.component */ "./src/client/app/about-me/about-me.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./projects/projects.component */ "./src/client/app/projects/projects.component.ts");
/* harmony import */ var _other_info_other_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./other-info/other-info.component */ "./src/client/app/other-info/other-info.component.ts");
/* harmony import */ var _services_input_form_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/input-form.service */ "./src/client/app/services/input-form.service.ts");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/login.service */ "./src/client/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_6__["InputFormComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_7__["NavigationComponent"],
                _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_8__["AboutMeComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"],
                _other_info_other_info_component__WEBPACK_IMPORTED_MODULE_10__["OtherInfoComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    { path: '', component: _input_form_input_form_component__WEBPACK_IMPORTED_MODULE_6__["InputFormComponent"] },
                    { path: 'about', component: _about_me_about_me_component__WEBPACK_IMPORTED_MODULE_8__["AboutMeComponent"] },
                    { path: 'projects', component: _projects_projects_component__WEBPACK_IMPORTED_MODULE_9__["ProjectsComponent"] },
                    { path: 'other', component: _other_info_other_info_component__WEBPACK_IMPORTED_MODULE_10__["OtherInfoComponent"] }
                ])
            ],
            providers: [
                _services_input_form_service__WEBPACK_IMPORTED_MODULE_11__["InputFormService"],
                _services_login_service__WEBPACK_IMPORTED_MODULE_12__["LoginService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/client/app/input-form/input-form.component.css":
/*!************************************************************!*\
  !*** ./src/client/app/input-form/input-form.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/client/app/input-form/input-form.component.html":
/*!*************************************************************!*\
  !*** ./src/client/app/input-form/input-form.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid mt-2'>\r\n  <div class='row'>\r\n    <div class='col-3'>\r\n      <form>\r\n        <div class='form-group'>\r\n          <label for='name'>Insert new user</label>\r\n          <input type='text' id='name' name='name' placeholder='Name' class='form-control' [(ngModel)]='user.username'>\r\n        </div>\r\n        <div class='form-group'>\r\n          <input type='number' id='id' name='id' placeholder='ID' class='form-control' [(ngModel)]='user.id'>\r\n        </div>\r\n        <button type='submit' class='btn btn-primary' (click)='storeUser()'>Save</button>\r\n        <div class='form-group mt-4'>\r\n          <label for='getUserById'>Retrieve user by ID</label>\r\n          <input type='number' id='getUserById' name='getUserById' placeholder='User ID' class='form-control' [(ngModel)]='userIdSearch'>\r\n        </div>\r\n        <button type='submit' class='btn btn-primary' (click)='searchUserById()'>Search</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/client/app/input-form/input-form.component.ts":
/*!***********************************************************!*\
  !*** ./src/client/app/input-form/input-form.component.ts ***!
  \***********************************************************/
/*! exports provided: InputFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFormComponent", function() { return InputFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_input_form_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/input-form.service */ "./src/client/app/services/input-form.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputFormComponent = /** @class */ (function () {
    function InputFormComponent(inputFormService) {
        this.inputFormService = inputFormService;
        this.user = {};
    }
    InputFormComponent.prototype.storeUser = function () {
        console.log(this.user);
        this.inputFormService.storeUser(this.user).subscribe(function (user) {
            console.log('Successfully saved user ' + user.id + ' to database');
        });
    };
    InputFormComponent.prototype.searchUserById = function () {
        this.inputFormService.searchUserById(this.searchId).subscribe(function (user) {
            console.log(user);
        });
    };
    InputFormComponent.prototype.ngOnInit = function () {
    };
    InputFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-input-form',
            template: __webpack_require__(/*! ./input-form.component.html */ "./src/client/app/input-form/input-form.component.html"),
            styles: [__webpack_require__(/*! ./input-form.component.css */ "./src/client/app/input-form/input-form.component.css")]
        }),
        __metadata("design:paramtypes", [_services_input_form_service__WEBPACK_IMPORTED_MODULE_1__["InputFormService"]])
    ], InputFormComponent);
    return InputFormComponent;
}());



/***/ }),

/***/ "./src/client/app/navigation/navigation.component.css":
/*!************************************************************!*\
  !*** ./src/client/app/navigation/navigation.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".currentlyActiveLink{\r\n  color:white;\r\n}\r\n"

/***/ }),

/***/ "./src/client/app/navigation/navigation.component.html":
/*!*************************************************************!*\
  !*** ./src/client/app/navigation/navigation.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class='navbar navbar-light bg-light justify-content-between bg-dark'>\n  <div>\n    <ul class='navbar-nav navbar-expand nav-pill mr-auto'>\n      <a routerLink='/' routerLinkActive='currentlyActiveLink' class='text-secondary'><li class='nav-item mr-sm-2'>Home</li></a>\n      <a routerLink='/about' routerLinkActive='currentlyActiveLink' class='text-secondary'><li class='nav-item mx-sm-2'>About</li></a>\n      <a routerLink='/projects' routerLinkActive='currentlyActiveLink' class='text-secondary'><li class='nav-item mx-sm-2'>Projects</li></a>\n      <a routerLink='/other' routerLinkActive='currentlyActiveLink' class='text-secondary'><li class='nav-item mx-sm-2'>Other</li></a>\n    </ul>\n  </div>\n  <div>\n    <form class='form-inline'>\n      <input class='form-control mr-sm-2' type='text' placeholder='Username' aria-label='username' name='username' [(ngModel)]='username'>\n      <input class='form-control mr-sm-2' type='password' placeholder='Password' aria-label='password' name='password' [(ngModel)]='password'>\n      <button class='btn btn-outline-primary mr-sm-2' type='button' (click)='login(username, password)'>Login</button>\n      <button class='btn btn-outline-secondary mr-sm-2' type='button' (click)='register()'>Register</button>\n    </form>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/client/app/navigation/navigation.component.ts":
/*!***********************************************************!*\
  !*** ./src/client/app/navigation/navigation.component.ts ***!
  \***********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/login.service */ "./src/client/app/services/login.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(loginService) {
        this.loginService = loginService;
    }
    NavigationComponent.prototype.login = function (username, password) {
        this.loginService.login(username, password).subscribe(function (user) {
            console.log('recieved response');
            console.log(user);
        });
    };
    NavigationComponent.prototype.ngOnInit = function () {
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/client/app/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/client/app/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_login_service__WEBPACK_IMPORTED_MODULE_1__["LoginService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/client/app/other-info/other-info.component.css":
/*!************************************************************!*\
  !*** ./src/client/app/other-info/other-info.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/client/app/other-info/other-info.component.html":
/*!*************************************************************!*\
  !*** ./src/client/app/other-info/other-info.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  other-info works!\n</p>\n"

/***/ }),

/***/ "./src/client/app/other-info/other-info.component.ts":
/*!***********************************************************!*\
  !*** ./src/client/app/other-info/other-info.component.ts ***!
  \***********************************************************/
/*! exports provided: OtherInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtherInfoComponent", function() { return OtherInfoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OtherInfoComponent = /** @class */ (function () {
    function OtherInfoComponent() {
    }
    OtherInfoComponent.prototype.ngOnInit = function () {
    };
    OtherInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-other-info',
            template: __webpack_require__(/*! ./other-info.component.html */ "./src/client/app/other-info/other-info.component.html"),
            styles: [__webpack_require__(/*! ./other-info.component.css */ "./src/client/app/other-info/other-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OtherInfoComponent);
    return OtherInfoComponent;
}());



/***/ }),

/***/ "./src/client/app/projects/projects.component.css":
/*!********************************************************!*\
  !*** ./src/client/app/projects/projects.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/client/app/projects/projects.component.html":
/*!*********************************************************!*\
  !*** ./src/client/app/projects/projects.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  projects works!\n</p>\n"

/***/ }),

/***/ "./src/client/app/projects/projects.component.ts":
/*!*******************************************************!*\
  !*** ./src/client/app/projects/projects.component.ts ***!
  \*******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/client/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/client/app/projects/projects.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/client/app/services/input-form.service.ts":
/*!*******************************************************!*\
  !*** ./src/client/app/services/input-form.service.ts ***!
  \*******************************************************/
/*! exports provided: InputFormService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputFormService", function() { return InputFormService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InputFormService = /** @class */ (function () {
    function InputFormService(http) {
        this.http = http;
    }
    InputFormService.prototype.storeUser = function (user) {
        console.log('inside storeUser');
        return this.http.post('http://localhost:3000/api/storeUser', user);
    };
    InputFormService.prototype.searchUserById = function (userId) {
        console.log('inside searchUser');
        return this.http.get('http://localhost:3000/api/user/' + userId);
    };
    InputFormService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InputFormService);
    return InputFormService;
}());



/***/ }),

/***/ "./src/client/app/services/login.service.ts":
/*!**************************************************!*\
  !*** ./src/client/app/services/login.service.ts ***!
  \**************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(http) {
        this.http = http;
    }
    LoginService.prototype.login = function (username, password) {
        console.log('inside login');
        return this.http.post('http://localhost:3000/api/login', { username: username, password: password }, { responseType: 'text', withCredentials: true });
    };
    LoginService.prototype.register = function (user) {
        console.log('inside register');
        return this.http.post('http://localhost:3000/api/register', user);
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/client/environments/environment.ts":
/*!************************************************!*\
  !*** ./src/client/environments/environment.ts ***!
  \************************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/client/main.ts":
/*!****************************!*\
  !*** ./src/client/main.ts ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/client/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/client/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./src/client/main.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\jx057c\node\sample-proj\src\client\main.ts */"./src/client/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map