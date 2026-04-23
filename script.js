// Tabs
let tabs = document.querySelectorAll(".tab");

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(t => t.classList.remove("active"));
        tab.classList.add("active");
    });
});

// Profile Image
let uploadBox = document.getElementById("uploadBox");
let fileInput = document.getElementById("fileInput");
let preview = document.getElementById("preview");

uploadBox.addEventListener("click", () => fileInput.click());

fileInput.addEventListener("change", () => {
    let file = fileInput.files[0];
    if (file) {
        preview.src = URL.createObjectURL(file);
        preview.style.display = "block";
    }
});

// National ID Image
let idUploadBox = document.getElementById("idUploadBox");
let idFileInput = document.getElementById("idFileInput");
let idPreview = document.getElementById("idPreview");

idUploadBox.addEventListener("click", () => idFileInput.click());

idFileInput.addEventListener("change", () => {
    let file = idFileInput.files[0];
    if (file) {
        idPreview.src = URL.createObjectURL(file);
        idPreview.style.display = "block";
    }
});

// Form Validation
let form = document.getElementById("myForm");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPass = document.getElementById("confirmPass").value;
    let experience = document.getElementById("experience").value;
    let price = document.getElementById("price").value;
    let agree = document.getElementById("agree").checked;

    if (!email.includes("@")) {
        alert("Enter valid email");
        return;
    }

    let regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;

    if (!regex.test(password)) {
        alert("Weak password");
        return;
    }

    if (password !== confirmPass) {
        alert("Passwords do not match");
        return;
    }

    if (experience === "" || experience < 0) {
        alert("Enter valid experience");
        return;
    }

    if (price === "") {
        alert("Enter price per hour");
        return;
    }

    if (!agree) {
        alert("You must agree first");
        return;
    }

    alert("Account Created Successfully 🎉");
});