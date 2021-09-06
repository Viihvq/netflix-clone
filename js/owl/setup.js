$('.owl-carousel').owlCarousel({
    loop:true, //true: fica literalmente em looping, não tem um fim. False: chega ao fim.
    margin:10, //é a margem entre as divs
    nav:true, // é a < >
    responsive:{
        0:{ //No caso entre 0px e 599px vai aparecer 1 poster
            items:1
        },
        600:{ //se tiver 600px pra mais vão aparecer 3 posters
            items:3
        },
        1000:{ //quando a tela tiver 100px, fica até 5 posters
            items:5
        }
    }
})