const Clientes = require('../../models/cliente');

describe("Clientes", () => {
  beforeEach(() => {});

  test("Retorna todos", () => {
    let clientes = Clientes.todos();
    expect(clientes.length).toEqual(10);
  });

  test("Valida propriedades de um cliente", () => {
    let cliente = Clientes.primeiro();
    expect(cliente.id).not.toBeUndefined();
    expect(cliente.nome).not.toBeUndefined();
    expect(cliente.telefone).not.toBeUndefined();
  });

  test("Nome do cliente Upercase", () => {
    let cliente = Clientes.primeiro();
    cliente.nome = "john";
    expect(cliente.nomeUpercase()).toEqual("JOHN");
  });

  test("Nome do cliente contem", () => {
    let cliente = Clientes.primeiro();
    cliente.nome = "john";
    expect(cliente.nome.indexOf('j') != -1).toEqual(true);
  });
});
