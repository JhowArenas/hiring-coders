// Document ready
document.addEventListener('DOMContentLoaded', function() {

    const arrow = document.getElementById('arrow');
    arrow.addEventListener('click', function() {
        this.classList.toggle('active');
        document.getElementById('about').classList.toggle('hidden');
    })

    // get form submit
    var form = document.querySelector('form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Thank you for your e-mail, but this site is only for study and your e-mail don't be send");
    });
    
});