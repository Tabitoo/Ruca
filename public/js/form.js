let form = document.getElementById("form")

form.addEventListener("submit", async (event) => {
    event.preventDefault()

    const Form = new FormData(form)
    const response = await fetch(form.action, {
        method: form.method,
        body: Form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        
        alert("Formulario enviado!")
    }

})