// console.log(
// 	document.querySelector(".js-send-form")
// 	);

// console.log(
// 	$(".js-send-form")[0]
// 	);

// console.log(
// 	'input[type=email]',
// 	$("input[type=email]")                 // По атрибуту
// 	);

// console.log(
// 	"textarea",
// 	$("textarea")                     // html елементу
// 	);
// console.log(
// 	"#test-id",
// 	$("#test-id")                   // ID
// );
// console.log(
// 	"#test-id textarea",
// 	$("#test-id textarea")          // html елементу з батьківським елементом
// 	);
// console.log(
// 	".js-send-form [type=email]",
// 	$(".js-send-form [type=email]") // html атрибуту з батьківським елементом
// );

// $(".js-send-form button").click(function(){
// 	alert("Відправляємо форму!!!");
// });


// $(".js-send-form input[type=email]").keyup(function(){
// 	console.log("Вам текст: " + $(this).val());
// });

// $(".js-send-form input[type=email]").keyup(function(){
// 	var element = $(this);
// 	var value = element.val();

// 	if (value.indexOf('@') == -1) {
// 		element.css({
// 			"border-color": "red",
// 			"color": "red"
// 		});
// 	} else {
// 		element.css({
// 			"border-color": "green",
// 			"color": "green"
// 		});
// 	}
// });

$(".js-send-form").submit(function(e) {
		e.preventDefault(); // Відміняємо стандартну поведінку

		var sendData   = $(this).serialize(); // Формуємоємо дані форми. https://api.jquery.com/serialize/#serialize

        // https://www.w3schools.com/jquery/ajax_ajax.asp
		$.ajax({
			url: "ajaxSendEmail.php", // Файл, який буде працювати з даними форми
			type: "POST",             // Вказуємо метод відправки
			data: sendData,           // Дані форми
			success: function(result) {
		if (result == "success") {                     // Якщо повернуло текст "success", виконуємо код
			formEl.find(".form-wrapper").hide(600);    // Ховаємо форму
			formEl.find(".js-success-send").show(600); // Показуємо успішну відправку
				} else {
					formEl.find("input[name=sendEmail]").css("border-color", "red");
					alert("Сталася помилка!");
				}
			},
		});
	});
