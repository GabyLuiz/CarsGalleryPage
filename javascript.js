let listaCoches = [
    {
        "nome": "PONTIAC GTO",
        "img": "img/PONTIAC.JPG",
        "descrição": "Fabricado pela General Motors ao longo de 4 gerações, de 1963 a 1974. O GTO estava no segmento dos Muscle Cars, iniciando essa tendência no mercado norte americano."
    },
    {
        "nome": "PORSCHE 356 B T-5 ROADSTER",
        "img": "img/PORSCHE.JPG",
        "descrição": "Este 356 Roadster desenhado pelo famoso estúdio Bauhaus na Alemanha chegou no mercado ostentando beleza e esportividade."
    },
    {
        "nome": "CADILLAC ELDORADO",
        "img": "img/CADILLAC.png",
        "descrição": "Eldorado, um dos modelos mais famosos da Marca... o 54 é mais especial ainda, pois a Cadillac introduziu neste ano uma carroceria completamente nova, mais larga, mais baixa e mais longa."
    },
    {
        "nome": "MERCEDES-BENZ 190 SL",
        "img": "img/MERCEDESBENZ.JPG",
        "descrição": "Em valorização no mercado mundial, a 190 SL é um ícone da indústria alemã. Charmosa, rara e muito prazerosa ao dirigir."
    },
    {
        "nome": "JEEP WILLYS CJ-5 4X4",
        "img": "img/JEEPWILLYS.JPG",
        "descrição": "Nunca restaurado, somente repintado na linda cor marrom com interior original de fábrica."
    },
    {
        "nome": "KARMANN GHIA",
        "img": "img/KARMANN.JPG",
        "descrição": "O Karmann-Ghia é um automóvel esportivo produzido pela Volkswagen, projetado pela empresa italiana Carrozzeria Ghia, e construído pela empresa alemã Karmann."
    }
]
//Esse trecho busca no array as info e cria os cards
listaCoches.map((coche, posicao)=>{
    let cardCoche = document.getElementById("cards");
    cardCoche.innerHTML += `
        <div class="col-md-4">
            <div class="card m-2">
                <img src="${coche.img}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${coche.nome}</h5>
                    <a href="#" class="btn btn-secondary" onclick="zoomimg(${posicao})"><i class="bi bi-zoom-in"></i></a>
                </div>
            </div>
        </div>
    `
})
//A função identifica e adiciona os dados do carro no Modal
function zoomimg(posicao){
    let cocheSelecionado = listaCoches[posicao];
    document.getElementById("nomeCoche").innerHTML = cocheSelecionado.nome;
    document.getElementById("descCoche").innerHTML = cocheSelecionado.descrição;
    document.getElementById("imgmodal").src = cocheSelecionado.img;

    //Usar # porque é um ID
    //Recurso necessário do Bootstrap para acionar o Modal
    new bootstrap.Modal("#zoomimg").show();
}
//Essa função muda o tema do site
function alterartema(){
    let tema = document.querySelector("html").getAttribute("data-bs-theme");
    if(tema === "dark"){
        document.querySelector("html").setAttribute("data-bs-theme", "light");
        document.querySelector("#alterartema").innerHTML = `<i class="bi bi-moon-stars-fill"></i>`
    } else {
        document.querySelector("html").setAttribute("data-bs-theme", "dark");
        document.querySelector("#alterartema").innerHTML = `<i class="bi bi-brightness-high-fill"></i>`
    }
}