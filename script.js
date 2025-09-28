 const pullDownButton = document.getElementById("lists");

pullDownButton.addEventListener('mouseover', function() {
   
    console.log("乗る");
});

pullDownButton.addEventListener('mouseout', function() {
   
    console.log("外れる");
});

pullDownButton.addEventListener('click', function() {
   
    console.log("クリック");
});