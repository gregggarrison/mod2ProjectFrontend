const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get("id")

fetch(`http://localhost:3000/users/${id}`)
    .then(response => response.json())
    .then(response => createCard(response))


function createCard(user){
    console.log(user)
    let cardContainer = document.querySelector('#cardContainer')
    let userName = document.createElement('p')
    let firstName = document.createElement('p')
    let lastName = document.createElement('p')
    let fullName = document.createElement('p')
    let email = document.createElement('p')
    let phone = document.createElement('p')
    let favorites = document.createElement('p')
   
    userName.innerText = "User Name: " + user.user_name
    // firstName.innerText = user.first_name
    // lastName.innerText = user.last_name
    fullName.innerText = `Full Name: ${user.first_name} ${user.last_name}`
    email.innerText = "Email: " + user.email
    phone.innerText = "Phone: " + user.phone
    // favorites.innerText = user.favorites.job_id
    

    cardContainer.append(userName, firstName, lastName, fullName, email, phone, favorites)

    fetch(`http://localhost:3000/favorites/`)
        .then(response => response.json())
        .then(console.log)

}

    




    // .then(user => {
    //     const jobTitle = document.createElement("h1")
    //     const jobLocation = document.createElement("h2")
    //     const jobSalary = document.createElement("h3")
    //     const jobSnippet = document.createElement("p")
    //     const jobLink = document.createElement("p")
    //     const jobCompany = document.createElement("p")
    //     const jobApiId = document.createElement("p")

    //     jobTitle.innerText = job.title
    //     jobLocation.innerText = job.location
    //     jobSalary.innerText = job.salary
    //     jobSnippet.innerText = job.snippet
    //     jobLink.innerHTML = `<a href=${job.link} target="_blank">Link to Job Application</a>`
    //     jobCompany.innerText = job.company

    //     document.body.append(jobTitle, jobLocation, jobSalary, jobSnippet, jobLink, jobCompany)
    // })