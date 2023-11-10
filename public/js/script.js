

// function validateForm() {
//     const nameInput = document.getElementById("name").value;
//     const email = document.getElementById("email").value;
//     const phone = document.getElementById("phone").value;
//     const dob = document.getElementById("dob").value;
//     const address = document.getElementById("address").value;
//     const imageInput = document.getElementById("image");

//     const nameError = document.getElementById('nameError');
//     form.addEventListener('submit', function (event) {
//         let isValid = true;

//         // Reset previous error messages
//         nameError.textContent = '';
//     if (name === "") {
//         alert("Name iscdsafdsf required");
//         return false;
//     }

//     if (email === "") {
//         alert("Email is required");
//         return false;
//     }

//     if (phone === "") {
//         alert("Phone is required");
//         return false;
//     }



//     if (address === "") {
//         alert("Address is required");
//         return false;
//     }

//     if (dob === "") {
//         alert("Date of Birth is required");
//         return false;
//     }

//     if (imageInput.files.length === 0) {
//         alert("Image is required");
//         return false;
//     }

//     const allowedFileTypes = ["image/jpeg", "image/png"];
//     const selectedFileType = imageInput.files[0].type;

//     if (!allowedFileTypes.includes(selectedFileType)) {
//         alert("Invalid file type. Please select a valid image (JPEG or PNG).");
//         return false;
//     }

//     const maxFileSizeInBytes = 5 * 1024 * 1024; // 5MB
//     const selectedFileSize = imageInput.files[0].size;

//     if (selectedFileSize > maxFileSizeInBytes) {
//         alert("File size is too large. Please select an image with a size up to 5MB.");
//         return false;
//     }

//     return true;
// }