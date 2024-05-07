var euro = document.getElementById("euro");
var cicCoin = document.getElementById("ciccoin")
var cicValue = "69.104";

function changeValue() {
	var changed = euro.value * cicValue;
	cicCoin.innerHTML = "<p>" + changed + "</p>";
	console.log(changed);
}
