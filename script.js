function showHideText() {
  var text = document.getElementById("text-box");
  var check1 = document.getElementById("other");
  var check2 = document.getElementById("job");
  var check3 = document.getElementById("school");

  if (
    check1.checked == true &&
    check2.checked == false &&
    check3.checked == false
  ) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
