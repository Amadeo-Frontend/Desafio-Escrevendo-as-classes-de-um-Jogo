# Calculadora de Partidas Ranqueadas

Bem-vindo ao Jogo de Aventura, um projeto interativo desenvolvido em HTML, CSS e JavaScript. Este jogo permite criar heróis e vê-los em ação, realizando ataques personalizados com animações distintas. Aqui estão os principais pontos sobre a implementação em JavaScript:

## Estrutura do Projeto

- **index.html:** Contém a estrutura HTML para a interface.
- **style.css:** Arquivo CSS para estilizar a interface.
- **script.js:** Código JavaScript responsável pela lógica.

## Estrutura do Projeto

### Classe `Heroi`

A classe `Heroi` é a espinha dorsal do jogo, representando um personagem de aventura com propriedades como nome, idade e tipo. Essa classe também possui um método `atacar()`, responsável por exibir as mensagens de ataque de acordo com o tipo de herói.

### Função `criarEAtacarHeroi()`

A função `criarEAtacarHeroi()` é acionada ao clicar no botão "Criar e Atacar". Ela cria um novo herói, exibe nome e idade na tela e realiza um ataque único. A mensagem de saída é apresentada com animações específicas baseadas no tipo de herói.

### Função `limparLocalStorage()`

A função `limparLocalStorage()` oferece uma maneira de reiniciar o jogo, limpando o armazenamento local e recarregando a página.

### Carregamento do Herói do `localStorage`

Ao carregar a página, o jogo verifica a existência de um herói armazenado no `localStorage` e, se presente, exibe imediatamente os detalhes do herói.

## Estilos de Ataque

Cada tipo de herói possui um estilo de ataque exclusivo, apresentado com animações envolventes. Essas animações são aplicadas dinamicamente às mensagens de saída, adicionando uma camada de imersão ao jogo.

Este projeto oferece uma experiência simples e divertida de criação e ação de heróis. Sinta-se à vontade para explorar, criar diferentes personagens e desfrutar dos variados estilos de ataque!
faça baseado nesse projeo

## Live
