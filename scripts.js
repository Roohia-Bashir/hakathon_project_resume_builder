// Ensure this script runs after the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Get form and display elements
    var resumeForm = document.getElementById('resumeForm');
    var resumeSection = document.getElementById('resumeSection');
    var displayName = document.getElementById('displayName');
    var displayEmail = document.getElementById('displayEmail');
    var displayPhone = document.getElementById('displayPhone');
    var displayEducation = document.getElementById('displayEducation');
    var displayExperience = document.getElementById('displayExperience');
    var displaySkills = document.getElementById('displaySkills');
    var displayImageElement = document.querySelector('#displayImage img');
    // Function to display the uploaded image
    function displayProfileImage(file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            var _a;
            if (((_a = e.target) === null || _a === void 0 ? void 0 : _a.result) && displayImageElement) {
                displayImageElement.src = e.target.result;
            }
            else {
                console.error("FileReader result is null or undefined, or image element not found.");
            }
        };
        reader.onerror = function () {
            console.error("Error reading the file.");
        };
        reader.readAsDataURL(file);
    }
    // Event listener for form submission
    resumeForm.addEventListener('submit', function (e) {
        var _a;
        e.preventDefault(); // Prevent form submission
        // Get form data
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var phone = document.getElementById('phone').value;
        var education = document.getElementById('education').value;
        var experience = document.getElementById('experience').value;
        var skills = document.getElementById('skills').value;
        var profilePic = (_a = document.getElementById('profilePic').files) === null || _a === void 0 ? void 0 : _a[0];
        // Only display the resume if all fields are filled
        if (name && email && phone && education && experience && skills) {
            // Display the form data in the resume section
            displayName.textContent = name;
            displayEmail.textContent = email;
            displayPhone.textContent = phone;
            displayEducation.textContent = education;
            displayExperience.textContent = experience;
            displaySkills.textContent = skills;
            // Display the uploaded profile picture if available
            if (profilePic) {
                displayProfileImage(profilePic);
            }
            else {
                // Clear the image if no file is selected
                if (displayImageElement) {
                    displayImageElement.src = '';
                }
            }
            // Show the resume section
            resumeSection.style.display = "block";
        }
        else {
            // If any field is empty, hide the resume section and show an error
            resumeSection.style.display = "none";
            alert("Please fill in all the fields before generating your resume.");
        }
    });
});
