import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomUtils } from '../utils/dom-utils';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  imports: [CommonModule],
})
export class CarouselComponent implements OnInit {
  constructor(private el: ElementRef) {}

  /* Wrapper necessary to automatically select the first item in the app list */
  @Input()
  set categories(categories: string[]) {
    if (categories && categories.length > 0) {
      this.items = categories;
      this.selectItem(0);
    }
  }

  @Output() selectedCategory = new EventEmitter<any>();

  items: string[] = [];

  selectedItemIndex: number | null = null;

  ngOnInit() {
    this.syncCarouselWidth();
    this.updateNavVisibility();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event) {
    this.syncCarouselWidth();
    this.updateNavVisibility();
  }

  syncCarouselWidth() {
    const carouselContainer = this.el.nativeElement.querySelector(
      '.carousel-container'
    );
    if (carouselContainer) {
      DomUtils.syncWithParentWidth(carouselContainer, '.content');
    }
  }

  updateNavVisibility() {
    const carousel = document.querySelector('.carousel');
    const leftNav = document.querySelector('.carousel-nav.left') as HTMLElement;
    const rightNav = document.querySelector(
      '.carousel-nav.right'
    ) as HTMLElement;

    if (carousel && leftNav && rightNav) {
      const isOverflowing = carousel.scrollWidth > carousel.clientWidth;
      const isScrolledToStart = carousel.scrollLeft === 0;
      const isScrolledToEnd =
        carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth;

      leftNav.style.display =
        isOverflowing && !isScrolledToStart ? 'block' : 'none';
      rightNav.style.display =
        isOverflowing && !isScrolledToEnd ? 'block' : 'none';

      const viewportWidth = window.innerWidth;
      leftNav.style.left =
        Math.max(leftNav.getBoundingClientRect().left, 0) + 'px';
      rightNav.style.right =
        Math.max(viewportWidth - rightNav.getBoundingClientRect().right, 0) +
        'px';
      if (
        leftNav.style.display === 'block' &&
        leftNav.getBoundingClientRect().left < 0
      ) {
        leftNav.style.left = '0px';
      } else {
        leftNav.style.left = '';
      }

      if (
        rightNav.style.display === 'block' &&
        rightNav.getBoundingClientRect().right > viewportWidth
      ) {
        rightNav.style.right = '0px';
      } else {
        rightNav.style.right = '';
      }
    }
  }

  scrollLeft() {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      const itemWidth = document.querySelector('.carousel-item')?.clientWidth;
      if (itemWidth) {
        carousel.scrollBy({ left: -itemWidth * 4, behavior: 'smooth' });
        setTimeout(() => this.updateNavVisibility(), 500);
      }
    }
  }

  scrollRight() {
    const carousel = document.querySelector('.carousel');
    if (carousel) {
      const itemWidth = document.querySelector('.carousel-item')?.clientWidth;
      if (itemWidth) {
        carousel.scrollBy({ left: itemWidth * 4, behavior: 'smooth' });
        setTimeout(() => this.updateNavVisibility(), 500);
      }
    }
  }

  selectItem(index: number) {
    this.selectedItemIndex = index;
    this.selectedCategory.emit(this.items[index]);
  }

  isSelected(index: number): boolean {
    return this.selectedItemIndex === index;
  }
}
