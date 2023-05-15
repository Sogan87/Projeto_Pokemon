// Criar a função para criar um cartão de Pokémon
function criarCartaoPokemon(nome, numero, imagemSrc, tipos, descricao) {
    const cartao = document.createElement("li");
    cartao.classList.add("cartao-pokemon");
  
    const informacoes = document.createElement("div");
    informacoes.classList.add("informacoes");
  
    const nomeSpan = document.createElement("span");
    nomeSpan.textContent = nome;
  
    const numeroSpan = document.createElement("span");
    numeroSpan.textContent = numero;
  
    informacoes.appendChild(nomeSpan);
    informacoes.appendChild(numeroSpan);
  
    const imagem = document.createElement("img");
    imagem.setAttribute("src", imagemSrc);
    imagem.alt = nome;
    imagem.classList.add("gif");
  
    const listaTipos = document.createElement("ul");
    listaTipos.classList.add("tipos");
  
    tipos.forEach((tipo) => {
      const tipoLi = document.createElement("li");
      tipoLi.classList.add("tipo", tipo);
      tipoLi.textContent = tipo;
      listaTipos.appendChild(tipoLi);
    });
  
    const descricaoP = document.createElement("p");
    descricaoP.classList.add("descricao");
    descricaoP.textContent = descricao;
  
    cartao.appendChild(informacoes);
    cartao.appendChild(imagem);
    cartao.appendChild(listaTipos);
    cartao.appendChild(descricaoP);
  
    return cartao;
  }
  
  // Acessar o elemento da listagem de Pokémon
  const listagemPokemon = document.querySelector(".listagem-pokemon");
  
  // Criar os cartões de Pokémon
  const bulbasaur = criarCartaoPokemon(
    "Bulbasaur",
    "#001",
    "./src/imagens/bulbasaur.gif",
    ["grama", "veneno"],
    "Há uma semente de planta em suas costas desde o dia que este Pokémon nasce. A semente cresce lentamente."
  );
  
  const ivysaur = criarCartaoPokemon(
    "Ivysaur",
    "#002",
    "./src/imagens/ivysaur.gif",
    ["grama", "veneno"],
    "Quando o bulbo em suas costas cresce, parece perder a capacidade de ficar de pé em suas patas traseiras."
  );
  
  const venusaur = criarCartaoPokemon(
    "Venusaur",
    "#003",
    "./src/imagens/venusaur.gif",
    ["grama", "veneno"],
    "Sua planta floresce quando está absorvendo energia solar. Ele permanece em movimento para buscar a luz solar."
  );

  const charmander = criarCartaoPokemon(
    "Charmander",
    "#004",
    "./src/imagens/charmander.gif",
    ["fogo"],
    "Tem preferência por coisas quentes. Quando chove, diz-se que o vapor jorra da ponta de sua cauda."
  );
  
  const charmeleon = criarCartaoPokemon(
    "Charmeleon",
    "#005",
    "./src/imagens/charmeleon.gif",
    ["fogo"],
    "Tem uma natureza bárbara. Na batalha, ele chicoteia sua cauda ardente e corta com garras afiadas."
  );
  
  const charizard = criarCartaoPokemon(
    "Charizard",
    "#006",
    "./src/imagens/charizard.gif",
    ["fogo"],
    "Ele cospe fogo que é quente o suficiente para derreter pedregulhos. Pode causar incêndios florestais soprando chamas."
  );

  const squirtle = criarCartaoPokemon(
    "Squirtle",
    "#007",
    "./src/imagens/squirtle.gif",
    ["agua"],
    "Quando ele retrai seu longo pescoço em sua concha, ele esguicha água com força vigorosa."
  );
  
  const wartortle = criarCartaoPokemon(
    "Wartortle",
    "#008",
    "./src/imagens/wartortle.gif",
    ["agua"],
    "É reconhecido como um símbolo de longevidade. Se sua concha tem algas, esse Wartortle é muito antigo."
  );
  
  const blastoise = criarCartaoPokemon(
    "Blastoise",
    "#009",
    "./src/imagens/blastoise.gif",
    ["agua"],
    "Ele esmaga seu inimigo sob seu corpo pesado para causar desmaios. Em uma pitada, ele se retirará dentro de sua concha."
  );
  
  const caterpie = criarCartaoPokemon(
    "Caterpie",
    "#010",
    "./src/imagens/caterpie.gif",
    ["inseto"],
    "Para proteção, ele libera um fedor horrível da antena em sua cabeça para afastar os inimigos."
  );
  
  
  // Adicionar os cartões à listagem de Pokémon
  listagemPokemon.appendChild(bulbasaur);
  listagemPokemon.appendChild(ivysaur);
  listagemPokemon.appendChild(venusaur);
  listagemPokemon.appendChild(charmander);
  listagemPokemon.appendChild(charmeleon);
  listagemPokemon.appendChild(charizard);
  listagemPokemon.appendChild(squirtle);
  listagemPokemon.appendChild(wartortle);
  listagemPokemon.appendChild(blastoise);
  listagemPokemon.appendChild(caterpie);
  