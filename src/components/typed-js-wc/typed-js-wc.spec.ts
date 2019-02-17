import { TestWindow } from '@stencil/core/testing';
import { TypedJsWc } from './typed-js-wc';

describe('typed-js-wc', () => {
  it('should build', () => {
    expect(new TypedJsWc()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLTypedJsWcElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [TypedJsWc],
        html: '<typed-js-wc></typed-js-wc>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
