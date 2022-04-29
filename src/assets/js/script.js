// alert("Boa noite, o java script esta funcionando!")
console.log("Mensagem enviada pelo console")

//JQUERY
$(document).ready(function(){
    let slideAtual = 1;
    let listaSlides = ["img-1", "img-2", "img-3"]
    
    setInterval(mudarSlide, 3000)

    function mudarSlide(){
        // Remove o slide anterior
        
        if(slideAtual >0){
            $("#carousel").removeClass(listaSlides[slideAtual -1])
        } else if (slideAtual ==0){
            $("#carousel").removeClass(listaSlides[(listaSlides.length) - 1]) 
        }
        // Adiciona o slide atual
        $("#carousel").addClass(listaSlides[slideAtual]);

        // Indica o slide atual
        slideAtual++

        if(slideAtual > (listaSlides.length)-1){
            slideAtual = 0;
        }

    }
    
    $("#menubar").click(function(){       
        $("#menu").toggleClass("menu-ativo");
    })
})

//JAVASCRIPT
function mostrarMenu() {
    let menu = document.getElementById("menu");
    if (getComputedStyle(menu).display == "none") {
        menu.style.display = "flex"
    } else {
        menu.style.display = "none"
    }
}

function cadastrarNewsLetter(){
    let email = document.getElementById("campo-email").value
    alert(email + " cadastrado com sucesso")
    console.log(email)
}