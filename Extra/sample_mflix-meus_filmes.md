```js
db.meus_filmes.insertOne({
  title: "Velho Cinza",
  year: 2014,
  runtime: 113,
  genres: ["Action", "Crime", "Thriller"],
  cast: ["Samuel L. Jackson", "Kris Kristofferson", "Jeffrey Dean Morgan"],
  plot: "A retired sheriff faces a violent gang in the desert.",
  imdb: {
    rating: 6.9,
    votes: 25000
  },
  type: "movie"
})
```


```js
db.meus_filmes.insertMany([
  {
    title: "Código de Honra",
    year: 2016,
    runtime: 108,
    genres: ["Action", "Drama"],
    cast: ["Mel Gibson", "Frank Grillo"],
    plot: "A military lawyer defends a soldier accused of murder.",
    imdb: { rating: 6.7, votes: 18000 },
    type: "movie"
  },
  {
    title: "A Hora Mais Escura",
    year: 2012,
    runtime: 131,
    genres: ["Drama", "Thriller"],
    cast: ["Jessica Chastain", "Jason Clarke"],
    plot: "The hunt for Osama bin Laden after 9/11.",
    imdb: { rating: 7.4, votes: 220000 },
    type: "movie"
  }
])
```

```js
use sample_mflix

db.movies.insertMany([
  {
    title: "Operação Resgate Final",
    year: 2024,
    runtime: 125,
    genres: ["Ação", "Suspense"],
    cast: ["Gustavo Leite", "Fernanda Lima"],
    plot: "Um grupo de soldados realiza uma missão de resgate em território inimigo.",
    imdb: { rating: 7.6, votes: 180000 },
    type: "movie"
  },
  {
    title: "Sombras do Futuro",
    year: 2023,
    runtime: 118,
    genres: ["Ficção Científica", "Suspense"],
    cast: ["Caio Blat", "Alice Braga"],
    plot: "Uma viagem no tempo revela os erros que mudaram o destino da humanidade.",
    imdb: { rating: 7.4, votes: 150000 },
    type: "movie"
  },
  {
    title: "O Último Conflito",
    year: 2024,
    runtime: 130,
    genres: ["Guerra", "Drama"],
    cast: ["Wagner Moura", "Selton Mello"],
    plot: "Dois generais rivais precisam unir forças contra um inimigo comum.",
    imdb: { rating: 8.0, votes: 210000 },
    type: "movie"
  },
  {
    title: "Mistérios de Lisboa",
    year: 2023,
    runtime: 122,
    genres: ["Drama", "Mistério"],
    cast: ["Antonio Fagundes", "Giovanna Antonelli"],
    plot: "Um investigador tenta desvendar uma série de assassinatos na Europa.",
    imdb: { rating: 7.7, votes: 160000 },
    type: "movie"
  },
  {
    title: "A Resistência",
    year: 2024,
    runtime: 115,
    genres: ["Ficção Científica", "Ação"],
    cast: ["Sérgio Guizé", "Nathalia Dill"],
    plot: "Em um futuro distópico, rebeldes lutam contra uma ditadura tecnológica.",
    imdb: { rating: 7.5, votes: 140000 },
    type: "movie"
  },
  {
    title: "Além das Fronteiras",
    year: 2023,
    runtime: 120,
    genres: ["Aventura", "Drama"],
    cast: ["Rodrigo Santoro", "Ana Beatriz Barros"],
    plot: "Um explorador se aventura por terras desconhecidas em busca de um tesouro perdido.",
    imdb: { rating: 7.9, votes: 190000 },
    type: "movie"
  },
  {
    title: "A Escolha do Herói",
    year: 2024,
    runtime: 128,
    genres: ["Fantasia", "Aventura"],
    cast: ["Chay Suede", "Bruna Marquezine"],
    plot: "Um jovem descobre ter poderes ancestrais e é escolhido para salvar seu reino.",
    imdb: { rating: 8.1, votes: 220000 },
    type: "movie"
  },
  {
    title: "No Limite do Silêncio",
    year: 2023,
    runtime: 117,
    genres: ["Suspense", "Crime"],
    cast: ["Cauã Reymond", "Taís Araújo"],
    plot: "Um agente federal investiga uma rede internacional de espionagem.",
    imdb: { rating: 7.6, votes: 165000 },
    type: "movie"
  },
  {
    title: "Eclipse Mortal",
    year: 2024,
    runtime: 112,
    genres: ["Terror", "Suspense"],
    cast: ["Isis Valverde", "Lázaro Ramos"],
    plot: "Durante um eclipse total, eventos sobrenaturais começam a assombrar uma cidade.",
    imdb: { rating: 6.9, votes: 130000 },
    type: "movie"
  },
  {
    title: "O Código Proibido",
    year: 2023,
    runtime: 124,
    genres: ["Thriller", "Crime"],
    cast: ["Murilo Benício", "Leandra Leal"],
    plot: "Um hacker descobre um segredo governamental que pode mudar o mundo.",
    imdb: { rating: 7.5, votes: 155000 },
    type: "movie"
  },
  {
    title: "Destinos Cruzados",
    year: 2024,
    runtime: 130,
    genres: ["Romance", "Drama"],
    cast: ["Rebecca Maia", "Felipe Simas"],
    plot: "Duas pessoas de mundos diferentes se encontram durante uma jornada transformadora.",
    imdb: { rating: 7.3, votes: 145000 },
    type: "movie"
  },
  {
    title: "A Lei dos Fortes",
    year: 2023,
    runtime: 120,
    genres: ["Ação", "Crime"],
    cast: ["Alexandre Nero", "Marcello Melo Jr."],
    plot: "Um policial enfrenta um cartel que domina as ruas da cidade.",
    imdb: { rating: 7.7, votes: 170000 },
    type: "movie"
  },
  {
    title: "O Último Sobrevivente",
    year: 2024,
    runtime: 127,
    genres: ["Aventura", "Suspense"],
    cast: ["Fabio Assunção", "Débora Nascimento"],
    plot: "Após um naufrágio, um homem luta por sobrevivência em uma ilha deserta.",
    imdb: { rating: 7.8, votes: 185000 },
    type: "movie"
  },
  {
    title: "O Guardião da Luz",
    year: 2023,
    runtime: 118,
    genres: ["Fantasia", "Ação"],
    cast: ["Malvino Salvador", "Sheron Menezzes"],
    plot: "Um antigo guerreiro é chamado para restaurar a ordem no mundo místico.",
    imdb: { rating: 8.0, votes: 200000 },
    type: "movie"
  },
  {
    title: "A Queda do Império",
    year: 2024,
    runtime: 132,
    genres: ["Guerra", "Histórico"],
    cast: ["Tony Ramos", "Lília Cabral"],
    plot: "A história de um reino à beira do colapso por traições internas.",
    imdb: { rating: 7.9, votes: 195000 },
    type: "movie"
  },
  {
    title: "O Legado Perdido",
    year: 2023,
    runtime: 126,
    genres: ["Aventura", "Mistério"],
    cast: ["Edward Burns", "Carla Diaz"],
    plot: "Uma equipe de arqueólogos procura por uma relíquia capaz de controlar o tempo.",
    imdb: { rating: 7.6, votes: 160000 },
    type: "movie"
  },
  {
    title: "Sobrevivente Zero",
    year: 2024,
    runtime: 114,
    genres: ["Terror", "Suspense"],
    cast: ["Kiko Mascarenhas", "Letícia Spiller"],
    plot: "Um vírus mortal se espalha após um experimento científico falho.",
    imdb: { rating: 7.1, votes: 135000 },
    type: "movie"
  },
  {
    title: "O Jogo da Vida",
    year: 2023,
    runtime: 121,
    genres: ["Drama", "Esporte"],
    cast: ["Daniel de Oliveira", "Isabelle Drummond"],
    plot: "Um treinador reformula sua vida ao ajudar um time de futebol amador.",
    imdb: { rating: 7.4, votes: 150000 },
    type: "movie"
  },
  {
    title: "A Profecia Antiga",
    year: 2024,
    runtime: 129,
    genres: ["Fantasia", "Ação"],
    cast: ["Matheus Nachtergaele", "Alice Wegmann"],
    plot: "Uma profecia ancestral revela o destino de um herói esquecido pelo tempo.",
    imdb: { rating: 8.1, votes: 225000 },
    type: "movie"
  },
  {
    title: "A Batalha Final",
    year: 2023,
    runtime: 135,
    genres: ["Ação", "Guerra"],
    cast: ["Jon Doe", "André Ramiro"],
    plot: "Soldados enfrentam uma invasão alienígena em uma batalha épica pela Terra.",
    imdb: { rating: 7.7, votes: 175000 },
    type: "movie"
  },
  {
    title: "Caminhos do Destino",
    year: 2024,
    runtime: 122,
    genres: ["Drama", "Romance"],
    cast: ["Paolla Oliveira", "Rafael Cardoso"],
    plot: "Dois caminhos se cruzam em uma jornada emocional de redenção e amor.",
    imdb: { rating: 7.5, votes: 160000 },
    type: "movie"
  },
  {
    title: "O Enigma Cósmico",
    year: 2023,
    runtime: 119,
    genres: ["Ficção Científica", "Mistério"],
    cast: ["Bruno Gagliasso", "Fernanda Torres"],
    plot: "Um fenômeno cósmico revela segredos sobre a origem do universo.",
    imdb: { rating: 7.8, votes: 180000 },
    type: "movie"
  },
  {
    title: "A Revolta dos Oprimidos",
    year: 2024,
    runtime: 125,
    genres: ["Drama", "Histórico"],
    cast: ["Seu Jorge", "Grazi Massafera"],
    plot: "A história real de uma revolta popular contra o regime opressor.",
    imdb: { rating: 7.9, votes: 190000 },
    type: "movie"
  },
  {
    title: "Vida nas Estrelas",
    year: 2023,
    runtime: 130,
    genres: ["Ficção Científica", "Drama"],
    cast: ["Sophie Charlotte", "Marcos Palmeira"],
    plot: "Uma tripulação viaja pelo espaço em busca de um novo lar para a humanidade.",
    imdb: { rating: 7.6, votes: 165000 },
    type: "movie"
  },
  {
    title: "O Último Voo",
    year: 2024,
    runtime: 117,
    genres: ["Suspense", "Drama"],
    cast: ["Thiago Lacerda", "Vanessa Giácomo"],
    plot: "Um piloto deve pousar um avião em emergência após um acidente no céu.",
    imdb: { rating: 7.4, votes: 150000 },
    type: "movie"
  },
  {
    title: "Herança Maldita",
    year: 2023,
    runtime: 112,
    genres: ["Terror", "Mistério"],
    cast: ["Ingrid Guimarães", "Bruno Gissoni"],
    plot: "Uma família herda uma casa antiga e descobre seus segredos sombrios.",
    imdb: { rating: 6.9, votes: 125000 },
    type: "movie"
  },
  {
    title: "O Guardião do Tempo",
    year: 2024,
    runtime: 128,
    genres: ["Ficção Científica", "Ação"],
    cast: ["Arthur Aguiar", "Juliana Paiva"],
    plot: "Um cientista descobre como parar o tempo e é caçado por quem quer o mesmo poder.",
    imdb: { rating: 7.7, votes: 170000 },
    type: "movie"
  },
  {
    title: "A Última Missão",
    year: 2023,
    runtime: 120,
    genres: ["Ação", "Suspense"],
    cast: ["Rainer Cadete", "Luana Piovani"],
    plot: "Agentes secretos são enviados para impedir um ataque terrorista global.",
    imdb: { rating: 7.5, votes: 155000 },
    type: "movie"
  },
  {
    title: "O Chamado das Sombras",
    year: 2024,
    runtime: 115,
    genres: ["Terror", "Suspense"],
    cast: ["Clarice Pinheiro", "Ricardo Pereira"],
    plot: "Uma força obscura começa a perseguir uma jovem após uma sessão espírita.",
    imdb: { rating: 7.0, votes: 130000 },
    type: "movie"
  },
  {
    title: "A Hora da Verdade",
    year: 2023,
    runtime: 124,
    genres: ["Crime", "Drama"],
    cast: ["Luis Gustavo", "Paulo Vilhena"],
    plot: "Um juiz enfrenta dilemas morais ao julgar um caso complexo.",
    imdb: { rating: 7.6, votes: 160000 },
    type: "movie"
  }
])
```


