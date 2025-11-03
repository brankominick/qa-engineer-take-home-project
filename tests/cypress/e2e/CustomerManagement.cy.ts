import { routes } from '../constants/routes';

describe("Testing Customer Management Page", () =>{

    // Before hooks:
    // Log in 
    before(() => {
        cy.login();
    });

    // Visit Customer Management page
    beforeEach(() => {
        cy.visit(routes.customerManagement);
    });

    // Consider: security vulnerabilities? accessibility testing?

    // Read: basic permission
    context("User visits page, and it loads successfully.", () => {
        specify("Key elements are loaded", () => {
            // Here, used contains instead of gets in case page structure is changed down the line (i.e. header gets wrapped in component)
            cy.contains("Customer Management").should("be.visible"); 
            // In contrast, this component seems more stable
            cy.get(".customer-table");
            // This button is nicely labeled for us!
            cy.get("[data-testid='add-customer-button']").should("be.visible");
        });

        specify("User can open and close modal.", () => {
            cy.get("[data-testid='add-customer-button']").click();
            cy.get(".modal-container").should("be.visible");
            cy.get(".close-button").click({ force: true });
            cy.get(".modal-container").should("not.exist");
        })
    });

    // Will creating and other actions be tied to user permissions/roles?
    context("User can add a new item to the table", () => {
        specify("Happy path: User successfully adds customer with expected values.", () => {
            cy.log("In progress");
        });

        specify("User cannot add new customer without required fields.", () => {
            cy.log("In progress");
        });

        specify("User receives error when submitting unexpected values.", () => {
            cy.log("In progress: Dependent on business & functional requirements -- can see required/optional fields in src, but what specific field validations will be added");
        });

        // Will we add logic for duplicate entries?
    });

    context("User can update entries in CustomerTable.", () => {
        specify("Happy path: User successfully updates customer with expected values", () => {
            cy.log("In progress");

        // Must update validate that each customer entry is unique?
        });
    });

    context("User can delete entries in CustomerTable.", () => {
        specify("Happy path: User successfully deletes customer from table", () => {
            cy.log("In progress");
        });
    });

});

