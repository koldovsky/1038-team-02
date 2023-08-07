const form = document.getElementById('cont-form');
const fullName = document.getElementById('full-name');
const phone = document.getElementById('form-phone');
const email = document.getElementById('form-email');
const course = document.getElementById('form-course');

// Check email is valid
function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        return '';
    } else {
        return 'Email is not valid';
    }
}

// Check input length
function checkLength(input, min, max) {
    if (input.value.length < min) {
        return `${getFieldName(input)} must be at least ${min} characters`;
    } else if (input.value.length > max) {
        return `${getFieldName(input)} must be less than ${max} characters`;
    } else {
        return '';
    }
}

// Get fieldname
function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event listeners
form.addEventListener('submit', function (e) {
    let errMessage = '';
    
    errMessage += checkLength(fullName, 5, 30) + '\n';
    errMessage += checkLength(phone, 10, 13) + '\n';
    errMessage += checkEmail(email) + '\n';
    errMessage += checkLength(email, 8, 50) + '\n';
    errMessage += checkLength(course, 10, 100);

    if (errMessage.trim() !== '') {
        e.preventDefault();
        alert(errMessage.trim());
    }
});