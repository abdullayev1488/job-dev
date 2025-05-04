const jobListings = [
  {
    id: 1,
    img: "../assets/img/scoot.svg",
    date: "5h ago",
    time: true,
    job: "Senior Software Engineer",
    company: "Scoot",
    country: "United Kingdom"
  },
  {
    id: 2,
    img: "../assets/img/blogr.svg",
    date: "20h ago",
    time: false,
    job: "Haskell and PureScript Dev",
    company: "Blogr",
    country: "United States"
  },
  {
    id: 3,
    img: "../assets/img/vector.svg",
    date: "1d ago",
    time: false,
    job: "Midlevel Back End Engineer",
    company: "Vector",
    country: "United States"
  },
  {
    id: 4,
    img: "../assets/img/officelite.svg",
    date: "2d ago",
    time: true,
    job: "Senior Application Engineer",
    company: "Office Lite",
    country: "Germany"
  },
  {
    id: 5,
    img: "../assets/img/pod.svg",
    date: "2d ago",
    time: false,
    job: "Remote DevOps Engineer",
    company: "Pod",
    country: "Russia"
  },
  {
    id: 6,
    img: "../assets/img/creative.svg",
    date: "4d ago",
    time: false,
    job: "Desktop Support Manager",
    company: "Creative",
    country: "Japan"
  },
  {
    id: 7,
    img: "../assets/img/pomodoro.svg",
    date: "1w ago",
    time: true,
    job: "iOS Engineer",
    company: "Pomodoro",
    country: "New Zealand"
  },
  {
    id: 8,
    img: "../assets/img/maker.svg",
    date: "1w ago",
    time: true,
    job: "Senior EJB Developer",
    company: "Maker",
    country: "Singapore"
  },
  {
    id: 9,
    img: "../assets/img/coffeeroasters.svg",
    date: "1w ago",
    time: false,
    job: "Senior Frontend Developer",
    company: "Coffeeroasters",
    country: "Germany"
  },
  {
    id: 10,
    img: "../assets/img/mastercraft.svg",
    date: "2w ago",
    time: "Freelance",
    job: "App & Website Designer",
    company: "Mastercraft",
    country: "Japan"
  },
  {
    id: 11,
    img: "../assets/img/crowdfund.svg",
    date: "1mo ago",
    time: false,
    job: "Fullstack Developer",
    company: "Crowdfund",
    country: "Singapore"
  },
  {
    id: 12,
    img: "../assets/img/typemaster.svg",
    date: "1mo ago",
    time: false,
    job: "Technical Lead Engineer",
    company: "Typemaster",
    country: "Russia"
  },
  {
    id: 13,
    img: "../assets/img/crowdfund.svg",
    date: "1mo ago",
    time: true,
    job: "Front-end Developer",
    company: "Crowdfund",
    country: "Germany"
  },
  {
    id: 14,
    img: "../assets/img/coffeeroasters.svg",
    date: "1mo ago",
    time: true,
    job: "Junior Full-Stack Developer",
    company: "Coffeeroasters",
    country: "New Zealand"
  },
  {
    id: 15,
    img: "../assets/img/blogr.svg",
    date: "1mo ago",
    time: true,
    job: "Midweight Front-end Developer",
    company: "Blogr",
    country: "Japan"
  },
]


const cardsEl = document.querySelector(".cards")
const filterTitleEl = document.querySelector("#filter__title")
const filterCountryEl = document.querySelector("#filter__country")
const flexCheckDefaultEl = document.querySelector("#flexCheckDefault")
const loadMoreBtn = document.querySelector("#btn__loadMore")


let x = 9

function show() {
  let html = ""
  jobListings
    .slice(0, x)
    .filter(item => flexCheckDefaultEl.checked ? item.time : item)
    .filter(item => filterCountryEl.value == "All" ? item : item.country == filterCountryEl.value)
    .filter(item => item.job.toLowerCase().startsWith(filterTitleEl.value.trim().toLowerCase()))
    .forEach(item => {
      html += `   <div class="card">
                        <img src="${item.img}" alt="">
                        <h3>
                         <span>${item.date}</span>
                         ●
                         <span>${item.time ? "Full Time" : "Part Time"}</span>
                        </h3>
                        <h2>${item.job}</h2>
                        <h3>${item.company}</h3>
                        <h3>${item.country}</h3>
                    </div>`
    })
  cardsEl.innerHTML = html
}

show()

function loadMore() {
  x += jobListings.length
  loadMoreBtn.style.display = "none";
  show()
}

function darkMode() {
  document.body.classList.toggle("active")
}