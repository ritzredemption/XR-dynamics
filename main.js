/* =====================================================================
   XR DYNAMICS — PROJECT CONFIG
   - videos: list of Google Drive share links (set sharing to "Anyone with the link").
             Empty list, or "PASTE_GOOGLE_DRIVE_LINK_HERE", shows VIDEO COMING SOON.
   - link:   where "View Project" goes (GitHub repo, page, etc.).
             null shows "Project not hosted" when clicked.
   - notHosted: true adds a "View Project" button that says "Project not hosted"
             next to the link button.
   - videos entries can also be { image } (a still) or { slides: [...] } (slideshow).
   ===================================================================== */
const D = id => `https://drive.google.com/file/d/${id}/view?usp=sharing`;

const PROJECTS = [
  {
    name: "Flight Dynamics",
    videos: [
      { image: "cover.jpg", label: "Overview", alt: "Flight Dynamics plugin cover: a fighter jet taking off with afterburner on a dark runway" },
      { slides: Array.from({ length: 15 }, (_, n) => `assets/slide-${String(n + 1).padStart(2, "0")}.jpg`), label: "Gallery" }
    ],
    description: "A physics-based flight dynamics plugin for Unreal Engine 5.5 to 5.8, with real lift, drag and thrust simulated in the Chaos physics engine.",
    explain: "Realistic physics across the entire speed and altitude range, from runway take-off to landing. Advanced fly-by-wire keeps the aircraft inside its flight envelope while control surfaces follow the flight computer. Includes retractable landing gear, a feature-rich HUD (airspeed, Mach, G, angle of attack, altitude, vertical speed, thrust), three camera modes and an afterburner plume.",
    tech: ["Unreal Engine 5.5 - 5.8", "Chaos Physics", "Fly-by-Wire", "C++", "Flight Dynamics"],
    badge: true,
    linkLabel: "View on Fab",
    link: "https://www.fab.com/sellers/Ritzredemption",
    notHosted: true
  },
  {
    name: "VR Flight Control",
    videos: [D("1FySv33YDpeFj6nYDj_9p9xyYhpNBCROk"), D("1WKge83s7ZWFLK5QQ7wHg3SJ0yMPHQThu")],
    description: "Immersive aircraft control in VR, where the pilot's hands drive the stick and throttle of a physically simulated cockpit.",
    explain: "Flight dynamics: a six-degree-of-freedom aircraft model combines lift, drag, thrust and control-surface moments, so pitch, roll and yaw respond to real stick and throttle input. Experiments were run on Meta Quest 2 and Meta Quest 3.",
    tech: ["Meta Quest 2 / 3", "Unreal Engine 5", "OpenXR", "C++", "Flight Dynamics"],
    link: null
  },
  {
    name: "XR Vehicle Dynamics",
    videos: [D("1DMjUeLv4TKjiF2ibiU8_kPg_hNaOXxUJ"), D("1XJLs-0gORGoiUDGmrtlSvhWMNVF8OM32")],
    description: "VR driving on a physics-based vehicle model with suspension, tires, drivetrain and aerodynamics.",
    explain: "Vehicle dynamics: weight transfer, tire slip, suspension travel and drivetrain torque shape how the car accelerates, brakes and corners, and the driver feels it through the headset. Experiments were run on Meta Quest 2 and Meta Quest 3.",
    tech: ["Meta Quest 2 / 3", "Unreal Engine 5", "Chaos Physics", "C++", "OpenXR"],
    badge: true,
    linkLabel: "View on Fab",
    link: "https://www.fab.com/listings/86e8e62b-caf1-4cb6-a589-7d7cf601143f"
  },
  {
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
    name: "Physical AI Simulation",
    videos: [
      { src: D("15MAT5rJu8l7O7wZy522v2h_79KndFe_P"), label: "Physics Simulation 01" },
      { src: D("16Yu1kFCJESCnyLA3o7ElbS2UpScsxNbu"), label: "Physics Simulation 02" },
      { src: D("1YfiNn-AmFuifenn84SmFhLRVKYZ91Qot"), label: "Physics Simulation 03" }
    ],
    description: "Physics, sensors and reinforcement learning in Unreal Engine, for training and testing intelligent robotic systems.",
    explain: "Sensor simulation provides the perception layer, and physics-based robots learn control policies through reinforcement learning in the same environment, before they meet real hardware.",
    tech: ["Unreal Engine 5", "Sensor Simulation", "Reinforcement Learning", "Robotics", "Python"],
    badge: true,
    linkLabel: "View on Fab",
    link: "https://www.fab.com/listings/c172b7cc-627b-4665-a35b-3af1f253486c"
  },
  {
    name: "XR-Interaction",
    videos: [D("1acHx-3bKSOsBLOZVNms6vD89pzpdrNqa")],
    description: "Interactive architecture and interior spaces explored in VR, built for real-time walkthroughs and showrooms.",
    explain: "Four pre-built interior environments, from an ocean-view villa to a city penthouse and Mediterranean spaces, optimized for real-time exploration on desktop and VR/XR headsets.",
    tech: ["Meta Quest 2 / 3", "Unreal Engine 5", "OpenXR", "VR Interaction", "Architectural Visualization"],
    badge: true,
    linkLabel: "View on Fab",
    link: "https://www.fab.com/listings/60d5361c-576c-4e6e-97d0-b7680edd3311"
  },
  {
    name: "VR-Space Station",
    videos: [D("176CmRi6BICqlwTMlddwWWMP3Aer3GsnD"), D("1PXn8u_nR9X-14hT4VJCV8brUeIqClg-Z")],
    description: "A modular VR space station template for building immersive space simulations and VR games.",
    explain: "Optimized VR controls in a sci-fi station with emissive and metallic materials, transparent glass surfaces and Niagara-animated elements, ready to customize in Unreal Engine.",
    tech: ["Meta Quest 2 / 3", "Unreal Engine 5", "OpenXR", "Niagara", "VR Template"],
    badge: true,
    linkLabel: "View on Fab",
    link: "https://www.fab.com/listings/2fe19cdf-d7ae-4ebb-a93a-5735a8c1915e"
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

const UE = `<span class="ue"><svg viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="14" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M10.5 9.5v7.2c0 3.2 2.2 5.3 5.5 5.3s5.5-2.1 5.5-5.3V9.5" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>UNREAL ENGINE</span>`;
const EMPTY = `<div class="video-empty"><div class="play"></div><span>VIDEO COMING SOON</span></div><div class="corners" aria-hidden="true"><i></i><i></i><i></i><i></i></div>`;

function render() {
  document.getElementById("projects").innerHTML = PROJECTS.map((p, i) => {
    const list = (p.videos && p.videos.length ? p.videos : [null, null]).map(v => (v && typeof v === "object") ? v : { src: v });
    const cells = list.map((v, k) => {
      if (v.image) {
        return `<figure><div class="video"><img class="cover-img" src="${esc(v.image)}" alt="${esc(v.alt || p.name)}" loading="lazy"></div><figcaption>${esc(v.label || "Image")}</figcaption></figure>`;
      }
      if (v.slides) {
        const imgs = v.slides.map((u, n) => `<img src="${esc(u)}" alt="${esc(p.name)} screenshot ${n + 1} of ${v.slides.length}" ${n ? 'loading="lazy"' : ""}>`).join("");
        return `<figure><div class="video slideshow" role="region" aria-roledescription="carousel" aria-label="${esc(p.name)} screenshots">${imgs}
          <button type="button" class="ss-btn prev" aria-label="Previous image">&#8249;</button>
          <button type="button" class="ss-btn next" aria-label="Next image">&#8250;</button>
          <span class="ss-count" aria-live="off"></span></div><figcaption>${esc(v.label || "Gallery")}</figcaption></figure>`;
      }
      const src = driveEmbed(v.src);
      const media = src
        ? `<iframe src="${esc(src)}" title="${esc(p.name)} demo ${k + 1}" loading="lazy" allow="autoplay; fullscreen" allowfullscreen></iframe>`
        : EMPTY;
      return `<figure><div class="video">${media}</div><figcaption>${esc(v.label || "Demo " + pad(k + 1))}</figcaption></figure>`;
    }).join("");
    return `
    <article class="project">
      <div class="project-head"><span class="idx">${pad(i + 1)} / ${pad(PROJECTS.length)}</span>
        <h2 class="project-name">${esc(p.name)}</h2>${p.badge ? UE : ""}</div>
      <div class="videos n${list.length}">${cells}</div>
      <div class="project-info">
        <div><p class="desc">${esc(p.description)}</p><p class="explain">${esc(p.explain)}</p></div>
        <div class="side">
          <ul class="tech">${p.tech.map(t => `<li>${esc(t)}</li>`).join("")}</ul>
          ${p.link
            ? `<a class="view" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.linkLabel || "View Project")}
            <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 12L12 2M5 2h7v7"/></svg></a>`
            : `<button type="button" class="view not-hosted" aria-live="polite">View Project</button>`}
          ${p.link && p.notHosted ? `<button type="button" class="view not-hosted ghost" aria-live="polite">View Project</button>` : ""}
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

document.addEventListener("click", e => {
  const b = e.target.closest(".not-hosted");
  if (!b) return;
  b.textContent = "Project not hosted";
  b.classList.add("off");
  clearTimeout(b._t);
  b._t = setTimeout(() => { b.textContent = "View Project"; b.classList.remove("off"); }, 2500);
});

function slideshows() {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll(".slideshow").forEach(el => {
    const slides = [...el.querySelectorAll("img")];
    const count = el.querySelector(".ss-count");
    let i = 0, timer = null;
    const show = n => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle("on", k === i));
      count.textContent = `${pad(i + 1)} / ${pad(slides.length)}`;
    };
    const stop = () => { clearInterval(timer); timer = null; };
    const play = () => { if (!reduce && !timer) timer = setInterval(() => show(i + 1), 3500); };
    el.querySelector(".prev").addEventListener("click", () => { show(i - 1); stop(); play(); });
    el.querySelector(".next").addEventListener("click", () => { show(i + 1); stop(); play(); });
    el.addEventListener("mouseenter", stop);
    el.addEventListener("mouseleave", play);
    el.addEventListener("focusin", stop);
    el.addEventListener("focusout", play);
    show(0);
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(es => es.forEach(e => e.isIntersecting ? play() : stop()), { threshold: 0.3 }).observe(el);
    } else play();
  });
}

render();
slideshows();
reveal();
