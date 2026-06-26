function getInfo(){
    const name = document.getElementById('username') as HTMLInputElement
    const email = document.getElementById('email') as HTMLInputElement
    const age = document.getElementById('age') as HTMLInputElement


    console.log('i am clicked...')
    console.log(name.value)
    console.log(email.value)
    console.log(age.value)
}