import livroRepository from "../repositories/livro.repository.js";
import autorRepository from "../repositories/autor.repository.js";

async function createLivro(livro) {
  const autor = await autorRepository.getAutor(livro.autorId);
  if (autor) {
    return await livroRepository.createLivro(livro);
  } else {
    throw new Error("O autor_id não existe");
  }
}

async function getLivro(id) {
  return await livroRepository.getLivro(id);

  //   colocar o livro info
}

async function getLivros() {
  return await livroRepository.getLivros();
}

async function deleteLivro(id) {
  return await livroRepository.deleteLivro(id);
}

async function updateLivro(livro) {
  return await livroRepository.updateLivro(livro);
}

export default {
  createLivro,
  getLivro,
  getLivros,
  deleteLivro,
  updateLivro,
};
