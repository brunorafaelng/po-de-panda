# 🐼 po-de-panda: Protótipo de DataOps Híbrido

Protótipo de um projeto híbrido (Python + Node.js) que demonstra um ambiente de engenharia de dados 100% isolado e reproduzível usando [Pixi](https://pixi.sh/).

Este projeto serve como um modelo para "Consultoria de DataOps", resolvendo o clássico problema "mas funciona na minha máquina".

## 1. O Problema Resolvido

Aplicações de análise de dados frequentemente misturam linguagens (ex: um script Python orquestrado por um serviço Node.js) e dependem de versões específicas de pacotes (`python=3.14`, `node=24.9`). Sem um gerenciamento de ambiente robusto, é impossível garantir que a análise rode da mesma forma na máquina do analista e no servidor de produção.

## 2. A Solução (Pixi)

Este repositório usa o Pixi para definir _todos_ os requisitos em um único arquivo `pixi.toml`:

- **Ambiente `prod` (Produção):** Contém apenas os _runtimes_ necessários para a execução (`python` e `nodejs`).
- **Ambiente `dev` (Desenvolvimento):** Contém as ferramentas de qualidade de código (`ruff` para Python, `prettier` para JS).
- **Reprodutibilidade:** O `pixi.lock` garante que qualquer pessoa que clonar este projeto instalará _exatamente_ as mesmas versões de todos os pacotes.

## 3. Como Instalar

Você precisa ter o [Git](https://git-scm.com/) e o [Pixi](https://pixi.sh/latest/installation/) instalados.

```bash
# 1. Clone o repositório
git clone https://github.com/brunorafaelng/po-de-panda.git

# 2. Entre na pasta
cd po-de-panda

# 3. (Opcional) Ative o shell de desenvolvimento
# O Pixi instalará automaticamente tudo baseado no pixi.lock
pixi shell
```

## 4. Como Usar (Executar a Aplicação)

Para executar a pipeline híbrida (Node.js chamando Python), use o comando `run` do Pixi. Ele garante que o ambiente correto seja ativado automaticamente.

```bash
# Executa o orquestrador Node.js, que por sua vez chama o Python
pixi run node index.js
```

Saída Esperada:

```bash
Olá do Node.js! ⚡ Iniciando o script Python...

--- Saída do Python ---
Olá do Python! 🐍 (Estou rodando na versão: 3.14.0)
--- Fim da Saída ---

Processo híbrido concluído com sucesso! ✅
```
