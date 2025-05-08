// Enhanced script.js with improved functionality and performance

// Smooth scroll function with better easing
function smoothScrollTo(element, duration = 800) {
  const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80
  const startPosition = window.pageYOffset
  const distance = targetPosition - startPosition
  let startTime = null

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const progress = Math.min(timeElapsed / duration, 1)

    // Easing function - easeInOutCubic
    const ease = progress < 0.5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2

    window.scrollTo(0, startPosition + distance * ease)
    if (timeElapsed < duration) {
      window.requestAnimationFrame(animation)
    }
  }

  window.requestAnimationFrame(animation)
}

// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const targetElement = document.querySelector(this.getAttribute("href"))
    if (targetElement) {
      smoothScrollTo(targetElement)
    }
  })
})

// Improved email validation
function validateEmail() {
  const email = document.getElementById("email")
  const error = document.getElementById("errorMessage")

  if (!email || !error) return true

  if (email.value.toLowerCase() !== email.value) {
    error.innerHTML = "Please enter your email in lowercase"
    error.style.display = "block"
    error.style.color = "#ff5252"
    error.style.fontSize = "14px"
    return false
  }

  error.innerHTML = ""
  return true
}

// Form validation with better error handling
const contactForm = document.getElementById("contactForm")
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    if (!validateEmail()) {
      e.preventDefault()
    } else {
      // Show loading state on button when form is valid
      const submitButton = contactForm.querySelector("button[type='submit']")
      if (submitButton) {
        submitButton.innerHTML = "Sending..."
        submitButton.disabled = true
      }
    }
  })
}

// Skill bars with Intersection Observer for better performance
const addSkillBars = () => {
  const skills = [
    { name: "JavaScript", percentage: 90 },
    { name: "React", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "Python", percentage: 70 },
    { name: "Git", percentage: 95 },
    { name: "PostgreSQL", percentage: 75 },
    { name: "MongoDB", percentage: 80 },
    { name: "Express.js", percentage: 85 },
    { name: "TypeScript", percentage: 70 },
    { name: "Next.js", percentage: 75 },
    { name: "Tailwind CSS", percentage: 80 },
    { name: "Bootstrap", percentage: 90 },
  
    
    { name: "REST APIs", percentage: 80 },
  
    { name: "Responsive Design", percentage: 90 },
    { name: "Ruby", percentage: 80 },
    { name: "HTML/CSS", percentage: 95 },
    { name: "Ruby on Rails", percentage: 75 },
  ]

  const skillList = document.getElementById("skillList")
  if (!skillList) return

  // Clear existing content
  skillList.innerHTML = ""

  // Create skill bars
  skills.forEach((skill) => {
    const skillItem = document.createElement("div")
    skillItem.className = "skill-item"

    skillItem.innerHTML = `
      <div class="skill-name">
        <span>${skill.name}</span>
        <span class="skill-percent">${skill.percentage}%</span>
      </div>
      <div class="skill-progress">
        <div class="skill-progress-bar" style="width: 0%" data-width="${skill.percentage}%"></div>
      </div>
    `

    skillList.appendChild(skillItem)
  })

  // Use Intersection Observer for better performance
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const progressBars = entry.target.querySelectorAll(".skill-progress-bar")
          progressBars.forEach((bar) => {
            setTimeout(() => {
              bar.style.width = bar.dataset.width
            }, 200) // Small delay for better visual effect
          })
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.2 },
  )

  observer.observe(skillList)
}

