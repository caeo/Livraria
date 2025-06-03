import sequelizeConnection from "./dbSequelize";
import Livro from "../models/livro.model.js";

async function createLivro(livro) {
  try {
    return await Livro.create(livro);
  } catch (error) {
    throw error;
  }
}

async function getLivro(id) {
  try {
    return await Livro.findByPk(id);
  } catch (error) {
    throw error;
  }
}
async function getLivros() {
  try {
    return await Livro.findAll();
  } catch (error) {
    throw error;
  }
}
async function deleteLivro(id) {
  try {
    return await Livro.destroy({
      where: {
        livroId: id,
      },
    });
  } catch (error) {
    throw error;
  }
}
async function updateLivro(livro) {
  try {
    return await Livro.update(livro, {
      where: { livroId: livro.livroId },
    });
  } catch (error) {
    throw error;
  }
}

export default {
  createLivro,
  getLivro,
  getLivros,
  deleteLivro,
  updateLivro,
};
