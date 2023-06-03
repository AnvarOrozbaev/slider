import { IOptions } from '@/types';
export class Slider {
  public options: IOptions;
  delay: number;
  root: string;
  width: number;
  height: number;
  wrapper: HTMLElement;
  container: HTMLElement;
  slides: IOptions['slides'] | [];
  wrapperWidth?: number;
  app: HTMLElement | null;
  slideIndex: number;
  interval: ReturnType<typeof setInterval> | null;
  checkErrors: () => void;

  constructor(options: IOptions) {
    this.options = options;
    this.delay = options.delay || 2500;
    this.root = options.root;
    this.wrapper = document.createElement('div');
    this.container = document.createElement('div');
    this.width = options.width || 750;
    this.height = options.height || 400;
    this.slides = options.slides || [];
    this.wrapperWidth = this.width * this.slides.length;
    this.app = document.querySelector(this.root);
    this.slideIndex = 1;
    this.interval = null;
    this.init();
  }
  validateSlider() {
    if (!this.app) {
      throw new Error(`Element with selector ${this.root} not found`);
    }
    if (!this.slides.length) {
      throw new Error(`missing property slides`);
    }
  }
  init() {
    this.validateSlider();
    this.render();
    this.moveSlide();
  }
  render() {
    this.container.setAttribute('id', this.root);
    this.app?.append(this.container);
    this.container.style.cssText = `overflow: hidden; width: ${this.width}px`;
    this.wrapper.classList.add('slider_wrapper');
    this.wrapper.style.width = `${this.wrapperWidth}px`;

    this.slides.map( elem => {
      const html = `<div    
                      class="slide" 
                      style="background: ${elem.color};
                      width: ${this.width}px; 
                      height: ${this.height}px;"
                    >
                      ${elem.text}
                    </div>`;
      this.wrapper.innerHTML += html;
      })
    return this.container.append(this.wrapper);
  }

  moveSlide() {
    this.interval = setInterval(() => this.showNextSlide(), this.delay);
  }

  showNextSlide() {
    if (this.slideIndex === this.slides.length) {
      if (this.interval) {
        clearInterval(this.interval);
        return;
      }
    }
    this.wrapper.style.transform = `translateX(-${
      this.slideIndex * this.width
    }px)`;
    this.slideIndex++;
  }
}
