const submit = document.querySelector('#submit-btn');

// Event listener
submit.addEventListener('click', getContactFormData);

// Function to get form data
function getContactFormData() {
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const message = document.querySelector('#message');
    const re = /^([A-Za-z0-9_\-\.]+)@([A-Za-z0-9_\-\.]+)\.([A-Za-z]{2,5})$/;

    clearClass(name, email, message);
    // Input validation
    if (name.value === '' || message.value === '') {
        console.log(name);
        showAlert('All fields must be filled');
        if (name.value === '' && message.value === '') {
            classAdd(name);
            classAdd(message);
        } else if (message.value === '') {
            classAdd(message);
        } else {
            classAdd(name);
        }
    } else if (name.value.length < 3) {
        showAlert('Name must be longer than 3 characters');
        classAdd(name);
    } else if (!re.test(email.value) || email.value === '') {
        showAlert('Email format should be: something@somthing.com');
        classAdd(email);
    } else if (message.value.length < 50) {
        showAlert('Message length must be longer than 50 characters');
        classAdd(message);
    } else {
        const formContent = {
            name: name.value,
            email: email.value,
            message: message.value,
        };

        console.log(formContent);
    }
}

function showAlert(message) {
    this.clearAlert();

    const parentElement = document.querySelector('.alert-child').parentNode;
    const childElement = document.querySelector('.alert-child');

    const div = document.createElement('div');
    div.className = 'alert alert-danger';

    div.appendChild(document.createTextNode(message));
    parentElement.insertBefore(div, childElement);

    setTimeout(() => {
        this.clearAlert();
    }, 3000);
}

function clearAlert() {
    const currentAlert = document.querySelector('.alert');
    if (currentAlert) {
        currentAlert.remove();
    }
}

function classAdd(item) {
    item.classList.add('alert-border');
}

function clearClass(item1, item2, item3) {
    item1.classList.remove('alert-border');
    item2.classList.remove('alert-border');
    item3.classList.remove('alert-border');
}
