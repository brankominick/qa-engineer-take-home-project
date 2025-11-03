import React from "react";
import { mount } from "cypress/react18";
import Button, { ButtonType } from "../../../src/Button";

describe("Testing Button Component", () => {

    specify("Button renders with correct label.", () => {
        mount(<Button label="Click Me" />);
        cy.get("button").should("contain.text", "Click Me");
    });

    specify("Button uses the correct type attribute.", () => {
        mount(<Button label="Submit" type={ButtonType.Submit} />);
        cy.get("button").should("have.attr", "type", "submit");
    });

    specify("Button calls onClick callback when clicked.", () => {
        cy.log("In progress");
    });

    // Test className and data-testid
});