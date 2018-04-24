import {Directive, ElementRef, HostListener, OnDestroy, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[drop-file]',
})
export class DropFile implements OnInit, OnDestroy {
  //TODO: change flow using component and this directive. This code also need to be reviewed.
  /**
   * Element that start the drugging of its parent
   * @property {HTMLElement} element
   */
  private element: HTMLElement;

  constructor(private er: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.element = this.er.nativeElement;
    console.dir(this.element);
  }

  ngOnDestroy(): void {
  }

  @HostListener('drop', ['$event']) drop(event: DragEvent) {
    console.log(event);
    event.preventDefault();
    if (event.dataTransfer.items) {
      // Use DataTransferItemList interface to access the file(s)
      for (let i = 0; i < event.dataTransfer.items.length; i++) {
        // If dropped items aren't files, reject them
        if (event.dataTransfer.items[i].kind === 'file') {
          let file = event.dataTransfer.items[i].getAsFile();
          // console.log('... file[' + i + '].name = ' + file.name);
          let myBlob =new Blob([file], {type: 'application/octet-binary'});
          let url = URL.createObjectURL(myBlob);
          console.log(url);
          let img = document.createElement('img');
          img.setAttribute('src', url);
          this.element.appendChild(img)
        }
      }
    } else {
      // Use DataTransfer interface to access the file(s)
      for (let i = 0; i < event.dataTransfer.files.length; i++) {
        let file = event.dataTransfer.files[i];
        // console.log('... file[' + i + '].name = ' + event.dataTransfer.files[i].name);
        console.log(file)
      }
    }
  }

  @HostListener('dragover', ['$event']) dragover(event: DragEvent) {
    event.preventDefault();
    // console.log(event)
  }

}
