"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_1 = require("./app.routing");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var navbar_component_1 = require("./components/navbar/navbar.component");
var home_component_1 = require("./components/home/home.component");
var profile_component_1 = require("./components/profile/profile.component");
var login_component_1 = require("./components/login/login.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var auth_service_1 = require("./components/services/auth.service");
var authcheck_1 = require("./components/authcheck/authcheck");
var alert_service_1 = require("./components/services/alert.service");
var alert_component_1 = require("./components/directives/alert.component");
var app_component_1 = require("./app.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, app_routing_1.routing, forms_1.FormsModule, http_1.HttpModule],
        declarations: [app_component_1.AppComponent, home_component_1.HomeComponent, profile_component_1.ProfileComponent, login_component_1.LoginComponent, dashboard_component_1.DashBoardComponent, alert_component_1.AlertComponent, navbar_component_1.NavbarComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: [app_routing_1.appRoutingProviders, auth_service_1.AuthService, alert_service_1.AlertService, authcheck_1.AuthCheck]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map