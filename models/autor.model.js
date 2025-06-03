import { Sequelize } from "sequelize";
import sequelizeConnection from "../repositories/dbSequelize.js";

const Autor = sequelizeConnection.define(
  "autor",
  {
    autorId: {
      type: Sequelize.INTEGER,
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
    telefone: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

export default Autor;
