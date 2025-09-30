 const pullDownButton = document.getElementById("lists");

 const pullDownParents = document.getElementById("pull-down");

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
    this.setAttribute("style","background-color:blue;")
})

pullDownButton.addEventListener('mouseout', function(){
    this.removeAttribute("style","background-color:red;")
})

pullDownButton.addEventListener('click', function(){
    this.setAttribute("style","background-color:green;")
})

pullDownButton.addEventListener('click', function() {
  if (pullDownParents.getAttribute("style") == "display:block;"){
    pullDownParents.removeAttribute("style", "display:block;")
    console.log("非表示")
  } else {
    pullDownParents.setAttribute("style", "display:block;")
    console.log("表示")
  }
})
