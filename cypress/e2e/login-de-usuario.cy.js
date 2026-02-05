import 'cypress-xpath';

//Nome da especificação de testes (SPEC)
describe('Login de usuário', () => {
  
  //Cenário de teste (TEST CASE)
  it('Deve autenticar usuário com sucesso', () => {

    //ARRANGE
    cy.visit('https://cotiaws.github.io/projet-estoque/index.html');
    cy.xpath('//*[@id="usuario"]').type('admin');
    cy.xpath('//*[@id="senha"]').type('123');

    //ACT
    cy.xpath('//*[@id="loginForm"]/button').click();

    //ASSERT
    cy.url().should('contain', 'dashboard.html');

    //EVIDÊNCIAS
    cy.screenshot('Deve autenticar usuário com sucesso', { overwrite : true });

  });

  //Cenário de teste (TEST CASE)
  it('Deve retornar acesso negado para usuário inválido', () => {

    //ARRANGE
    cy.visit('https://cotiaws.github.io/projet-estoque/index.html');
    cy.xpath('//*[@id="usuario"]').type('teste'); //usuário inválido
    cy.xpath('//*[@id="senha"]').type('321'); //senha inválida

    //ACT
    cy.xpath('//*[@id="loginForm"]/button').click();

    //ASSERT
    cy.xpath('//*[@id="loginError"]')
      .should('contain', 'Usuário ou senha inválidos');

    //EVIDÊNCIAS
    cy.screenshot('Deve retornar acesso negado para usuário inválido', { overwrite : true });

  });

})