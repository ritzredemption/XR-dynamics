/* =====================================================================
   XR DYNAMICS — PROJECT CONFIG
   - videos: list of Google Drive share links (set sharing to "Anyone with the link").
             Empty list, or "PASTE_GOOGLE_DRIVE_LINK_HERE", shows VIDEO COMING SOON.
   - link:   where "View Project" goes (GitHub repo, page, etc.).
   ===================================================================== */
const D = id => `https://drive.google.com/file/d/${id}/view?usp=sharing`;

const PROJECTS = [
  {
    icon: "✈️",
    name: "VR Flight Control",
    videos: [D("1FySv33YDpeFj6nYDj_9p9xyYhpNBCROk"), D("1WKge83s7ZWFLK5QQ7wHg3SJ0yMPHQThu")],
    description: "Immersive aircraft control in VR, where the pilot's hands drive the stick and throttle of a physically simulated cockpit.",
    explain: "Flight dynamics: a six-degree-of-freedom aircraft model combines lift, drag, thrust and control-surface moments, so pitch, roll and yaw respond to real stick and throttle input. Experiments were run on Meta Quest 2 and Meta Quest 3.",
    tech: ["Meta Quest 2 / 3", "Unreal Engine 5", "OpenXR", "C++", "Flight Dynamics"],
    link: "https://github.com/"
  },
  {
    icon: "🚗",
    name: "XR Vehicle Dynamics",
    videos: [D("1DMjUeLv4TKjiF2ibiU8_kPg_hNaOXxUJ"), D("1XJLs-0gORGoiUDGmrtlSvhWMNVF8OM32")],
    description: "VR driving on a physics-based vehicle model with suspension, tires, drivetrain and aerodynamics.",
    explain: "Vehicle dynamics: weight transfer, tire slip, suspension travel and drivetrain torque shape how the car accelerates, brakes and corners, and the driver feels it through the headset. Experiments were run on Meta Quest 2 and Meta Quest 3.",
    tech: ["Meta Quest 2 / 3", "Unreal Engine 5", "Chaos Physics", "C++", "OpenXR"],
    link: "https://github.com/"
  },
  {
    icon: "🤖",
    name: "XR Robot Teleoperation",
    videos: [
      D("1auHKqmb_3pX6-CcGPUCrzURR-o_vmsER"), D("12_1O5sF2GrRqA3nxrhUArN7XnZH3z5mO"),
      D("1vmRYNudguLOO_R8Z1Q4nknEGmol8VhfK"), D("1XhelwKwoSRyTek3e2uUjMV487Ms9RCpv")
    ],
    description: "XR-controlled robotics: an operator drives a real humanoid robot through a headset for warehouse operation.",
    explain: "Teleoperation dynamics of real humanoid robots: head and hand motion from Meta Quest 2 and Meta Quest 3 is mapped to the robot's body and arms, so one operator can handle warehouse tasks such as picking, carrying and placing. Experiments cover control response, latency and stability on the real machine.",
    tech: ["Meta Quest 2 / 3", "Humanoid Robots", "Warehouse Automation", "ROS 2", "Python"],
    link: "https://github.com/"
  },
  {
    icon: "🧠",
    name: "Physical AI Simulation",
    videos: [],
    description: "Physics, sensors and reinforcement learning in simulation, for training and testing intelligent physical systems.",
    explain: "Simulated sensors and physics provide the training environment where reinforcement-learning agents learn control policies before they meet real hardware.",
    tech: ["Reinforcement Learning", "PyTorch", "Sensor Simulation", "Python"],
    link: "https://github.com/"
  }
];
/* ===================================================================== */

function driveEmbed(input) {
  if (!input || input.includes("PASTE_")) return null;
  const m = input.match(/\/d\/([\w-]+)/) || input.match(/[?&]id=([\w-]+)/) || input.match(/^([\w-]{20,})$/);
  return m ? `https://drive.google.com/file/d/${m[1]}/preview` : input;
}
const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const pad = n => String(n).padStart(2, "0");

const EMPTY = `<div class="video-empty"><div class="play"></div><span>VIDEO COMING SOON</span></div><div class="corners" aria-hidden="true"><i></i><i></i><i></i><i></i></div>`;

function render() {
  document.getElementById("projects").innerHTML = PROJECTS.map((p, i) => {
    const list = p.videos && p.videos.length ? p.videos : [null, null];
    const cells = list.map((v, k) => {
      const src = driveEmbed(v);
      const media = src
        ? `<iframe src="${esc(src)}" title="${esc(p.name)} demo ${k + 1}" loading="lazy" allow="autoplay; fullscreen" allowfullscreen></iframe>`
        : EMPTY;
      return `<figure><div class="video">${media}</div><figcaption>Demo ${pad(k + 1)}</figcaption></figure>`;
    }).join("");
    return `
    <article class="project">
      <div class="project-head"><span class="idx">${pad(i + 1)} / ${pad(PROJECTS.length)}</span>
        <h2 class="project-name"><span class="ico" aria-hidden="true">${p.icon}</span>${esc(p.name)}</h2></div>
      <div class="videos">${cells}</div>
      <div class="project-info">
        <div><p class="desc">${esc(p.description)}</p><p class="explain">${esc(p.explain)}</p></div>
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
  const items = document.querySelectorAll(".project,.stats,.stats div");
  if (!("IntersectionObserver" in window)) return items.forEach(i => i.classList.add("in"));
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  }), { threshold: 0.08 });
  items.forEach(i => io.observe(i));
}

render();
reveal();
