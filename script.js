 function pullDown() {}
 const pullDownButton = document.getElementById("lists");

 const pullDownParents = document.getElementById("pull-down");

 const pullDownChild = document.querySelectorAll(".pull-down-list")
   pullDownChild.forEach(function(list) {
    list.addEventListener('click', function() {
        const value = list.innerHTML
        currentList.innerHTML = value
        console.log(value)
    })
   })
 
 const currentList = document.getElementById("current-list")

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

const targetURL = "https://www.bing.com/search?q=スカイツリー+料金&qs=SC&pq=すかいつり&sk=SC1&sc=12-5&cvid=AE7B69FEF01E4D4D8D3CF12EA0F0B0B3&FORM=QBRE&sp=2&lq=0";
const list2= document.getElementById("list2");
if (list2) { 
    list2.addEventListener('click', function() {
        window.location.href = "https://www.bing.com/search?q=スカイツリー+料金&qs=SC&pq=すかいつり&sk=SC1&sc=12-5&cvid=AE7B69FEF01E4D4D8D3CF12EA0F0B0B3&FORM=QBRE&sp=2&lq=0";
        console.log("スカイツリー料金の検索結果に遷移します。");
    });
window.addEventListener('load',pullDown)}