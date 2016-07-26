"use strict";

var head, //".accordion > h3"
	content; //".accordion > div"

//при клике по заголовку...
$(".accordion > h3").click(function () {

	//Перебрать элементы массива (h3)
	$(".accordion > h3").each(function (index) {
		let elem = $(this);

		//Проверить, есть ли уже растрытые блоки. Если есть - закрыть.
		if (elem.attr("class") === "opened") {
			elem.removeClass("opened");
			elem.next("div").animate({
				height: 0
			}, 500);
		}
	});

	head = $(this);
	content = $(this).next("div");

	//Добавить заголовку раскрываемого блока класс "opened"
	head.addClass("opened");

	//Высчитать высоту раскрываемого блока
	var thisHeight = 0;
	content.children().each(function () {
		thisHeight += $(this).height();
	});

	//Плавно раскрыть блок
	content.animate({
		height: thisHeight + 50

	}, 500);

	//Прокрутить страницу до раскрытого заголовка
	//это нужно, чтобы контент не уплывал вверх, особенно на маленьких экранах и при большом объеме контента
	setTimeout(function () {
		$("html, body").animate({
			scrollTop: head.offset().top
		}, 500);
	}, 500);

});