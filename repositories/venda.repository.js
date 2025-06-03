import Venda from "../models/venda.model.js";
import Cliente from "../models/cliente.model.js";
import Autor from "../models/autor.model.js";

async function createVenda(venda) {
  try {
    return await Venda.create(venda);
  } catch (error) {
    throw error;
  }
}

async function getVenda(id) {
  try {
    return await Venda.findByPk(id, {
      include: [
        {
          model: Cliente,
          attributes: ["clienteId", "nome", "email", "telefone", "endereco"],
        },
        {
          model: Autor,
          attributes: ["autorId", "nome", "email", "telefone"],
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

async function getVendas() {
  try {
    return await Venda.findAll({
      include: [
        {
          model: Cliente,
          attributes: ["clienteId", "nome", "email", "telefone", "endereco"],
        },
        {
          model: Autor,
          attributes: ["autorId", "nome", "email", "telefone"],
        },
      ],
    });
  } catch (error) {
    throw error;
  }
}

async function deleteVenda(id) {
  try {
    return await Venda.destroy({
      where: {
        vendaId: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function updateVenda(venda) {
  try {
    return await Venda.update(venda, {
      where: { vendaId: venda.vendaId },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  createVenda,
  getVenda,
  getVendas,
  deleteVenda,
  updateVenda,
};