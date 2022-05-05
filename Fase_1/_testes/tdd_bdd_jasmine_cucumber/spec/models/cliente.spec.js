const Clientes = require('../../models/cliente');

describe("Clientes", () => {
  beforeEach(() => {});

  it("Retorna todos", () => {
    let clientes = Clientes.todos();
    expect(clientes.length).toEqual(10);
  });

  it("Valida propriedades de um cliente", () => {
    let cliente = Clientes.primeiro();
    expect(cliente.id).not.toBeUndefined();
    expect(cliente.nome).not.toBeUndefined();
    expect(cliente.telefone).not.toBeUndefined();
  });

  it("Nome do cliente Upercase", () => {
    let cliente = Clientes.primeiro();
    cliente.nome = "john";
    expect(cliente.nomeUpercase()).toEqual("JOHN");
  });
});
