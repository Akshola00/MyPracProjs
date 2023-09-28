// ADS
const words = ['For the Love of Food', 'Where every flavor tells a story', 'Food fusion', 'At your services']
let currentIndex = 0
function animateWords() {
    const wordPlaceholder = document.getElementById("word-placeholder")


    setTimeout(() => {
        currentIndex = (currentIndex + 1) % words.length;
        wordPlaceholder.textContent = words[currentIndex];
        console.log('okay');
    }, 100)
}
animateWords();
setInterval(animateWords, 3000)



// SLIDER
var currentImage = 0;
var slides = document.querySelectorAll(".slide");
var prevButton = document.querySelector("#prev-button");
var nextButton = document.querySelector("#next-button");

function showSlide(index) {
    slides[currentImage].querySelector("img").classList.remove("active");
    slides[currentImage].querySelector(".slide-text").style.display = "none";
    slides[index].querySelector("img").classList.add("active");
    slides[index].querySelector(".slide-text").style.display = "block";
    currentImage = index;
}

prevButton.addEventListener("click", function () {
    var index = currentImage - 1;
    if (index < 0) {
        index = slides.length - 1;
    }
    showSlide(index);
});

nextButton.addEventListener("click", function () {
    var index = currentImage + 1;
    if (index >= slides.length) {
        index = 0;
    }
    showSlide(index);
});

// Auto slideshow every 4 seconds
setInterval(function () {
    var index = currentImage + 1;
    if (index >= slides.length) {
        index = 0;
    }
    showSlide(index);
}, 4000);


//SIGN IN VALIDATION
function SignVal() {
    // getting the id's where vallidation will be performed

    var Email= document.getElementById("email").value
    var Password = document.getElementById("password").value

    // IF condition and alert if fields are empty or null
    if (Email=="" ||Password=="") {
        alert("All Field Are Required.")
        return false
        
    } 

        // if condition and alert for when all fields are filled correctly. it will redirect to the home
    // page to show user signed in successfully.
    if (!Email=="" ||Password=="") {
        alert("SignIn Successfull.")
        
    }
    
}

// SIGN UP VALIDAATION
function SignUpVal() {
    // getting the id's where vallidation will be performed
    var SignupEmail= document.getElementById("Signup-email").value
    var Confirmpassword= document.getElementById("signup-password-confirmation").value
    var Firstpassword= document.getElementById("signup-password").value

    // IF condition and alert if fields are empty or null
    if ( SignupEmail=="" || Confirmpassword=="" || Firstpassword=="") {
        alert("All Field Are Required.")
        return false
        
    }

    // if condition and alert for when all fields are filled correctly. it will redirect to the home
    // page to show account have been created successfully.

    if (!SignupEmail=="" || Confirmpassword=="" || Firstpassword=="") {
        alert("Account created successfull.")
        
    }
    
}

// RESERVATION VALIDATION
function validation() {
    // Regular expressions regName will match lowercase, uppercase  nd first letter uper case and the rest lower case spellings.
    //  regexPhone requires the number starting with 0 (any other number is invalid) followed by any other 11 digit number.
    var regName = /^[a-zA-zA-Z]+$/
    var regexPhone=/^[0]\d{10}$/
    // getting the id's where vallidation will be performed
   var firstname= document.getElementById("firstname").value
   var lastname= document.getElementById("lastname").value
   var phone = document.getElementById("phoneno").value
   var guests = document.getElementById("NofGuest").value
   var date = document.getElementById("date1").value

  
    // IF condition and alert if fields are empty or null
   if (firstname=="" || firstname==null || lastname=="" || lastname==null ||
    phone=="" || phone==null||guests=="" || guests==null ||date=="" || date==null)

   {
       alert("All Field Are Required.")
       return false
   }
//    IF condition if name spelling doesnt match the regular expression.
   if(!regName.test(firstname)){
    alert('special characters or numbers are not allowed for name field(s)');
    return false
    }
    //    IF condition if phone number doesnt match the regular expression.
    if (!regexPhone.test(phone)) {
        alert("Invalid phone number!")
        
        return false  
    }
    //    IF condition if name spelling doesnt match the regular expression.
    if(!regName.test(lastname)){
        alert('special characters or numbers are not allowed for name field(s)');
        return false
    }
//  IF condition for when the Fields are filled correctly and submitted.
    if(!firstname=="" || firstname==null || lastname=="" || lastname==null ||
    phone=="" || phone==null||guests=="" || guests==null ||date=="" || date==null){
		alert("Reservation completed successfully")
	}

}

//PHONE NUMBER VALIDATION (warning text)
function regexVal() {
    var phone=document.getElementById("phoneno").value
    
    var regex=/^[0]\d{10}$/
    if (regex.test(phone)){
        document.getElementById("phoneVal").innerHTML="Valid"; 
        document.getElementById("phoneVal").style.color="green";
        document.getElementById("phoneVal").style.display="block";

    }
   
    else
    {
        document.getElementById("phoneVal").innerHTML="Enter a valid mobile number"; 
        document.getElementById("phoneVal").style.color="red";
        document.getElementById("phoneVal").style.visibility="visible"
        }
    
}

// PASSWORD SHOW FOR SIGNIN AND SIGNUP
function passwordShow() {
    var pass= document.getElementById("password")

        if (pass.type=="password") {
            pass.type="text"
            
        }
        else{
            pass.type="password"
        }
     
}

// SIGNUP

function SignUppasswordShow() {
    var Signuppass= document.getElementById("signup-password")
    var Conpass=document.getElementById("signup-password-confirmation")

        if (Signuppass.type=="password" && Conpass.type=="password") {
            Signuppass.type="text"
            Conpass.type="text"
            
        }
        else{
            Signuppass.type="password"
            Conpass.type="password"
        }
     
}

// function PasswordConfirmation() {
//     var password1= document.getElementById("signup-password").value
//     var Confirmpass= document.getElementById("signup-password-confirmation").value

//     if (!Confirmpass.test(password1)){
//         alert("Password don't match!")
//         return false
//     }
//     else{
        
//     }
// }

