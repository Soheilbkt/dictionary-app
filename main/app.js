let btnserach = document.querySelector(".btn-serach")
let inpSeach = document.querySelector(".input-serach")
let aduioword = document.querySelector('audio')
let btnplay = document.querySelector(".playbtn")
let wordserach = document.querySelector(".wordmain")
let wordspell = document.querySelector(".spell")
let detaliselm = document.querySelectorAll(".det")
let syn = document.querySelector(".syn")
let conainerdret = document.querySelector(".container-det")
let containerVerb = document.querySelector(".container-exmap")
let btn_modal = document.querySelector(".modal button")
let containermain = document.querySelector(".contain")
let modalman = document.querySelector(".modal")
let wikiurl = document.querySelector(".link-wiki")


// clcik for get api
btnserach.addEventListener("click",() =>{
                navigator.vibrate(900);
                conainerdret.innerHTML = ''
                containerVerb.innerHTML = ''

                let url = fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inpSeach.value}`)
                        .then(res => res.json()
                        ).then((res2) => {
        
        
                                let srcaudi = res2[0].phonetics[0].audio
                                        || res2[0].phonetics[1].audio || res2[0].phonetics[2].audio
                                        || res2[0].phonetics[3].audio || res2[0].phonetics[4].audio
                                        || res2[0].phonetics[5].audio || res2[0].phonetics[6].audio;
                           
                                audioUrl(srcaudi)
                                detalisverb(res2[0].meanings[1].definitions)
                                wordandspell(res2[0].phonetic, res2[0].word);
                                detalis(res2[0].meanings[0].definitions)
                                Urlwiki(res2[0].sourceUrls[0])
        
                           
        
        
                        }).catch(eror => alert("The word is wrong or the internet is broken ):"))
        
    
});

//
function audioUrl(url) {
        aduioword.src = url
}

function wordandspell(word1, word2) {
        wordspell.innerHTML = word1;
        wordserach.innerHTML = word2;
}
function detalis(data1) {

        data1.forEach(element => {
                conainerdret.insertAdjacentHTML("afterbegin", `
                <div class="flex m-3 ">
                <div class="w-2 h-2 bg-purple-500 rounded-full mr-3  "></div>
                <p class="w-full text-[12px] det detalis-text ">${element.definition}</p>
              </div>`)

        });

        syn.innerHTML = inpSeach.value

}
 function detalisverb(mainDAta) {
        mainDAta.forEach(item => {
                containerVerb.insertAdjacentHTML("afterend", `
                <p class="w-full text-[12px] text-gray-400 mt-2">${item.definition}</p>
                        `)
        })
}


btn_modal.addEventListener("click", () => {
        contain.classList.remove("blur-sm")

        modalman.parentElement.remove()


})
function Urlwiki(Url){
                wikiurl.href = Url
                wikiurl.innerHTML = Url
}