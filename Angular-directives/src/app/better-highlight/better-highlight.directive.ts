import { 
          Directive, 
          OnInit, 
          ElementRef, 
          Renderer2, 
          HostListener, 
          HostBinding, 
          Input
       } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'trasnparent';
  @Input() highlightColor: string = 'blue';

  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue',);
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent',);
    this.backgroundColor = this.defaultColor;
  }

}
