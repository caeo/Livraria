import Cliente from "../models/cliente.model.js";
import sequelizeConnection from "./dbSequelize.js";

async function createCliente(cliente) {
  try {
    return await Cliente.create(cliente);
  } catch (error) {
    throw error;
  }
}

async function getClientes() {
  try {
    return await Cliente.findAll();
  } catch (error) {
    throw error;
  }
}

async function getCliente(id) {
  try {
    return await Cliente.findByPk(id, { raw: true });
  } catch (error) {
    throw error;
  }
}

async function updateCliente(cliente) {
  try {
    await Cliente.update(cliente, {
      where: {
        clienteId: cliente.clienteId,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function deleteCliente(id) {
  try {
    await Cliente.destroy({
      where: {
        clienteId: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  createCliente,
  deleteCliente,
  getClientes,
  getCliente,
  updateCliente,
};
