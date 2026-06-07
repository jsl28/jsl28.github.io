const examples = [
  {
    name: "Maya Thompson",
    role: "Basketball captain and youth coach",
    location: "Portland, OR",
    bio: "I collect game highlights, leadership milestones, and the players who shaped my competitive mindset.",
    sports: "Basketball, Track & Field, Strength Training",
    players: "A'ja Wilson - two-way dominance\nStephen Curry - shooting craft\nAllyson Felix - championship consistency",
    achievements: "2025 City league MVP\nVarsity captain for two seasons\nOrganized a free girls skills clinic for 64 athletes",
    students: "",
    activity: { contests: 14, bookings: 9, streak: 11, level: "Gold" }
  },
  {
    name: "Coach Andre Ellis",
    role: "Basketball coach and mentor",
    location: "Atlanta, GA",
    bio: "I help young athletes build confidence, master fundamentals, and turn steady practice into standout seasons.",
    sports: "Basketball, Conditioning, Film Study",
    players: "Dawn Staley - leadership and discipline\nStephen Curry - skill development\nA'ja Wilson - two-way dominance",
    achievements: "Led U16 team to regional finals\nHosted 38 free weekend clinics\nMentored 12 players into college programs",
    students: "Jordan Lee - earned all-state honors\nPriya Shah - improved free throws from 58% to 84%\nMarcus Reed - defensive player of the tournament",
    activity: { contests: 8, bookings: 18, streak: 22, level: "Coach" }
  },
  {
    name: "Elena Garcia",
    role: "Tennis fan and community analyst",
    location: "Austin, TX",
    bio: "I track favorite tennis moments, rec league wins, and the athletes whose tactics I study each week.",
    sports: "Tennis, Pickleball, Running",
    players: "Iga Swiatek - baseline pressure\nCoco Gauff - fearless defense\nRafael Nadal - relentless resilience",
    achievements: "Community doubles league champion\nPublished 52 weekly match breakdowns\nCompleted first half marathon",
    students: "",
    activity: { contests: 21, bookings: 6, streak: 15, level: "Platinum" }
  }
];

const centres = [
  {
    id: "greenfield-arena",
    name: "Greenfield Arena",
    location: "Koramangala, Bengaluru",
    distanceKm: 2.4,
    games: ["Badminton", "Basketball", "Table Tennis"],
    ownerRule: "Owner base rate + demand surge after 60% slots are booked.",
    slots: [
      { id: "ga-6", time: "6:00 PM", game: "Badminton", capacity: 6, booked: 3, basePrice: 420, ownerMultiplier: 1.15 },
      { id: "ga-7", time: "7:00 PM", game: "Basketball", capacity: 10, booked: 7, basePrice: 1200, ownerMultiplier: 1.1 },
      { id: "ga-8", time: "8:00 PM", game: "Table Tennis", capacity: 4, booked: 1, basePrice: 280, ownerMultiplier: 1.05 }
    ]
  },
  {
    id: "orbit-sports-club",
    name: "Orbit Sports Club",
    location: "Indiranagar, Bengaluru",
    distanceKm: 5.8,
    games: ["Football", "Cricket Nets", "Pickleball"],
    ownerRule: "Owner sets premium evening rates; price eases when more than 4 slots remain.",
    slots: [
      { id: "os-5", time: "5:30 PM", game: "Football", capacity: 14, booked: 10, basePrice: 1800, ownerMultiplier: 1.2 },
      { id: "os-7", time: "7:00 PM", game: "Cricket Nets", capacity: 8, booked: 4, basePrice: 650, ownerMultiplier: 1.08 },
      { id: "os-9", time: "9:00 PM", game: "Pickleball", capacity: 6, booked: 2, basePrice: 500, ownerMultiplier: 1.0 }
    ]
  },
  {
    id: "northstar-courts",
    name: "Northstar Courts",
    location: "Hebbal, Bengaluru",
    distanceKm: 11.2,
    games: ["Tennis", "Squash", "Badminton"],
    ownerRule: "Owner rewards early bookings, then increases price near sell-out.",
    slots: [
      { id: "ns-6", time: "6:30 PM", game: "Tennis", capacity: 4, booked: 2, basePrice: 900, ownerMultiplier: 1.12 },
      { id: "ns-8", time: "8:00 PM", game: "Squash", capacity: 4, booked: 3, basePrice: 720, ownerMultiplier: 1.18 },
      { id: "ns-9", time: "9:30 PM", game: "Badminton", capacity: 6, booked: 5, basePrice: 450, ownerMultiplier: 1.25 }
    ]
  }
];

