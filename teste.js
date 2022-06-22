function exibeFilmes(){
   
    let divTela = document.getElementById('movies')
    let a = '';

    let dados =  JSON.parse (this.responseText);

    for(i=0; i<dados.results.length; i++) {

        let filme = dados.results[i];

        a = a + `
        <div class="dinamicList">
        <img src="${filme.poster_path}" alt ="">
        <span class = "titulo">${filme.original_title}</span><br>
        <span class = "sinopse">${filme.overview}</span><br>
        <span class = "vote">${filme.vote_average}/10</span><br>
        <span class = "lancamento">${filme.release_date}</span><br>
        <a>${a}</a>
        </div>
        `;
    }
    divTela.innerHTML = texto;
}



function execPesquisa(){
    let query = document.getElementById('txtPesquisa').value;

    const API_KEY = '1bf78924e0ea5628ed25d5afffb4b230';

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeFilmes;
    xhr.open('GET', `https://api.themoviedb.org/3/movie/popular?q=api_key=${API_KEY}&language=en-US&page=1`)
    xhr.send(); 

}
exibeFilmes();
document.getElementById ('btnPesquisa').addEventListener ('click', execPesquisa);   




