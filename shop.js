  // RANGE SECTION JAVASCRIPT CODE START

let range_slider = document.getElementById("myRange");
let output = document.getElementById("value");

output.innerHTML = range_slider.value;

range_slider.oninput = function() {
    output.innerHTML = this.value;
}

  // RANGE SECTION JAVASCRIPT CODE END


  // POPUP SECTION JAVASCRIPT CODE START

function openPopup() {
    document.getElementById("openPopup").style.display = "block";
    document.getElementById("openPopup").style.display = "grid";
}
function closePopup() {
    document.getElementById("openPopup").style.display = "none";
}

  // POPUP SECTION JAVASCRIPT CODE END