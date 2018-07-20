document.getElementById("defaultOpen").click();
 function myFunction(id) {
     var x = document.getElementById(id);
     if (x.className.indexOf("w3-show") == -1) {
         x.className += " w3-show";
         x.previousElementSibling.className += " w3-theme-d1";
     } else {
         x.className = x.className.replace("w3-show", "");
         x.previousElementSibling.className =
             x.previousElementSibling.className.replace(" w3-theme-d1", "");
     }
 }

 // Used to toggle the menu on smaller screens when clicking on the menu button
 function openNav() {
     var x = document.getElementById("navDemo");
     if (x.className.indexOf("w3-show") == -1) {
         x.className += " w3-show";
     } else {
         x.className = x.className.replace(" w3-show", "");
     }
 }

 function openTabType(evt, TabType) {
     // Declare all variables
     var i, tabcontent, tablinks;

     // Get all elements with class="tabcontent" and hide them
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }

     // Get all elements with class="tablinks" and remove the class "active"
     tablinks = document.getElementsByClassName("tablinks");
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
     }

     // Show the current tab, and add an "active" class to the button that opened the tab
     document.getElementById(TabType).style.display = "block";
     evt.currentTarget.className += " active";
 }

 // New
 var modalNew = document.getElementById('mCxNew');
 var imagesNew = document.getElementsByClassName('imagemCxNew');
 var modalImgNew = document.getElementById("imIDxNew");
 var captionTextNew = document.getElementById("captionNew");
 for (var i = 0; i < imagesNew.length; i++) {
     var img = imagesNew[i];
     img.onclick = function(evt) {
         modalNew.style.display = "block";
         modalImgNew.src = this.src;
         captionTextNew.innerHTML = this.alt;
     }
 }
 var span = document.getElementsByClassName("closeNew")[0];
 span.onclick = function() {
     modalNew.style.display = "none";
 }

 // Trend
 var modalTrend = document.getElementById('mCxTrend');
 var imagesTrend = document.getElementsByClassName('imagemCxTrend');
 var modalImgTrend = document.getElementById("imIDxTrend");
 var captionTextTrend = document.getElementById("captionTrend");
 for (var i = 0; i < imagesTrend.length; i++) {
     var img = imagesTrend[i];
     img.onclick = function(evt) {
         modalTrend.style.display = "block";
         modalImgTrend.src = this.src;
         captionTextTrend.innerHTML = this.alt;
     }
 }
 var span = document.getElementsByClassName("closeTrend")[0];
 span.onclick = function() {
     modalTrend.style.display = "none";
 }
