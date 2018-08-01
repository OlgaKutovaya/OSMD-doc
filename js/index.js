/*
// Accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

        this.classList.toggle("active");

        var subMenu = this.nextElementSibling;
        if (subMenu.style.display === "block") {
            subMenu.style.display = "none";
        } else {
            subMenu.style.display = "block";
        }
    });
}
*/

// *** Dialog - Login / Registration window

// Open dialog window

var mainEnter = document.getElementById("main-enter");
var modalLogin = document.getElementById("modal-log");

console.log(mainEnter, modalLogin);

if (mainEnter) {
    mainEnter.addEventListener("click", function () {
        modalLogin.style.display = "flex";
    });
}

var btnRegistration = document.getElementById("registration");
var btnEnter = document.getElementById("enter");
var modalEnter = document.getElementById("modalEnter");
var modalRegistration = document.getElementById("modalRegistration");


// Change tab Enter -> Registration

if (btnRegistration) {
    btnRegistration.addEventListener("click", function () {
        btnRegistration.classList.add("active");
        btnEnter.classList.remove("active");
        modalEnter.classList.add("d-none");
        modalEnter.classList.remove("d-block");
        modalRegistration.classList.remove("d-none");
        modalRegistration.classList.add("d-block");
    });
}

// Change tab Registration -> Enter

if (btnEnter) {
    btnEnter.addEventListener("click", function () {
        btnEnter.classList.add("active");
        btnRegistration.classList.remove("active");
        modalEnter.classList.add("d-block");
        modalRegistration.classList.remove("d-block");
        modalRegistration.classList.add("d-none");
    });
}

// Close dialog - Login / Registration window

var btnCloseModalEnter = document.getElementById("btnCloseModalEnter");

if (btnCloseModalEnter) {
    btnCloseModalEnter.addEventListener("click", function() {
        modalLogin.style.display = "none";
    });
}

var btnCloseModalRegistration = document.getElementById("btnCloseModalRegistration");

if (btnCloseModalRegistration) {
    btnCloseModalRegistration.addEventListener('click', function() {
        modalLogin.style.display = "none";
    });
}

// Dialog - Login / Registration - Forget password

var btnForgetPassword = document.getElementById("btnForgetPassword");
var modalForgerPassword = document.getElementById("modalForgerPassword");

if (btnForgetPassword) {
    btnForgetPassword.addEventListener('click', function() {
        modalLogin.style.display = "none";
        modalForgerPassword.style.display = "flex";
    });
}

// close dialog window Forget password
var btnCancelForgetPasswModal = document.getElementById("btnCancelForgetPasswModal");

if (btnCancelForgetPasswModal) {
    btnCancelForgetPasswModal.addEventListener('click', function() {
        modalLogin.style.display = "flex";
        modalForgerPassword.style.display = "none";
    });
}
//Forget password -> Sending email

var btnSendForgetPasswModal = document.getElementById("btnSendForgetPasswModal");
var modalForgerPasswordSendMail = document.getElementById("modalForgerPasswordSendMail");

if (btnSendForgetPasswModal) {
    btnSendForgetPasswModal.addEventListener('click', function() {
        modalForgerPassword.style.display = "none";
        modalForgerPasswordSendMail.style.display = "flex";
    });
}

//Forget password -> Close Sending email

var btnCloseSendForgetPasswModal = document.getElementById("btnCloseSendForgetPasswModal");

if (btnCloseSendForgetPasswModal) {
    btnCloseSendForgetPasswModal.addEventListener('click', function() {
        modalForgerPasswordSendMail.style.display = "none";
    });
}

// Dialog window - user/ write tech.support

var linkWriteSupport = document.getElementById("linkWriteSupport");
var modalWriteSupport = document.getElementById("modalWriteSupport");

if (linkWriteSupport) {
    linkWriteSupport.addEventListener('click', function() {
        modalWriteSupport.style.display = "flex";
    });
}

var btnCloseWriteSupport = document.getElementById("btnCloseWriteSupport");

if (btnCloseWriteSupport) {
    btnCloseWriteSupport.addEventListener('click', function() {
        modalWriteSupport.style.display = "none";
    });
}


//Dialog window - administrator/ download new document + user/download document

var modal = document.getElementById("modal");
var button = document.getElementById('button');

if (button) {
    button.addEventListener("click", function () {
        modal.style.display = "flex";
    });
}

var btnCloseDoc = document.getElementById("btnCloseDoc");
if (btnCloseDoc) {
    btnCloseDoc.addEventListener("click", function () {
        modal.style.display = "none";
    });
}

//Dialog window - administrator/ add new category

var modalAddCategory = document.getElementById("modalAddCategory");
var btnAddCategory = document.getElementById("btnAddCategory");

if (btnAddCategory) {
    btnAddCategory.addEventListener("click", function() {
        modalAddCategory.style.display = "flex";
    });
}

var cancelAdd = document.getElementById("cancelAdd");

if (cancelAdd) {
    cancelAdd.addEventListener("click", function() {
        modalAddCategory.style.display = "none";
    });
}

//Dialog window - administrator/ confirmation deletion of document

var modalConfirmDeletion = document.getElementById("confirmDeletion");
var btnDeleteDoc = document.getElementById("btnDeleteDoc");

if (btnDeleteDoc) {
    btnDeleteDoc.addEventListener("click", function() {
        modalConfirmDeletion.style.display = "flex";
    });
}
var cancelConfirmation = document.getElementById("cancelConfirmation");
if (cancelConfirmation) {
    cancelConfirmation.addEventListener("click", function() {
        modalConfirmDeletion.style.display = "none";
    });
}

//Dialog window - administrator/ editing document

var modalEditDoc = document.getElementById("modalEditDoc");
var btnOpenEditDoc = document.getElementById("btnOpenEditDoc");

if (btnOpenEditDoc) {
    btnOpenEditDoc.addEventListener("click", function () {
        modalEditDoc.style.display = "flex";
    });
}

var btnCloseEditDoc = document.getElementById("btnCloseEditDoc");
if (btnCloseEditDoc) {
    btnCloseEditDoc.addEventListener("click", function () {
        modalEditDoc.style.display = "none";
    });
}



