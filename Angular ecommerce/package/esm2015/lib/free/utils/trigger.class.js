/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
export class Trigger {
    constructor(open, close) {
        this.open = open;
        this.close = close || open;
    }
    isManual() { return this.open === 'manual' || this.close === 'manual'; }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJpZ2dlci5jbGFzcy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXVpa2l0LXByby1zdGFuZGFyZC8iLCJzb3VyY2VzIjpbImxpYi9mcmVlL3V0aWxzL3RyaWdnZXIuY2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztHQUdHO0FBRUYsTUFBTSxPQUFPLE9BQU87SUFJbEIsWUFBbUIsSUFBWSxFQUFFLEtBQWM7UUFDN0MsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLElBQUksSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFFTSxRQUFRLEtBQWMsT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUM7Q0FDekYiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBjb3B5cmlnaHQgVmFsb3IgU29mdHdhcmVcbiAqIEBjb3B5cmlnaHQgQW5ndWxhciBuZy1ib290c3RyYXAgdGVhbVxuICovXG5cbiBleHBvcnQgY2xhc3MgVHJpZ2dlciB7XG4gICBwdWJsaWMgb3Blbjogc3RyaW5nO1xuICAgcHVibGljIGNsb3NlPzogc3RyaW5nO1xuXG4gICBwdWJsaWMgY29uc3RydWN0b3Iob3Blbjogc3RyaW5nLCBjbG9zZT86IHN0cmluZykge1xuICAgICB0aGlzLm9wZW4gPSBvcGVuO1xuICAgICB0aGlzLmNsb3NlID0gY2xvc2UgfHwgb3BlbjtcbiAgIH1cblxuICAgcHVibGljIGlzTWFudWFsKCk6IGJvb2xlYW4geyByZXR1cm4gdGhpcy5vcGVuID09PSAnbWFudWFsJyB8fCB0aGlzLmNsb3NlID09PSAnbWFudWFsJzsgfVxuIH1cbiJdfQ==