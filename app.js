fetch("https://jobs.github.com/positions.json")
    .then(response => response.json)
    .then(console.log)