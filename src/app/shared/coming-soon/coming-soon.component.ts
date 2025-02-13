import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.css'],
})
export class ComingSoonComponent {
  @Input() zoneTitle: string = '';
  @Input() subtitle: string = '';
  @Input() cardTitle: string = '';
  @Input() imageUrl: string = '';
  @Input() description: string = '';

  @Output() backClicked = new EventEmitter<void>();

  onBackClick() {
    this.backClicked.emit();  // Emit the event to the parent
  }
}
