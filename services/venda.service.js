import vendaRepository from "../repositories/venda.repository.js";
import clienteRepository from "../repositories/cliente.repository.js";
import livroRepository from "../repositories/livro.repository.js";

async function createVenda(venda) {
  const cliente = await clienteRepository.getCliente(venda.clienteId);
  const livro = await livroRepository.getLivro(venda.livroId);

  let error = "";
  if (!cliente) {
    error = "O clienteId informado não existe";
  }

  if (!livro) {
    error = "O livroId informado não existe";
  }

  if (!livro) {
    error += "O livroId informado não existe";
  }

  if (error) {
    throw new Error(error);
  }

  if (livro.estoque > 0) {
    venda = await vendaRepository.createVenda(venda);
    livro.estoque--;
    livroRepository.updateLivro(livro);
    return venda;
  } else {
    throw new Error("O livro informado não possui estoque");
  }
}

async function deleteVenda(id) {
  const venda = await vendaRepository.getVenda(id);
  if (venda) {
    const livro = await livroRepository.getLivro(venda.livroId);
    await vendaRepository.deleteVenda(id);
    livro.estoque++;
    await livroRepository.updateLivro(livro);
  } else {
    throw new Error("O id da venda informado não existe");
  }
}

async function updateVenda(venda) {
  let error = "";

  const cliente = clienteRepository.getCliente(venda.clienteId);
  const livro = livroRepository.getLivro(venda.livroId);

  if (!cliente) {
    error = "O clienteId informado não existe";
  }
  if (!livro) {
    error = "O livroId informado não existe";
  }
}

async function getVenda(id) {
  return await vendaRepository.getVenda(id);
}

async function getVendas() {
  return await vendaRepository.getVendas();
}

export default {
  createVenda,
  deleteVenda,
  updateVenda,
  getVenda,
  getVendas,
};
