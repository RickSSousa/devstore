describe("add product to cart", () => {
  it("should be able to navigate to the product page and add it to the cart", () => {
    cy.visit("http://localhost:3000");
    cy.get('a[href^="/product"]').first().click();
    cy.location("pathname").should("include", "/product"); // verifica se a URL contém "/product"
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Cart (1)").should("exist"); // verifica se o texto "Cart (1)" existe na página
  });
  it("should not count duplicated products on cart", () => {
    cy.visit("http://localhost:3000");
    cy.get('a[href^="/product"]').first().click();
    cy.location("pathname").should("include", "/product");
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Cart (1)").should("exist");
  });
  it("should be able to search for a product and add it to the cart", () => {
    cy.visit("http://localhost:3000");
    cy.get("input[name=q]").type("moletom").parent("form").submit(); //busca imput, insere "moletom" e submete
    cy.get('a[href^="/product"]').first().click();
    cy.location("pathname").should("include", "/product");
    cy.contains("Adicionar ao carrinho").click();
    cy.contains("Cart (1)").should("exist");
  });
});
