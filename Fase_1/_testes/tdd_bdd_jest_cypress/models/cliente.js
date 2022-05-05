module.exports = class Cliente {
  constructor(_id = 0, _nome = "", _telefone = "") {
    this.id = _id;
    this.nome = _nome;
    this.telefone = _telefone;
  }

  nomeUpercase() {
    return this.nome.toUpperCase();
  }

  static primeiro() {
    return new Cliente();
  }

  static todos() {
    return [
      new Cliente(1, "Jonathan 1", "99999-9991"),
      new Cliente(2, "Jonathan 2", "99999-9992"),
      new Cliente(3, "Jonathan 3", "99999-9993"),
      new Cliente(4, "Jonathan 4", "99999-9994"),
      new Cliente(5, "Jonathan 5", "99999-9995"),
      new Cliente(6, "Jonathan 6", "99999-9996"),
      new Cliente(7, "Jonathan 7", "99999-9997"),
      new Cliente(8, "Jonathan 8", "99999-9998"),
      new Cliente(9, "Jonathan 9", "99999-9999"),
      new Cliente(10, "Jonathan 10", "99999-10000"),
    ];
  }
};
