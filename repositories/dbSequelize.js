import { Sequelize } from "sequelize";

const sequelizeConnection = new Sequelize("", {
  dialect: "postgres",
  define: {
    timestamps: false,
  },
});

export default sequelizeConnection;