const awards = [
  {
    id: "finals-ticket",
    title: "State finals VIP tickets",
    type: "Game tickets",
    sponsor: "Pacific State Track",
    criteria: "Contest participation and monthly play streak carry the highest odds boost.",
    baseOdds: 18,
    bids: 42
  },
  {
    id: "signed-jersey",
    title: "Signed captain jersey",
    type: "Player jersey",
    sponsor: "Maya Thompson",
    criteria: "Court bookings and recent contests improve jersey auction odds.",
    baseOdds: 12,
    bids: 61
  },
  {
    id: "training-pass",
    title: "Elite training day pass",
    type: "Coaching reward",
    sponsor: "Coach Andre Ellis",
    criteria: "Balanced activity across contests, bookings, and streaks gets priority odds.",
    baseOdds: 24,
    bids: 29
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
const profileContests = document.querySelector("#profile-contests");
const profileBookings = document.querySelector("#profile-bookings");
const profileStreak = document.querySelector("#profile-streak");
const profileScore = document.querySelector("#profile-score");
const competitionFilters = {
  search: document.querySelector("#competition-search"),
  scope: document.querySelector("#scope-filter"),
  region: document.querySelector("#region-filter"),
  country: document.querySelector("#country-filter"),
  status: document.querySelector("#status-filter")
};
const quickFilterButtons = document.querySelectorAll(".quick-filter");
const competitionReset = document.querySelector("#competition-reset");
const competitionList = document.querySelector("#competition-list");
const competitionEmpty = document.querySelector("#competition-empty");
const competitionCount = document.querySelector("#competition-count");
const countryCount = document.querySelector("#country-count");
const resultCount = document.querySelector("#result-count");
const competitionFilterSummary = document.querySelector("#competition-filter-summary");
const competitionTitle = document.querySelector("#competition-title");
const competitionMeta = document.querySelector("#competition-meta");
const competitionSummary = document.querySelector("#competition-summary");
const competitionTags = document.querySelector("#competition-tags");
const competitionHistory = document.querySelector("#competition-history");
const competitionResults = document.querySelector("#competition-results");
const competitionStatusPill = document.querySelector("#competition-status-pill");
const historyCount = document.querySelector("#history-count");
const detailResultCount = document.querySelector("#detail-result-count");
let activeCompetitionId = competitions[0].id;
let activePreset = "all";
const centreFilters = {
  game: document.querySelector("#centre-game-filter"),
  distance: document.querySelector("#centre-distance-filter")
};
const centreList = document.querySelector("#centre-list");
const centreCount = document.querySelector("#centre-count");
const slotCount = document.querySelector("#slot-count");
const avgPrice = document.querySelector("#avg-price");
const centreSummary = document.querySelector("#centre-summary");
const centreDistance = document.querySelector("#centre-distance");
const centreName = document.querySelector("#centre-name");
const centreLocation = document.querySelector("#centre-location");
const centrePricingNote = document.querySelector("#centre-pricing-note");
const centreGames = document.querySelector("#centre-games");
const centreOpenSlots = document.querySelector("#centre-open-slots");
const slotList = document.querySelector("#slot-list");
const awardPlayerSelect = document.querySelector("#award-player-select");
const awardContests = document.querySelector("#award-contests");
const awardBookings = document.querySelector("#award-bookings");
const awardStreak = document.querySelector("#award-streak");
const awardScore = document.querySelector("#award-score");
const awardList = document.querySelector("#award-list");
let activeCentreId = centres[0].id;
let activeProfileActivity = examples[1].activity;

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
  const query = competitionFilters.search.value.trim().toLowerCase();

  return competitions.filter((competition) => {
    const searchableText = [
      competition.title,
      competition.sport,
      competition.city,
      competition.region,
      competition.country,
      competition.date,
      competition.summary,
      ...competition.tags,
      ...competition.history
    ]
      .join(" ")
      .toLowerCase();
    const matchesSearch = !query || searchableText.includes(query);
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

    return matchesSearch && matchesScope && matchesRegion && matchesCountry && matchesStatus;
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
    const cardFooter = document.createElement("div");
    const statusBadge = document.createElement("span");
    const recurringBadge = document.createElement("span");
    const resultBadge = document.createElement("span");

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
    resultBadge.className = "competition-badge signal";
    resultBadge.textContent = `${competition.results.length} result${competition.results.length === 1 ? "" : "s"}`;
    cardFooter.className = "competition-card-footer";
    cardFooter.innerHTML = `<strong>${competition.distanceKm <= 120 ? "Nearby signal" : "Global signal"}</strong><span>${competition.region}</span>`;

    badgeRow.append(statusBadge, recurringBadge, resultBadge);
    card.append(title, meta, badgeRow, cardFooter);
    card.addEventListener("click", () => {
      activeCompetitionId = competition.id;
      renderCompetitions();
    });
    competitionList.appendChild(card);
  });
}

function renderCompetitionDetail(competition) {
  competitionStatusPill.className = `competition-badge ${competition.status}`;
  competitionStatusPill.textContent =
    competition.status === "results" ? "Results posted" : "Upcoming";
  competitionTitle.textContent = competition.title;
  competitionMeta.textContent = `${competition.sport} - ${competition.city}, ${competition.region}, ${competition.country} - ${competition.date}`;
  competitionSummary.textContent = competition.summary;
  historyCount.textContent = `${competition.history.length} seasons`;
  detailResultCount.textContent = `${competition.results.length} posted`;
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

function renderFilterSummary(filteredCompetitions) {
  const parts = [];

  if (competitionFilters.search.value.trim()) {
    parts.push(`Search: "${competitionFilters.search.value.trim()}"`);
  }
  if (competitionFilters.scope.value !== "all") {
    parts.push("Nearby");
  }
  if (competitionFilters.region.value !== "all") {
    parts.push(competitionFilters.region.value);
  }
  if (competitionFilters.country.value !== "all") {
    parts.push(competitionFilters.country.value);
  }
  if (competitionFilters.status.value !== "all") {
    parts.push(competitionFilters.status.value === "results" ? "Results posted" : "Upcoming");
  }

  competitionFilterSummary.textContent =
    parts.length > 0
      ? `${filteredCompetitions.length} match${filteredCompetitions.length === 1 ? "" : "es"} - ${parts.join(" / ")}`
      : `${filteredCompetitions.length} worldwide competitions indexed`;
}

function updateQuickFilters() {
  quickFilterButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.preset === activePreset);
  });
}

