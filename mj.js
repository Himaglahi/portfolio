function navigateTo(page) {
    // Hide all content sections
    const contentSections = document.querySelectorAll('main');
    contentSections.forEach(section => {
        section.style.display = 'none';
    });

    // Show the selected content section
    const selectedSection = document.getElementById(page);
    selectedSection.style.display = 'block';
}

// Initial navigation to the home page
navigateTo('home');