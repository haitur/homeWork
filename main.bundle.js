webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_services/apiService.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return apiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var apiService = /** @class */ (function () {
    function apiService(http) {
        this.http = http;
        this.endPoint = "http://localhost:62059";
        this.items = [
            {
                ID: 49,
                productID: 1,
                productNumber: 1,
                name: "product1  ",
                startTime: "2018-02-22T16:59:07",
                endTime: "2018-03-22T16:59:07",
                icon: "product1  "
            },
            {
                ID: -1,
                productID: -1,
                productNumber: 2,
                name: "product2  ",
                startTime: "0001-01-01T00:00:00",
                endTime: "0001-01-01T00:00:00",
                icon: "product2  "
            },
            {
                ID: -1,
                productID: -1,
                productNumber: 3,
                name: "product3  ",
                startTime: "0001-01-01T00:00:00",
                endTime: "0001-01-01T00:00:00",
                icon: "product3  "
            }
        ];
    }
    apiService.prototype.get = function () {
        return this.items;
    };
    apiService.prototype.update = function (productNumber) {
        var time = new Date();
        var currentTimeString = time.toString();
        var currentTime = new Date(currentTimeString);
        var endTime = new Date(currentTime);
        endTime.setMonth(endTime.getMonth() + 1);
        var data = {
            productNumber: productNumber,
            startTime: currentTime,
            endTime: endTime
        };
        this.items.filter(function (item) { return item.productNumber === productNumber; })[0].ID = 1;
        this.items.filter(function (item) { return item.productNumber === productNumber; })[0].startTime = data.startTime.toDateString();
        this.items.filter(function (item) { return item.productNumber === productNumber; })[0].endTime = data.endTime.toDateString();
        return this.items;
    };
    apiService.prototype.delete = function (trailIndex) {
        this.items.filter(function (item) { return item.ID === trailIndex; })[0].ID = -1;
        return this.items;
    };
    apiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], apiService);
    return apiService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "div {\r\n  direction: rtl;\r\n}\r\n\r\nhr {\r\n  border-top: 1px solid rgb(0, 153, 255);\r\n}\r\n\r\nimg {\r\n  width: 30px;\r\n  height: 30px;\r\n}\r\n\r\ninput[type=\"number\"]::-webkit-inner-spin-button,\r\ninput[type=\"number\"]::-webkit-outer-spin-button {\r\n  -webkit-appearance: none;\r\n  margin: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container text-right\">\n  <!-- search form -->\n  <form (ngSubmit)=\"onSubmit()\" #f=\"ngForm\" class=\"row mt-3\">\n    <div class=\"col-lg-4 col-xl-4\">\n      <label>חפש מוצר לפי מספר מזהה</label>\n    </div>\n    <div class=\"col-lg-4 col-xl-4\">\n      <div class=\"form-group\">\n        <input type=\"number\" id=\"searchTerm\" class=\"form-control\" ngModel name=\"searchTerm\" required #searchTerm=\"ngModel\">\n        <span class=\"help-block\" *ngIf=\"!searchTerm.valid && searchTerm.touched\">הזן מספר מזהה</span>\n      </div>\n    </div>\n    <div class=\"col-lg-4 col-xl-4\">\n      <button class=\"btn btn-secondary mb-3\" type=\"submit\" [disabled]=\"!f.valid\">חפש</button>\n      <button class=\"btn btn-secondary mb-3\" type=\"button\" (click)=\"clearSearch()\">אפס חיפוש</button>\n    </div>\n  </form>\n  <hr>\n  <!-- table trails -->\n  <label>מוצרים הרשומים לתקופת ניסיון</label>\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-xl-12\">\n      <table class=\"table table-bordered table-striped\">\n        <thead>\n          <tr class=\"headers d-flex\">\n            <th class=\"col-2\">מספר מזהה של מוצר</th>\n            <th class=\"col-2\">שם מוצר</th>\n            <th class=\"col-2\">תחילת תקופת ניסיון</th>\n            <th class=\"col-2\" >סיום תקופת ניסיון\n                <i class=\"mb-3\" (click)=\"sortDateAscDesc()\" class=\"fa fa-fw fa-sort\"></i>\n            </th>\n            <th class=\"col-1\">האם בתוקף</th>\n            <th class=\"col-1\">איקון</th>\n            <th class=\"col-2\">מחיקת רישום לתקופת ניסיון</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let trail of trails\" class=\"d-flex\">\n            <td class=\"col-2\">{{ trail.productNumber }}</td>\n            <td class=\"col-2\">{{ trail.name }}</td>\n            <td class=\"col-2\"> {{ trail.startTime | date:\"dd/MM/yyyy\" }} </td>\n            <td class=\"col-2\"> {{ trail.endTime | date:\"dd/MM/yyyy\" }} </td>\n            <td class=\"col-1\"> {{ (isTrailEnded(trail.endTime))?\"פעיל\":\"לא בתוקף\" }} </td>\n            <td class=\"col-1\">\n              <img [src]='\"assets/icon/\" + trail.icon.slice(0, -2) + \".jpg\"'>\n            </td>\n            <td class=\"col-2\">\n              <button class=\"btn btn-primary\" type=\"button\" (click)=\"deleteTrail(trail.ID)\">מחיקה</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n  <hr>\n  <!-- table products -->\n  <label>מוצרים נוספים </label>\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-xl-12\">\n      <table class=\"table table-bordered table-striped\">\n        <thead>\n          <tr class=\"headers d-flex\">\n            <th class=\"col-3\">מספר מזהה של מוצר</th>\n            <th class=\"col-3\">שם מוצר</th>\n            <th class=\"col-3\">איקון</th>\n            <th class=\"col-3\">הרשם לתקופת ניסיון של חודש</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let product of products\" class=\"d-flex\">\n            <td class=\"col-3\">{{ product.productNumber }}</td>\n            <td class=\"col-3\">{{ product.name }}</td>\n            <td class=\"col-3\">\n              <img [src]='\"assets/icon/\" + product.icon.slice(0, -2) + \".jpg\"'>\n            </td>\n            <td class=\"col-3\">\n              <button class=\"btn btn-primary\" type=\"button\" (click)=\"updateProduct(product.productNumber)\">הרשם</button>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_apiService_service__ = __webpack_require__("./src/app/_services/apiService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(ApiService) {
        this.ApiService = ApiService;
        this.time = new Date();
        this.trails = new Array();
        this.products = new Array();
    }
    AppComponent.prototype.ngOnInit = function () {
        this.populateTables(this.ApiService.get());
    };
    AppComponent.prototype.sortDateAscDesc = function () {
        this.trails = this.trails.reverse();
    };
    AppComponent.prototype.clearSearch = function () {
        this.populateTables(this.ApiService.get());
    };
    AppComponent.prototype.onSubmit = function () {
        var searchedNumber = +this.signupForm.value.searchTerm;
        this.filterTables(this.ApiService.get(), searchedNumber);
    };
    AppComponent.prototype.populateTables = function (response) {
        this.trails = response.filter(function (trail) { return trail.ID != -1; });
        this.products = response.filter(function (product) { return product.ID == -1; });
    };
    AppComponent.prototype.filterTables = function (response, num) {
        this.trails = response.filter(function (trail) { return trail.productNumber == num && trail.ID != -1; });
        this.products = response.filter(function (product) { return product.productNumber == num && product.ID == -1; });
    };
    AppComponent.prototype.deleteTrail = function (trailIndex) {
        this.populateTables(this.ApiService.delete(trailIndex));
    };
    AppComponent.prototype.updateProduct = function (productNumber) {
        this.populateTables(this.ApiService.update(productNumber));
    };
    AppComponent.prototype.isTrailEnded = function (date) {
        var endTime = new Date(date);
        var currentTimeString = this.time.toString();
        var currentTime = new Date(currentTimeString);
        if (endTime > currentTime) {
            return true;
        }
        return false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* ViewChild */])("f"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NgForm */])
    ], AppComponent.prototype, "signupForm", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: "app-root",
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_apiService_service__["a" /* apiService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_apiService_service__ = __webpack_require__("./src/app/_services/apiService.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_apiService_service__["a" /* apiService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map