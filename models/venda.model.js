import { Sequelize } from "sequelize";
import sequelizeConnection from "../repositories/dbSequelize.js";
import Autor from "./autor.model.js";
import Cliente from "./cliente.model.js";

const Venda = sequelizeConnection.define(
  "venda",
  {
    vendaId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    valor: {
      type: Sequelize.STRING,
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

Venda.belongsTo(Autor, { foreignKey: "autorId" });
Venda.belongsTo(Cliente, { foreignKey: "clienteId" });

export default Venda;
