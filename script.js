document.getElementById('rsvp-button').addEventListener('click', function() {
    const rsvpMessage = document.getElementById('rsvp-message');
    rsvpMessage.classList.remove('hidden');
    rsvpMessage.classList.add('fade-in');
});

// Adding some fade-in effect for the RSVP message
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = `
.fade-in {
    animation: fadeIn 2s;
}

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}
`;
document.head.appendChild(styleSheet);