// Project data with improved structure
const projects = [
  {
    name: "RHEONS APP",
    des: ["Canopy", "Frontend", "2025"],
    img: "./images/men2.png",
    description:
      "Rheons is an all-in-one study companion with personalized lessons, interactive practice, and real exam simulations to help students excel. The platform offers 33+ courses, serves 47k+ students, and provides 83k+ quizzes.",
    desc1:
      "Developed with React and Node.js, Rheons features a responsive design, personalized learning paths, interactive quizzes, and real-time progress tracking to help students ace their exams with confidence.",
    technologies: ["React", "Node.js", "MongoDB"],
    technologies1: ["Express", "Redux", "Tailwind CSS"],
    liveVersion: "https://rheons.com",
    sourceCode: "https://github.com/Gmanlove/rheons-app",
  },
  {
    name: "FASCHCOM APP",
    des: ["Canopy", "Fullstack", "2025"],
    img: "./images/men.png",
    description:
      "Faschcom is a digital transformation platform that simplifies e-commerce, freelancing, and corporate solutions to drive businesses forward. The application serves as a gateway to innovation for modern businesses.",
    desc1:
      "Built with a modern tech stack, Faschcom offers seamless integration of e-commerce functionality, freelancer marketplace, and enterprise solutions in one comprehensive platform.",
    technologies: ["React", "Next.js", "Firebase"],
    technologies1: ["TypeScript", "Stripe", "Material UI"],
    liveVersion: "https://faschcom.com",
    sourceCode: "https://github.com/Gmanlove/faschcom-platform",
  },
  {
    name: "METRICS WEB",
    des: ["Canopy", "Frontend", "2023"],
    img: "./images/firstcard.png",
    description:
      "This React capstone project is about building a mobile web application to check a list of metrics (numeric values) that was created making use of React and Redux.",
    desc1:
      "This React capstone project is about building a mobile web application to check a list of metrics (numeric values) that was created making use of React and Redux.",
    technologies: ["HTML", "CSS", "React and Redux"],
    technologies1: ["Javascript", "ruby", "Bootstrap"],
    liveVersion: "https://graceful-treacle-9ae10f.netlify.app",
    sourceCode: "https://stirring-capybara-9170e3.netlify.app/",
  },
  {
    name: "DREAMVIEW ",
    des: ["Canopy", "Frontend", "2023"],
    img: "./images/second.png",
    description:
      "This project showcases my proficiency in a range of technologies, as well as my ability to create user-friendly interfaces and robust functionality. Build with HTML,CSS and Javascript",
    desc1:
      "My Capstone Project demonstrates my ability to design and build a functional web-based platform that addresses a real-world problem.",
    technologies: ["HTML", "CSS", "JavaScript"],
    technologies1: ["React-redux", "ruby", "Bootstap"],
    liveVersion: "https://fabulous-empanada-256871.netlify.app",
    sourceCode: "https://github.com/Gmanlove/FIRST-CAPSTONE-PROJECT",
  },
  {
    name: "SPACE TRAVEL",
    des: ["Canopy", "backend", "2023"],
    img: "./images/third.png",
    description:
      "The Space Travelers Hub is a service through which SpaceX astronauts can book rockets or schedule missions for a particular timeframe.",
    desc1:
      "The Space Travelers Hub is a service through which SpaceX astronauts can book rockets or schedule missions for a particular timeframe.",
    technologies: ["HTML", "CSS", "React"],
    technologies1: ["React-redux", "ruby", "Bootstrap"],
    liveVersion: "https://inspiring-maamoul-159777.netlify.app",
    sourceCode: "https://github.com/Gmanlove/Space-Traveler-s-Hub",
  },
  {
    name: "Budget App",
    des: ["Canopy", "backend", "2023"],
    img: "./images/budget.jpeg",
    description:
      "The Budget App is a classic example of a budget website, that helps you keep track of your expenses. It provides a user-friendly interface that allows individuals to record their expenses in different categories and track them over time.",
    desc1:
      "The Budget App is built using Ruby on Rails and PostgreSQL database, offering a secure and efficient way to manage your finances.",
    technologies: ["Ruby", "Ruby on rails", "PostgreSQL"],
    technologies1: ["github", "ruby", "Bootstrap"],
    liveVersion: "https://budget-expens4.onrender.com/",
    sourceCode: "https://github.com/Gmanlove/Budget-app",
  },
  {
    name: "Pokemon App",
    des: ["Canopy", "Frontend", "2023"],
    img: "./images/fourth.png",
    description:
      "A pokemon website is designed for children and for adults who used to love pokemon games in their childhood. From the website, users could access the different creatures which inhabit the world of pokemon games.",
    desc1:
      "Users can give like for the creatures which they liked most and can also write their insights in the comments portion.",
    technologies: ["HTML", "Javascript", "CSS"],
    technologies1: ["github", "ruby", "Bootstrap"],
    liveVersion: "https://resilient-smakager-5c90ff.netlify.app/",
    sourceCode: "https://github.com/Gmanlove/JavaScript-capstone-group-project",
  },
]

