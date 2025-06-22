// Example: Show an alert when form is submitted
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        alert('Form is being submitted!');
        // You can also add form validation here
    });
});
