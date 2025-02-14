import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zone-articles',
  templateUrl: './zone-articles.component.html',
  styleUrls: ['./zone-articles.component.css']
})
export class ZoneArticlesComponent {
  @Input() title: string = ''; // Dynamic h1 content
  @Input() subtitle: string = ''; // Dynamic h2 content
  @Input() articles: any[] = []; // Articles data from parent
  @Output() backClicked = new EventEmitter<void>(); // Back button event

  onBackClick() {
    this.backClicked.emit();  // Emit event to parent when back is clicked
  }

  navigateToRegister() { }
}
