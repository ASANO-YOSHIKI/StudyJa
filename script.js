 const pullDownButton = document.getElementById("lists");

pullDownButton.addEventListener('mouseover', function() {
   
    console.log("乗ったときは青色");
});

pullDownButton.addEventListener('mouseout', function() {
   
    console.log("外れたときは赤色");
});

pullDownButton.addEventListener('click', function() {
   
    console.log("クリックされたときは緑色");
});

pullDownButton.addEventListener('mouseover', function(){
    pullDownButton.setAttribute("style","background-color:blue;")
})

pullDownButton.addEventListener('mouseout', function(){
    pullDownButton.removeAttribute("style","background-color:red;")
})

pullDownButton.addEventListener('click', function(){
    pullDownButton.setAttribute("style","background-color:green;")
})