

fetch("http://localhost:3000/jobs")
    .then(response => response.json())
    .then(jobs => {
		jobs.forEach(job => {
			const card = document.createElement("div")
			card.setAttribute("class", "card")
			console.log(card.class)
			const jobTitle = document.createElement("h2")
			const jobLocation = document.createElement("h3")
            jobTitle.innerHTML = `<a href=showJob.html?id=${job.id}>${job.title}</a>`
            jobLocation.innerText = job.location
			card.append(jobTitle, jobLocation)
			document.body.append(card)
		})
	})