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
  @Output() backClicked = new EventEmitter<void>();

  @ViewChild('contentContainer', { static: false }) contentContainer!: ElementRef;

  currentIndex: number = 0;
  touchStartY: number = 0;
  touchEndY: number = 0;
  isScrolling: boolean = false; // Prevent rapid triggering

  constructor(private router: Router) { }

  ngAfterViewInit() {
    this.scrollToCard(0); // Now the function accepts an argument
  }

  /*** Detect touch swipe ***/
  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    this.touchStartY = event.touches[0].clientY;
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    this.touchEndY = event.changedTouches[0].clientY;
    this.detectSwipe();
  }

  detectSwipe() {
    const swipeDistance = this.touchStartY - this.touchEndY;
    if (swipeDistance > 50) {
      this.nextCard();
    } else if (swipeDistance < -50) {
      this.prevCard();
    }
  }

  /*** Detect mouse scroll ***/
  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (this.isScrolling) return;
    this.isScrolling = true;

    if (event.deltaY > 0) {
      this.nextCard();
    } else {
      this.prevCard();
    }

    setTimeout(() => (this.isScrolling = false), 700); // Prevent rapid scrolling
  }

  /*** Scroll to the next card ***/
  nextCard() {
    if (this.currentIndex < this.articles.length - 1) {
      this.currentIndex++;
      this.scrollToCard(this.currentIndex); // Pass currentIndex
    }
  }

  /*** Scroll to the previous card ***/
  prevCard() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.scrollToCard(this.currentIndex);
    }
  }

  /*** Ensure smooth scrolling ***/
  scrollToCard(index: number) {
    const container = this.contentContainer.nativeElement;
    container.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onBackClick() {
    this.backClicked.emit();
  }

  navigateToRegister() {
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
