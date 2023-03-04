import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
let ScrollSpyService = class ScrollSpyService {
    constructor() {
        this.scrollSpys = [];
        this.activeSubject = new Subject();
        this.active$ = this.activeSubject;
    }
    addScrollSpy(scrollSpy) {
        this.scrollSpys.push(scrollSpy);
    }
    removeScrollSpy(scrollSpyId) {
        const scrollSpyIndex = this.scrollSpys.findIndex((spy) => {
            return spy.id === scrollSpyId;
        });
        this.scrollSpys.splice(scrollSpyIndex, 1);
    }
    updateActiveState(scrollSpyId, activeLinkId) {
        const scrollSpy = this.scrollSpys.find(spy => {
            return spy.id === scrollSpyId;
        });
        if (!scrollSpy) {
            return;
        }
        const activeLink = scrollSpy.links.find(link => {
            return link.id === activeLinkId;
        });
        this.setActiveLink(activeLink);
    }
    removeActiveState(scrollSpyId, activeLinkId) {
        const scrollSpy = this.scrollSpys.find(spy => {
            return spy.id === scrollSpyId;
        });
        if (!scrollSpy) {
            return;
        }
        const activeLink = scrollSpy.links.find(link => {
            return link.id === activeLinkId;
        });
        if (!activeLink) {
            return;
        }
        activeLink.active = false;
        activeLink.detectChanges();
    }
    setActiveLink(activeLink) {
        if (activeLink) {
            activeLink.active = true;
            activeLink.detectChanges();
            this.activeSubject.next(activeLink);
        }
    }
    removeActiveLinks(scrollSpyId) {
        const scrollSpy = this.scrollSpys.find(spy => {
            return spy.id === scrollSpyId;
        });
        if (!scrollSpy) {
            return;
        }
        scrollSpy.links.forEach(link => {
            link.active = false;
            link.detectChanges();
        });
    }
};
ScrollSpyService = __decorate([
    Injectable()
], ScrollSpyService);
export { ScrollSpyService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Nyb2xsLXNweS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL3Byby9zY3JvbGwtc3B5L3Njcm9sbC1zcHkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsT0FBTyxFQUFjLE1BQU0sTUFBTSxDQUFDO0FBUTNDLElBQWEsZ0JBQWdCLEdBQTdCLE1BQWEsZ0JBQWdCO0lBQTdCO1FBQ1UsZUFBVSxHQUFnQixFQUFFLENBQUM7UUFFN0Isa0JBQWEsR0FBRyxJQUFJLE9BQU8sRUFBMEIsQ0FBQztRQUM5RCxZQUFPLEdBQW9CLElBQUksQ0FBQyxhQUFhLENBQUM7SUF3RWhELENBQUM7SUF0RUMsWUFBWSxDQUFDLFNBQW9CO1FBQy9CLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFFRCxlQUFlLENBQUMsV0FBbUI7UUFDakMsTUFBTSxjQUFjLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUN4RCxPQUFPLEdBQUcsQ0FBQyxFQUFFLEtBQUssV0FBVyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxpQkFBaUIsQ0FBQyxXQUFtQixFQUFFLFlBQW9CO1FBQ3pELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQzNDLE9BQU8sR0FBRyxDQUFDLEVBQUUsS0FBSyxXQUFXLENBQUM7UUFDaEMsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2QsT0FBTztTQUNSO1FBRUQsTUFBTSxVQUFVLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDN0MsT0FBTyxJQUFJLENBQUMsRUFBRSxLQUFLLFlBQVksQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELGlCQUFpQixDQUFDLFdBQW1CLEVBQUUsWUFBb0I7UUFDekQsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDM0MsT0FBTyxHQUFHLENBQUMsRUFBRSxLQUFLLFdBQVcsQ0FBQztRQUNoQyxDQUFDLENBQUMsQ0FBQztRQUVILElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDZCxPQUFPO1NBQ1I7UUFFRCxNQUFNLFVBQVUsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUM3QyxPQUFPLElBQUksQ0FBQyxFQUFFLEtBQUssWUFBWSxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFVBQVUsRUFBRTtZQUNmLE9BQU87U0FDUjtRQUVELFVBQVUsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQzFCLFVBQVUsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsYUFBYSxDQUFDLFVBQXdDO1FBQ3BELElBQUksVUFBVSxFQUFFO1lBQ2QsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDekIsVUFBVSxDQUFDLGFBQWEsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1NBQ3JDO0lBQ0gsQ0FBQztJQUVELGlCQUFpQixDQUFDLFdBQW1CO1FBQ25DLE1BQU0sU0FBUyxHQUEwQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNsRSxPQUFPLEdBQUcsQ0FBQyxFQUFFLEtBQUssV0FBVyxDQUFDO1FBQ2hDLENBQUMsQ0FBQyxDQUFDO1FBRUgsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLE9BQU87U0FDUjtRQUVELFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzdCLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7Q0FDRixDQUFBO0FBNUVZLGdCQUFnQjtJQUQ1QixVQUFVLEVBQUU7R0FDQSxnQkFBZ0IsQ0E0RTVCO1NBNUVZLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUsIFF1ZXJ5TGlzdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU2Nyb2xsU3B5TGlua0RpcmVjdGl2ZSB9IGZyb20gJy4vc2Nyb2xsLXNweS1saW5rLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2Nyb2xsU3B5IHtcbiAgaWQ6IHN0cmluZztcbiAgbGlua3M6IFF1ZXJ5TGlzdDxTY3JvbGxTcHlMaW5rRGlyZWN0aXZlPjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFNjcm9sbFNweVNlcnZpY2Uge1xuICBwcml2YXRlIHNjcm9sbFNweXM6IFNjcm9sbFNweVtdID0gW107XG5cbiAgcHJpdmF0ZSBhY3RpdmVTdWJqZWN0ID0gbmV3IFN1YmplY3Q8U2Nyb2xsU3B5TGlua0RpcmVjdGl2ZT4oKTtcbiAgYWN0aXZlJDogT2JzZXJ2YWJsZTxhbnk+ID0gdGhpcy5hY3RpdmVTdWJqZWN0O1xuXG4gIGFkZFNjcm9sbFNweShzY3JvbGxTcHk6IFNjcm9sbFNweSkge1xuICAgIHRoaXMuc2Nyb2xsU3B5cy5wdXNoKHNjcm9sbFNweSk7XG4gIH1cblxuICByZW1vdmVTY3JvbGxTcHkoc2Nyb2xsU3B5SWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNjcm9sbFNweUluZGV4ID0gdGhpcy5zY3JvbGxTcHlzLmZpbmRJbmRleCggKHNweSkgPT4ge1xuICAgICAgcmV0dXJuIHNweS5pZCA9PT0gc2Nyb2xsU3B5SWQ7XG4gICAgfSk7XG4gICAgdGhpcy5zY3JvbGxTcHlzLnNwbGljZShzY3JvbGxTcHlJbmRleCwgMSk7XG4gIH1cblxuICB1cGRhdGVBY3RpdmVTdGF0ZShzY3JvbGxTcHlJZDogc3RyaW5nLCBhY3RpdmVMaW5rSWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNjcm9sbFNweSA9IHRoaXMuc2Nyb2xsU3B5cy5maW5kKHNweSA9PiB7XG4gICAgICByZXR1cm4gc3B5LmlkID09PSBzY3JvbGxTcHlJZDtcbiAgICB9KTtcblxuICAgIGlmICghc2Nyb2xsU3B5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgYWN0aXZlTGluayA9IHNjcm9sbFNweS5saW5rcy5maW5kKGxpbmsgPT4ge1xuICAgICAgcmV0dXJuIGxpbmsuaWQgPT09IGFjdGl2ZUxpbmtJZDtcbiAgICB9KTtcblxuICAgIHRoaXMuc2V0QWN0aXZlTGluayhhY3RpdmVMaW5rKTtcbiAgfVxuXG4gIHJlbW92ZUFjdGl2ZVN0YXRlKHNjcm9sbFNweUlkOiBzdHJpbmcsIGFjdGl2ZUxpbmtJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Nyb2xsU3B5ID0gdGhpcy5zY3JvbGxTcHlzLmZpbmQoc3B5ID0+IHtcbiAgICAgIHJldHVybiBzcHkuaWQgPT09IHNjcm9sbFNweUlkO1xuICAgIH0pO1xuXG4gICAgaWYgKCFzY3JvbGxTcHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBhY3RpdmVMaW5rID0gc2Nyb2xsU3B5LmxpbmtzLmZpbmQobGluayA9PiB7XG4gICAgICByZXR1cm4gbGluay5pZCA9PT0gYWN0aXZlTGlua0lkO1xuICAgIH0pO1xuXG4gICAgaWYgKCFhY3RpdmVMaW5rKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYWN0aXZlTGluay5hY3RpdmUgPSBmYWxzZTtcbiAgICBhY3RpdmVMaW5rLmRldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHNldEFjdGl2ZUxpbmsoYWN0aXZlTGluazogU2Nyb2xsU3B5TGlua0RpcmVjdGl2ZSB8IGFueSkge1xuICAgIGlmIChhY3RpdmVMaW5rKSB7XG4gICAgICBhY3RpdmVMaW5rLmFjdGl2ZSA9IHRydWU7XG4gICAgICBhY3RpdmVMaW5rLmRldGVjdENoYW5nZXMoKTtcbiAgICAgIHRoaXMuYWN0aXZlU3ViamVjdC5uZXh0KGFjdGl2ZUxpbmspO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUFjdGl2ZUxpbmtzKHNjcm9sbFNweUlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzY3JvbGxTcHk6IFNjcm9sbFNweSB8IHVuZGVmaW5lZCA9IHRoaXMuc2Nyb2xsU3B5cy5maW5kKHNweSA9PiB7XG4gICAgICByZXR1cm4gc3B5LmlkID09PSBzY3JvbGxTcHlJZDtcbiAgICB9KTtcblxuICAgIGlmICghc2Nyb2xsU3B5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2Nyb2xsU3B5LmxpbmtzLmZvckVhY2gobGluayA9PiB7XG4gICAgICBsaW5rLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgbGluay5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cbn1cbiJdfQ==