import {Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[drag-n-drop]',
})
export class DragNDrop implements OnInit {
  constructor(private er: ElementRef,
              private renderer: Renderer2) {
  }

  private element: HTMLElement;
  private dragStarted: Boolean;

  private onParentMove = this.mouseMoveOnParent.bind(this);

  @Input() parent: HTMLElement;
  @Output() dragStart = new EventEmitter<any>();

  ngOnInit(): void {
    this.element = this.er.nativeElement;
  }

  @HostListener('mousedown', ['$event']) mousedown(event: Event) {
    this.parent.addEventListener('mousemove', this.onParentMove)
  }

  @HostListener('mouseup', ['$event']) mouseup(event: Event) {
    this.parent.removeEventListener('mousemove', this.onParentMove);
    this.dragStarted = false;
  }

  mouseMoveOnParent(e){
    if (!this.dragStarted) {
      this.dragStart.emit('started');
      this.dragStarted = true;
    }
    console.log(e)
  }
}
