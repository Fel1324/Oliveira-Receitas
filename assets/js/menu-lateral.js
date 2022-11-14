const botaoMenu = document.querySelector('.cabecalho__menu-lateral')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () =>{
    if(menu.classList.contains("menu-lateral--ativo")){
        document.body.style.overflow = "auto";
    }else{
        document.body.style.overflow = "hidden";
    }

    menu.classList.toggle('menu-lateral--ativo')
})
