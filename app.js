const API_KEY = "1bf78924e0ea5628ed25d5afffb4b230";

const baseUrl = "https://api.themoviedb.org/3";

async function exibeFilmes(){
   console.log('aaaaa')
    let divTela = document.getElementById('movies')
    let texto = "";
    console.log(divTela);
    let dados =  await execPesquisa();
    //let dados =  JSON.parse (this.responseText);
   
    for(i=0; i<dados.results.length; i++) {
        let filme = dados.results[i];

        texto = texto + `<div class="dinamicList">
        <img src = "https://image.tmdb.org/t/p/original/${filme.poster_path}" alt ="">
        <span class = "titulo">${filme.title}</span><br>
        <span class = "sinopse">${filme.overview}</span><br>
        <span class = "vote">${filme.vote_average}/10</span><br>
        <span class = "lancamento">${filme.release_date}</span>
        </div>  
        `;
    };
    divTela.innerHTML = texto;
}



async function execPesquisa(){
    
    let query = document.querySelector("#txtPesquisa");
    console.log(query)
    let texto = "";
    let divTela = document.getElementById('movies')
    let dados = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`)
    .then(responde=>responde.json())
    .then(data=> data);
    console.log(dados)
    for(i=0; i<dados.results.length; i++) {
        let filme = dados.results[i];

        texto = texto + `<div class="dinamicList">
        <img src = "https://image.tmdb.org/t/p/original/${filme.poster_path}" alt ="">
        <span class = "titulo">${filme.title}</span><br>
        <span class = "sinopse">${filme.overview}</span><br>
        <span class = "vote">${filme.vote_average}/10</span><br>
        <span class = "lancamento">${filme.release_date}</span>
        </div>  
        `;
    };

    divTela.innerHTML = texto;

    return dados;
}

exibeFilmes();
document.getElementById ('btnPesquisa').addEventListener ('click', execPesquisa);   




