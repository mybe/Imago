function displayConnect() {
    var x = document.getElementById("displayconnect");
    var y = document.getElementById("displayupload");
    var z = document.getElementById("allimagescontainer");
    if (z.style.display === "none" & y.style.display === "none") {
        z.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";  
    } else {
        z.style.display = "none";
        y.style.display = "none";  
        x.style.display = "block"; 
    }
}

function displayUpload() {
    var x = document.getElementById("displayconnect");
    var y = document.getElementById("displayupload");
    var z = document.getElementById("allimagescontainer");
    if (z.style.display === "none" & x.style.display === "none") {
        z.style.display = "block";
        x.style.display = "none";
        y.style.display = "none";  
    } else {
        z.style.display = "none";
        y.style.display = "block"; 
        x.style.display = "none"; 
    }
}

function toggleHome() {
    var x = document.getElementById("displayconnect");
    var y = document.getElementById("displayupload");
    var z = document.getElementById("allimagescontainer");
    if (x.style.display === "block" | y.style.display === "block") {
        x.style.display = "none";
        y.style.display = "none"; 
        z.style.display = "block"; 
    } 
}

document.getElementById("defaultOpen").click();

function openTabType(evt, TabType) {
     var i, tabcontent, tablinks;

     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }

     tablinks = document.getElementsByClassName("tablinks");
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
     }

     document.getElementById(TabType).style.display = "block";
     evt.currentTarget.className += " active";
 }

 // New Images Tab
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

 // Trend Images Tab
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

refresh_handler = function (e) {
    var elements = document.querySelectorAll("*[realsrc]");
    for (var i = 0; i < elements.length; i++) {
        var boundingClientRect = elements[i].getBoundingClientRect();
        if (elements[i].hasAttribute("realsrc") && boundingClientRect.top < window.innerHeight) {
            elements[i].setAttribute("src", elements[i].getAttribute("realsrc"));
            elements[i].removeAttribute("realsrc");
        }
    }
};

window.addEventListener('scroll', refresh_handler);
window.addEventListener('load', refresh_handler);

$('.message .tct').click(function(){
    $('.formconnect').animate({height: "toggle", opacity: "toggle"}, "slow");
 });

$('.nav-link').on('click', function(){
    $('#navbarTogglerDemo02').collapse('hide');
});

$(".showpassicon").hover(function(){
    var x = document.getElementById("reg-pass");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }
});

var executed = false;
var image = new Image();

var previewFiles = (function() {
    return function() {
        if (!executed) {
            executed = true;
            var preview = document.querySelector('#preview');
            var files   = document.querySelector('input[type=file]').files;
            function readAndPreview(file) {
              // Make sure `file.name` matches our extensions criteria
              if ( /\.(jpe?g|png)$/i.test(file.name) ) {
                var reader = new FileReader();
                reader.addEventListener("load", function () {                 
                  image.height = 300; image.title = file.name; image.src = this.result; preview.appendChild( image );
                }, false);
                reader.readAsDataURL(file);
                $("#preview").html(image);
              } else { alert("Wrong file type. Accepted types: PNG, JPG, JPEG"); executed = false; }
               }
              
            if (files) {
              [].forEach.call(files, readAndPreview);
            }
        } else { alert("You may only upload one image");}
    };
})();

function removeFile() {
    if (executed === true) { 
        executed = false;
        delete image; 
        $("#preview").html("");
       // alert("Removed your image");
    } else { alert("You have no image to remove!"); }
}

// Login stuffs

function registerUserStart() { 
    var userName = document.getElementById("reg-username").value;
    var userEmail = document.getElementById("reg-email").value;
    var userPassword = document.getElementById("reg-pass").value;
    var emailValid = Boolean(false);

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail)) {
        emailValid = true;
    } else {
        alert("You have entered an invalid email address!")
        emailValid = false;
    }
    if (userName.length < 4) { 
       alert("Your username is invalid!");
    } 
    if (userPassword.length < 8) { 
        alert("Your password must be at least 8 characters long.");
    }
    if (userName.length > 4 & (emailValid === true) & (userPassword.length > 7)) {
       //alert("Registering as: " + userName + " / " + userEmail);
       document.getElementById("tos-agreehide").style.display = "block";
       document.getElementById("register2").style.display = "block";
       document.getElementById("reg-goback").style.display = "block";
       document.getElementById("register1").style.display = "none";
       document.getElementById("hideonregister").style.display = "none";

    } else { alert("Failed to register you."); }
}

function registerUserFinish() {
    if (document.getElementById("reg-agreetos").checked === true) {
        alert("Signing you up..."); 
    } else { alert("You must agree to the terms of service before continuing."); }
}

function registerGoBack() { 
    document.getElementById("tos-agreehide").style.display = "none";
    document.getElementById("register2").style.display = "none";
    document.getElementById("reg-goback").style.display = "none";
    document.getElementById("register1").style.display = "block";
    document.getElementById("hideonregister").style.display = "block";
}
