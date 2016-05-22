// настройка скрипта CallMe 2.3
// dedushka.org // nazarTokar.com // qbx.me // 
// mail : a@dedushka.org
// updated on 2015-10-25

var cmeData = {
	// показывать кнопку справа? (1 - да, 0 - нет)
	'showButton' 		: '0', 

	// укажите через запятую названия полей
	// textarea: ставьте перед названием минус (-)
	// select: ставьте перед названием '!' и разделяйте варианты для выбора таким же символом
	// checkbox: знак вопроса перед именем
	// для поля с телефоном (input type="tel") используйте символ '='
	// если поле должно быть обязательно заполнено, после его название добавьте * (например, имя*)
	// если ни одно поле не обозначено обязательным, обязательными становятся все поля
	'fields' 				: 'Имя (Ваше имя)*, =Номер телефона (Ваш телефон)*, Ваш E-mail (Необязательно),',

	// заголовок формы
	'title' 				: 'Оставьте свои данные и мы свяжемся с Вами в течении 30 минут!',

	// надпись на кнопке
	'button' 				: 'Отправить данные', 

	// показывать ли время звонка (1 - да, 0 - нет)
	'callTime' 			: '0', 
	'txtCallTime' 	: 'Время звонка',
	'txtToday' 			: 'сегодня',
	'txtTmrw' 			: 'завтра',
	'txtTill' 			: 'до',
	'txtHours' 			: 'час.',

	'alertSending' 	: 'Идет отправка', // идет отправка
	'alertSetCallTime': 'Укажите время звонка', // Укажите время звонка

	'mailReferrer' 	: 'Источник трафика', // откуда пришел посетитель
	'mailUrl' 			: 'Страница с запросом', // страница, откуда отправлен запрос

	// начало и конец рабочего дня в часах, используется для времени звонка
	'workStart' 		: '8',
	'workEnd' 			: '19',

	// центрировать форму на экране? (1 - центр экрана, 0 - у места клика)
	'center' 				: '1',

	// шаблон (default, apple, vk, fb, blackred, pink, yellow)
	'template' 			: 'default',

	// лицензия (можно купить на get.nazartokar.com)
	'license' 			: '0',
	'showCopyright' : '1'
}
