import { Component, ElementRef, ViewChild, AfterViewInit, HostListener, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-zone-articles',
  templateUrl: './zone-articles.component.html',
  styleUrls: ['./zone-articles.component.css']
})
export class ZoneArticlesComponent implements OnInit, AfterViewInit, OnDestroy {
  title: string = '';
  subtitle: string = '';
  articles: any[] = [];

  @ViewChild('contentContainer', { static: false }) contentContainer!: ElementRef;
  currentIndex: number = 0;
  touchStartY: number = 0;
  touchEndY: number = 0;
  isScrolling: boolean = false;

  constructor(private router: Router, private location: Location) { }

  ngOnInit() {
    // Disable scrolling on the body while this component is active.
    document.body.style.overflow = 'hidden';

    // Retrieve the state passed during navigation.
    const state = this.location.getState() as { articles: any[], title: string, subtitle: string };
    if (state && state.articles) {
      this.articles = state.articles;
      this.title = state.title;
      this.subtitle = state.subtitle;
    } else {
      console.warn('No state found. Please navigate via the proper channel.');
    }
  }

  ngAfterViewInit() {
    this.scrollToCard(0);
  }

  ngOnDestroy() {
    document.body.style.overflow = 'auto';
  }

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

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (this.isScrolling) return;
    this.isScrolling = true;

    if (event.deltaY > 0) {
      this.nextCard();
    } else {
      this.prevCard();
    }

    setTimeout(() => (this.isScrolling = false), 700);
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
    const targetElement = container.children[index];
    if (targetElement) {
      container.scrollTo({ top: targetElement.offsetTop - 20, behavior: 'smooth' });
    }
  }

  onBackClick() {
    this.location.back();
  }

  navigateToRegister() {
    this.router.navigate(['/international-zone/article/register']);
  }

  navigateToTest(article: any) {
    if (!article?.brief_code) {
      console.error('Error: Missing article or brief_code', article);
      return;
    }
    this.router.navigate(['/assessment'], {
      queryParams: {
        brfcode: article.brief_code,
        title: this.title,
        subtitle: this.subtitle
      }
    });
  }
}
