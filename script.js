let projetos = [
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
        resumo: "Um sistema de segurança para proteger aplicações web contra acessos maliciosos como web scraping, requisições excessivas(DDoS), e outras atividades maliciosas. O sistema realiza uma série de verificações em cada requisição, identificando possíveis ameaças e tomando medidas preventivas para garantir a segurança da aplicação, bloqueio de IPs de acordo com  listas armazenadas no MongoDB, armazenamento das requisições em forma de logs banco de dados para futuras auditorias, entre outros sistemas de segurança."
    },
    {
        nome: 'Cardapio de restaurantes responsivo',
        imagem: 'adds/projeto.3-app-cardapio.png',
        link: 'https://willian2802.github.io/app-cardapio/',
        resumo: "Um cardapio de restaurantes responsivo feito com html, css e javascript, mudando apenas uma lista com os pratos do cardapio, os pratos sao renderizados na sua categoria especifica."
    },
    {
        nome: 'Site de cabeleireiro',
        imagem: 'adds/projeto.1.png',
        link: 'https://willian2802.github.io/site-cabeleireiro/',
        resumo: "Um site de cabeleireiro responsivo feito com html, css e bootstrap."
    },
    {
        nome: 'Reproduçao do site da shopify',
        imagem: 'adds/projeto2.png',
        link: 'https://willian2802.github.io/site-shopify/',
        resumo: "Uma reproduçao do site da shopify ele e responsivo feito utilizando css, html, javascript e bootstrap esse foi um desafio proposto pela frontendpractice nesse projeto melhorei no meu uso do bootstrap aprendi a fazer um dark-mode button e melhorei meu css principalmente na parte do posicionamento dos elementos."
    }
]

// area dos projetos e a funçao para gerar os projetos na pagina
const projetosContainer = document.getElementById('projetos');

projetos.forEach(element => {
    projetosContainer.innerHTML += `
    
    <div class="row m-5">

        <div class="col-md">
            <div class="projeto card bg-dark">
                <div class="card-body">
                    <div class="card-title"><h2> <span class="text-warning">${element.nome}</span></h2></div>
                    <div class="card-img"><img class="img-fluid" src="${element.imagem}" alt=""></div>
                </div>
            </div>
        </div>

        <div class="col-md">
            <div class="projeto card" style="background-color: rgb(77, 167, 160);">
                <div class="m-2 card-title"><h2> ${element.nome}</h2></div>
                    <div class="card-body"><p>${element.resumo}</p>
                        <button type="button" class="btn btn-dark"> <a style="text-decoration: none;" href="${element.link}">Veja o projeto</a></button>
                    </div>
            </div>
        </div>

    </div>
    `
});