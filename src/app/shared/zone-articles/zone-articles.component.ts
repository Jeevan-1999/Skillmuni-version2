import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zone-articles',
  templateUrl: './zone-articles.component.html',
  styleUrls: ['./zone-articles.component.css']
})
export class ZoneArticlesComponent {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() articles: any[] = [];
  @Output() backClicked = new EventEmitter<void>(); // Back button event

  constructor(private router: Router) { }

  onBackClick() {
    this.backClicked.emit(); // Emit event to parent when back is clicked
  }

  navigateToTest(article: any) {
    if (!article?.brief_code) {
      console.error("Error: Missing article or brief_code", article);
      return;
    }

    console.log("Navigating to assessment with brief_code:", article.brief_code);

    this.router.navigate(['/assessment'], {
      queryParams: {
        brfcode: article.brief_code,
        title: this.title,
        subtitle: this.subtitle
      }
    });
  }
}
