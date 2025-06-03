import { Sequelize } from "sequelize";
import sequelizeConnection from "../repositories/dbSequelize.js";
import Autor from "./autor.model.js";

const Livro = sequelizeConnection.define(
  "livro",
  {
    livroId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome:{

    },
    valor: {
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    estoque: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
  },
  {
    underscored: true,
  }
);

Livro.belongsTo(Autor, { foreignKey: "autorId" });

export default Livro;
