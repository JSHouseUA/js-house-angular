import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Input, OnDestroy,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';

interface Coordinates {
  x: number;
  y: number;
}

export interface IndexState {
  oldIndex: number;
  newIndex: number;
}

enum AddStub {
  addBefore, addAfter, removeAndAddBefore, removeAndAddAfter, nothing, addAtStart
}

@Directive({
  selector: '[drag-n-drop]',
})
export class DragNDrop implements OnInit, OnDestroy {
  constructor(private er: ElementRef,
              private renderer: Renderer2) {
  }

  /**
   * Element that start the drugging of its parent
   * @property {HTMLElement} element
   */
  private element: HTMLElement;

  /**
   * Sibling element under mouse
   * @property {HTMLElement} sibling
   */
  private sibling: HTMLElement;
  /**
   * @property {boolean} dragStarted
   */
  private dragStarted: boolean;
  private dragEnded: boolean;
  private dragStartedCoords: Coordinates;
  private initIndex: number;

  private onParentMove = this.mouseMoveOnParent.bind(this);

  @Input() overlay: HTMLElement;
  @Input() parent: HTMLElement;
  @Input() selector: string;
  @Output() dragStart = new EventEmitter<any>();
  @Output() dragging = new EventEmitter<any>();
  @Output() dragEnd = new EventEmitter<IndexState>();


  get stubElem(): Node {
    const stub = document.createElement('div');
    stub.classList.add('stub');
    stub.style.height = `${this.parentHeight}px`;
    stub.style.background = `#eee`;
    stub.style.border = `2px dashed #ccc`;
    return stub;
  }

  get parentHeight(): number {
    let elemRect = this.parent.getBoundingClientRect();
    return elemRect.bottom - elemRect.top;
  }

  ngOnInit(): void {
    this.element = this.er.nativeElement;
    if (!this.parent) this.parent = this.element;
    this.overlay.style.position = 'relative';
  }

  ngOnDestroy(): void {
    this.removeEventListenerForWindow();
  }

  @HostListener('mousedown', ['$event']) mousedown(event: Event) {
    this.dragEnded = false;
    this.initIndex = this.elemIndex(this.parent);
    window.addEventListener('mousemove', this.onParentMove);
    this.addEventListenerForWindow();
  }

  addEventListenerForWindow() {
    window.addEventListener('mouseup', this.windowMouseUp);
  }

  removeEventListenerForWindow() {
    window.removeEventListener('mouseup', this.windowMouseUp);
    window.removeEventListener('mousemove', this.onParentMove);
  }

  //@HostListener('mouseup', ['$event'])
  windowMouseUp = this.mouseup.bind(this);

  /**
   *
   * @param {Event} event
   */
  mouseup(event: Event) {
    if (!this.dragStarted && this.dragEnded) return;
    this.dragStarted = false;
    this.dragEnded = true;
    this.removeEventListenerForWindow();
    this.parent.style.position = `static`;
    this.dragStartedCoords = {x: 0, y: 0};
    // this.parent.style.transform = `translate3d(0,0,0)`;
    this.parent.style.top = `${0}px`;
    this.parent.style.pointerEvents = `auto`;

    if (this.initIndex === undefined) this.initIndex = this.elemIndex(this.parent);
    let stub = <HTMLElement>this.overlay.getElementsByClassName('stub')[0],
      stubIndex = this.elemIndex(stub),
      newIndex = stubIndex > this.initIndex ? --stubIndex : stubIndex;

    if (stub) stub.remove();
    if (~stubIndex && this.initIndex != newIndex) this.dragEnd.emit({
      oldIndex: this.initIndex,
      newIndex
    });
    this.parent.classList.remove('drugging');
  }

  mouseMoveOnParent(event: MouseEvent) {
    const {clientX: x, clientY: y} = event;
    if (!this.dragStarted) {
      this.dragStart.emit('started');
      this.dragStarted = true;
      this.dragStartedCoords = {x, y};
      this.parent.style.position = `absolute`;
      this.parent.style.pointerEvents = `none`;
      this.parent.classList.add('drugging');
    }
    // this.parent.style.transform = `translate3d(0px,${y - this.dragStartedCoords.y}px,0)`;
    let overlayRect = this.overlay.getBoundingClientRect();
    let yPos = y - overlayRect.top;
    this.parent.style.top = `${yPos < 0
      ? 0
      : overlayRect.bottom - y < this.parentHeight
        ? overlayRect.bottom - this.parentHeight - overlayRect.top
        : yPos}px`;

    this.sibling = <HTMLElement>(<HTMLElement>event.target).closest(this.selector);
    let stub = this.overlay.getElementsByClassName('stub')[0];
    switch (this.actionWithStub(y)) {
      case AddStub.removeAndAddAfter:
        stub.remove();
        this.sibling.nextSibling ? this.overlay.insertBefore(this.stubElem, this.sibling.nextSibling) : this.overlay.appendChild(this.stubElem);
        break;
      case AddStub.removeAndAddBefore:
        stub.remove();
        this.overlay.insertBefore(this.stubElem, this.sibling);
        break;
      case AddStub.addAfter:
        this.sibling.nextSibling ? this.overlay.insertBefore(this.stubElem, this.sibling.nextSibling) : this.overlay.appendChild(this.stubElem);
        break;
      case AddStub.addBefore:
        this.overlay.insertBefore(this.stubElem, this.sibling);
        break;
      case AddStub.addAtStart:
        if (stub) stub.remove();
        this.overlay.insertBefore(this.stubElem, this.overlay.children[0]);
        break;
      case AddStub.nothing:
        break;
    }
  }

  actionWithStub(y: number): AddStub {
    if (!this.sibling) {
      let overlayRect = this.overlay.getBoundingClientRect(),
        yPos = y - overlayRect.top;
      return yPos <= 0
        ? AddStub.addAtStart
        : AddStub.nothing;
    }

    const siblingRect = this.sibling.getBoundingClientRect(),
      siblingTop = siblingRect.top,
      siblingHeight = siblingRect.bottom - siblingTop,
      parentTop = this.overlay.getBoundingClientRect().top,
      stub = this.overlay.getElementsByClassName('stub')[0];

    return stub
      ? AddStub.removeAndAddAfter
      // ? stub.nextSibling == this.sibling && y - siblingTop + parentTop - this.parentHeight < siblingHeight && y - siblingTop + parentTop - this.parentHeight > siblingHeight / 2
      //   ? AddStub.removeAndAddAfter
      //   : AddStub.removeAndAddBefore
      // : (this.sibling.nextSibling == stub || this.sibling.nextSibling == this.parent) && y - siblingTop + parentTop - this.parentHeight < siblingHeight / 2
      //   ? AddStub.removeAndAddBefore
      //   : AddStub.nothing
      : y - siblingTop + parentTop < siblingHeight / 2
        ? AddStub.addBefore
        : AddStub.addAfter;
    // : y - siblingTop + parentTop < siblingHeight && y - siblingTop + parentTop > siblingHeight / 2
    //   ? AddStub.addAfter
    //   : AddStub.nothing;
  }

  private elemIndex(elem: HTMLElement): number {
    return Array.prototype.indexOf.call(this.overlay.children, elem);
  }
}
