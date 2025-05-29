import { Sequelize } from "sequelize";
import sequelizeConnection from "../repositories/dbSequelize.js";

const Cliente = sequelizeConnection.define(
  "cliente",
  {
    clienteId: {
      type: Sequelize.Integer,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    senha: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    endereco: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

export default Cliente;
