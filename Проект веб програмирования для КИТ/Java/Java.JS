let button_left = document.querySelector("b-l")
const button_right = document.getElementById(#b-r)
let bg = document.querySelector(header_container)
button_left.onclick = function(){
    document.querySelector('header_container').style.backgroundImage = 'url(' + ../img/5b8404ae3e525.jpg + ')';
}
alert("привет")
const myImage = document.querySelector('.img')
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if(mySrc === '../img/img_1.png') {
      myImage.setAttribute ('src’, '../img/img_2.png')
    } else {
      myImage.setAttribute ('src','../img/img_1.png')
    }
}
