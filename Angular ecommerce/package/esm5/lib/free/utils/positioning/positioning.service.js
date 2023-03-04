import { __decorate, __metadata, __param } from "tslib";
import { Injectable, ElementRef, RendererFactory2, Inject, PLATFORM_ID, NgZone, } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { positionElements } from './ng-positioning';
import { fromEvent, merge, of, animationFrameScheduler, Subject } from 'rxjs';
var PositioningService = /** @class */ (function () {
    function PositioningService(rendererFactory, platformId, _ngZone) {
        var _this = this;
        this._ngZone = _ngZone;
        this.update$$ = new Subject();
        this.positionElements = new Map();
        if (isPlatformBrowser(platformId)) {
            this._ngZone.runOutsideAngular(function () {
                merge(fromEvent(window, 'scroll'), fromEvent(window, 'resize'), 
                // tslint:disable-next-line: deprecation
                of(0, animationFrameScheduler), _this.update$$).subscribe(function () {
                    _this.positionElements.forEach(function (positionElement) {
                        positionElements(_getHtmlElement(positionElement.target), _getHtmlElement(positionElement.element), positionElement.attachment, positionElement.appendToBody, _this.options, rendererFactory.createRenderer(null, null));
                    });
                });
            });
        }
    }
    PositioningService.prototype.position = function (options) {
        this.addPositionElement(options);
    };
    PositioningService.prototype.addPositionElement = function (options) {
        this.positionElements.set(_getHtmlElement(options.element), options);
    };
    PositioningService.prototype.calcPosition = function () {
        this.update$$.next();
    };
    PositioningService.prototype.deletePositionElement = function (elRef) {
        this.positionElements.delete(_getHtmlElement(elRef));
    };
    PositioningService.prototype.setOptions = function (options) {
        this.options = options;
    };
    PositioningService.ctorParameters = function () { return [
        { type: RendererFactory2 },
        { type: Number, decorators: [{ type: Inject, args: [PLATFORM_ID,] }] },
        { type: NgZone }
    ]; };
    PositioningService = __decorate([
        Injectable(),
        __param(1, Inject(PLATFORM_ID)),
        __metadata("design:paramtypes", [RendererFactory2, Number, NgZone])
    ], PositioningService);
    return PositioningService;
}());
export { PositioningService };
function _getHtmlElement(element) {
    // it means that we got a selector
    if (element && typeof element === 'string') {
        return document.querySelector(element);
    }
    if (element instanceof ElementRef) {
        return element.nativeElement;
    }
    return element;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zaXRpb25pbmcuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3Bvc2l0aW9uaW5nL3Bvc2l0aW9uaW5nLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDTCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGdCQUFnQixFQUNoQixNQUFNLEVBQ04sV0FBVyxFQUNYLE1BQU0sR0FDUCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUVwRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUVwRCxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsdUJBQXVCLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBcUM5RTtJQUtFLDRCQUNFLGVBQWlDLEVBQ1osVUFBa0IsRUFDL0IsT0FBZTtRQUh6QixpQkEyQkM7UUF4QlMsWUFBTyxHQUFQLE9BQU8sQ0FBUTtRQU5qQixhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQztRQUMvQixxQkFBZ0IsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBT25DLElBQUksaUJBQWlCLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDakMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQztnQkFDN0IsS0FBSyxDQUNILFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDLEVBQzNCLFNBQVMsQ0FBQyxNQUFNLEVBQUUsUUFBUSxDQUFDO2dCQUMzQix3Q0FBd0M7Z0JBQ3hDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsdUJBQXVCLENBQUMsRUFDOUIsS0FBSSxDQUFDLFFBQVEsQ0FDZCxDQUFDLFNBQVMsQ0FBQztvQkFDVixLQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLFVBQUMsZUFBbUM7d0JBQ2hFLGdCQUFnQixDQUNkLGVBQWUsQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLEVBQ3ZDLGVBQWUsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEVBQ3hDLGVBQWUsQ0FBQyxVQUFVLEVBQzFCLGVBQWUsQ0FBQyxZQUFZLEVBQzVCLEtBQUksQ0FBQyxPQUFPLEVBQ1osZUFBZSxDQUFDLGNBQWMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQzNDLENBQUM7b0JBQ0osQ0FBQyxDQUFDLENBQUM7Z0JBQ0wsQ0FBQyxDQUFDLENBQUM7WUFDTCxDQUFDLENBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxPQUEyQjtRQUNsQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELCtDQUFrQixHQUFsQixVQUFtQixPQUEyQjtRQUM1QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDdkUsQ0FBQztJQUVELHlDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxrREFBcUIsR0FBckIsVUFBc0IsS0FBaUI7UUFDckMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBRUQsdUNBQVUsR0FBVixVQUFXLE9BQWdCO1FBQ3pCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0lBQ3pCLENBQUM7O2dCQTlDa0IsZ0JBQWdCOzZDQUNoQyxNQUFNLFNBQUMsV0FBVztnQkFDRixNQUFNOztJQVJkLGtCQUFrQjtRQUQ5QixVQUFVLEVBQUU7UUFRUixXQUFBLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQTt5Q0FESCxnQkFBZ0IsVUFFaEIsTUFBTTtPQVJkLGtCQUFrQixDQXFEOUI7SUFBRCx5QkFBQztDQUFBLEFBckRELElBcURDO1NBckRZLGtCQUFrQjtBQXVEL0IsU0FBUyxlQUFlLENBQUMsT0FBMEM7SUFDakUsa0NBQWtDO0lBQ2xDLElBQUksT0FBTyxJQUFJLE9BQU8sT0FBTyxLQUFLLFFBQVEsRUFBRTtRQUMxQyxPQUFPLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7S0FDeEM7SUFFRCxJQUFJLE9BQU8sWUFBWSxVQUFVLEVBQUU7UUFDakMsT0FBTyxPQUFPLENBQUMsYUFBYSxDQUFDO0tBQzlCO0lBRUQsT0FBTyxPQUFPLENBQUM7QUFDakIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyRmFjdG9yeTIsXG4gIEluamVjdCxcbiAgUExBVEZPUk1fSUQsXG4gIE5nWm9uZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc1BsYXRmb3JtQnJvd3NlciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5cbmltcG9ydCB7IHBvc2l0aW9uRWxlbWVudHMgfSBmcm9tICcuL25nLXBvc2l0aW9uaW5nJztcblxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgb2YsIGFuaW1hdGlvbkZyYW1lU2NoZWR1bGVyLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBPcHRpb25zIH0gZnJvbSAnLi9tb2RlbHMvaW5kZXgnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFBvc2l0aW9uaW5nT3B0aW9ucyB7XG4gIC8qKiBUaGUgRE9NIGVsZW1lbnQsIEVsZW1lbnRSZWYsIG9yIGEgc2VsZWN0b3Igc3RyaW5nIG9mIGFuIGVsZW1lbnQgd2hpY2ggd2lsbCBiZSBtb3ZlZCAqL1xuICBlbGVtZW50PzogYW55O1xuXG4gIC8qKiBUaGUgRE9NIGVsZW1lbnQsIEVsZW1lbnRSZWYsIG9yIGEgc2VsZWN0b3Igc3RyaW5nIG9mIGFuIGVsZW1lbnQgd2hpY2ggdGhlIGVsZW1lbnQgd2lsbCBiZSBhdHRhY2hlZCB0byAgKi9cbiAgdGFyZ2V0PzogYW55O1xuXG4gIC8qKlxuICAgKiBBIHN0cmluZyBvZiB0aGUgZm9ybSAndmVydC1hdHRhY2htZW50IGhvcml6LWF0dGFjaG1lbnQnIG9yICdwbGFjZW1lbnQnXG4gICAqIC0gcGxhY2VtZW50IGNhbiBiZSBcInRvcFwiLCBcImJvdHRvbVwiLCBcImxlZnRcIiwgXCJyaWdodFwiXG4gICAqIG5vdCB5ZXQgc3VwcG9ydGVkOlxuICAgKiAtIHZlcnQtYXR0YWNobWVudCBjYW4gYmUgYW55IG9mICd0b3AnLCAnbWlkZGxlJywgJ2JvdHRvbSdcbiAgICogLSBob3Jpei1hdHRhY2htZW50IGNhbiBiZSBhbnkgb2YgJ2xlZnQnLCAnY2VudGVyJywgJ3JpZ2h0J1xuICAgKi9cbiAgYXR0YWNobWVudD86IGFueTtcblxuICAvKiogQSBzdHJpbmcgc2ltaWxhciB0byBgYXR0YWNobWVudGAuIFRoZSBvbmUgZGlmZmVyZW5jZSBpcyB0aGF0LCBpZiBpdCdzIG5vdCBwcm92aWRlZCxcbiAgICogYHRhcmdldEF0dGFjaG1lbnRgIHdpbGwgYXNzdW1lIHRoZSBtaXJyb3IgaW1hZ2Ugb2YgYGF0dGFjaG1lbnRgLlxuICAgKi9cbiAgdGFyZ2V0QXR0YWNobWVudD86IHN0cmluZztcblxuICAvKiogQSBzdHJpbmcgb2YgdGhlIGZvcm0gJ3ZlcnQtb2Zmc2V0IGhvcml6LW9mZnNldCdcbiAgICogLSB2ZXJ0LW9mZnNldCBhbmQgaG9yaXotb2Zmc2V0IGNhbiBiZSBvZiB0aGUgZm9ybSBcIjIwcHhcIiBvciBcIjU1JVwiXG4gICAqL1xuICBvZmZzZXQ/OiBzdHJpbmc7XG5cbiAgLyoqIEEgc3RyaW5nIHNpbWlsYXIgdG8gYG9mZnNldGAsIGJ1dCByZWZlcnJpbmcgdG8gdGhlIG9mZnNldCBvZiB0aGUgdGFyZ2V0ICovXG4gIHRhcmdldE9mZnNldD86IHN0cmluZztcblxuICAvKiogSWYgdHJ1ZSBjb21wb25lbnQgd2lsbCBiZSBhdHRhY2hlZCB0byBib2R5ICovXG4gIGFwcGVuZFRvQm9keT86IGJvb2xlYW47XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQb3NpdGlvbmluZ1NlcnZpY2Uge1xuICBvcHRpb25zOiBPcHRpb25zO1xuICBwcml2YXRlIHVwZGF0ZSQkID0gbmV3IFN1YmplY3Q8bnVsbD4oKTtcbiAgcHJpdmF0ZSBwb3NpdGlvbkVsZW1lbnRzID0gbmV3IE1hcCgpO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHJlbmRlcmVyRmFjdG9yeTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICBASW5qZWN0KFBMQVRGT1JNX0lEKSBwbGF0Zm9ybUlkOiBudW1iZXIsXG4gICAgcHJpdmF0ZSBfbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgaWYgKGlzUGxhdGZvcm1Ccm93c2VyKHBsYXRmb3JtSWQpKSB7XG4gICAgICB0aGlzLl9uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgICAgICBtZXJnZShcbiAgICAgICAgICBmcm9tRXZlbnQod2luZG93LCAnc2Nyb2xsJyksXG4gICAgICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpLFxuICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZGVwcmVjYXRpb25cbiAgICAgICAgICBvZigwLCBhbmltYXRpb25GcmFtZVNjaGVkdWxlciksXG4gICAgICAgICAgdGhpcy51cGRhdGUkJFxuICAgICAgICApLnN1YnNjcmliZSgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5wb3NpdGlvbkVsZW1lbnRzLmZvckVhY2goKHBvc2l0aW9uRWxlbWVudDogUG9zaXRpb25pbmdPcHRpb25zKSA9PiB7XG4gICAgICAgICAgICBwb3NpdGlvbkVsZW1lbnRzKFxuICAgICAgICAgICAgICBfZ2V0SHRtbEVsZW1lbnQocG9zaXRpb25FbGVtZW50LnRhcmdldCksXG4gICAgICAgICAgICAgIF9nZXRIdG1sRWxlbWVudChwb3NpdGlvbkVsZW1lbnQuZWxlbWVudCksXG4gICAgICAgICAgICAgIHBvc2l0aW9uRWxlbWVudC5hdHRhY2htZW50LFxuICAgICAgICAgICAgICBwb3NpdGlvbkVsZW1lbnQuYXBwZW5kVG9Cb2R5LFxuICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICAgIHJlbmRlcmVyRmFjdG9yeS5jcmVhdGVSZW5kZXJlcihudWxsLCBudWxsKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwb3NpdGlvbihvcHRpb25zOiBQb3NpdGlvbmluZ09wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLmFkZFBvc2l0aW9uRWxlbWVudChvcHRpb25zKTtcbiAgfVxuXG4gIGFkZFBvc2l0aW9uRWxlbWVudChvcHRpb25zOiBQb3NpdGlvbmluZ09wdGlvbnMpOiB2b2lkIHtcbiAgICB0aGlzLnBvc2l0aW9uRWxlbWVudHMuc2V0KF9nZXRIdG1sRWxlbWVudChvcHRpb25zLmVsZW1lbnQpLCBvcHRpb25zKTtcbiAgfVxuXG4gIGNhbGNQb3NpdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnVwZGF0ZSQkLm5leHQoKTtcbiAgfVxuXG4gIGRlbGV0ZVBvc2l0aW9uRWxlbWVudChlbFJlZjogRWxlbWVudFJlZik6IHZvaWQge1xuICAgIHRoaXMucG9zaXRpb25FbGVtZW50cy5kZWxldGUoX2dldEh0bWxFbGVtZW50KGVsUmVmKSk7XG4gIH1cblxuICBzZXRPcHRpb25zKG9wdGlvbnM6IE9wdGlvbnMpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9nZXRIdG1sRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCB8IEVsZW1lbnRSZWYgfCBzdHJpbmcpOiBhbnkge1xuICAvLyBpdCBtZWFucyB0aGF0IHdlIGdvdCBhIHNlbGVjdG9yXG4gIGlmIChlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGVsZW1lbnQpO1xuICB9XG5cbiAgaWYgKGVsZW1lbnQgaW5zdGFuY2VvZiBFbGVtZW50UmVmKSB7XG4gICAgcmV0dXJuIGVsZW1lbnQubmF0aXZlRWxlbWVudDtcbiAgfVxuXG4gIHJldHVybiBlbGVtZW50O1xufVxuIl19