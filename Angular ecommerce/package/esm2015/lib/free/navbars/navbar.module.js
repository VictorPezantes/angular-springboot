import { __decorate } from "tslib";
import { LinksComponent } from './links.component';
import { LogoComponent } from './logo.component';
import { NavbarService } from './navbar.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { NavlinksComponent } from './navlinks.component';
let NavbarModule = class NavbarModule {
};
NavbarModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [NavbarComponent, LinksComponent, LogoComponent, NavlinksComponent],
        exports: [NavbarComponent, LinksComponent, LogoComponent, NavlinksComponent],
        providers: [NavbarService]
    })
], NavbarModule);
export { NavbarModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL25hdmJhcnMvbmF2YmFyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBQ25ELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBT3pELElBQWEsWUFBWSxHQUF6QixNQUFhLFlBQVk7Q0FBRyxDQUFBO0FBQWYsWUFBWTtJQU54QixRQUFRLENBQUM7UUFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLENBQUM7UUFDdkIsWUFBWSxFQUFFLENBQUMsZUFBZSxFQUFFLGNBQWMsRUFBRSxhQUFhLEVBQUUsaUJBQWlCLENBQUM7UUFDakYsT0FBTyxFQUFFLENBQUMsZUFBZSxFQUFFLGNBQWMsRUFBRyxhQUFhLEVBQUUsaUJBQWlCLENBQUM7UUFDN0UsU0FBUyxFQUFFLENBQUMsYUFBYSxDQUFDO0tBQzNCLENBQUM7R0FDVyxZQUFZLENBQUc7U0FBZixZQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlua3NDb21wb25lbnQgfSBmcm9tICcuL2xpbmtzLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMb2dvQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dvLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZiYXJTZXJ2aWNlIH0gZnJvbSAnLi9uYXZiYXIuc2VydmljZSc7XG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOYXZiYXJDb21wb25lbnR9IGZyb20gJy4vbmF2YmFyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBOYXZsaW5rc0NvbXBvbmVudCB9IGZyb20gJy4vbmF2bGlua3MuY29tcG9uZW50JztcbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtOYXZiYXJDb21wb25lbnQsIExpbmtzQ29tcG9uZW50LCBMb2dvQ29tcG9uZW50LCBOYXZsaW5rc0NvbXBvbmVudF0sXG4gIGV4cG9ydHM6IFtOYXZiYXJDb21wb25lbnQsIExpbmtzQ29tcG9uZW50ICwgTG9nb0NvbXBvbmVudCwgTmF2bGlua3NDb21wb25lbnRdLFxuICBwcm92aWRlcnM6IFtOYXZiYXJTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBOYXZiYXJNb2R1bGUge31cbiJdfQ==