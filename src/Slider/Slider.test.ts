import { Slider } from './Slider';
import { MOCK_OPTIONS as mockOptions } from '../const/mock';

describe('Slider', () => {
  const createAppDiv = () => {
    document.body.innerHTML = `<div id="${mockOptions.root.slice(
      1
    )}">' + '</div>`;
  };

  test('catchErrorsAppMissing', () => {
    jest.spyOn(Slider.prototype, 'init').mockReturnValueOnce();
    const instance = new Slider(mockOptions);
    expect(instance.validateSlider.bind(instance)).toThrow(
      new Error(`Element with selector ${instance.root} not found`)
    );
  });

  test('catchErrorsSlidesMissing', () => {
    createAppDiv();
    jest.spyOn(Slider.prototype, 'init').mockReturnValueOnce();
    const instance = new Slider(mockOptions);
    instance.slides = [];
    expect(instance.validateSlider.bind(instance)).toThrow(
      new Error(`missing property slides`)
    );
  });

  test('initCalled', () => {
    createAppDiv();
    jest.spyOn(Slider.prototype, 'validateSlider').mockReturnValueOnce();
    jest.spyOn(Slider.prototype, 'render').mockReturnValueOnce();
    const instance = new Slider(mockOptions);
    expect(instance.validateSlider).toBeCalledTimes(1);
    expect(instance.render).toBeCalledTimes(1);
  });

  test('testSlidesRendered', () => {
    createAppDiv();
    jest.spyOn(Slider.prototype, 'init').mockReturnValueOnce();
    const instance = new Slider(mockOptions);
    instance.render();
    const slides = [...document.querySelectorAll('.slide')];
    expect(slides.length).not.toBe(0);
  });

  test('moveSlide', () => {
    createAppDiv();
    jest.spyOn(Slider.prototype, 'init').mockReturnValueOnce();
    const instance = new Slider(mockOptions);
    instance.moveSlide();
    expect(instance.interval).not.toBe(null);
  });

  test('showNextSlide', () => {
    createAppDiv();
    jest.spyOn(Slider.prototype, 'init').mockReturnValueOnce();
    const instance = new Slider(mockOptions);
    instance.showNextSlide();
    const expectedValue = `translateX(-${
      (instance.slideIndex - 1) * instance.width
    }px)`;
    expect(instance.wrapper.style.transform).toBe(expectedValue);
  });
});
