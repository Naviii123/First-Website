
// for the account page
const accountForm = document.getElementById('account-form');
const updatedFirstName = document.getElementById('updatedFirstName');
const updatedLastName = document.getElementById('updatedLastName');
const updatedPhoneNumber = document.getElementById('updatedPhoneNumber');
const updatedEmail = document.getElementById('updatedEmail');
const updatedAddress = document.getElementById('updatedAddress');
const deleteButton = document.getElementById('deleteButton');

accountForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // Get the input values
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;   

    // Log the values for debugging
    console.log('Updating information:');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Phone Number:', phoneNumber);
    console.log('Email:', email);
    console.log('Address:', address);

    // Update the display elements
    updatedFirstName.textContent = firstName;
    updatedLastName.textContent = lastName;
    updatedPhoneNumber.textContent = phoneNumber;
    updatedEmail.textContent = email;
    updatedAddress.textContent = address;

    // Reset the form
    accountForm.reset();

    alert('Account information updated successfully!');

    // Show delete button
    deleteButton.style.display = 'block';
});

deleteButton.addEventListener('click', () => {
    updatedFirstName.textContent = '';
    updatedLastName.textContent = '';
    updatedPhoneNumber.textContent = '';
    updatedEmail.textContent = '';
    updatedAddress.textContent = '';

    accountForm.reset();

    alert('Account information deleted successfully!');
});