function renderCompetitions() {
  const filteredCompetitions = getFilteredCompetitions();

  if (!filteredCompetitions.some((competition) => competition.id === activeCompetitionId)) {
    activeCompetitionId = filteredCompetitions[0]?.id || competitions[0].id;
  }

  renderCompetitionCards(filteredCompetitions);
  renderCompetitionStats(filteredCompetitions);
  renderFilterSummary(filteredCompetitions);
  updateQuickFilters();
  renderCompetitionDetail(
    filteredCompetitions.find((competition) => competition.id === activeCompetitionId) ||
      competitions[0]
  );
}

function setCompetitionFilters(values) {
  Object.entries(values).forEach(([key, value]) => {
    competitionFilters[key].value = value;
  });
}

function applyCompetitionPreset(preset) {
  activePreset = preset;

  const presets = {
    all: { search: "", scope: "all", region: "all", country: "all", status: "all" },
    nearby: { search: "", scope: "nearby", region: "all", country: "all", status: "all" },
    results: { search: "", scope: "all", region: "all", country: "all", status: "results" },
    championships: {
      search: "championship",
      scope: "all",
      region: "all",
      country: "all",
      status: "all"
    }
  };

  setCompetitionFilters(presets[preset]);
  renderCompetitions();
}

function getActivityScore(activity) {
  return activity.contests * 12 + activity.bookings * 9 + activity.streak * 5;
}

function getSlotAvailability(slot) {
  return Math.max(slot.capacity - slot.booked, 0);
}

