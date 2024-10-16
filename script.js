let projetos = [
    {
        nome: 'Site da shopify',
        imagem: 'adds/projeto2.png',
        link: 'https://willian2802.github.io/site-shopify/',
        resumo: ""
    },
    {
        nome: 'Sistema de login e logs',
        imagem: 'adds/Login.png',
        link: 'https://github.com/willian2802/projeto-IEFP',
        resumo: 'O sistema de login e logs é um projeto que visa criar um sistema de autenticação de usuários e registro de logs de atividades, utilizando o banco de dados MongoDB.'
    },
    {
        nome: 'Sistema anti-scrapping',
        imagem: 'adds/anti_scraping.png',
        link: 'https://github.com/willian2802/anti_scraping',
        resumo: ""
    },
    {
        nome: 'Reproduçao do site da shopify',
        imagem: 'adds/projeto2.png',
        link: 'https://willian2802.github.io/site-shopify/',
        resumo: ""
    },
]

const projetosContainer = document.getElementById('projetos');

projetos.forEach(element => {
    projetosContainer.innerHTML += `
    <div class="col-md">
        <div class="projeto card" style="background-color: rgb(77, 167, 160);">
            <div class="m-2 card-title"><h2>${element.nome}</h2></div>
            <div class="card-body"><p>${element.resumo}</p>
                <button type="button" class="btn btn-dark"> <a style="text-decoration: none;" href="${element.link}">Veja o projeto</a></button>
            </div>
        </div>
    </div>
    `
});