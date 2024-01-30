// Function to show the selected section and hide others
function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        section.style.display = 'none';
    });

    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }
}

// Dummy data for models
var modelsData = [
    { name: 'Model 1' },
    { name: 'Model 2' },
    { name: 'Model 3' }
];

// Function to render model cards
function renderModelCards() {
    var modelCardsContainer = document.querySelector('.model-cards');
    modelCardsContainer.innerHTML = '';
    
    modelsData.forEach(function(model) {
        var card = document.createElement('div');
        card.classList.add('model-card');
        card.innerHTML = `
            <h4>${model.name}</h4>
        `;
        modelCardsContainer.appendChild(card);
    });
}

// Render model cards when the page loads
window.onload = function() {
    renderModelCards();
};
 