import React from 'react';
import Counter from './Counter';

describe('Counter Component', () => {
  beforeEach(() => {
    cy.mount(<Counter />);
  });

  it('renders initial count of 0', () => {
    cy.get('div').contains('0');
  });

  it('increments count when Increment button is clicked', () => {
    cy.get('button').click();
    cy.get('div').contains('1');
  });

  it('increments count by 2 when Increment button is clicked twice', () => {
    cy.get('button').click();
    cy.get('button').click();
    cy.get('div').contains('2');
  });

  it('increments count by 10 when Increment button is clicked ten times', () => {
    for (let i = 0; i < 10; i++) {
      cy.get('button').click();
    }
    cy.get('div').contains('10');
  });

  it('increments count correctly after multiple increments and decrements', () => {
    cy.get('button').click(); // 1
    cy.get('button').click(); // 2
    cy.get('button').click(); // 3
    cy.get('div').contains('3');
    for (let i = 0; i < 15; i++) {
      cy.get('button').click(); // 4
    }
    cy.get('div').contains('18');
  });
});
