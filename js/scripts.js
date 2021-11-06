$('.reviews__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500000,
    centerMode: true,
    centerPadding: '24.6%',
    responsive: [
        {
          breakpoint: 1800,
          settings: {
            slidesToShow: 1,
            centerPadding: '25%'
          }
        },
        {
          breakpoint: 1441,
          settings: {
            slidesToShow: 1,
            centerPadding: '25%'
          }
        },
        {
          breakpoint: 770,
          settings: {
            slidesToShow: 1,
            centerPadding: '5%'
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '1%',
            slidesToShow: 1
          }
        }
      ]
});

//isotope grid
// disabled links
let links = document.querySelectorAll('.filter-btn');
let grid = document.querySelector('.grid');
let iso = new Isotope( grid, {
  itemSelector: '.grid-item',
  layoutMode: 'fitRows',
  masonry: {
    columnWidth: 200
  }
});
// Работаем с кнопками фильтров
let filterBtn = document.querySelectorAll('.filter-btn');
for (let i = 0; i < filterBtn.length; i++) {
  // Если кликнули по ссылке
  filterBtn[i].onclick = function (click) {
      // Отменяем переход
      click.preventDefault();
      // Получаем значение дата-атрибута кнопки
      let filterData = event.target.getAttribute('data-filter');
      // Применяем фильтрацию элементов в Isotope
      iso.arrange({
          filter: filterData
      });
  };
}


//hamburger
var hamburger = document.querySelector(".hamburger");
var page = document.querySelector("#page");

// hamburger.addEventListener("click", function() {
//   this.classList.add("is-active");
// });




// page.addEventListener("click", function() {
//   if ( hamburger.classList.contains("is-active") ) {
//     hamburger.classList.remove("is-active");
//   }
// });




//mmenu
var topMenu = $('.menu').html(); //.menu - это класс меню которое отдаёт нам сервер на живом сайте, то что видно на desktop-варианте сайта
topMenu = topMenu.replace(/class="[^"]*"/gi, "").replace(/style="[^"]*"/gi, "").replace(/id="[^"]*"/gi, ""); //Зачищаем всякую хрень	
$('nav#menu').html('<ul>'+topMenu+'</ul>');
	
//Запускаем mmenu
// $('nav#menu').mmenu({
// 	extensions: ["effect-menu-slide", "effect-listitems-slide"],
// 	navbars     : [{
// 		height  : 3,
// 		title   : 'Меню',
// 		content : ['']
// 	}, true],
// 	counters: true,
// 	dividers: {
// 		fixed 	: true
// 	},
// });
$('nav#menu').mmenu({
	extensions: [ "theme-black", "position-right"],
	counters: true,
	dividers: {
		fixed: true
	},
	navbar: {
		title: 'TehnoTon'
	},
	navbars: [{
		position: 'top'
	}]
});










