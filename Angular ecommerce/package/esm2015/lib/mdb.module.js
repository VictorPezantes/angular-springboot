import { __decorate } from "tslib";
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from './free/mdb-free.module';
import { MDBBootstrapModulePro } from './pro/mdb-pro.module';
export { MDBBootstrapModule } from './free/mdb-free.module';
export { MDBBootstrapModulePro } from './pro/mdb-pro.module';
const MODULES = [MDBBootstrapModule, MDBBootstrapModulePro];
let MDBRootModules = class MDBRootModules {
};
MDBRootModules = __decorate([
    NgModule({
        imports: [MDBBootstrapModule.forRoot(), MDBBootstrapModulePro.forRoot()],
        exports: MODULES,
        providers: [],
        schemas: [NO_ERRORS_SCHEMA],
    })
], MDBRootModules);
export { MDBRootModules };
let MDBBootstrapModulesPro = class MDBBootstrapModulesPro {
    static forRoot() {
        return { ngModule: MDBRootModules };
    }
};
MDBBootstrapModulesPro = __decorate([
    NgModule({ exports: MODULES })
], MDBBootstrapModulesPro);
export { MDBBootstrapModulesPro };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9tZGIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVoRixPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUM1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUU1RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUU3RCxNQUFNLE9BQU8sR0FBRyxDQUFDLGtCQUFrQixFQUFFLHFCQUFxQixDQUFDLENBQUM7QUFRNUQsSUFBYSxjQUFjLEdBQTNCLE1BQWEsY0FBYztDQUFHLENBQUE7QUFBakIsY0FBYztJQU4xQixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUUsRUFBRSxxQkFBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4RSxPQUFPLEVBQUUsT0FBTztRQUNoQixTQUFTLEVBQUUsRUFBRTtRQUNiLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO0tBQzVCLENBQUM7R0FDVyxjQUFjLENBQUc7U0FBakIsY0FBYztBQUczQixJQUFhLHNCQUFzQixHQUFuQyxNQUFhLHNCQUFzQjtJQUMxQixNQUFNLENBQUMsT0FBTztRQUNuQixPQUFPLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxDQUFDO0lBQ3RDLENBQUM7Q0FDRixDQUFBO0FBSlksc0JBQXNCO0lBRGxDLFFBQVEsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQztHQUNsQixzQkFBc0IsQ0FJbEM7U0FKWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBNREJCb290c3RyYXBNb2R1bGUgfSBmcm9tICcuL2ZyZWUvbWRiLWZyZWUubW9kdWxlJztcbmltcG9ydCB7IE1EQkJvb3RzdHJhcE1vZHVsZVBybyB9IGZyb20gJy4vcHJvL21kYi1wcm8ubW9kdWxlJztcblxuZXhwb3J0IHsgTURCQm9vdHN0cmFwTW9kdWxlIH0gZnJvbSAnLi9mcmVlL21kYi1mcmVlLm1vZHVsZSc7XG5cbmV4cG9ydCB7IE1EQkJvb3RzdHJhcE1vZHVsZVBybyB9IGZyb20gJy4vcHJvL21kYi1wcm8ubW9kdWxlJztcblxuY29uc3QgTU9EVUxFUyA9IFtNREJCb290c3RyYXBNb2R1bGUsIE1EQkJvb3RzdHJhcE1vZHVsZVByb107XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtNREJCb290c3RyYXBNb2R1bGUuZm9yUm9vdCgpLCBNREJCb290c3RyYXBNb2R1bGVQcm8uZm9yUm9vdCgpXSxcbiAgZXhwb3J0czogTU9EVUxFUyxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxufSlcbmV4cG9ydCBjbGFzcyBNREJSb290TW9kdWxlcyB7fVxuXG5ATmdNb2R1bGUoeyBleHBvcnRzOiBNT0RVTEVTIH0pXG5leHBvcnQgY2xhc3MgTURCQm9vdHN0cmFwTW9kdWxlc1BybyB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzPE1EQlJvb3RNb2R1bGVzPiB7XG4gICAgcmV0dXJuIHsgbmdNb2R1bGU6IE1EQlJvb3RNb2R1bGVzIH07XG4gIH1cbn1cbiJdfQ==