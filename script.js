const DEFAULT_PIN = "143";

function unlockCapsule() {
  const pin = document.getElementById("pinInput").value;

  if (pin === DEFAULT_PIN) {
    document.getElementById("lockScreen").classList.add("hidden");
    document.getElementById("capsuleSection").classList.remove("hidden");
    displayCapsules();
  } else {
    alert("Wrong PIN ❤️ Try again!");
  }
}

function saveCapsule() {
  const title = document.getElementById("title").value;
  const message = document.getElementById("message").value;
  const unlockDate = document.getElementById("unlockDate").value;

  if (!title || !message || !unlockDate) {
    alert("Please fill all fields ❤️");
    return;
  }

  const capsules = JSON.parse(localStorage.getItem("capsules")) || [];

  capsules.push({
    title,
    message,
    unlockDate
  });

  localStorage.setItem("capsules", JSON.stringify(capsules));

  document.getElementById("title").value = "";
  document.getElementById("message").value = "";
  document.getElementById("unlockDate").value = "";

  displayCapsules();
}

function displayCapsules() {
  const container = document.getElementById("capsulesContainer");
  container.innerHTML = "";

  const capsules = JSON.parse(localStorage.getItem("capsules")) || [];
  const today = new Date();

  capsules.forEach(capsule => {
    const unlockDate = new Date(capsule.unlockDate);
    const card = document.createElement("div");
    card.classList.add("memory-card");

    if (today >= unlockDate) {
      card.innerHTML = `
        <h3>${capsule.title}</h3>
        <p>${capsule.message}</p>
}
