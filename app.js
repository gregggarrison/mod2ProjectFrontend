document.addEventListener('DOMContentLoaded', (event)=>{
	console.log('dom content loaded')})
const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get("id")
const frontJobTitle = document.createElement("h2")
const flipCardInner = document.querySelector(".flip-card-inner")

fetch("http://localhost:3000/jobs")
.then(response => response.json())
.then(jobs => {
	jobs.forEach(job => {
		const card = document.createElement("div")
		card.setAttribute("class", "card")
		// console.log(card.class)
		const frontJobTitle = document.createElement("h2")
		const jobLocation = document.createElement("h3")
		// frontJobTitle.onclick = myFunction()
		// frontJobTitle.innerText = "Click Me!"
		frontJobTitle.innerHTML = `<a href=${job.id}>${job.title}</a>`
		jobLocation.innerText = job.location
		card.append(frontJobTitle, jobLocation)
		flipCardInner.append(card)
	})
})
// function myFunction() {
// 	var x = document.querySelector(".card");
// 	if (x.style.display === "none") {
// 	  x.style.display = "block";
// 	} else {
// 	  x.style.display = "none";
// 	}
//   }
// frontJobTitle.addEventListener("click", event=>{
// 	showJob(event)
// })


function showJob(job){
	fetch(`http://localhost:3000/jobs/${id}`)
    .then(response => response.json())
    .then(job => {
		const backOfCard = document.createElement("div")
		backOfCard.setAttribute("class", "theback")
		document.body.append(backOfCard)
		const jobTitle = document.createElement("h1")
        const jobLocation = document.createElement("h2")
        const jobSalary = document.createElement("h3")
        const jobSnippet = document.createElement("p")
        const jobLink = document.createElement("p")
        const jobCompany = document.createElement("p")
        const jobApiId = document.createElement("p")

        jobTitle.innerText = job.title
        jobLocation.innerText = job.location
        jobSalary.innerText = job.salary
        jobSnippet.innerText = job.snippet
        jobLink.innerHTML = `<a href=${job.link} target="_blank">Link to Job Application</a>`
        jobCompany.innerText = job.company

		flipCardInner.append(backOfCard)
        backOfCard.append(jobTitle, jobLocation, jobSalary, jobSnippet, jobLink, jobCompany)
    })
}