import { Sequelize } from "sequelize";
import sequelizeConnection from "../repositories/dbSequelize.js";
import Cliente from "./cliente.model.js";
import Livro from "./livro.model.js";

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
      type: Sequelize.DOUBLE,
      allowNull: false,
    },
    dataVenda: {
      type: Sequelize.DATE,
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

Venda.belongsTo(Livro, { foreignKey: "livroId" });
Venda.belongsTo(Cliente, { foreignKey: "clienteId" });

export default Venda;
