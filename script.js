var euro = document.getElementById("euro");
var output = document.getElementById("output");
var cicValue = "69.104";

function changeValue() {
	var changed = euro.value * cicValue;
	var p = document.createElement("p");
	p.id = "cic-value";
	p.textContent = "Cic-coin: " + changed;
	output.appendChild(p);
	console.log(changed);
}