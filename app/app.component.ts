import { Component, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';


@Component({
  selector: 'clientbox-pos-root',
  templateUrl: 'app/shared/templates/base.layout.html',
  styleUrls: [
  //'app/shared/templates/bootstrap.css',
  //'app/shared/templates/base.layout.css',
  //'app/shared/templates/_all-skins.css',
  ],
  //styles: ['body { margin: 0px }'],
  directives: [ROUTER_DIRECTIVES],
  encapsulation : ViewEncapsulation.None
})
export class AppComponent {
  title = 'Tour of Heroes';

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
      var mainHeaderHeight = this._selectorMainHeader.nativeElement.clientHeight;
      var mainFooterHeight = this._selectorMainFooter.nativeElement.clientHeight;
      var neg = mainHeaderHeight + mainFooterHeight;    
      this.contentHeight = window.innerHeight - neg;
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
}