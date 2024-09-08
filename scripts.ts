// Get form and display elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeSection = document.getElementById('resumeSection') as HTMLElement;
const displayName = document.getElementById('displayName') as HTMLElement;
const displayEmail = document.getElementById('displayEmail') as HTMLElement;
const displayPhone = document.getElementById('displayPhone') as HTMLElement;
const displayEducation = document.getElementById('displayEducation') as HTMLElement;
const displayExperience = document.getElementById('displayExperience') as HTMLElement;
const displaySkills = document.getElementById('displaySkills') as HTMLElement;
const displayImage = document.getElementById('displayImage') as HTMLImageElement;

// Function to display the uploaded image
// Get the img element inside the displayImage div
const displayImageElement = document.querySelector('#displayImage img') as HTMLImageElement;

function displayProfileImage(file: File): void {
    const reader = new FileReader();
    reader.onload = function (e: ProgressEvent<FileReader>) {
        if (e.target?.result) {
            // Set the src of the img element inside the displayImage div
            if (displayImageElement) {
                displayImageElement.src = e.target.result as string;
            } else {
                console.error("Image element not found inside displayImage div.");
            }
        } else {
            console.error("FileReader result is null or undefined.");
        }
    };
    reader.onerror = function () {
        console.error("Error reading the file.");
    };
    reader.readAsDataURL(file);
}

// Event listener for form submission
resumeForm.addEventListener('submit', function (e: Event) {
    e.preventDefault(); // Prevent form submission

    // Get form data
    const name = (document.getElementById('name') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const phone = (document.getElementById('phone') as HTMLInputElement).value;
    const education = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;
    const profilePic = (document.getElementById('profilePic') as HTMLInputElement).files?.[0];

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
        } else {
            displayImage.src = ''; // Clear the image if no file is selected
        }

        // Show the resume section
        resumeSection.style.display = "block";
    } else {
        // If any field is empty, hide the resume section and show an error
        resumeSection.style.display = "none";
        alert("Please fill in all the fields before generating your resume.");
    }
});
