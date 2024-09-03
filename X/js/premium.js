document.addEventListener('DOMContentLoaded', function() {
    var geriDonLink = document.getElementById('geriDon');
    geriDonLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.history.back(); 
    });
});