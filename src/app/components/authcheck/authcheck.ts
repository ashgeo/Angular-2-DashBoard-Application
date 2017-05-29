//import {Directive, Attribute, ElementRef, DynamicComponentLoader} from '@angular/core';
import {Router, RouterOutlet, RouterOutletMap, ActivatedRoute, } from '@angular/router';


// import {
//     Component, Directive, Input, ReflectiveInjector,
//     ViewContainerRef, Compiler, NgModule, ComponentRef, ComponentFactoryResolver, Injector, ResolvedReflectiveProvider
// } from '@angular/core';

// @Directive({selector: 'router-outlet'})

export class AuthCheck extends RouterOutlet {
    publicRoutes: any;
    private parentRouter: Router;

    // constructor(_parentOutletMap: RouterOutletMap, router:Router,_location: ViewContainerRef, _resolver: ComponentFactoryResolver,
    //         name: string)
    // //constructor(_elementRef: ViewContainerRef, _loader: any, _parentRouter: Router,
    // //    @Attribute('name') nameAttr: string)
    // {
    //     super(_parentOutletMap, _location, _resolver, name);

    //     this.parentRouter = router;
    //     this.publicRoutes = {
    //         'login': true
    //     };
    // }
    
    //   activate(instruction: any) {
    //    let url = instruction.urlPath;

    //    if (!this.publicRoutes[url] && !localStorage.getItem('auth_key')) {
    //        this.parentRouter.navigate['login']
    //    }

    //    return super.activate(_resolver);
    // }


    
}