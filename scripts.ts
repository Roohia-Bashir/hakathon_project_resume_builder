const form = document.getElementById('resumeForm') as HTMLFormElement;
const generateResumeBtn = document.getElementById('generateResume');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    window.open('./Preview_Resume/ynamicResume.html')
    
})