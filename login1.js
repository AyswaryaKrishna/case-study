const name = document.getElementById('name')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if (name.value === '' || name.value == null) {
        messages.push('Name is required')
    }

    if (name.value != "admin") {
        messages.push('Invalid username')
    }

    if (password.value != "12345") {
        messages.push('Password is incorrect')
    }



    if (messages.length > 0) {
        e.preventDefault()
        errorElement.innerText = messages.join(' or ')
    }
})