function getSlotPrice(slot) {
  const demandRatio = slot.booked / slot.capacity;
  const demandMultiplier = demandRatio >= 0.8 ? 1.35 : demandRatio >= 0.6 ? 1.18 : 1;
  return Math.round(slot.basePrice * slot.ownerMultiplier * demandMultiplier);
}

function getCentreOpenSlots(centre) {
  return centre.slots.reduce((total, slot) => total + getSlotAvailability(slot), 0);
}

function getFilteredCentres() {
  const selectedGame = centreFilters.game.value;
  const selectedDistance = centreFilters.distance.value;

  return centres.filter((centre) => {
    const matchesGame = selectedGame === "all" || centre.games.includes(selectedGame);
    const matchesDistance =
      selectedDistance === "all" || centre.distanceKm <= Number(selectedDistance);

    return matchesGame && matchesDistance;
  });
}

function renderCentreCards(filteredCentres) {
  centreList.innerHTML = "";

  filteredCentres.forEach((centre) => {
    const card = document.createElement("button");
    const title = document.createElement("h3");
    const meta = document.createElement("p");
    const badges = document.createElement("div");
    const slotBadge = document.createElement("span");
    const priceBadge = document.createElement("span");
    const lowestPrice = Math.min(...centre.slots.map(getSlotPrice));

    card.type = "button";
    card.className = "centre-card";
    card.classList.toggle("is-active", centre.id === activeCentreId);
    card.setAttribute("aria-pressed", String(centre.id === activeCentreId));

    title.textContent = centre.name;
    meta.textContent = `${centre.location} - ${centre.distanceKm} km away`;
    badges.className = "competition-meta-row";
    slotBadge.className = "competition-badge";
    slotBadge.textContent = `${getCentreOpenSlots(centre)} open slots`;
    priceBadge.className = "competition-badge signal";
    priceBadge.textContent = `From ₹${lowestPrice}`;

    badges.append(slotBadge, priceBadge);
    card.append(title, meta, badges);
    card.addEventListener("click", () => {
      activeCentreId = centre.id;
      renderCentres();
    });
    centreList.appendChild(card);
  });
}

function renderCentreStats(filteredCentres) {
  const openSlots = filteredCentres.reduce((total, centre) => total + getCentreOpenSlots(centre), 0);
  const prices = filteredCentres.flatMap((centre) => centre.slots.map(getSlotPrice));
  const averagePrice =
    prices.length > 0 ? Math.round(prices.reduce((total, price) => total + price, 0) / prices.length) : 0;

  centreCount.textContent = filteredCentres.length;
  slotCount.textContent = openSlots;
  avgPrice.textContent = `₹${averagePrice}`;
  centreSummary.textContent =
    filteredCentres.length > 0
      ? `${openSlots} playable slots across ${filteredCentres.length} centre${filteredCentres.length === 1 ? "" : "s"}`
      : "No centres match those filters";
}

function renderCentreDetail(centre) {
  centreDistance.textContent = `${centre.distanceKm} km away`;
  centreName.textContent = centre.name;
  centreLocation.textContent = centre.location;
  centrePricingNote.textContent = centre.ownerRule;
  centreOpenSlots.textContent = `${getCentreOpenSlots(centre)} open`;
  renderList(centreGames, centre.games, "pill");
  slotList.innerHTML = "";

  centre.slots.forEach((slot) => {
    const availability = getSlotAvailability(slot);
    const row = document.createElement("div");
    const details = document.createElement("div");
    const title = document.createElement("strong");
    const meta = document.createElement("span");
    const price = document.createElement("strong");
    const action = document.createElement("button");

    row.className = "slot-row";
    title.textContent = `${slot.game} - ${slot.time}`;
    meta.textContent = `${availability}/${slot.capacity} slots available`;
    details.append(title, meta);
    price.textContent = `₹${getSlotPrice(slot)}`;
    action.className = "slot-book-button";
    action.type = "button";
    action.textContent = availability > 0 ? "Book" : "Full";
    action.disabled = availability === 0;
    action.addEventListener("click", () => {
      if (getSlotAvailability(slot) === 0) {
        return;
      }

      slot.booked += 1;
      activeProfileActivity.bookings += 1;
      renderCentres();
      updateActivityPreview();
      renderAwards();
    });

    row.append(details, price, action);
    slotList.appendChild(row);
  });
}

