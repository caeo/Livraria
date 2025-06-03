import Autor from "../models/autor.model.js";
import sequelizeConnection from "./dbSequelize.js";

async function createAutor(autor) {
  try {
    return await Autor.create(autor);
  } catch (error) {
    throw error;
  }
}

async function getAutor(id) {
  try {
    return await Autor.findByPk(id, { raw: true });
  } catch (error) {
    throw error;
  }
}

async function getAutores() {
  try {
    return await Autor.findAll();
  } catch (error) {
    throw error;
  }
}

async function deleteAutor(id) {
  try {
    return await Autor.destroy({
      where: {
        autorId: id,
      },
    });
  } catch (error) {
    throw error;
  }
}

async function updateAutor(autor) {
  try {
    return await Autor.update(autor, {
      where: {
        autorId: autor.autorId,
      },
    });
  } catch (error) {
    throw error;
  }
}

export default { createAutor, getAutor, getAutores, deleteAutor, updateAutor };
