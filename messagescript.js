const messageGroup = document.getElementById('groupMessCont');

const messagearray = []

function showUser() {
    let p = fetch("http://localhost:3000/stored_messages")
    p.then((value) => {
        return value.json()
    }).then((value) => {
        return value.map((mess, index) => {
            return `<div class="singleUserMessage">
                <h1>${mess.useremail}</h1>
                <strong>${mess.username} says:</strong>
                <h2>${mess.usermessage}</h2>
            </div>`

        }).join('');
    }).then((value) => {
        messageGroup.innerHTML = value;
    }).catch((error) => {
        console.log(error)
        messageGroup.innerHTML = `<strong>Couldn't load messages! Please try again later...</strong>`
    })
}

showUser();
