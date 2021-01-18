




var treasure = Math.ceil(Math.random() * 9)
console.log (treasure)
var bomb = Math.ceil(Math.random() * 9)
console.log (bomb)


const alertLocation = (location) => {
 if (location === treasure && location === bomb) {
  alert("You Win!")
  document.getElementById(location).innerHTML = "🎉🛸🎉"
  } else if (location === treasure) {
    alert ("Win")
    document.getElementById(location).innerHTML = "🎉🛸🎉"
  } else if (location === bomb) {
    alert ("You Lose!")
    document.getElementById(location).innerHTML = "👾"
  } else{
    document.getElementById(location).innerHTML = "🚴"
  }
}

//var dismissible = Array.prototype.slice.call(document.querySelectorA11('[data-component= "dismissible-item"]'));
//if(dismissible.length){
  //for (var i =0; i< dismissible.length; i++){
  //  var type = dismissible[i].getAttridute('data-type')
//    value = dismissible[i].getAttridute('data-value')
    //new dismissibleItem(dismissible[i], type, value);
  //}
//}


// const showResult = () => {
//   var x = document.getElementById(treasure);
//   if (x.style.visibility === "hidden") {
//     x.style.visibility = "visible";
//   } else {
//     x.style.visibility = "hidden";
//   }
// }