// Generate project cards with improved animation
const workpage = document.querySelector("#workpage")
if (workpage) {
  for (let i = 0; i < projects.length; i += 1) {
    workpage.innerHTML += `
    <div class="card-proj animate-fadeIn delay-${(i % 5) * 100}">
    <img src="${projects[i].img}" alt="${projects[i].name} project image" />
    <div class="project-card-iterms flex column">
      <h2 class="card-title">${projects[i].name}</h2>
      <div class="card-lists">
        <p class="canopy">${projects[i].des[0]}</p>
        <div class="round"></div>
        <p>${projects[i].des[1]}</p>
        <div class="round"></div>
        <p>${projects[i].des[2]}</p>
      </div>
      <div class="card-note">
        <p>
        ${projects[i].description}
        </p>
      </div>
      <div class="card-tag">
        <ul class="card-skills flex">
          <li>${projects[i].technologies[0]}</li>
          <li>${projects[i].technologies[1]}</li>
          <li>${projects[i].technologies[2]}</li>
        </ul>
      </div>
      <button type="button" id="btn-${i}">See Project</button>
    </div>
    </div>
    `
  }
}

// Enhanced modal functionality with better UX
const modal = document.getElementById("modal1")

// Make closePopup function globally available with improved functionality
// Declare closePopup in the global scope
window.closePopup = () => {
  const modal = document.getElementById("modal1")
  if (modal) {
    modal.style.display = "none"
    document.body.style.overflow = "" // Restore scrolling
  }
}

if (modal && workpage) {
  for (let j = 0; j < projects.length; j += 1) {
    const seeBtn = document.querySelectorAll(`[id=btn-${j}]`)
    seeBtn.forEach((bt) => {
      bt.addEventListener("click", () => {
        modal.style.display = "block"
        document.body.style.overflow = "hidden" // Prevent scrolling when modal is open

        modal.innerHTML = `
          <div class="popup-container block-popup">
            <div id="popup-modal" class="pop-content">
              <div class="headline-popup">
                <h1>${projects[j].name}</h1>
                <a href="#" role="button" onclick="closePopup()" aria-label="Close">
                  <div class="popup-clsbtn">x</div>
                </a>
              </div>
            </div>
            <ul class="small-tags">
              <li class="canopy-sm-tag">${projects[j].des[0]}</li>
              <li>
                <div class="round-popup"></div>
              </li>
              <li class="second-sm-tag">${projects[j].des[1]}</li>
              <li>
                <div class="round-popup"></div>
              </li>
              <li class="second-sm-tag">${projects[j].des[2]}</li>
            </ul>
            <div class="popup-image-container">
              <img src="${projects[j].img}" alt="${projects[j].name} project image" />
            </div>
            <div class="buttom-content-container">
              <div class="paragraph-description">
                <p class="paragraph-description-desktop">
                  ${projects[j].desc1}
                </p>
              </div>
              <div class="action-content">
                <div class="popup-tags">
                  <ul class="first">
                    <li>${projects[j].technologies[0]}</li>
                    <li>${projects[j].technologies[1]}</li>
                    <li>${projects[j].technologies[2]}</li>
                  </ul>
                  <ul class="second">
                    <li>${projects[j].technologies1[0]}</li>
                    <li>${projects[j].technologies1[1]}</li>
                    <li>${projects[j].technologies1[2]}</li>
                  </ul>
                </div>
                <div class="divider-popup">
                  <img src="./images/Vector 4.png" alt="Divider popup" />
                </div>
                <div class="popup-button-action">
                  <button id="seeLiveBtn-${j}" type="button">
                    <div class="source-code">
                      <a href="${projects[j].liveVersion}" target="_blank" rel="noopener noreferrer">See Live</a>
                    </div>
                    <div class="deploy-icon">
                      <img src="./images/deploy.svg" alt="deployment icon" class="deploy-icon-popup" />
                    </div>
                  </button>
                  <button class="submit-github">
                    <div class="live-version">
                      <a href="${projects[j].sourceCode}" target="_blank" rel="noopener noreferrer">See Source</a>
                    </div>
                    <div class="github-img">
                      <img src="./images/github-popup.svg" alt="github icon" class="github-icon-popup" />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        `

        // Improved event handling for modal buttons
        const seeLiveBtn = document.getElementById(`seeLiveBtn-${j}`)
        seeLiveBtn.addEventListener("click", (event) => {
          event.stopPropagation()
          window.open(projects[j].liveVersion, "_blank", "noopener noreferrer")
        })

        const closeBtn = document.querySelector(".popup-clsbtn")
        closeBtn.addEventListener("click", (e) => {
          e.preventDefault()
          closePopup()
        })

        // Close modal when clicking outside
        modal.addEventListener("click", (e) => {
          if (e.target === modal) {
            closePopup()
          }
        })

        // Close modal with Escape key
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape") {
            closePopup()
          }
        })
      })
    })
  }
}

