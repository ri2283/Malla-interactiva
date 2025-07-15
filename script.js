// Guardar estado en localStorage
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".course").forEach(course => {
    const id = course.dataset.id;
    const approved = localStorage.getItem(id) === "true";
    if (approved) course.classList.add("approved");
  });
  updateLocks();
});

function toggleCourse(element) {
  if (element.classList.contains("locked")) return;

  element.classList.toggle("approved");

  const id = element.dataset.id;
  const approved = element.classList.contains("approved");
  localStorage.setItem(id, approved);

  updateLocks();
}

function updateLocks() {
  document.querySelectorAll(".course").forEach(course => {
    const prereqs = course.dataset.prereqs.split(",").filter(Boolean);
    let locked = false;

    prereqs.forEach(prereq => {
      const isApproved = localStorage.getItem(prereq) === "true";
      if (!isApproved) locked = true;
    });

    if (locked && !course.classList.contains("approved")) {
      course.classList.add("locked");
    } else {
      course.classList.remove("locked");
    }
  });
}
