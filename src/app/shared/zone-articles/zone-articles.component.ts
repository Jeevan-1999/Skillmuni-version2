import { Component, Input, Output, EventEmitter, ElementRef, ViewChild, AfterViewInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zone-articles',
  templateUrl: './zone-articles.component.html',
  styleUrls: ['./zone-articles.component.css']
})
export class ZoneArticlesComponent implements AfterViewInit {
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() articles: any[] = [];
  @Output() backClicked = new EventEmitter<void>(); // Back button event

  @ViewChild('contentContainer', { static: false }) contentContainer!: ElementRef;

  currentIndex: number = 0;

  constructor(private router: Router) { }

  ngAfterViewInit() {
    this.scrollToCard(0); // Start at the first card
  }

  // Handle swipe up and down
  onSwipe(event: any) {
    if (event.deltaY < 0) {
      this.nextCard();
    } else {
      this.prevCard();
    }
  }

  nextCard() {
    if (this.currentIndex < this.articles.length - 1) {
      this.currentIndex++;
      this.scrollToCard(this.currentIndex);
    }
  }

  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scrollToCard(this.currentIndex);
    }
  }

  scrollToCard(index: number) {
    const container = this.contentContainer.nativeElement;
    const cardElements = container.getElementsByClassName('card');
    if (cardElements[index]) {
      cardElements[index].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  onBackClick() {
    this.backClicked.emit();
  }

  navigateToRegister() {
    console.log('Navigating to International Registration page...');
    this.router.navigate(['/international-zone/article/register']);
  }

  navigateToTest(article: any) {
    if (!article?.brief_code) {
      console.error('Error: Missing article or brief_code', article);
      return;
    }

    console.log('Navigating to assessment with brief_code:', article.brief_code);
    this.router.navigate(['/assessment'], {
      queryParams: {
        brfcode: article.brief_code,
        title: this.title,
        subtitle: this.subtitle
      }
    });
  }
}