// Framework list toggle with improved accessibility
const frameworkList = document.getElementById("frameworkList")
const arrow = document.getElementById("arrow")

if (frameworkList && arrow) {
  // Set initial display to block
  frameworkList.style.display = "block"

  arrow.setAttribute("aria-expanded", "true")

  arrow.addEventListener("click", () => {
    const isExpanded = frameworkList.style.display !== "none"
    frameworkList.style.display = isExpanded ? "none" : "block"
    arrow.setAttribute("aria-expanded", !isExpanded)
  })
}

// Skills list toggle with improved accessibility
const skillList2 = document.getElementById("skillList")
const arrow2 = document.getElementById("arrow2")

if (skillList2 && arrow2) {
  // Set initial display to block
  skillList2.style.display = "block"

  arrow2.setAttribute("aria-expanded", "true")

  arrow2.addEventListener("click", () => {
    const isExpanded = skillList2.style.display !== "none"
    skillList2.style.display = isExpanded ? "none" : "block"
    arrow2.setAttribute("aria-expanded", !isExpanded)
  })
}

// Add header shrink effect on scroll with debounce for better performance
const header = document.querySelector("header")
let scrollTimer = null

window.addEventListener("scroll", () => {
  if (scrollTimer !== null) {
    clearTimeout(scrollTimer)
  }

  scrollTimer = setTimeout(() => {
    if (window.scrollY > 50) {
      header.classList.add("header-shrink")
    } else {
      header.classList.remove("header-shrink")
    }
  }, 10)
})

// Mobile menu toggle with improved accessibility
const deskEl = document.querySelector(".desktop-menu")
const humbergerIcon = document.querySelector(".humberger")
const closeIcon = document.querySelector(".close")
const navListEl = document.querySelectorAll(".nav-list")

if (humbergerIcon && closeIcon && deskEl) {
  humbergerIcon.addEventListener("click", () => {
    deskEl.classList.add("active")
    humbergerIcon.classList.add("hide")
    closeIcon.classList.add("show")
    document.body.style.overflow = "hidden" // Prevent scrolling when menu is open
  })

  closeIcon.addEventListener("click", () => {
    deskEl.classList.remove("active")
    humbergerIcon.classList.remove("hide")
    closeIcon.classList.remove("show")
    document.body.style.overflow = "" // Restore scrolling
  })

  navListEl.forEach((element) => {
    element.addEventListener("click", () => {
      deskEl.classList.remove("active")
      humbergerIcon.classList.remove("hide")
      closeIcon.classList.remove("show")
      document.body.style.overflow = "" // Restore scrolling
    })
  })
}

// Initialize skill bars after DOM content loads
document.addEventListener("DOMContentLoaded", () => {
  addSkillBars()

  // Add animation to about section
  const aboutText = document.querySelector(".about-text")
  const selfText = document.querySelector(".self")

  if (aboutText && !aboutText.classList.contains("animate-slideInLeft")) {
    aboutText.classList.add("animate-slideInLeft")
  }

  if (selfText && !selfText.classList.contains("animate-slideInLeft")) {
    selfText.classList.add("animate-slideInLeft", "delay-200")
  }
})

// Page loader with improved animation
window.addEventListener("load", () => {
  const loader = document.querySelector(".page-loader")
  if (loader) {
    setTimeout(() => {
      loader.classList.add("loader-hidden")

      // Remove loader from DOM after transition completes
      loader.addEventListener("transitionend", () => {
        if (document.body.contains(loader)) {
          document.body.removeChild(loader)
        }
      })
    }, 800) // Short delay for better visual effect
  }
})