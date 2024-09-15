const getMochaContext = () => cy.state("ctx");

export const getTestContext = () => {
  const ctx = getMochaContext();
};
