// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import * as CanvasOnlinePage from '../support/page_objects/canvas-online-page';

Cypress.Commands.add('drawLine', (xStart, yStart, xFinish, yFinish) => {
  cy.get(CanvasOnlinePage.DRAW_LINE_SELECTOR).click();
  cy.get(CanvasOnlinePage.DRAW_CONTAINER_SELECTOR)
    .find(CanvasOnlinePage.IMAGE_CANVAS_SELECTOR)
    .then((imageViewElement) => {
      cy.wrap(imageViewElement).click(xStart, yStart).click(xFinish, yFinish);
    });
});
Cypress.Commands.add('drawRectangle', (xStart, yStart, xFinish, yFinish) => {
  cy.get(CanvasOnlinePage.DRAW_RECTANGLE_SELECTOR).click();
  cy.get(CanvasOnlinePage.DRAW_CONTAINER_SELECTOR)
    .find(CanvasOnlinePage.IMAGE_CANVAS_SELECTOR)
    .then((imageViewElement) => {
      cy.wrap(imageViewElement).click(xStart, yStart).click(xFinish, yFinish);
    });
});
Cypress.Commands.add('useEraser', (xStart, yStart, xFinish, yFinish) => {
  cy.get(CanvasOnlinePage.ERASER_SELECTOR).click();
  cy.get(CanvasOnlinePage.DRAW_CONTAINER_SELECTOR)
    .find(CanvasOnlinePage.IMAGE_CANVAS_SELECTOR)
    .then((imageViewElement) => {
      cy.wrap(imageViewElement)
        .trigger('mousedown', xStart, yStart, { eventConstructor: 'MouseEvent' })
        .trigger('mousemove', xFinish, yFinish, { eventConstructor: 'MouseEvent' })
        .trigger('mouseup', { eventConstructor: 'MouseEvent' });
    });
});
