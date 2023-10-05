const messagegroup = document.getElementById('groupmesscont');

const messagearray = []

function showuser() {
        let p = fetch("http://localhost:3000/stored_messages")
    p.then((value) => {
        return value.json()
    }).then((value) => {
        return value.map((mess, index) => {
            return `<div class="singleusermessage">
                <h1>${mess.useremail}</h1>
                <strong>${mess.username} says:</strong>
                <h2>${mess.usermessage}</h2>
            </div>`

        }).join('');
    }).then((value) => {
        messagegroup.innerHTML = value;
    }).catch((error) => {
        console.log(error)
        messagegroup.innerHTML = `<strong>Couldn't load messages! Please try again later...</strong>`
    })
}

showuser();
