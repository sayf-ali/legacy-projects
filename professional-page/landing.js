
//Start YouTube Player in First Panel//

 // Load the IFrame Player API code asynchronously.
 var tag = document.createElement('script');
 tag.src = "https://www.youtube.com/player_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // Replace the 'ytplayer' element with an <iframe> and
 // YouTube player after the API code downloads.
 var player;
 function onYouTubePlayerAPIReady() {
   player = new YT.Player('ytplayer', {
     height: '250',
     width: '420',
     videoId: '8tpnlyA-DfM'
   });
 }
//End YouTube Player in First Panel//


//Start JavaScript for Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
//End JavaScript for Slideshow