```js
use sample_mflix

db.movies.insertMany([
  {
    title: "Operação Red Dawn",
    year: 2024,
    runtime: 128,
    genres: ["Action", "Thriller"],
    cast: ["Chris Evans", "Emily Blunt"],
    plot: "A secret mission to stop a global cyber threat.",
    imdb: { rating: 7.9, votes: 180000 },
    type: "movie"
  },
  {
    title: "Shadow Protocol",
    year: 2023,
    runtime: 115,
    genres: ["Sci-Fi", "Action"],
    cast: ["Michael B. Jordan", "Ana de Armas"],
    plot: "An AI system becomes self-aware and threatens humanity.",
    imdb: { rating: 7.6, votes: 150000 },
    type: "movie"
  },
  {
    title: "The Last Heist",
    year: 2024,
    runtime: 122,
    genres: ["Crime", "Drama"],
    cast: ["Brad Pitt", "Margot Robbie"],
    plot: "A legendary thief plans one final heist.",
    imdb: { rating: 8.1, votes: 210000 },
    type: "movie"
  },
  {
    title: "Echoes of Tomorrow",
    year: 2023,
    runtime: 135,
    genres: ["Drama", "Mystery"],
    cast: ["Cillian Murphy", "Florence Pugh"],
    plot: "A scientist discovers a way to communicate with the future.",
    imdb: { rating: 7.7, votes: 160000 },
    type: "movie"
  },
  {
    title: "Urban Legends",
    year: 2024,
    runtime: 110,
    genres: ["Horror", "Thriller"],
    cast: ["Jenna Ortega", "David Harbour"],
    plot: "A group of teens investigates a local urban legend.",
    imdb: { rating: 6.8, votes: 130000 },
    type: "movie"
  },
  {
    title: "Beyond the Stars",
    year: 2024,
    runtime: 140,
    genres: ["Adventure", "Sci-Fi"],
    cast: ["Tom Cruise", "Zendaya"],
    plot: "An astronaut stranded on Mars must find a way back to Earth.",
    imdb: { rating: 8.0, votes: 230000 },
    type: "movie"
  },
  {
    title: "The Code Breaker",
    year: 2023,
    runtime: 125,
    genres: ["Thriller", "Crime"],
    cast: ["Sandra Bullock", "Idris Elba"],
    plot: "A hacker uncovers a government conspiracy.",
    imdb: { rating: 7.5, votes: 170000 },
    type: "movie"
  },
  {
    title: "Nightfall",
    year: 2023,
    runtime: 118,
    genres: ["Action", "Drama"],
    cast: ["Dwayne Johnson", "Riz Ahmed"],
    plot: "A soldier is tasked with preventing an international crisis.",
    imdb: { rating: 7.3, votes: 145000 },
    type: "movie"
  },
  {
    title: "The Silent Witness",
    year: 2024,
    runtime: 120,
    genres: ["Crime", "Mystery"],
    cast: ["Jessica Chastain", "Oscar Isaac"],
    plot: "A witness to a crime must stay hidden from dangerous criminals.",
    imdb: { rating: 7.8, votes: 190000 },
    type: "movie"
  },
  {
    title: "Edge of Darkness",
    year: 2023,
    runtime: 132,
    genres: ["Action", "Thriller"],
    cast: ["Chris Hemsworth", "Thandiwe Newton"],
    plot: "A mercenary is caught in a war between two global powers.",
    imdb: { rating: 7.6, votes: 165000 },
    type: "movie"
  },
  {
    title: "The Forgotten City",
    year: 2024,
    runtime: 127,
    genres: ["Adventure", "Fantasy"],
    cast: ["Henry Cavill", "Anya Taylor-Joy"],
    plot: "Explorers uncover a lost city buried under the desert sands.",
    imdb: { rating: 7.9, votes: 200000 },
    type: "movie"
  },
  {
    title: "Digital Mirage",
    year: 2023,
    runtime: 119,
    genres: ["Sci-Fi", "Thriller"],
    cast: ["Ryan Reynolds", "Simu Liu"],
    plot: "A programmer enters a virtual world that may not be fake.",
    imdb: { rating: 7.4, votes: 155000 },
    type: "movie"
  },
  {
    title: "Final Transmission",
    year: 2024,
    runtime: 112,
    genres: ["Horror", "Sci-Fi"],
    cast: ["Florence Pugh", "John Boyega"],
    plot: "A signal from space reveals a terrifying truth about humanity.",
    imdb: { rating: 6.9, votes: 135000 },
    type: "movie"
  },
  {
    title: "Reckoning Day",
    year: 2023,
    runtime: 126,
    genres: ["Action", "Drama"],
    cast: ["Tom Hardy", "Charlize Theron"],
    plot: "A former soldier faces his past during the collapse of society.",
    imdb: { rating: 7.7, votes: 185000 },
    type: "movie"
  },
  {
    title: "The Midnight Gambit",
    year: 2024,
    runtime: 121,
    genres: ["Crime", "Thriller"],
    cast: ["Robert Downey Jr.", "Zoe Saldaña"],
    plot: "A chess prodigy is drawn into a deadly game of espionage.",
    imdb: { rating: 8.0, votes: 225000 },
    type: "movie"
  },
  {
    title: "Into the Unknown",
    year: 2023,
    runtime: 130,
    genres: ["Adventure", "Family"],
    cast: ["Jack Black", "Anna Kendrick"],
    plot: "A young adventurer embarks on a journey to save his missing parents.",
    imdb: { rating: 7.2, votes: 140000 },
    type: "movie"
  },
  {
    title: "Silent Rebellion",
    year: 2024,
    runtime: 117,
    genres: ["Drama", "History"],
    cast: ["Viola Davis", "Giancarlo Esposito"],
    plot: "A powerful story of resistance in a time of oppression.",
    imdb: { rating: 7.9, votes: 195000 },
    type: "movie"
  },
  {
    title: "Zero Gravity",
    year: 2023,
    runtime: 124,
    genres: ["Sci-Fi", "Drama"],
    cast: ["Anne Hathaway", "Channing Tatum"],
    plot: "An astronaut struggles to survive after being stranded in orbit.",
    imdb: { rating: 7.6, votes: 160000 },
    type: "movie"
  },
  {
    title: "Blood Moon Rising",
    year: 2024,
    runtime: 114,
    genres: ["Action", "Horror"],
    cast: ["Keanu Reeves", "Rosa Salazar"],
    plot: "As a blood moon rises, ancient creatures awaken.",
    imdb: { rating: 7.1, votes: 130000 },
    type: "movie"
  },
  {
    title: "Legacy of Honor",
    year: 2023,
    runtime: 129,
    genres: ["Drama", "War"],
    cast: ["Anthony Mackie", "Timothée Chalamet"],
    plot: "A decorated general trains a new generation for a coming war.",
    imdb: { rating: 7.8, votes: 175000 },
    type: "movie"
  }
])
```

