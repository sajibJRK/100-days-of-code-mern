const name = "sajib kumar";
const age = 20;
const job = "JavaScript Developer";
const myLocation = "khulna, Bangladesh"; 

const photoURL = "download.jpg";

const profileHTML = `
  <img src="${photoURL}" alt="${name}">
  <h2>${name}</h2>
  <p><strong>Age:</strong> ${age}</p>
  <p><strong>Job:</strong> ${job}</p>
  <p><strong>Location:</strong> ${myLocation}</p>
`;

const cardDiv = document.getElementById("profile-card");
cardDiv.innerHTML = profileHTML;
