/* =====================================================================
   XR DYNAMICS — PROJECT CONFIG
   - video: paste a Google Drive share link (set to "anyone with the link").
            Leave as "PASTE_GOOGLE_DRIVE_LINK_HERE" to show VIDEO COMING SOON.
   - link:  where "View Project" goes (GitHub repo, page, etc.).
   ===================================================================== */
const PROJECTS = [
  {
    icon: "✈️",
    name: "VR Flight Control",
    video: "PASTE_GOOGLE_DRIVE_LINK_HERE",
    description: "Immersive aircraft control in VR, with hands-on cockpit interaction and physically based flight dynamics.",
    tech: ["Unreal Engine 5", "OpenXR", "C++", "Flight Dynamics"],
    link: "https://github.com/"
  },
  {
    icon: "🚗",
    name: "XR Vehicle Dynamics",
    video: "PASTE_GOOGLE_DRIVE_LINK_HERE",
    description: "VR driving on a Chaos-based vehicle model with independent suspension, combined-slip tires, drivetrain and aero.",
    tech: ["Unreal Engine 5", "Chaos Physics", "C++", "Blueprint", "OpenXR"],
    link: "https://github.com/"
  },
  {
    icon: "🤖",
    name: "XR Robot Teleoperation",
    video: "PASTE_GOOGLE_DRIVE_LINK_HERE",
    description: "XR-controlled robotics: operate robots through headset and hand tracking with live state feedback.",
    tech: ["ROS 2", "Unity", "OpenXR", "Python", "Hand Tracking"],
    link: "https://github.com/"
  },
  {
    icon: "🧠",
    name: "Physical AI Simulation",
    video: "PASTE_GOOGLE_DRIVE_LINK_HERE",
    description: "Physics, sensors and reinforcement learning in simulation, for training and testing intelligent physical systems.",
    tech: ["Reinforcement Learning", "PyTorch", "Sensor Simulation", "Python"],
    link: "https://github.com/"
  }
];
/* ===================================================================== */

// Turn any Google Drive link (or bare file ID) into an embeddable preview URL.
function driveEmbed(input) {
  if (!input || input.includes("PASTE_")) return null;
  const m = input.match(/\/d\/([\w-]+)/) || input.match(/[?&]id=([\w-]+)/) || input.match(/^([\w-]{20,})$/);
  return m ? `https://drive.google.com/file/d/${m[1]}/preview` : input;
}

const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

function render() {
  const root = document.getElementById("projects");
  root.innerHTML = PROJECTS.map(p => {
    const src = driveEmbed(p.video);
    const media = src
      ? `<iframe src="${esc(src)}" title="${esc(p.name)} video" loading="lazy" allow="autoplay; fullscreen" allowfullscreen></iframe>`
      : `<div class="video-empty"><div class="play"></div><span>VIDEO COMING SOON</span></div><div class="corners" aria-hidden="true"><i></i><i></i><i></i><i></i></div>`;
    return `
    <article class="project">
      <h2 class="project-name"><span class="ico" aria-hidden="true">${p.icon}</span>${esc(p.name)}</h2>
      <div class="video">${media}</div>
      <div class="project-info">
        <p class="desc">${esc(p.description)}</p>
        <div class="side">
          <ul class="tech">${p.tech.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
          <a class="view" href="${esc(p.link)}" target="_blank" rel="noopener">View Project
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12L12 2M5 2h7v7"/></svg></a>
        </div>
      </div>
    </article>`;
  }).join("");
}

function reveal() {
  document.documentElement.classList.add("js");
  const items = document.querySelectorAll(".project");
  if (!("IntersectionObserver" in window)) return items.forEach(i => i.classList.add("in"));
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.08 });
  items.forEach(i => io.observe(i));
}

render();
reveal();
