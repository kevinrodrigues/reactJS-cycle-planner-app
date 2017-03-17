import $ from "jquery";

var liveTimes = $.ajax({
   url: "https://transportapi.com/v3/uk/train/station/WAT/live.json?app_id=03bf8009&app_key=d9307fd91b0247c607e098d5effedc97&darwin=false&train_status=passenger"
}).then(function(data) {
	console.log(data);
});











