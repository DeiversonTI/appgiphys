# Search Gifs

> Funcionalidades

- [ ]  Buscar gifs utilizando a API disponibilizada pelo site Giphys.
- [ ]  Listar os gif na tela.
- [ ]  Visualizar os detalhes de um gif.

- [ ]  Salvar os gifs.
- [ ]  Editar os dados de um gif salvo.
- [ ]  Deletar um gif.

> Pré-requisitos

- [ ]  docker-compose instalado na máquina.

    Caso não tenha, basta seguir o passo a passo que pode ser encontrado no seguinte site:

    [Install Docker Compose](https://docs.docker.com/compose/install/)

> Como usar

Basta clonar o repositório do seguinte link:

[](https://github.com/felipebarreto148/appgiphys.git)

Ao clonar, precisamos entrar no repositório, basta usarmos o comando:

```bash
cd nome_repositório
```

Após isso, será necessário o uso do docker-compose, com o mesmo já instalado na máquina, basta acessarmos a pasta raiz do projeto e rodar o comando:

```bash
docker-compose up
```

em seguida, serão realizados todos os procedimentos inseridos no Dockerfile e ao término, basta acessarmos a url: 

http://localhost:8086

onde a porta 8086 foi definida como padrão para este projeto.

> A aplicação

Assim que entramos no app usando a url que foi passada acima, estaremos na seguinte tela:

![Foto da tela de pesquisa](https://github.com/felipebarreto148/appgiphys/blob/master/pictures/tela_inicio.PNG)

Para pesquisarmos um gif, basta inserir o nome do que queremos procurar no campo e apertar o enter que os gifs serão retornados, como no exemplo abaixo:

![Pesquisando por um giphy](https://github.com/felipebarreto148/appgiphys/blob/master/pictures/pesquisa.PNG)

É possível também, salvar gifs para visualizar mais tarde, para isso, basta clicar no botão "Like", presente em todos os gifs.

![Giphys Curtidos](https://github.com/felipebarreto148/appgiphys/blob/master/pictures/Curtidos.PNG)

Os gifs que foram curtidos, poderão ser encontrados na aba "Giphys Saved".

Nesta mesma aba, é possível também, remover um gif que havia sido salvo anteriormente, para isso, basta clicar no botão de "like", você perceberá que nessa aba, ao passar o mouse em cima do botão, aparecerá "Dislike", como mostra no exemplo a seguir:

![Opção de dislike em um giphy](https://github.com/felipebarreto148/appgiphys/blob/master/pictures/dislike.PNG)

Também é possível alterar as informações de um gif salvo, como título e data de atualização, que por padrão, são as informações inseridas no ato da publicação do gif, para editar um gif, basta clicar no botão "Edit", que abrirá os campos para realizar a alteração das informações. Por exemplo:

![Formulário que aparece ao clicar no botão de editar](https://github.com/felipebarreto148/appgiphys/blob/master/pictures/Alterar_informacoes.PNG)

Como podemos ver, podemos alterar o título e a data, como no exemplo seguinte: 

![Informações do giphy editadas.](https://github.com/felipebarreto148/appgiphys/blob/master/pictures/Alterado.PNG)

Após editarmos as informações, basta clicar no botão  de confirmar para salvar e realizar as alterações no gif.
