import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
  Renderer2,
  ViewContainerRef
} from '@angular/core';

interface Coordinates {
  x: number;
  y: number;
}

@Directive({
  selector: '[drag-n-drop]',
})
export class DragNDrop implements OnInit {
  constructor(private er: ElementRef,
              private renderer: Renderer2) {
  }

  private element: HTMLElement;
  private dragStarted: Boolean;
  private dragStartedCoords: Coordinates;

  private onParentMove = this.mouseMoveOnParent.bind(this);

  @Input() overlay: HTMLElement;
  @Input() parent: HTMLElement;
  @Output() dragStart = new EventEmitter<any>();
  @Output() dragging = new EventEmitter<any>();

  ngOnInit(): void {
    this.element = this.er.nativeElement;
    if (!this.parent) this.parent = this.element;
  }

  @HostListener('mousedown', ['$event']) mousedown(event: Event) {
    this.overlay.addEventListener('mousemove', this.onParentMove)
  }

  @HostListener('mouseup', ['$event']) mouseup(event: Event) {
    console.log(JSON.stringify(this.dragStartedCoords));
    this.overlay.removeEventListener('mousemove', this.onParentMove);
    this.dragStarted = false;
    this.dragStartedCoords = {x: 0, y: 0};
    this.parent.style.transform = `translate3d(0,0,0)`;
  }

  mouseMoveOnParent(event: MouseEvent) {
    const {clientX: x, clientY: y} = event;
    if (!this.dragStarted) {
      this.dragStart.emit('started');
      this.dragStarted = true;
      this.dragStartedCoords = {x, y};
    }
    //TODO: to move in all ways
    // this.parent.style.transform = `translate3d(${x - this.dragStartedCoords.x}px,${y - this.dragStartedCoords.y}px,0)`;
    //TODO: to move in Y
    this.parent.style.transform = `translate3d(0px,${y - this.dragStartedCoords.y}px,0)`;
    // this.dragging.emit(event);
    // console.log(event)
  }
}