function renderCentres() {
  const filteredCentres = getFilteredCentres();

  if (!filteredCentres.some((centre) => centre.id === activeCentreId)) {
    activeCentreId = filteredCentres[0]?.id || centres[0].id;
  }

  renderCentreCards(filteredCentres);
  renderCentreStats(filteredCentres);
  renderCentreDetail(filteredCentres.find((centre) => centre.id === activeCentreId) || centres[0]);
}

function renderAwardPlayerOptions() {
  examples.forEach((example, index) => {
    const option = document.createElement("option");
    option.value = String(index);
    option.textContent = example.name;
    awardPlayerSelect.appendChild(option);
  });
  awardPlayerSelect.value = "1";
}

function getAwardOdds(award, activity) {
  const scoreBoost = Math.min(getActivityScore(activity) / 18, 32);
  const contestBoost = Math.min(activity.contests * 0.9, 18);
  const bookingBoost = Math.min(activity.bookings * 0.75, 20);
  return Math.min(Math.round(award.baseOdds + scoreBoost + contestBoost + bookingBoost), 92);
}

function renderAwards() {
  const selectedProfile = examples[Number(awardPlayerSelect.value)];
  const activity = selectedProfile.activity;

  awardContests.textContent = activity.contests;
  awardBookings.textContent = activity.bookings;
  awardStreak.textContent = activity.streak;
  awardScore.textContent = getActivityScore(activity);
  awardList.innerHTML = "";

  awards.forEach((award) => {
    const odds = getAwardOdds(award, activity);
    const item = document.createElement("article");
    const top = document.createElement("div");
    const title = document.createElement("h3");
    const type = document.createElement("span");
    const criteria = document.createElement("p");
    const meter = document.createElement("div");
    const meterFill = document.createElement("span");
    const footer = document.createElement("div");
    const oddsLabel = document.createElement("strong");
    const bidButton = document.createElement("button");

    item.className = "award-card card";
    top.className = "award-card-top";
    type.className = "competition-badge signal";
    title.textContent = award.title;
    type.textContent = award.type;
    top.append(title, type);
    criteria.textContent = `${award.sponsor} - ${award.criteria}`;
    meter.className = "odds-meter";
    meterFill.style.width = `${odds}%`;
    meter.appendChild(meterFill);
    footer.className = "award-card-footer";
    oddsLabel.textContent = `${odds}% odds score`;
    bidButton.type = "button";
    bidButton.className = "slot-book-button";
    bidButton.textContent = `Bid (${award.bids})`;
    bidButton.addEventListener("click", () => {
      award.bids += 1;
      activeProfileActivity.contests += 1;
      renderAwards();
      updateActivityPreview();
    });
    footer.append(oddsLabel, bidButton);
    item.append(top, criteria, meter, footer);
    awardList.appendChild(item);
  });
}

function updateActivityPreview() {
  profileContests.textContent = activeProfileActivity.contests;
  profileBookings.textContent = activeProfileActivity.bookings;
  profileStreak.textContent = activeProfileActivity.streak;
  profileScore.textContent = getActivityScore(activeProfileActivity);
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
  updateActivityPreview();
}

function loadExample(index) {
  const example = examples[index];

  Object.entries(example).forEach(([key, value]) => {
    if (!fields[key]) {
      return;
    }

    fields[key].value = value;
  });

  activeProfileActivity = example.activity;

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
addOptions(
  centreFilters.game,
  [...new Set(centres.flatMap((centre) => centre.games))].sort()
);
renderAwardPlayerOptions();

competitionFilters.search.addEventListener("input", () => {
  activePreset = "custom";
  renderCompetitions();
});

["scope", "region", "country", "status"].forEach((filterKey) => {
  competitionFilters[filterKey].addEventListener("change", () => {
    activePreset = "custom";
    renderCompetitions();
  });
});

quickFilterButtons.forEach((button) => {
  button.addEventListener("click", () => applyCompetitionPreset(button.dataset.preset));
});

competitionReset.addEventListener("click", () => {
  applyCompetitionPreset("all");
});

Object.values(centreFilters).forEach((filter) => {
  filter.addEventListener("change", renderCentres);
});

awardPlayerSelect.addEventListener("change", renderAwards);

loadExample(1);
renderCompetitions();
renderCentres();
renderAwards();
