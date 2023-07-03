let arrayPhoto = [
    {
        id: 45,
        photo : "images/IMG_20230611_112732.jpg",
        title: 'Bográcsozás',
        description: 'Tati pörköltet főz az unokákkal',
    },
    {
        id: 267,
        photo : "images/20230602_180830.jpg",
        title: 'Levi ballagás',
        description: 'Levi ballag az oviból.',
    },
    {
        id: 334,
        photo : "images/IMG_20230514_145629.jpg",
        title: 'Bográcsozás',
        description: 'Marhapörkölt',
    },
    {
        id: 422,
        photo : "images/IMG_20230605_180153.jpg",
        title: 'Mami szülinap',
        description: 'Mami szülinap',
    },
    {
        id: 51,
        photo : "images/IMG_20230521_192454.jpg",
        title: 'Levi vezet',
        description: 'Levi vezet Zsuzsival',
    },
    {
        id: 60,
        photo : "images/IMG_20230602_192214.jpg",
        title: 'Levi ballagás',
        description: 'Vacsora a Jobb Mint Otthonban.',
    },
    { 
        id: 7,
        photo : "images/FB_IMG_1686638192493.jpg",
        title: 'Osztálykirándulás',
        description: 'Alíz Gárdonyban',
    }
    ];


$(document).ready(function () {
    arrayPhoto.forEach((element) => {
        $('.thumbnails').append(`<div class="title" data-number="${element.id}">${element.title}</div>`);

        $('.descriptions').append(`<div class="description" data-number="${element.id}"></div>`)

        $('.thumbnails').append(`<img class="thumbnail" data-description="${element.description}" data-number="${element.id}"  src="${element.photo}">`)

        //console.log(element.description);
    });

 
    let setImageClassById = (id) => {
        $('.thumbnail').removeClass('active')
        $('.thumbnails img[data-number=' + id +']').addClass('active')
    }

    let setDescriptionClassById = (id) => {
        $('.description').removeClass('active')
        $('.description[data-number=' + id +']').addClass('active')
      //  $('#photo .description[data-description=' + description +']').addClass('active')
      }


    // induláskor beállítjuk az elsőt aktívra; firstImage objektum!!!
    let firstImage = Object.values(arrayPhoto)[0]
        setImageClassById(firstImage.id)
        $('#photo').attr("src", firstImage.photo) //.css('position' , 'relative');

    let firstDescription = Object.values(arrayPhoto)[0]
        setDescriptionClassById(firstDescription.id)

        $('#dsc').text(`${firstDescription.description}`)


    // thumbnail click
    $('.thumbnail').on('click', function () {
        let imageScr = $(this).attr('src')
        let currentPhotoId = $(this).data('number')
        let currentDescription = $(this).data('description')
        setImageClassById(currentPhotoId)


        $('#photo').attr('src', imageScr)
        $('#dsc').text(`${currentDescription}`)
    })

    // arrow click
    $('.arrow').on('click', function () {
        let th = $('.thumbnail.active').data('number')
        let dc = $('.description.active').data('number')
        let currentIndex = arrayPhoto.findIndex(p => p.id == th || p.id == dc )
        if($(this).hasClass('left')) {
          currentIndex--
        } else if($(this).hasClass('right')) {
          currentIndex++
        } 
        console.log(currentIndex)

      currentIndex = currentIndex < 0 ? arrayPhoto.length -1 : currentIndex > arrayPhoto.length -1 ? 0 : currentIndex


      let photo = Object.values(arrayPhoto)[currentIndex]
        $('#photo').attr("src", arrayPhoto[currentIndex].photo);
        setImageClassById(photo.id)

      let description = Object.values(arrayPhoto)[currentIndex]
        $('#dsc').text(`${arrayPhoto[currentIndex].description}`)
        setDescriptionClassById(description.id)

    })

    //hovering over thumbnails
    $('.thumbnail').hover(function(){ 

        let currentId = $(this).data('number')   

        $('.thumbnails .title[data-number=' + currentId +']').css('display' , 'block') 
        console.log(currentId)  
        }, function(){
             $('.title').css('display' , 'none')
    })

})

