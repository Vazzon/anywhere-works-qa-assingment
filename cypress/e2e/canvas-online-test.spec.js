import * as CanvasOnlinePage from '../support/page_objects/canvas-online-page';
describe('HTML Canvas Studio', () => {
  let width = 0;
  let height = 0;
  beforeEach(() => {
    cy.visit('/');
    cy.get(CanvasOnlinePage.DRAW_CONTAINER_SELECTOR)
      .find(CanvasOnlinePage.IMAGE_CANVAS_SELECTOR)
      .then((imageViewElement) => {
        width = imageViewElement.prop('width');
        height = imageViewElement.prop('height');
      });
  });

  it('should allow to draw cross and rectangle by functions', () => {
    CanvasOnlinePage.drawShape('line', width / 2, 20, width / 2, width / 4);
    CanvasOnlinePage.drawShape('line', width / 2 - 50, 75, width / 2 + 50, 75);
    CanvasOnlinePage.drawShape(
      'rectangle',
      width / 2 - 75,
      height / 2 + 25,
      width / 2 + 75,
      height / 2 + 100
    );
    CanvasOnlinePage.useEraser(width / 2, 20, width / 2, width / 4);
  });
  it('should allow to draw cross and rectangle by commands', () => {
    cy.drawShape('line', width / 2, 20, width / 2, width / 4);
    cy.drawShape('line', width / 2 - 50, 75, width / 2 + 50, 75);
    cy.drawShape('rectangle', width / 2 - 75, height / 2 + 25, width / 2 + 75, height / 2 + 100);
    cy.useEraser(width / 2, 20, width / 2, width / 4);
  });
});
