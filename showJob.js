const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get("id")

fetch(`http://localhost:3000/jobs/${id}`)
    .then(response => response.json())
    .then(job => {
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

        document.body.append(jobTitle, jobLocation, jobSalary, jobSnippet, jobLink, jobCompany)
    })