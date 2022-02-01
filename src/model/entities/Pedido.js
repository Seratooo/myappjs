import { EntitySchema } from "typeorm";

const Car = new EntitySchema({
  name: "Pedido", // Entity name (your "Model")
  tableName: "cars", // database table
  columns: {
    id: {
      primary: true, // primary key
      type: "int",
      generated: true, // auto-generated
    },
    nome: {
      type: "varchar",
    },
    preco: {
      type: "varchar",
    },
  },
});

export default Car;