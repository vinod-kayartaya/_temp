describe('Header Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000'); // Replace with your application URL
  });

  it('renders the header with correct text', () => {
    cy.get('[data-h1]').should('have.text', 'Todo app');
  });

  it('renders the paragraph with correct text', () => {
    cy.contains('Powered with React and Redux');
  });

  it('renders the header with the correct class', () => {
    cy.get('.alert.alert-primary').should('exist');
  });

  it('renders the header within a container', () => {
    cy.get('.container').should('exist');
  });

  it('renders only one header element', () => {
    cy.get('[data-h1]').should('have.length', 1);
  });

  it('renders only one paragraph element', () => {
    cy.get('p').should('have.length', 1);
  });

  it('should add a new todo', () => {
    cy.get('[data-testid=todoList] > .list-group-item')
      .its('length')
      .then((initialCount) => {
        // Add a new todo
        cy.get('[data-testid=todoText]').type('go get milk{enter}');
        // Count the number of todo items after adding a new one
        cy.get('[data-testid=todoList] > .list-group-item')
          .its('length')
          .should('eq', initialCount + 1);
      });
  });

  it('toggles text-decoration style on click for the 3rd todo item', () => {
    // Click on the 3rd todo item
    cy.get('[data-testid=divTodoText]').eq(3).click(); // Indexing starts from 0, so eq(2) targets the 3rd item

    // Assert that the style property 'text-decoration' is 'line-through'
    cy.get('[data-testid=divTodoText]')
      .eq(3)
      .should('have.css', 'text-decoration')
      .and('match', /none/);
  });
});
