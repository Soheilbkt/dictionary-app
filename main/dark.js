let btntoglethem = document.querySelector(".togale")
let contain = document.querySelector(".contain")


btntoglethem.addEventListener("click", dark_Mode)
function dark_Mode(){

    btntoglethem.classList.toggle("justify-end")
    if (btntoglethem.classList.contains("justify-end")) {
        localStorage.setItem("dark","justify-end")

        contain.classList.add("bg-[#050505]");
        document.body.classList.add("bg-[#050505]")
        headertehme()
        serachbartheme()
        articletheme()
        footertheme()
   

    }
    else {
        localStorage.removeItem("dark")
        contain.classList.remove("bg-[#050505]");
        document.body.classList.remove("bg-[#050505]")

        headertehme()();
        serachbartheme()();
        articletheme()()
        footertheme()()
   
    }

}
   



function headertehme() {
    let fontselce = document.querySelector(".da")
    let img_dark = document.querySelector(".img-dark")
    fontselce.classList.add("text-white")
    btntoglethem.classList.add("bg-purple-500")
    img_dark.src = "icon/icons8-darkpng.png"

    return function removeclaa() {
        return btntoglethem.classList.remove("bg-purple-500"),
            fontselce.classList.remove("text-white")

    }

}

function serachbartheme() {
    let inputSerach = document.querySelector(".input-se")
    let wordmain = document.querySelector(".wordmain")

    inputSerach.classList.add("bg-[#1f1f1f]");
    inputSerach.classList.add("text-white")
    wordmain.classList.add("text-white")

    return function () {
            inputSerach.classList.remove("bg-[#1f1f1f]"),
            inputSerach.classList.remove("text-white"),
            wordmain.classList.remove("text-white")
    }
}


function articletheme(){
    let wordhead = document.querySelectorAll(".head-tex")

    
    wordhead[0].classList.add("text-white")
    wordhead[1].classList.add("text-white")
    ForeachElmes()

    return function(){
        wordhead[0].classList.remove("text-white"),
        wordhead[1].classList.remove("text-white"),
        ForeachElmes()()

    }

}









function ForeachElmes(){
    let detalis_text = document.querySelectorAll(".detalis-text")
    let title_text = document.querySelectorAll(".title-text")
    let lines = document.querySelectorAll(".line")

    lines.forEach(item =>{
        item.classList.add("bg-[#1f1f1f94]")
    })

           detalis_text.forEach(element => {
        element.classList.add("text-white")
    });
           title_text.forEach(element => {
        element.classList.add("text-white")
    });
    
        return function(){
                 detalis_text.forEach(element => {
                element.classList.remove("text-white")
            }),
                   title_text.forEach(element => {
                element.classList.remove("text-white")
            }),
            
                    lines.forEach(item =>{
                item.classList.remove("bg-[#1f1f1f94]")
            })
        }
   
}

function footertheme(){
    let linkWiki = document.querySelector(".underline")

    linkWiki.classList.add("text-white")
    
    return () =>{
        linkWiki.classList.remove("text-white")
    }
}



  