function generatePassword() {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    const symbols = '!@#$%&*_+-=:.?';
    
    const allChars = letters + numbers + symbols;
    let password = '';
    
    for (let i = 0; i < 20; i++) {
        password += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }
    
    document.getElementById('password').value = password;
}

function copyPassword() {
    const passwordField = document.getElementById('password');
    passwordField.select();
    navigator.clipboard.writeText(passwordField.value);
    alert('Mot de passe copié !');
}