```js
use sample_mflix

db.movies.insertMany([
  {
    title: "Operação Eclipse",
    year: 2024,
    runtime: 125,
    genres: ["Ação", "Suspense"],
    cast: ["Gustavo Leite", "Fernanda Lima"],
    plot: "Um grupo de soldados realiza uma missão de resgate em território inimigo.",
    imdb: { rating: 7.6, votes: 180000 },
    languages: ["Português", "Inglês"],
    countries: ["Brasil", "Estados Unidos"],
    directors: ["André Barros"],
    type: "movie"
  },
  {
    title: "Sombras do Futuro",
    year: 2023,
    runtime: 118,
    genres: ["Ficção Científica", "Suspense"],
    cast: ["Caio Blat", "Alice Braga"],
    plot: "Uma viagem no tempo revela os erros que mudaram o destino da humanidade.",
    imdb: { rating: 7.4, votes: 150000 },
    languages: ["Português", "Espanhol"],
    countries: ["Brasil"],
    directors: ["Luiz Carlos Lacerda"],
    type: "movie"
  },
  {
    title: "O Último Conflito",
    year: 2024,
    runtime: 130,
    genres: ["Guerra", "Drama"],
    cast: ["Wagner Moura", "Selton Mello"],
    plot: "Dois generais rivais precisam unir forças contra um inimigo comum.",
    imdb: { rating: 8.0, votes: 210000 },
    languages: ["Português", "Francês"],
    countries: ["Brasil", "França"],
    directors: ["José Padilha"],
    type: "movie"
  },
  {
    title: "Mistérios de Lisboa",
    year: 2023,
    runtime: 122,
    genres: ["Drama", "Mistério"],
    cast: ["Antonio Fagundes", "Giovanna Antonelli"],
    plot: "Um investigador tenta desvendar uma série de assassinatos na Europa.",
    imdb: { rating: 7.7, votes: 160000 },
    languages: ["Português", "Inglês", "Italiano"],
    countries: ["Brasil", "Itália"],
    directors: ["Bruno Barreto"],
    type: "movie"
  },
  {
    title: "A Resistência",
    year: 2024,
    runtime: 115,
    genres: ["Ficção Científica", "Ação"],
    cast: ["Sérgio Guizé", "Nathalia Dill"],
    plot: "Em um futuro distópico, rebeldes lutam contra uma ditadura tecnológica.",
    imdb: { rating: 7.5, votes: 140000 },
    languages: ["Português"],
    countries: ["Brasil"],
    directors: ["Daniel Rezende"],
    type: "movie"
  },
  {
    title: "Além das Fronteiras",
    year: 2023,
    runtime: 120,
    genres: ["Aventura", "Drama"],
    cast: ["Rodrigo Santoro", "Ana Beatriz Barros"],
    plot: "Um explorador se aventura por terras desconhecidas em busca de um tesouro perdido.",
    imdb: { rating: 7.9, votes: 190000 },
    languages: ["Português", "Inglês"],
    countries: ["Brasil", "Canadá"],
    directors: ["Fernando Meirelles"],
    type: "movie"
  },
  {
    title: "A Escolha do Herói",
    year: 2024,
    runtime: 128,
    genres: ["Fantasia", "Aventura"],
    cast: ["Chay Suede", "Bruna Marquezine"],
    plot: "Um jovem descobre ter poderes ancestrais e é escolhido para salvar seu reino.",
    imdb: { rating: 8.1, votes: 220000 },
    languages: ["Português", "Inglês"],
    countries: ["Brasil"],
    directors: ["Jayme Monjardim"],
    type: "movie"
  },
  {
    title: "No Limite do Silêncio",
    year: 2023,
    runtime: 117,
    genres: ["Suspense", "Crime"],
    cast: ["Cauã Reymond", "Taís Araújo"],
    plot: "Um agente federal investiga uma rede internacional de espionagem.",
    imdb: { rating: 7.6, votes: 165000 },
    languages: ["Português"],
    countries: ["Brasil", "Argentina"],
    directors: ["Mauro Mendonça Filho"],
    type: "movie"
  },
  {
    title: "Eclipse Mortal",
    year: 2024,
    runtime: 112,
    genres: ["Terror", "Suspense"],
    cast: ["Isis Valverde", "Lázaro Ramos"],
    plot: "Durante um eclipse total, eventos sobrenaturais começam a assombrar uma cidade.",
    imdb: { rating: 6.9, votes: 130000 },
    languages: ["Português"],
    countries: ["Brasil"],
    directors: ["Kátia Lund"],
    type: "movie"
  },
  {
    title: "O Código Proibido",
    year: 2023,
    runtime: 124,
    genres: ["Thriller", "Crime"],
    cast: ["Murilo Benício", "Leandra Leal"],
    plot: "Um hacker descobre um segredo governamental que pode mudar o mundo.",
    imdb: { rating: 7.5, votes: 155000 },
    languages: ["Português", "Inglês"],
    countries: ["Brasil", "Alemanha"],
    directors: ["José Eduardo Belmonte"],
    type: "movie"
  },
  {
    title: "Destinos Cruzados",
    year: 2024,
    runtime: 130,
    genres: ["Romance", "Drama"],
    cast: ["Rebecca Maia", "Felipe Simas"],
    plot: "Duas pessoas de mundos diferentes se encontram durante uma jornada transformadora.",
    imdb: { rating: 7.3, votes: 145000 },
    languages: ["Português"],
    countries: ["Brasil"],
    directors: ["Marcos Schechtman"],
    type: "movie"
  },
  {
    title: "A Lei dos Fortes",
    year: 2023,
    runtime: 120,
    genres: ["Ação", "Crime"],
    cast: ["Alexandre Nero", "Marcello Melo Jr."],
    plot: "Um policial enfrenta um cartel que domina as ruas da cidade.",
    imdb: { rating: 7.7, votes: 170000 },
    languages: ["Português"],
    countries: ["Brasil"],
    directors: ["André Pellenz"],
    type: "movie"
  },
  {
    title: "O Último Sobrevivente",
    year: 2024,
    runtime: 127,
    genres: ["Aventura", "Suspense"],
    cast: ["Fabio Assunção", "Débora Nascimento"],
    plot: "Após um naufrágio, um homem luta por sobrevivência em uma ilha deserta.",
    imdb: { rating: 7.8, votes: 185000 },
    languages: ["Português", "Inglês"],
    countries: ["Brasil", "Nova Zelândia"],
    directors: ["Carlos Cortez"],
    type: "movie"
  },
  {
    title: "O Guardião da Luz",
    year: 2023,
    runtime: 118,
    genres: ["Fantasia", "Ação"],
    cast: ["Malvino Salvador", "Sheron Menezzes"],
    plot: "Um antigo guerreiro é chamado para restaurar a ordem no mundo místico.",
    imdb: { rating: 8.0, votes: 200000 },
    languages: ["Português"],
    countries: ["Brasil"],
    directors: ["Julio Machado"],
    type: "movie"
  },
  {
    title: "A Queda do Império",
    year: 2024,
    runtime: 132,
    genres: ["Guerra", "Histórico"],
    cast: ["Tony Ramos", "Lília Cabral"],
    plot: "A história de um reino à beira do colapso por traições internas.",
    imdb: { rating: 7.9, votes: 195000 },
    languages: ["Português", "Latim"],
    countries: ["Brasil", "Itália"],
    directors: ["Paulo Morelli"],
    type: "movie"
  },
  {
    title: "O Legado Perdido",
    year: 2023,
    runtime: 126,
    genres: ["Aventura", "Mistério"],
    cast: ["Edward Burns", "Carla Diaz"],
    plot: "Uma equipe de arqueólogos procura por uma relíquia capaz de controlar o tempo.",
    imdb: { rating: 7.6, votes: 160000 },
    languages: ["Português", "Inglês"],
    countries: ["Brasil", "Estados Unidos"],
    directors: ["David Frankel"],
    type: "movie"
  },
  {
    title: "Sobrevivente Zero",
    year: 2024,
    runtime: 114,
    genres: ["Terror", "Suspense"],
    cast: ["Kiko Mascarenhas", "Letícia Spiller"],
    plot: "Um vírus mortal se espalha após um experimento científico falho.",
    imdb: { rating: 7.1, votes: 135000 },
    languages: ["Português"],
    countries: ["Brasil"],
    directors: ["Hugo Prata"],
    type: "movie"
  },
  {
    title: "O Jogo da Vida",
    year: 2023,
    runtime: 121,
    genres: ["Drama", "Esporte"],
    cast: ["Daniel de Oliveira", "Isabelle Drummond"],
    plot: "Um treinador reformula sua vida ao ajudar um time de futebol amador.",
    imdb: { rating: 7.4, votes: 150000 },
    languages: ["Português"],
    countries: ["Brasil"],
    directors: ["Marcus Baldini"],
    type: "movie"
  },
  {
    title: "A Profecia Antiga",
    year: 2024,
    runtime: 129,
    genres: ["Fantasia", "Ação"],
    cast: ["Matheus Nachtergaele", "Alice Wegmann"],
    plot: "Uma profecia ancestral revela o destino de um herói esquecido pelo tempo.",
    imdb: { rating: 8.1, votes: 225000 },
    languages: ["Português"],
    countries: ["Brasil"],
    directors: ["Laís Bodanzky"],
    type: "movie"
  },
  {
    title: "A Batalha Final",
    year: 2023,
    runtime: 135,
    genres: ["Ação", "Guerra"],
    cast: ["Jon Doe", "André Ramiro"],
    plot: "Soldados enfrentam uma invasão alienígena em uma batalha épica pela Terra.",
    imdb: { rating: 7.7, votes: 175000 },
    languages: ["Português", "Inglês"],
    countries: ["Brasil", "Japão"],
    directors: ["Daniel Filho"],
    type: "movie"
  },
  {
    title: "Caminhos do Destino",
    year: 2024,
    runtime: 122,
    genres: ["Drama", "Romance"],
    cast: ["Paolla Oliveira", "Rafael Cardoso"],
    plot: "Dois caminhos se cruzam em uma jornada emocional de redenção e amor.",
    imdb: { rating: 7.5, votes: 160000 },
    languages: ["Português"],
    countries: ["Brasil"],
    directors: ["Carlos Saldanha"],
    type: "movie"
  },
  {
    title: "O Enigma Cósmico",
    year: 2023,
    runtime: 119,
    genres: ["Ficção Científica", "Mistério"],
    cast: ["Bruno Gagliasso", "Fernanda Torres"],
    plot: "Um fenômeno cósmico revela segredos sobre a origem do universo.",
    imdb: { rating: 7.8, votes: 180000 },
    languages: ["Português", "Inglês"],
    countries: ["Brasil", "Canadá"],
    directors: ["Cláudio Torres"],
    type: "movie"
  },
  {
    title: "A Revolta dos Oprimidos",
    year: 2024,
    runtime: 125,
    genres: ["Drama", "Histórico"],
    cast: ["Seu Jorge", "Grazi Massafera"],
    plot: "A história real de uma revolta popular contra o regime opressor.",
    imdb: { rating: 7.9, votes: 190000 },
    languages: ["Português"],
    countries: ["Brasil"],
    directors: ["Anna Muylaert"],
    type: "movie"
  },
  {
    title: "Vida nas Estrelas",
    year: 2023,
    runtime: 130,
    genres: ["Ficção Científica", "Drama"],
    cast: ["Sophie Charlotte", "Marcos Palmeira"],
    plot: "Uma tripulação viaja pelo espaço em busca de um novo lar para a humanidade.",
    imdb: { rating: 7.6, votes: 165000 },
    languages: ["Português", "Inglês"],
    countries: ["Brasil", "Estados Unidos"],
    directors: ["André Klotzel"],
    type: "movie"
  },
  {
    title: "O Último Voo",
    year: 2024,
    runtime: 117,
    genres: ["Suspense", "Drama"],
    cast: ["Thiago Lacerda", "Vanessa Giácomo"],
    plot: "Um piloto deve pousar um avião em emergência após um acidente no céu.",
    imdb: { rating: 7.4, votes: 150000 },
    languages: ["Português"],
    countries: ["Brasil"],
    directors: ["Fábio Portillo"],
    type: "movie"
  },
  {
    title: "Herança Maldita",
    year: 2023,
    runtime: 112,
    genres: ["Terror", "Mistério"],
    cast: ["Ingrid Guimarães", "Bruno Gissoni"],
    plot: "Uma família herda uma casa antiga e descobre seus segredos sombrios.",
    imdb: { rating: 6.9, votes: 125000 },
    languages: ["Português"],
    countries: ["Brasil"],
    directors: ["Pablo Maia"],
    type: "movie"
  },
  {
    title: "O Guardião do Tempo",
    year: 2024,
    runtime: 128,
    genres: ["Ficção Científica", "Ação"],
    cast: ["Arthur Aguiar", "Juliana Paiva"],
    plot: "Um cientista descobre como parar o tempo e é caçado por quem quer o mesmo poder.",
    imdb: { rating: 7.7, votes: 170000 },
    languages: ["Português", "Inglês"],
    countries: ["Brasil", "Coréia do Sul"],
    directors: ["Pedro Amorim"],
    type: "movie"
  },
  {
    title: "A Última Missão",
    year: 2023,
    runtime: 120,
    genres: ["Ação", "Suspense"],
    cast: ["Rainer Cadete", "Luana Piovani"],
    plot: "Agentes secretos são enviados para impedir um ataque terrorista global.",
    imdb: { rating: 7.5, votes: 155000 },
    languages: ["Português", "Inglês"],
    countries: ["Brasil", "França"],
    directors: ["André Ristum"],
    type: "movie"
  },
  {
    title: "O Chamado das Sombras",
    year: 2024,
    runtime: 115,
    genres: ["Terror", "Suspense"],
    cast: ["Clarice Pinheiro", "Ricardo Pereira"],
    plot: "Uma força obscura começa a perseguir uma jovem após uma sessão espírita.",
    imdb: { rating: 7.0, votes: 130000 },
    languages: ["Português"],
    countries: ["Brasil"],
    directors: ["Gabriel Martins"],
    type: "movie"
  },
  {
    title: "A Hora da Verdade",
    year: 2023,
    runtime: 124,
    genres: ["Crime", "Drama"],
    cast: ["Luis Gustavo", "Paulo Vilhena"],
    plot: "Um juiz enfrenta dilemas morais ao julgar um caso complexo.",
    imdb: { rating: 7.6, votes: 160000 },
    languages: ["Português"],
    countries: ["Brasil"],
    directors: ["Monique Gardenberg"],
    type: "movie"
  }
])
```