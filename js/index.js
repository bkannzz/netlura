// Script para alternar entre dark e light mode
// `document.getElementById` busca o botão de troca de tema pelo ID.
const themeToggle = document.getElementById('theme-toggle');
// `document.body` referencia o elemento <body> para aplicar classes CSS.
const body = document.body;

// Função para atualizar o ícone do botão
// `classList.contains` verifica se a classe `dark` está presente no body.
// `innerHTML` insere ícone emoji no botão do tema.
function updateButtonIcon() {
    if (body.classList.contains('dark')) {
        themeToggle.innerHTML = '🌙';
    } else {
        themeToggle.innerHTML = '☀️';
    }
}

// Verifica se há uma preferência salva no localStorage
// `localStorage.getItem('theme')` retorna 'dark', 'light' ou null.
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    body.classList.add(savedTheme); // adiciona a classe do tema no body
} else {
    // Padrão: dark
    body.classList.add('dark');
}
updateButtonIcon(); // Atualiza o ícone inicial

// Função para alternar o tema
themeToggle.addEventListener('click', () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark'); // remove classe escura
        body.classList.add('light'); // aplica classe clara
        localStorage.setItem('theme', 'light'); // guarda escolha
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
    }
    updateButtonIcon(); // Atualiza o ícone após alternar
});

// Salva perfil ativo usando localStorage ao clicar em um perfil
// `querySelectorAll('.profile')` retorna NodeList de links de perfil.
const perfilLinks = document.querySelectorAll('.profile');
perfilLinks.forEach((link) => {
    // adiciona evento de clique para cada perfil
    link.addEventListener('click', () => {
        const img = link.querySelector('img'); // pega imagem dentro do link
        const nome = link.querySelector('figcaption'); // pega nome do perfil

        if (img && nome) {
            // `localStorage.setItem` salva dados no armazenamento local do navegador
            localStorage.setItem('perfilAtivoNome', nome.textContent.trim());
            localStorage.setItem('perfilAtivoImagem', img.src);
        }
    });
});