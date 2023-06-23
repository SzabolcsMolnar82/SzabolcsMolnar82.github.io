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
        title: 'Osztálykirándulás',
        description: 'Alíz Gárdonyban',
    },
    {
        id: 334,
        photo : "images/IMG_20230514_145629.jpg",
        title: 'Bográcsozás Janinál',
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
        $('.thumbnails').append(`<img class="thumbnail" data-number="${element.id}" src="${element.photo}">`);
    });

    let setImageClassById = (id) => {
      $('.thumbnail').removeClass('active')
      $('.thumbnails img[data-number=' + id +']').addClass('active')
    }

    // induláskor beállítjuk az elsőt aktívra
    let firstImage = Object.values(arrayPhoto)[0]
    setImageClassById(firstImage.id)
    $('#photo').attr("src", firstImage.photo);

    // thumbnail click
    $('.thumbnail').on('click', function () {
      let imageScr = $(this).attr('src')
      currentPhotoId = $(this).data('number')
      setImageClassById(currentPhotoId)
      $('#photo').attr('src', imageScr)     
    })

    // arrow click
    $('.arrow').on('click', function () {
      let th = $('.thumbnail.active').data('number')
      let currentIndex = arrayPhoto.findIndex(p => p.id == th)
      if($(this).hasClass('left')) {
        currentIndex--
      } else if($(this).hasClass('right')) {
        currentIndex++
      } 
      currentIndex = currentIndex < 0 ? arrayPhoto.length -1 : currentIndex > arrayPhoto.length -1 ? 0 : currentIndex
      let photo = Object.values(arrayPhoto)[currentIndex]
      $('#photo').attr("src", arrayPhoto[currentIndex].photo);;
      setImageClassById(photo.id)
    })
})
