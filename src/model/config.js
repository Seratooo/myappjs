import * as SQLite from "expo-sqlite";

// your entities will be imported here (Car is an example)
import Ped from "./entities/Pedido";

const config = {
  database: "mydatabase",
  driver: SQLite,
  entities: [Ped], // your entities will be added here (Car is an example)
  synchronize: true,
  type: "expo",
};

export default config;