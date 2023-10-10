const messageGroup = document.getElementById('groupMessCont');

const messagearray = []

function showUser() {
    let p = fetch("https://jsonplaceholder.typicode.com/comments")
    p.then((value) => {
        return value.json()
    }).then((value) => {
        return value.map((mess, index) => {
            return `<div class="singleUserMessage">
                <h1>${mess.email}</h1>
                <strong>${mess.name} says:</strong>
                <h2>${mess.body}</h2>
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
