import {
  Directive,
  Input,
  Output,
  EventEmitter,
  ElementRef,
  OnInit,
  OnChanges,
  SimpleChanges,
  Sanitizer,
  HostListener,
  SecurityContext,
} from '@angular/core';

@Directive({
  selector: '[contenteditableModel]',
})
export class ContenteditableDirective implements OnInit, OnChanges {
  origValue!: string;

  @Input('contenteditableModel') value!: string;
  @Output() onValueChange = new EventEmitter<string>();

  get text(): string {
    return this.elemnetRef.nativeElement.innerText;
  }

  constructor(private elemnetRef: ElementRef) {}

  ngOnInit(): void {
    this.origValue = this.text;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.refreshView();
  }

  setContentEditable(editable: boolean) {
    this.elemnetRef.nativeElement.setAttribute('contenteditable', editable);
  }

  @HostListener('blur') onBlur() {
    this.setContentEditable(false);
    const currentText = this.text;
    if (this.origValue !== currentText) this.onValueChange.emit(currentText);
    this.origValue = currentText;
  }

  @HostListener('keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (e.code === 'Enter') {
      e.preventDefault();
    }
  }

  private refreshView() {
    this.elemnetRef.nativeElement.innerText = this.value;
  }
}
