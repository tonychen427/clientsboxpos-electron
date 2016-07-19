import { Component, ViewChild, ElementRef, ViewEncapsulation, OnInit, AfterViewInit } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {TimerWrapper} from '@angular/core/src/facade/async';

@Component({
  selector: 'clientbox-pos-root',
  templateUrl: 'app/shared/templates/base.layout.html',
  styleUrls: ['app/shared/templates/bootstrap.css',
              'app/shared/templates/base.layout.css', 
              'app/shared/templates/_all-skins.css'],
  encapsulation : ViewEncapsulation.None,
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {

  contentHeight = 0;

  @ViewChild('mainHeader') private _selectorMainHeader:ElementRef;
  @ViewChild('mainFooter') private _selectorMainFooter:ElementRef;

  constructor(private el:ElementRef) {

  }
  ngOnInit() {
    //window.console.log("this.el.nativeElement");
    //this.addClass(this.el.nativeElement,"hold-transition skin-blue sidebar-mini");
    
  }
  ngAfterViewInit(){
    //window.console.log("this.el.nativeElement");
    //this.addClass(this.el.nativeElement,"hold-transition skin-blue sidebar-mini");
    this.calculatorContentHeight();
  }

  calculatorContentHeight () {

    TimerWrapper.setTimeout(() => {  
      var mainHeaderHeight = this._selectorMainHeader.nativeElement.clientHeight;
      var mainFooterHeight = this._selectorMainFooter.nativeElement.clientHeight;
      var neg = mainHeaderHeight + mainFooterHeight;    
      this.contentHeight = window.innerHeight - neg;
    }, 0);
  }
  
  hasClass(ele, cls) {
    return ele.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)'));
  }
  addClass(ele, cls) {
    if (!this.hasClass(ele, cls)) ele.className += " " + cls;
  }
  removeClass(ele, cls) {
    if (this.hasClass(ele, cls)) {
        var reg = new RegExp('(\\s|^)' + cls + '(\\s|$)');
        ele.className = ele.className.replace(reg, ' ');
    }
  }

  // hasClass(el, className) {
  //   if (el.classList)
  //     return el.classList.contains(className)
  //   else
  //     return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
  // }

  // addClass(el, className) {
  //   if (el.classList)
  //     el.classList.add(className)
  //   else if (!this.hasClass(el, className)) el.className += " " + className
  // }

  // removeClass(el, className) {
  //   if (el.classList)
  //     el.classList.remove(className)
  //   else if (this.hasClass(el, className)) {
  //     var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
  //     el.className=el.className.replace(reg, ' ')
  //   }
  // }
}
