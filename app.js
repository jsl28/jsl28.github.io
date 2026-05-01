const examples = [
  {
    name: "Maya Thompson",
    role: "Basketball captain and youth coach",
    location: "Portland, OR",
    bio: "I collect game highlights, leadership milestones, and the players who shaped my competitive mindset.",
    sports: "Basketball, Track & Field, Strength Training",
    players: "A'ja Wilson - two-way dominance\nStephen Curry - shooting craft\nAllyson Felix - championship consistency",
    achievements: "2025 City league MVP\nVarsity captain for two seasons\nOrganized a free girls skills clinic for 64 athletes",
    students: ""
  },
  {
    name: "Coach Andre Ellis",
    role: "Basketball coach and mentor",
    location: "Atlanta, GA",
    bio: "I help young athletes build confidence, master fundamentals, and turn steady practice into standout seasons.",
    sports: "Basketball, Conditioning, Film Study",
    players: "Dawn Staley - leadership and discipline\nStephen Curry - skill development\nA'ja Wilson - two-way dominance",
    achievements: "Led U16 team to regional finals\nHosted 38 free weekend clinics\nMentored 12 players into college programs",
    students: "Jordan Lee - earned all-state honors\nPriya Shah - improved free throws from 58% to 84%\nMarcus Reed - defensive player of the tournament"
  },
  {
    name: "Elena Garcia",
    role: "Tennis fan and community analyst",
    location: "Austin, TX",
    bio: "I track favorite tennis moments, rec league wins, and the athletes whose tactics I study each week.",
    sports: "Tennis, Pickleball, Running",
    players: "Iga Swiatek - baseline pressure\nCoco Gauff - fearless defense\nRafael Nadal - relentless resilience",
    achievements: "Community doubles league champion\nPublished 52 weekly match breakdowns\nCompleted first half marathon",
    students: ""
  }
];

const fields = {
  name: document.querySelector("#name"),
  role: document.querySelector("#role"),
  location: document.querySelector("#location"),
  bio: document.querySelector("#bio"),
  sports: document.querySelector("#sports"),
  players: document.querySelector("#players"),
  achievements: document.querySelector("#achievements"),
  students: document.querySelector("#students")
};

const tabButtons = document.querySelectorAll(".tab-button");
const profileName = document.querySelector("#profile-name");
const profileRole = document.querySelector("#profile-role");
const profileLocation = document.querySelector("#profile-location");
const profileBio = document.querySelector("#profile-bio");
const profileAvatar = document.querySelector("#profile-avatar");
const sportsList = document.querySelector("#sports-list");
const playersList = document.querySelector("#players-list");
const achievementsList = document.querySelector("#achievements-list");
const studentsList = document.querySelector("#students-list");
const studentsEmpty = document.querySelector("#students-empty");

function getLines(value) {
  return value
    .split(/\n|,/)
    .map((item) => item.trim())
    .filter(Boolean);
}

function getInitials(name) {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join("");

  return initials || "SP";
}

function renderList(element, values, className) {
  element.innerHTML = "";

  values.forEach((value) => {
    const item = document.createElement("div");
    item.textContent = value;
    item.className = className;
    element.appendChild(item);
  });
}

function renderStudents(students) {
  studentsList.innerHTML = "";
  studentsEmpty.hidden = students.length > 0;

  students.forEach((student) => {
    const item = document.createElement("div");
    const name = document.createElement("strong");
    const accomplishment = document.createElement("span");
    const [studentName, ...details] = student.split(" - ");

    item.className = "student-item";
    name.textContent = studentName;
    accomplishment.textContent = details.join(" - ") || "Accomplishment ready to add";
    item.append(name, accomplishment);
    studentsList.appendChild(item);
  });
}

function updatePreview() {
  const sports = getLines(fields.sports.value);
  const players = getLines(fields.players.value);
  const achievements = getLines(fields.achievements.value);
  const students = getLines(fields.students.value);

  profileName.textContent = fields.name.value || "Your sports name";
  profileRole.textContent = fields.role.value || "Sports role or headline";
  profileLocation.textContent = fields.location.value || "Location";
  profileBio.textContent = fields.bio.value || "Add a short bio about the sports story.";
  profileAvatar.textContent = getInitials(fields.name.value);

  renderList(sportsList, sports, "chip");
  renderList(playersList, players, "timeline-item");
  renderList(achievementsList, achievements, "timeline-item");
  renderStudents(students);
}

function loadExample(index) {
  const example = examples[index];

  Object.entries(example).forEach(([key, value]) => {
    fields[key].value = value;
  });

  tabButtons.forEach((button, buttonIndex) => {
    const isActive = buttonIndex === index;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });

  updatePreview();
}

Object.values(fields).forEach((field) => {
  field.addEventListener("input", () => {
    tabButtons.forEach((button) => {
      button.classList.remove("active");
      button.setAttribute("aria-selected", "false");
    });

    updatePreview();
  });
});

tabButtons.forEach((button, index) => {
  button.addEventListener("click", () => loadExample(index));
});

loadExample(1);
