

import {navbar} from '../components/navbar.js'
console.log(navbar)
import '../styles/style.css'
let navbar_div = document.getElementById("navbar")

navbar_div.innerHTML = navbar();

document.getElementById("searchfn").addEventListener("click", searchfn)
function searchfn(){
  var x = document.getElementById("searchtag");
if (x.style.display === "none") {
  x.style.display = "block";
  x.style.display = "flex";
} else {
  x.style.display = "none";
}
}
// import {slidedata} from '../components/slidedata.js'
// import '../styles/style.css'
// let x = document.getElementById("slideshow")

// x.innerHTML = slidedata()
let slidedata = ["https://cdn.shopify.com/s/files/1/0555/5722/6653/files/HP_-_DESKTOP_-_UNISEX_-_CASUAL_SHORTS_-_APRIL_WK4_2880x.jpg?v=1650908550",
 "https://cdn.shopify.com/s/files/1/0555/5722/6653/files/HP_-_DESKTOP_-_UNISEX_-_NEW_IN_-_APRIL_WK2_2880x.jpg?v=1649440796",
 "https://cdn.shopify.com/s/files/1/0555/5722/6653/files/HP_-_DESKTOP_-_UNISEX_-_DENIM_-_MAR_WK3_2880x.jpg?v=1646334148",
 "https://cdn.shopify.com/s/files/1/0555/5722/6653/files/HP-desktop-unisexe_1_d411c696-3b6d-47c4-b6a1-fa56c5279e03_2880x.jpg?v=1645740394",
]

localStorage.setItem("slideshow", JSON.stringify(slidedata))

let imagesDiv = document.getElementById("slideshow")
let i=0;
let imagedata = JSON.parse(localStorage.getItem("slideshow")) || [];

let image = document.createElement("img");
image.setAttribute("id", "slideshowImage")
setInterval(function (){
    if(i===imagedata.length){
        i=0;
    }
    image.src = imagedata[i]

    imagesDiv.append(image)
    i++;
}, 4000);
