// document.addEventListener('DOMContentLoaded', (event)=>{
// 	console.log('dom content loaded')})
// const queryParams = new URLSearchParams(window.location.search)
// const id = queryParams.get("id")
// const frontJobTitle = document.createElement("h2")
// const flipCardInner = document.querySelector(".flip-card-inner")

// fetch("http://localhost:3000/jobs")
// .then(response => response.json())
// .then(jobs => {
// 	jobs.forEach(job => {
// 		const card = document.createElement("div")
// 		card.setAttribute("class", "card")
// 		// console.log(card.class)
// 		const frontJobTitle = document.createElement("h2")
// 		const jobLocation = document.createElement("h3")
// 		// frontJobTitle.onclick = myFunction()
// 		// frontJobTitle.innerText = "Click Me!"
// 		frontJobTitle.innerHTML = `<a href=${job.id}>${job.title}</a>`
// 		jobLocation.innerText = job.location
// 		card.append(frontJobTitle, jobLocation)
// 		flipCardInner.append(card)
// 	})
// })
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


// function showJob(job){
// 	fetch(`http://localhost:3000/jobs/${id}`)
//     .then(response => response.json())
//     .then(job => {
// 		const backOfCard = document.createElement("div")
// 		backOfCard.setAttribute("class", "theback")
// 		document.body.append(backOfCard)
// 		const jobTitle = document.createElement("h1")
//         const jobLocation = document.createElement("h2")
//         const jobSalary = document.createElement("h3")
//         const jobSnippet = document.createElement("p")
//         const jobLink = document.createElement("p")
//         const jobCompany = document.createElement("p")
//         const jobApiId = document.createElement("p")

//         jobTitle.innerText = job.title
//         jobLocation.innerText = job.location
//         jobSalary.innerText = job.salary
//         jobSnippet.innerText = job.snippet
//         jobLink.innerHTML = `<a href=${job.link} target="_blank">Link to Job Application</a>`
//         jobCompany.innerText = job.company

// 		flipCardInner.append(backOfCard)
//         backOfCard.append(jobTitle, jobLocation, jobSalary, jobSnippet, jobLink, jobCompany)
//     })
// }
const container = document.querySelector(".container")


document.addEventListener('DOMContentLoaded', (event)=>{
  // const queryParams = new URLSearchParams(window.location.search)
  // const id = queryParams.get("id")
  
  function flip(event){
        var element = event.currentTarget;
        if (element.className === "card") {
        if(element.style.transform == "rotateY(180deg)") {
          element.style.transform = "rotateY(0deg)";
        }
        else {
          element.style.transform = "rotateY(180deg)";
        }
      }
    };

   

fetch("http://localhost:3000/jobs")
    .then(respn => respn.json())
    .then(jobs => {jobs.forEach(job => {
  
        const card = document.createElement('div')
        card.setAttribute("class", "card")
        card.setAttribute("onclick","flip(event)")
        const front = document.createElement('div')
        front.setAttribute("class", "front")
        const back = document.createElement('div')
        back.setAttribute("class", "back")
        const jobDescription = document.createElement('h3')
        const companyLogo = document.createElement('img')
        const saveButton = document.createElement('h1')
        
        
        card.addEventListener('click', event => {
          flip(event)
        })
        const jobTitle = document.createElement('h1')
        const jobLocation = document.createElement('p')
        const companyURL = document.createElement('h1')
        const jobURL = document.createElement('h1')
        
        // saveButton.innerHTML = type="submit" value="Save"
        jobTitle.innerText = job.title
        jobLocation.innerText = job.location
        jobDescription.innerHTML = job.description
        companyLogo.src = job.company_logo
        companyURL.innerHTML = `<a href=${job.company_url} target="_blank">${job.company}</a>`
        jobURL.innerHTML = `<a href=${job.how_to_apply} target="_blank">Apply Here</a>`
		saveButton.innerHTML = `<input type="submit" value="Save to Favorites" />`
        container.append(card)
        card.append(front)
        front.append(jobTitle, jobLocation, companyLogo)

        card.append(back)
        back.append(companyURL, jobURL, saveButton)

    })})
 
    
})
