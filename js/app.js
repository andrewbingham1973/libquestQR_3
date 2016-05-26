// Phonegap Barcode scanner
// Author: Umer Pasha
// Date: 8/26/14
alert('file linked');
var resultDiv;

window.addEventListener("load", init, false);
function init() {
	alert('device ready');
	document.getElementById("startScan").addEventListener("click", startScan, false);
	resultDiv = document.getElementById("results");
}
function startScan() {

alert("try to scan");

cordova.plugins.barcodeScanner.scan(
      function (result) {
          alert("We got a barcode\n" +
                "Result: " + result.text + "\n" +
                "Format: " + result.format + "\n" +
                "Cancelled: " + result.cancelled);
      },
      function (error) {
          alert("Scanning failed: " + error);
      },
      {
          "preferFrontCamera" : true, // iOS and Android
          "showFlipCameraButton" : true, // iOS and Android
          "prompt" : "Place a barcode inside the scan area", // supported on Android only
          "formats" : "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
          "orientation" : "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
      }
   );

}

/*
function startScan() {
alert("try scan");
	cordova.plugins.barcodeScanner.scan(
		function (result) {
			var s = "Result: " + result.text + "<br/>" +
			"Format: " + result.format + "<br/>" +
			"Cancelled: " + result.cancelled;
			resultDiv.innerHTML = s;
		},
		function (error) {
			alert("Scanning failed: " + error);
		}
	);

}
*/
