function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex ;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function showMessage(message) {
if (message >= l_messages.length)
	message = 0;

$("#messages").fadeOut(1000, function() {
	$(this).html(l_messages[message]);
	$(this).fadeIn(1000);
});

setTimeout(function() {
	showMessage(message+1);
}, 5000 + 1000*2);
}

var l_messages = [
	"Загружаем аддоны",
	"Заражаем ваш компьютер вирусами",
	"Пишем новые скрипты",
	"Определяем вашу личность",
	"Устанавливаем вам Linux",
	"format C:",
	"sudo make me a sandwich",
	"Открываем еще одно сообщество",
	"Тi шо сервер открыл? (c) SentexKoul"
];

$(function() {
	l_messages = shuffle(l_messages);

	showMessage(0);
});