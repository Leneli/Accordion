"use strict";

var head, //".accordion > h3"
	content, //".accordion > div"
	animateTime = 500;

//при клике по заголовку...
$(".accordion > h3").click(function () {

	head = $(this);
	content = $(this).next("div");

	//Перебрать элементы массива (все h3)
	$(".accordion > h3").each(function (index) {
		let elem = $(this);

		//Проверить, есть ли уже растрытые блоки. Если есть - закрыть.
		if (elem.attr("class") === "opened") {
			elem.removeClass("opened");
			elem.next("div").stop().animate({
				height: '0'
			}, animateTime);
		}
	});

	//Добавить заголовку раскрываемого блока класс "opened"
	head.addClass("opened");

	//Плавно раскрыть блок с контентом
	autoHeightAnimate(content, animateTime);

	//Прокрутить страницу до раскрытого заголовка
	//это нужно, чтобы контент не уплывал вверх, особенно на маленьких экранах и при большом объеме контента
	setTimeout(function () {
		$("html, body").animate({
			scrollTop: head.offset().top
		}, animateTime);
	}, animateTime);

	/*****/
	/* Функция для - animate height: auto */
	function autoHeightAnimate(element, time) {
		var curHeight = element.height(), // Получить высоту по умолчанию
			autoHeight = element.css('height', 'auto').height(); // Сделать высоту auto

		element.height(curHeight); //Переустановить высоту
		element.stop().animate({
			height: autoHeight
		}, time);
	}

});