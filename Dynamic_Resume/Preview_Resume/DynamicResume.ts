window.addEventListener('load', () => {
    const name = localStorage.getItem('form_name');
    console.log(name);
    
    const jobTitle = localStorage.getItem('form_jobTitle');
    console.log(jobTitle); //error
    const phone = localStorage.getItem('form_phone');
    console.log(localStorage.getItem('form_phone'));
    const email = localStorage.getItem('form_email');
    console.log(localStorage.getItem('form_email'));
    const linkedin = localStorage.getItem('form_linkedin');
    console.log(localStorage.getItem('form_linkedin'));
    const degree = localStorage.getItem('form_degree');
    console.log(localStorage.getItem('form_degree'));
    const university = localStorage.getItem('form_university');
    console.log(localStorage.getItem('form_university'));
    const gradYear = localStorage.getItem('form_gradYear');
    console.log(localStorage.getItem('form_gradYear'));
    const skill1 = localStorage.getItem('form_skill1');
    console.log(skill1);
    const skill2 = localStorage.getItem('form_skill2');
    console.log(skill2); //error
    const skill3 = localStorage.getItem('form_skill3');
    console.log(skill3); //error
    const jobTitleExp = localStorage.getItem('jobTitleExp');
    console.log(localStorage.getItem('jobTitleExp')); //error
    const company = localStorage.getItem('company');
    console.log(localStorage.getItem('company'));
    const startYear = localStorage.getItem('startYear');
    console.log(localStorage.getItem('startYear'));
    const endYear = localStorage.getItem('endYear');
    console.log(localStorage.getItem('endYear'));
    const profilePicture = localStorage.getItem('form_profilePic');
    console.log(localStorage.getItem('form_profilePic'));
  
    document.getElementById('form_name')!.textContent = name!;
    document.getElementById('jobTitle')!.textContent = jobTitle!;
    document.getElementById('phone')!.textContent = phone!;
    document.getElementById('email')!.textContent = email!;
    document.getElementById('linkedin')!.textContent = linkedin!;
    document.getElementById('degree')!.textContent = degree!;
    document.getElementById('university')!.textContent = university!;
    document.getElementById('gradYear')!.textContent = gradYear!;
    document.getElementById('skills1')!.textContent = skill1!;
    document.getElementById('skills2')!.textContent = skill2!;
    document.getElementById('skills3')!.textContent = skill3!;
    document.getElementById('jobTitleExp')!.textContent = jobTitleExp!;
    document.getElementById('company')!.textContent = company!;
    document.getElementById('startYear')!.textContent = startYear!;
    document.getElementById('endYear')!.textContent = endYear!;

    if (profilePicture) {
        (document.getElementById('profilePicPreview') as HTMLImageElement).src = profilePicture!;
    }
  
    const username = name ? name.toLowerCase().replace(/\s+/g, '-') : 'user'; // Generate username from the name
    const baseUrl = ''; // Your Vercel deployment URL
    const uniqueResumeUrl = `${baseUrl}?/${username}`; 
  
    // Set the resume link in the DOM
    const resumeLink = document.getElementById('resumeLink') as HTMLAnchorElement;
    resumeLink.setAttribute('href', uniqueResumeUrl);
    resumeLink.textContent = uniqueResumeUrl;
  
    // Copy link to clipboard functionality
    document.getElementById('copyLinkBtn')!.addEventListener('click', () => {
        navigator.clipboard.writeText(uniqueResumeUrl).then(() => {
            alert('Resume link copied to clipboard!');
        });
    });
  
    // Edit button functionality
    document.getElementById('editBtn')!.addEventListener('click', () => {
        window.location.href = '../UserInput/form.html'; // Navigate to resume input form
    });
  
    // Print button functionality
    document.getElementById('printBtn')!.addEventListener('click', () => {
        window.print(); // Simply trigger the print action
    });
  });