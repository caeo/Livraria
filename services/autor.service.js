import autorRepository from "../repositories/autor.repository.js";

async function createAutor(autor) {
  return await autorRepository.createAutor(autor);
}

async function getAutor(id) {
  return await autorRepository.getAutor(id);
}

async function getAutores() {
  return await autorRepository.getAutores();
}

async function deleteAutor(id) {
  return await autorRepository.deleteAutor(id);
}

async function updateAutor(autor) {
  return await autorRepository.updateAutor(autor);
}

export default {
  createAutor,
  getAutor,
  getAutores,
  deleteAutor,
  updateAutor,
};
