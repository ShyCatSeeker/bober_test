$(document).ready(function(){

  //Сам слайдер и его настройки
  $('.slider-container').slick({

  	prevArrow: '<button type="button" class="slick-prev"> <image src="../images/task_2/prev_arrow.png" class="arrow-img"> </button>', 
  	nextArrow: '<button type="button" class="slick-next"> <image src="../images/task_2/next_arrow.png" class="arrow-img"> </button>',
    accesability: true,
    adaptiveHeight: true,
    speed: 800,
    infinite: false

  });


  //Прячу стрелки при переключении слайдов

  //Обработкик клина по стрелке на следующий слайд
  $('.slick-next').click(function()
  {

  	var slideIndex = $('.slider-container').slick('slickCurrentSlide'); //Получаю индекс текущего слайда

  	if (slideIndex == 1) //Если второй слайд, показываю стрелку "Назад"
  	{
  		$('.slick-prev').css('visibility','visible');
  	}
  	else if (slideIndex == 2) //Если третий слайд, прячу стрелку "Вперед"
  	{
  		$('.slick-next').css('visibility','hidden');
  	}

  });

  //Стрелка на прошлый слайд
  $('.slick-prev').click(function()
  {

  	var slideIndex = $('.slider-container').slick('slickCurrentSlide');

  	if (slideIndex == 1)  //Если второй слайд, показываю стрелку "Вперед"
  	{
  		$('.slick-next').css('visibility','visible');
  	}
  	else if (slideIndex == 0)  //Если первый слайд, прячу стрелку "Назад"
  	{
  		$('.slick-prev').css('visibility','hidden');
  	}

  });

});