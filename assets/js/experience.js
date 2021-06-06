//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Mobile App Developer",
    cardImage: "assets/images/experience-page/exp_gigworks.png",
    place: "Gigworks Pte Ltd",
    time: "(May, 2021 - present)",
    desp: "<li>Design, develop and test mobile applications for the iOS and Android platform using Flutter.</li> <li>Participate in full mobile application development life cycle.</li>",
  },
  {
    title: "Teaching Assistant",
    cardImage: "assets/images/experience-page/exp_nus.jpg",
    place: "National University of Singapore (NUS)",
    time: "(May, 2021 - present)",
    desp: "<li>Teaching Assistant for CS2030/S Programming Methodology II in AY2020/21 S1 and AY2020/21 S2.</li> <li>Facilitate the teaching of fundamental Software Engineering Priciples such as Object Oriented Programming.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
      <ul>
      <li class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </li>
    </ul>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" style="height: 600px;width:400px">
      
      <img src="${cardImage}" height="300" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Mentorship Card

const mentorshipcards = document.querySelector(".mentorship-cards");
const mentor = [];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, time, desp }) =>
      (output += `        
      <div class="column mentorshipCard"> 
      <div class="card card2 mentorshipCardCover">
        <img src="${image}" class="card-img-top" alt="..."  width="64" height="300">
        <div class="information">
        <div class="card-body">
          <h5 class="card-title">${title}</h5>
          <p class=""sub-title">${time}</p>
        </div>
        <div class="more-information">
        <ul class="list-group list-group-flush p-0 right-aligned">
          <div class="list-group-item card2 disclaimer">${desp}</div>
        </ul>
        </div>
        </div>
      </div>
      </div>
      `)
  );
  mentorshipcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
