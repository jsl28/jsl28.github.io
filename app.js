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

const competitions = [
  {
    id: "pacific-state-track",
    title: "Pacific State Track Championships",
    sport: "Track & Field",
    city: "Portland",
    region: "North America",
    country: "United States",
    date: "Jul 18-20, 2026",
    distanceKm: 18,
    status: "upcoming",
    recurring: true,
    summary:
      "Annual state championship for youth, high school, and open track divisions.",
    tags: ["Nearby", "Recurring", "Qualifiers open"],
    history: [
      "2025 - 2,140 athletes competed across 62 events",
      "2024 - Meet record set in the girls 400m final",
      "2023 - Expanded para-athletics divisions"
    ],
    results: [
      { division: "2025 Girls 400m", winner: "Kai Morgan", result: "54.88s" },
      { division: "2025 Boys Long Jump", winner: "Dev Patel", result: "7.12m" }
    ]
  },
  {
    id: "canada-junior-hoops",
    title: "Canada Junior Hoops Classic",
    sport: "Basketball",
    city: "Toronto",
    region: "North America",
    country: "Canada",
    date: "Aug 9-11, 2026",
    distanceKm: 3350,
    status: "upcoming",
    recurring: true,
    summary:
      "Regional club basketball showcase with scholarship scouting reports and team rankings.",
    tags: ["U16", "U18", "Scouted"],
    history: [
      "2025 - Toronto North won the U18 final",
      "2024 - Added a girls elite bracket",
      "2023 - 48 teams from five provinces attended"
    ],
    results: [
      { division: "2025 U18 Final", winner: "Toronto North", result: "72-68" },
      { division: "2025 U16 Final", winner: "Ottawa Rise", result: "61-54" }
    ]
  },
  {
    id: "london-open-tennis",
    title: "London Community Tennis Open",
    sport: "Tennis",
    city: "London",
    region: "Europe",
    country: "United Kingdom",
    date: "Sep 3-6, 2026",
    distanceKm: 7900,
    status: "upcoming",
    recurring: false,
    summary:
      "Grassroots singles and doubles tournament with public draws and live match updates.",
    tags: ["Singles", "Doubles", "Registration live"],
    history: ["First edition launches in 2026"],
    results: []
  },
  {
    id: "tokyo-swim-series",
    title: "Tokyo International Swim Series",
    sport: "Swimming",
    city: "Tokyo",
    region: "Asia-Pacific",
    country: "Japan",
    date: "Completed Apr 12, 2026",
    distanceKm: 7800,
    status: "results",
    recurring: true,
    summary:
      "International swim meet where clubs publish official heats, finals, and medal results.",
    tags: ["Results posted", "International", "Recurring"],
    history: [
      "2026 - 31 countries represented",
      "2025 - New junior relay category launched",
      "2024 - Attendance crossed 10,000 spectators"
    ],
    results: [
      { division: "Women's 100m Free", winner: "Ami Tanaka", result: "53.98s" },
      { division: "Men's 200m Fly", winner: "Leo Martins", result: "1:55.42" },
      { division: "Mixed 4x100 Relay", winner: "Japan Blue", result: "3:27.10" }
    ]
  },
  {
    id: "delhi-schools-football",
    title: "Delhi Schools Football Cup",
    sport: "Football",
    city: "New Delhi",
    region: "Asia-Pacific",
    country: "India",
    date: "Completed Feb 22, 2026",
    distanceKm: 11900,
    status: "results",
    recurring: true,
    summary:
      "School football competition with bracket history, player awards, and public results.",
    tags: ["Results posted", "Schools", "Recurring"],
    history: [
      "2026 - 96 schools entered the cup",
      "2025 - Girls division expanded to 32 teams",
      "2024 - Final streamed globally for the first time"
    ],
    results: [
      { division: "Senior Final", winner: "Riverdale Academy", result: "3-1" },
      { division: "Golden Boot", winner: "Anaya Rao", result: "11 goals" }
    ]
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
const competitionFilters = {
  scope: document.querySelector("#scope-filter"),
  region: document.querySelector("#region-filter"),
  country: document.querySelector("#country-filter"),
  status: document.querySelector("#status-filter")
};
const competitionList = document.querySelector("#competition-list");
const competitionEmpty = document.querySelector("#competition-empty");
const competitionCount = document.querySelector("#competition-count");
const countryCount = document.querySelector("#country-count");
const resultCount = document.querySelector("#result-count");
const competitionTitle = document.querySelector("#competition-title");
const competitionMeta = document.querySelector("#competition-meta");
const competitionSummary = document.querySelector("#competition-summary");
const competitionTags = document.querySelector("#competition-tags");
const competitionHistory = document.querySelector("#competition-history");
const competitionResults = document.querySelector("#competition-results");
let activeCompetitionId = competitions[0].id;

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

function addOptions(select, values) {
  values.forEach((value) => {
    const option = document.createElement("option");
    option.value = value;
    option.textContent = value;
    select.appendChild(option);
  });
}

function getFilteredCompetitions() {
  return competitions.filter((competition) => {
    const matchesScope =
      competitionFilters.scope.value === "all" || competition.distanceKm <= 120;
    const matchesRegion =
      competitionFilters.region.value === "all" ||
      competition.region === competitionFilters.region.value;
    const matchesCountry =
      competitionFilters.country.value === "all" ||
      competition.country === competitionFilters.country.value;
    const matchesStatus =
      competitionFilters.status.value === "all" ||
      competition.status === competitionFilters.status.value;

    return matchesScope && matchesRegion && matchesCountry && matchesStatus;
  });
}

function renderCompetitionCards(filteredCompetitions) {
  competitionList.innerHTML = "";
  competitionEmpty.hidden = filteredCompetitions.length > 0;

  filteredCompetitions.forEach((competition) => {
    const card = document.createElement("button");
    const title = document.createElement("h3");
    const meta = document.createElement("p");
    const badgeRow = document.createElement("div");
    const statusBadge = document.createElement("span");
    const recurringBadge = document.createElement("span");

    card.type = "button";
    card.className = "competition-card";
    card.dataset.competitionId = competition.id;
    card.classList.toggle("is-active", competition.id === activeCompetitionId);
    card.setAttribute("aria-pressed", String(competition.id === activeCompetitionId));

    title.textContent = competition.title;
    meta.textContent = `${competition.sport} - ${competition.city}, ${competition.country} - ${competition.date}`;
    badgeRow.className = "competition-meta-row";
    statusBadge.className = `competition-badge ${competition.status}`;
    statusBadge.textContent =
      competition.status === "results" ? "Results posted" : "Upcoming";
    recurringBadge.className = "competition-badge";
    recurringBadge.textContent = competition.recurring ? "Recurring history" : "New event";

    badgeRow.append(statusBadge, recurringBadge);
    card.append(title, meta, badgeRow);
    card.addEventListener("click", () => {
      activeCompetitionId = competition.id;
      renderCompetitions();
    });
    competitionList.appendChild(card);
  });
}

function renderCompetitionDetail(competition) {
  competitionTitle.textContent = competition.title;
  competitionMeta.textContent = `${competition.sport} - ${competition.city}, ${competition.region}, ${competition.country} - ${competition.date}`;
  competitionSummary.textContent = competition.summary;
  renderList(competitionTags, competition.tags, "pill");
  renderList(competitionHistory, competition.history, "timeline-item");

  competitionResults.innerHTML = "";
  if (competition.results.length === 0) {
    const empty = document.createElement("p");
    empty.className = "empty-state";
    empty.textContent = "Results will appear here once organizers post them.";
    competitionResults.appendChild(empty);
    return;
  }

  competition.results.forEach((result) => {
    const row = document.createElement("div");
    const division = document.createElement("strong");
    const winner = document.createElement("span");
    const score = document.createElement("span");

    row.className = "result-row";
    division.textContent = result.division;
    winner.textContent = result.winner;
    score.textContent = result.result;

    row.append(division, winner, score);
    competitionResults.appendChild(row);
  });
}

function renderCompetitionStats(filteredCompetitions) {
  const countries = new Set(filteredCompetitions.map((competition) => competition.country));
  const postedResults = filteredCompetitions.reduce(
    (total, competition) => total + competition.results.length,
    0
  );

  competitionCount.textContent = filteredCompetitions.length;
  countryCount.textContent = countries.size;
  resultCount.textContent = postedResults;
}

function renderCompetitions() {
  const filteredCompetitions = getFilteredCompetitions();

  if (!filteredCompetitions.some((competition) => competition.id === activeCompetitionId)) {
    activeCompetitionId = filteredCompetitions[0]?.id || competitions[0].id;
  }

  renderCompetitionCards(filteredCompetitions);
  renderCompetitionStats(filteredCompetitions);
  renderCompetitionDetail(
    filteredCompetitions.find((competition) => competition.id === activeCompetitionId) ||
      competitions[0]
  );
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

addOptions(
  competitionFilters.region,
  [...new Set(competitions.map((competition) => competition.region))].sort()
);
addOptions(
  competitionFilters.country,
  [...new Set(competitions.map((competition) => competition.country))].sort()
);

Object.values(competitionFilters).forEach((filter) => {
  filter.addEventListener("change", renderCompetitions);
});

loadExample(1);
renderCompetitions();
