export const DRAW_LINE_SELECTOR = '.button.line';
export const DRAW_RECTANGLE_SELECTOR = '.button.rectangle';
export const ERASER_SELECTOR = '.button.eraser';
export const DRAW_CONTAINER_SELECTOR = '#container';
export const IMAGE_CANVAS_SELECTOR = '#imageTemp';

export function drawLine(xStart, yStart, xFinish, yFinish) {
  cy.get(DRAW_LINE_SELECTOR).click();
  cy.get(DRAW_CONTAINER_SELECTOR)
    .find(IMAGE_CANVAS_SELECTOR)
    .then((imageViewElement) => {
      cy.wrap(imageViewElement).click(xStart, yStart).click(xFinish, yFinish);
    });
}

export function drawRectangle(xStart, yStart, xFinish, yFinish) {
  cy.get(DRAW_RECTANGLE_SELECTOR).click();
  cy.get(DRAW_CONTAINER_SELECTOR)
    .find(IMAGE_CANVAS_SELECTOR)
    .then((imageViewElement) => {
      cy.wrap(imageViewElement).click(xStart, yStart).click(xFinish, yFinish);
    });
}

export function useEraser(xStart, yStart, xFinish, yFinish) {
  cy.get(ERASER_SELECTOR).click();
  cy.get(DRAW_CONTAINER_SELECTOR)
    .find(IMAGE_CANVAS_SELECTOR)
    .then((imageViewElement) => {
      cy.wrap(imageViewElement)
        .trigger('mousedown', xStart, yStart, { eventConstructor: 'MouseEvent' })
        .trigger('mousemove', xFinish, yFinish, { eventConstructor: 'MouseEvent' })
        .trigger('mouseup', { eventConstructor: 'MouseEvent' });
    });
}
