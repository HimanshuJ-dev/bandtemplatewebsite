import { concert, monthsList, merchandise } from './concerts.js';

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav ul li a');
let username = document.getElementById('userName');
let useremail = document.getElementById('userEmail');
let userMessage = document.getElementById('userMessageText');
let userSubmitBtn = document.getElementById('userMessageSubmit');
let merchSpawner = document.getElementById('merchSpawner');

function countTickets(month) {
    let count = 0;
    concert.map((concrt, index) => {
        if (concrt.concertMonth === month) {
            count++;
        }
    })
    return count;
}

const monthlySpawnerHtml = monthsList.map((month, index) => {
    if (countTickets(month) !== 0) {
        return `
            <div class="specificMonth">
                    <div class="monthNameStatus">
                        <strong>${month}</strong>
                    </div>
                    <div class="numberOfTickets">${countTickets(month)}</div>
                </div>
                <hr>`
    } else {
        return `
            <div class="specificMonth">
                    <div class="monthNameStatus">
                        <strong>${month}</strong>
                        <div class="soldOutBanner">Sold Out</div>
                    </div>
                </div>
                <hr>`
    }

}).join('')

let monthlySpawner = document.getElementById('concertMonthlySpawner');

//for mapping all tickets
const ticketSpawnerHtml = concert.map((concrt, index) => {
    return `
    <div class="ticketCard">
        <img src="${concrt.concertImage}" alt="" class="tickertFetchedImageFromSrc">
        <div class="ticketDetails">
            <strong>${concrt.concertLocation}</strong>
            <h4>${concrt.concertDate}</h4>
            <p>${concrt.concertDesc}</p>
            <button onclick="insideHtml(
                '${concrt.concertImage}',
                '${concrt.concertMonth}',
                '${concrt.concertLocation}',
                '${concrt.concertDate}',
                '${concrt.concertDesc}',
                ${concrt.concertId},
                ${concrt.concertPrice}
                )">Buy Tickets</button>
        </div>
    </div>`
}).join('')



const merchSpawnerHtml = merchandise.map((merch, index) => {
    return `
    <div class="ticketCard">
        <div class="merchImage">
            <img src="${merch.merchImage}" alt="no img found" class="merchFetchedImageFromSrc">
        </div>
        <div class="ticketDetails merchDetails">
            <strong>${merch.merchName}</strong>
            <h4>${merch.merchCategory}</h4>
            <p>${merch.merchPrize}</p>
            <button onclick=" new swal('Availble Soon')">Coming Soon</button>
        </div>
    </div>`
}).join('')

const ticketSpawner = document.getElementById('concertTicketSpawner');

monthlySpawner.innerHTML = monthlySpawnerHtml;
ticketSpawner.innerHTML = ticketSpawnerHtml;
merchSpawner.innerHTML = merchSpawnerHtml;

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

function saveDetails() {
    let message = {
        id: 'um' + Date.now(),
        usern: username.value,
        usere: useremail.value,
        userm: userMessage.value
    }
    alert(`Message saved from ${message.usern}\nEmail: ${message.usere}\nMessage: ${message.userm}`)

    // function creatingUser() {

    //     let options = {
    //         method: "POST",
    //         headers: {
    //             "content-type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             "username": username.value,
    //             "useremail": useremail.value,
    //             "userMessage": userMessage.value,
    //             "userid": 'um' + Date.now()
    //         },)
    //     }
        

        // async function addNow() {
        //     try {
        //         await fetch("http://localhost:3000/stored_messages", options).then(
        //             (response) => response.json()
        //         ).then((value) => console.log("added one time"));
        //         alert('message saved')
        //     } catch (error) {
        //         alert('could not save message!\nPlease try again later...');
        //     }
        // }

        // addNow();

    // }

    // creatingUser();

    username.value = "";
    useremail.value = "";
    userMessage.value = "";
}
userSubmitBtn.addEventListener("click", saveDetails);
