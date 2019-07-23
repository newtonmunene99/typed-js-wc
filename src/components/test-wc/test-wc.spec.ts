import { TestWindow } from '@stencil/core/testing';
import { TestWc } from './test-wc';

describe('test-wc', () => {
  it('should build', () => {
    expect(new TestWc()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLTestWcElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [TestWc],
        html: '<test-wc></test-wc>'
      });
    });

    // See https://stenciljs.com/docs/unit-testing
    {cursor}

  });
});
