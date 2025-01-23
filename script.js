const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png",
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png",
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png",
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png",
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png",
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png",
  },
];

const teamContainer = document.querySelector("main .flex");

let teamHTML = "";

for (let i = 0; i < teamMembers.length; i++) {
  const member = teamMembers[i];

  teamHTML += `
    <div class="flex">
      <figure>
        <img src="${member.img}" alt="${member.name}" height="90px" />
      </figure>
      <div class="flex flex-column">
        <h5>${member.name}</h5>
        <span>${member.email}</span>
        <span>${member.role}</span>
      </div>
    </div>
  `;
}

teamContainer.innerHTML = teamHTML;

//VARIANTE CON CREATE ELEMENT
// teamMembers.forEach((member) => {
//   const memberCard = document.createElement("div");
//   memberCard.classList.add("flex");

//   memberCard.innerHTML = `
//   <figure>
//     <img src="${member.img}" alt="${member.name}" height="90px" />
//   </figure>
//   <div class="flex flex-column">
//     <h5>${member.name}</h5>
//     <span>${member.email}</span>
//     <span>${member.role}</span>
//   </div>
// `;

//   teamContainer.appendChild(memberCard);
// });
