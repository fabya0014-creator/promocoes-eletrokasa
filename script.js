/* ===========================
   SPLASH SCREEN
=========================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        const splash = document.getElementById("splash");

        splash.style.display = "none";

    }, 2200);

});


/* ===========================
   PESQUISA
=========================== */

const pesquisa = document.querySelector(".pesquisa input");

pesquisa.addEventListener("keyup", function(){

    let texto = pesquisa.value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card=>{

        let nome = card.querySelector("h3").innerText.toLowerCase();

        if(nome.indexOf(texto)>-1){

            card.style.display="block";

        }else{

            card.style.display="none";

        }

    });

});


/* ===========================
   BOTÕES FAVORITOS
=========================== */

document.querySelectorAll(".favorito").forEach(botao=>{

    botao.addEventListener("click",()=>{

        botao.classList.toggle("ativo");

    });

});


/* ===========================
   ANIMAÇÃO DOS CARDS
=========================== */

const cards = document.querySelectorAll(".card");

const aparecer = new IntersectionObserver((itens)=>{

    itens.forEach(item=>{

        if(item.isIntersecting){

            item.target.classList.add("mostrar");

        }

    });

});

cards.forEach(card=>{

    aparecer.observe(card);

});


/* ===========================
   MENU INFERIOR
=========================== */

const menus=document.querySelectorAll("nav button");

menus.forEach(botao=>{

    botao.addEventListener("click",()=>{

        menus.forEach(item=>{

            item.classList.remove("ativo");

        });

        botao.classList.add("ativo");

    });

});


/* ===========================
   BOTÃO VOLTAR AO TOPO
=========================== */

const voltar=document.createElement("div");

voltar.innerHTML="⬆";

voltar.className="topo";

document.body.appendChild(voltar);

voltar.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

}

window.addEventListener("scroll",()=>{

if(window.scrollY>350){

voltar.style.display="flex";

}else{

voltar.style.display="none";

}

});