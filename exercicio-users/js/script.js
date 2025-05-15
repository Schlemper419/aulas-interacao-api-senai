fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(album => {
        const container = document.querySelector("#container")
        const cards = album.map(user => {
            return `
            <div class="card">

                <img src="https://placehold.co/600x400" alt=${user.name}>
                <h2>Nome de Usuário</h2>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Telefone:</strong> ${user.phone}</p>
                <p><strong>Website:</strong> ${user.website}</p>
                <p><strong>Empresa:</strong> ${user.company.name}</p>
                <p><strong>Endereço:</strong> ${user.address.street}, ${user.address.suite}, ${user.address.city}</p>
                


            </div>

        `
        })

        container.innerHTML = cards.join("|")

    })