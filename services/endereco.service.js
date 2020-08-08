class EnderecoService {


 static async buscarPorCep(cep) {
    try {
      let response = await fetch(`https://viacep.com.br/ws/${cep}/json`)
      let result = await response.json()
      if (result.erro) throw {
        message: "CEP não reconhecido",
        mensagemCliente: "CEP não reconhecido"
      }
      return result
    } catch (erro) {
      throw {
        message: `[EnderecoService] Erro ao buscar endereço por CEP: ${erro.message}`,
        mensagemCliente: erro.mensagemCliente || "Erro ao buscar endereço"
      }
    }
  }
}


export default EnderecoService