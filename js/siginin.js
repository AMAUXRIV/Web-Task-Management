//file ini untuk pneghubung antara UI HTML dan model User

document.addEventListener('DOMContentLoaded', () => {

    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {
        

        e.preventDefault();
        
        const usernameByInput = document.getElementById('username').value
        

        const result = userManager.singInUser(usernameByInput);

        if(result.success) {
            return window.location.href = "../tasks.html"
        }else {
            alert('User Not Found')

            console.log(result.message)
        }
    })
});