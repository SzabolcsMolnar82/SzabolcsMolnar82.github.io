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

 
//Az arrayPhoto minden egyes elemén végig megyünk az element paraméterrel, majd a thumbnails osztály alá felrajzoljuk az összes img tagot thumbnail classal valamint a data-number attribútumot, melynek átadjuk az element.id integert-t valamint hozzáadjuk az src attribútumot aminek átadjuk az element.photo sztringet.
    
    let setImageClassById = (id) => {
        $('.thumbnail').removeClass('active')
        $('.thumbnails img[data-number=' + id +']').addClass('active')
    }

    let setDescriptionClassById = (id) => {
        $('.description').removeClass('active')
        $('.description[data-number=' + id +']').addClass('active')
      //  $('#photo .description[data-description=' + description +']').addClass('active')
      }

//Bevetzetünk egy setImageClassById függvényt aminek az id paramétert adjuk át. A thumbnail osztály eleméről levesszük az active osztályt. A thumbnails osztály img tagjának data-number attribútumát beállítjuk az id paraméter alapján, majd hozzáadjuk az active osztályt.
    // induláskor beállítjuk az elsőt aktívra; firstImage objektum!!!
    let firstImage = Object.values(arrayPhoto)[0]
        setImageClassById(firstImage.id)
        $('#photo').attr("src", firstImage.photo) //.css('position' , 'relative');

    let firstDescription = Object.values(arrayPhoto)[0]
        setDescriptionClassById(firstDescription.id)

        $('#dsc').text(`${firstDescription.description}`)
   /* 
    let firstDescription = Object.values(arrayPhoto)[0]
    setDescriptionClassById(firstDescription.description)
    $('#photo').append('data-description', firstDescription.description).css({'height' : '100px' , 'position' : 'absolute'})
    console.log(firstDescription.description)
    */
//Bevezetünk egy firstImage objektumot, ami lényegében a arrayPhoto tömb első eleme. A setImageClassById függvénynek átadjuk a firstImage objektumot melyre pedig mehívjuk a  id propertit. A photo idvel rendelkező tagnak pegig beállítunk egy src attribútumot amely a firstImage objektum photo értékét adja meg, ami egy string. 


    // thumbnail click
    $('.thumbnail').on('click', function () {
        let imageScr = $(this).attr('src')
        let currentPhotoId = $(this).data('number')
        let currentDescription = $(this).data('description')
        setImageClassById(currentPhotoId)
        //setDescriptionClassById(currentDescription)   
        //console.log(currentDescription)


        $('#photo').attr('src', imageScr)
        $('#dsc').text(`${currentDescription}`)
        //.append(`<div class="description">${currentDescription}</div>`)    
    })
    
//Az adott thumbnailre történő kattintáshoz bevezetünk egy függvényt. Megadunk egy imageScr változót amihez hozzárendeljük a rákattintott thumbnail class src attribútumát. Bevezetünk egy currentPhotId változót, amihez hozzárendeljük a kattintott thumbnail data attribútumát, aminek megadjuk a 'number' attributum részét. A setImageClassByIdnek átadjuk a currentPhotoId-t. Majd a photo idvel rendelkező taghoz hozzáadjuk az src attributumot melynek megadjuk az imageScr stringet értéknek. 

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

//Nyilak kattintása függvény. Bevezetünk egy th (int) változót, amihez hozzárendeljük a thumbnail active osztályra megíhvott data attributumot aminek megadjuk a number részét. Ami egy int. Bevezetünk egy currentIndex változót (int), ehhez hozzárendeljük azt az értéket amit úgy kapunk, hogy az arrayPhoto ra meghívjuk a findIndex() metódust aminek átadjuk ezt : a paraméterre meghívott id egyenlő a th változóval.

      //currentIndex =  7;

      currentIndex = currentIndex < 0 ? arrayPhoto.length -1 : currentIndex > arrayPhoto.length -1 ? 0 : currentIndex

      //Ha currenIndex kisebb mint 0 (-1)  akkor arrayPhoto.length-1 et ad meg ami (6), ha viszont a currentIndex nagyobb mint arrayPhoto.length-1 azaz (7) akkor (0) lesz a currentIndex.

      //console.log(currentIndex)
      //console.log(arrayPhoto.length)

      let photo = Object.values(arrayPhoto)[currentIndex]
        $('#photo').attr("src", arrayPhoto[currentIndex].photo);
        setImageClassById(photo.id)

      let description = Object.values(arrayPhoto)[currentIndex]
        $('#dsc').text(`${arrayPhoto[currentIndex].description}`)
        //$('#dsc').attr('src' , arrayPhoto[currentIndex].description)
        setDescriptionClassById(description.id)

      /*
      let descriptionObject = Object.values(arrayPhoto)[currentIndex]
      $('.mainImage').attr("src", arrayPhoto[currentIndex].descriptionObject);
      setImageClassById(descriptionObject.id)
      */

      //Létrehozunk egy photo objektumot az arrayPhoto aktuális indexével ami egy int.
      //A photo idjű html ra meghívjuk az attr funkciót ami hozzácsatol egy src attribútumot aminek az értéke az arrayPhoto nak átadott index értékű photo property. Majd a setImageClassById funkciónak átadjuk a photo objektumot amire meghívjuk annak idjét
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

