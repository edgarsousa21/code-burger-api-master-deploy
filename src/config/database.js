module.exports = {
  dialect: 'postgres', // BANCO DE DADOS QUE EU VOU USAR.
  url: 'postgresql://postgres:G3c3g3cg*4-Ea-AD-EcE6F-5B4F34D1a@monorail.proxy.rlwy.net:46261/railway',
  // host: 'localhost',
  // username: 'postgres',
  // password: 'postgres',
  // database: 'codeburger', // NOME DO BANDO DE DADOS
  define: {
    timespamps: true, // QUANDO EU CRIO UM DADO NO MEU BANCO DE DADOS, CRIA-SE OS CAMPOS:(createdAt, updatedAt)
    underscored: true, // PERMITE CRIAR TABELAS COM NOMES EM CAIXA BAIXA E SEPARADOS COM UNDERLINE (EX: user_products).
    underscoredAll: true,
  },
}
