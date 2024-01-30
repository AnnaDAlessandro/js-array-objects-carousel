const slides = [
    {
         image: '01.webp',
            title: 'Marvel\'s Spiderman Miles Morale',
            text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
        }, {
            image: '02.webp',
            title: 'Ratchet & Clank: Rift Apart',
            text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
        }, {
            image: '03.webp',
            title: 'Fortnite',
            text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
        }, {
            image: '04.webp',
            title: 'Stray',
            text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
        }, {
            image: '05.webp',
            title: "Marvel's Avengers",
            text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
        }
    ];

    let immaginePrincipale= document.querySelector(`#carosello figure`)
    const lateraleImg= document.querySelector('#carosello #laterale')
    const frecciaSu =document.querySelector(`.fa-chevron-up`)
    const frecciaGiu =document.querySelector('.fa-chevron-down')
    let posizioneImmagine = 0

    immaginePrincipale.innerHTML =`
     <img src='./${slides[posizioneImmagine].image}' alt="">
     <div>
     <h2>${slides[posizioneImmagine].title}</h2>
     <p>${slides[posizioneImmagine].text}</p>
     </div>
    
    `
    slides.forEach((element,index) => {
        const divLaterale= document.createElement(`div`)
        divLaterale.className = `col`

        const figureLaterale= document.createElement(`figure`)
        
        const imgLaterale = new Image ()
        imgLaterale.src = `./${element.image}`

        divLaterale.append(figureLaterale)
        figureLaterale.append(imgLaterale)

        lateraleImg.append(divLaterale)
    })

    frecciaSu.addEventListener(`click`, function(){
        const immaginePrincipaleH2 = immaginePrincipale.querySelector(`h2`)
        const immaginePrincipaleP = immaginePrincipale.querySelector('p')
        const immaginePrincipaleImg = immaginePrincipale.querySelector(`img`)

        if(posizioneImmagine === 0){
            posizioneImmagine = slides.length - 1
            immaginePrincipaleImg.src= `./${slides[posizioneImmagine].image}`
            immaginePrincipaleH2.innerHTML = slides [posizioneImmagine].title
            immaginePrincipaleP.innerHTML = slides [posizioneImmagine].text
        }else{
            posizioneImmagine--
            immaginePrincipaleImg.src= `./${slides[posizioneImmagine].image}`
            immaginePrincipaleH2.innerHTML = slides [posizioneImmagine].title
            immaginePrincipaleP.innerHTML = slides [posizioneImmagine].text
        }
    })

    frecciaGiu.addEventListener(`click`, function(){
        const immaginePrincipaleH2 = immaginePrincipale.querySelector(`h2`)
        const immaginePrincipaleP = immaginePrincipale.querySelector('p')
        const immaginePrincipaleImg = immaginePrincipale.querySelector(`img`)

        if(posizioneImmagine === slides.length - 1){
            posizioneImmagine = 0
            immaginePrincipaleImg.src= `./${slides[posizioneImmagine].image}`
            immaginePrincipaleH2.innerHTML = slides [posizioneImmagine].title
            immaginePrincipaleP.innerHTML = slides [posizioneImmagine].text
        }else{
            posizioneImmagine++
            immaginePrincipaleImg.src= `./${slides[posizioneImmagine].image}`
            immaginePrincipaleH2.innerHTML = slides [posizioneImmagine].title
            immaginePrincipaleP.innerHTML = slides [posizioneImmagine].text
        }
    })