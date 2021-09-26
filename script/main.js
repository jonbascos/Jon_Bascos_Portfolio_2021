const navUL = document.querySelector('.nav-ul')
const hamburger = document.querySelector('#hamburger')
const myRoles = document.querySelector('#my-roles')
const projectUL = document.querySelector('.projectUL')


console.log('running')
hamburger.addEventListener('click', () => {
    console.log('clicked')
    navUL.classList.toggle("show");

    /* Toggles between a hamburger menu and an 'X' after clicking the menu icon */
    
    if(hamburger.classList.contains('burgerIcon')) {
        hamburger.classList.remove('burgerIcon')
        hamburger.classList.add('xIcon')
        hamburger.innerHTML = "<i class='fas fa-times'></i>"
    } else if (hamburger.classList.contains('xIcon')) {
        hamburger.innerHTML = ''
        hamburger.classList.remove('xIcon')
        hamburger.classList.add('burgerIcon')
        hamburger.innerHTML = "<i class='fas fa-bars'></i>"
    }

}) 

// Script to fill in the projects

projects.map(project => {
    const li = document.createElement('li')
    li.innerHTML = `
        <div class='project-card'>
        <img class='project-image' src='${project.photoURL}'
        <br/>
        <h3 class='project-title'>${project.title}</h3>
        <div class='card-social'> <a href='${project.githubURL}' target='_blank'><i class="fab fa-github-square"></i></a>
        <a href='${project.liveURL}' target='_blank'><i class="fas fa-globe"></i></a></div>
        <br/>
        <div class='description-text'> ${project.description}</div>
        <br/>
        Tech Used: ${project.tech}
        </div>
    `
    projectUL.appendChild(li) 
})
