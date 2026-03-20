const btn_menu = document.getElementById("btn_menu");
const nav = document.getElementById("nav");
const close1 = document.getElementById("close");
const overlay = document.getElementById("overlay");
const arrA = document.querySelectorAll("#nav ul li a");
const section = document.querySelectorAll("section");

btn_menu.addEventListener("click", () => {
  nav.classList.toggle("toggle");
  overlay.classList.toggle("toggle");
});
close1.addEventListener("click", () => {
  nav.classList.toggle("toggle");
  overlay.classList.toggle("toggle");
});
overlay.addEventListener("click", () => {
  nav.classList.toggle("toggle");
  overlay.classList.toggle("toggle");
});

const home = document.getElementById("header");

document.addEventListener("scroll", () => {
  home.classList.toggle("active", window.scrollY > 100);
  console.log(window.scrollY);
});

arrA.forEach((item) => {
  item.addEventListener("click", () => {
    nav.classList.remove("toggle");
    overlay.classList.remove("toggle");
  });
});

document.addEventListener("scroll", () => {
  section.forEach((item) => {
    let top = window.scrollY;
    let offsettop = item.offsetTop - 150;
    let height = item.offsetHeight;
    let id = item.getAttribute("id");

    arrA.forEach((itema) => {
      if (top >= offsettop && top < offsettop + height) {
        itema.classList.remove("menuactive");
        document
          .querySelector("#nav ul li a[href*=" + id + "]")
          .classList.add("menuactive");
      }
    });
  });
});

// Technical Skills

function TechnicalSkillsRender() {
  const box = document.querySelector(".skill_hardskill");
  box.innerHTML = "";
  const arr = [
    {
      name: "HTML 5",
      img: "assets/img/svg/html-5-logo-svgrepo-com.svg",
    },
    {
      name: "CSS 3",
      img: "assets/img/svg/css-3-svgrepo-com.svg",
    },
    {
      name: "JavaScript",
      img: "assets/img/svg/js-svgrepo-com.svg",
    },
    {
      name: "Tailwind CSS",
      img: "assets/img/svg/tailwindcsssvg.svg",
      w: 30,
      h: 30,
    },
    {
      name: "PHP",
      img: "assets/img/svg/php2-svgrepo-com.svg",
    },
    {
      name: "Docker",
      img: "assets/img/svg/docker-svgrepo-com.svg",
    },
    {
      name: "Linux",
      img: "assets/img/svg/linux-svgrepo-com.svg",
    },
    {
      name: "My SQL",
      img: "assets/img/svg/mysql-logo-svgrepo-com.svg",
    },
    {
      name: "ReactJs",
      img: "assets/img/svg/reactjs-svgrepo-com.svg",
    },
    {
      name: "Laravel",
      img: "assets/img/svg/Laravel-Logo.svg",
    },
  ];
  const html = arr
    .map((item) => {
      return `
           <div class="skill_hardskill_item">
            <div class="skill_hardskill_item_img">
                <img src="${item.img}" width="${item?.w ?? 50}" height="${item?.h ?? 50}" alt="">
            </div>
            <div class="skill_hardskill_item_text">${item.name}</div>
          </div>
        `;
    })
    .join("");
  box.innerHTML = html;
}

// Projects

function ProjectsRender() {
  //
  const box = document.querySelector(".project_box");

  const arrTech = {
    html: { path: "html-5-logo-svgrepo-com.svg" },
    css: { path: "css-3-svgrepo-com.svg" },
    tailwindcss: { path: "tailwindcsssvg.svg" },
    js: { path: "js-svgrepo-com.svg" },
    php: { path: "php2-svgrepo-com.svg" },
    reactjs: { path: "reactjs-svgrepo-com.svg" },
    laravel: { path: "Laravel-Logo.svg", w: 70, h: 35 },
  };

  const arr = [
    {
      img: "assets/img/borders.jpg",
      title: "Borders Restaurant",
      des: "Helps the restaurant promote its food and allows customers to reserve tables",
      repo: "",
      link: "https://nhahangborders88.com/",
      used: ["html", "tailwindcss", "reactjs", "laravel"],
    },
    {
      img: "assets/img/anhngumb.jpg",
      title: "Online Exercise Website",
      des: "Helps manage online exercises and easily organize assignments for students",
      repo: "",
      link: "https://elearning.anhngumb.com/",
      used: ["html", "css", "js", "php"],
    },
    {
      img: "assets/img/jscanban.jpg",
      title: "Tourism Introduction Website",
      des: "This is a project for users who can purchase tours",
      repo: "https://github.com/doanduyvan/javascript.git",
      link: "https://doanduyvan.github.io/javascript/ASM_JS/index.html",
      used: ["html", "css", "js"],
    },
    {
      img: "assets/img/xaydungtrangweb.jpg",
      title: "Introduction to high school",
      des: "This is a website to promote high schools",
      repo: "https://github.com/doanduyvan/html-css.git",
      link: "https://doanduyvan.github.io/html-css/",
      used: ["html", "css"],
    },
    {
      img: "assets/img/html5css3.jpg",
      title: "College introduction website",
      des: "The website aims to promote the college to everyone",
      repo: "https://github.com/doanduyvan/HTML5-CSS3.git",
      link: "https://doanduyvan.github.io/HTML5-CSS3/",
      used: ["html", "css"],
    },
    {
      img: "assets/img/php1.jpg",
      title: "Website selling electronics",
      des: "This website is used to promote computer phone brands",
      repo: "https://github.com/doanduyvan/duan1_3",
      link: "",
      used: ["html", "css", "js", "php"],
    },
    {
      img: "assets/img/duanmau.jpg",
      title: "Shoe selling website",
      des: "This website is used to promote shoe brands to many people",
      repo: "https://github.com/doanduyvan/test_duanmau",
      link: "https://doanduyvan.github.io/test_duanmau/home.html",
      used: ["html", "css", "js"],
    },
  ];

  const html = arr
    .map((item, idx) => {
      const tech = (item.used || [])
        .map(
          (i) =>
            `<div class="svg"><img width="${arrTech[i]?.w ?? "auto"}" height="${arrTech[i]?.h ?? "auto"}" src='assets/img/svg/${arrTech[i]?.path}' /></div>`,
        )
        .join("");

      return `
      <div class="project_box_item">
            <div class="project_box_item_img">
              <img src="${item.img}" alt="" />
            </div>
            <div class="project_box_item_name">
              ${item.title}
            </div>
            <div class="project_box_item_des">
              ${item.des}
            </div>
            <div class="project_box_item_tech"> ${tech}</div>
            <div class="project_box_item_btn">
            ${
              item?.repo
                ? `          
              <a
                href="${item.repo}"
                target="_blank"
                >Repo</a
              >
              `
                : ""
            }
            ${
              item?.link
                ? `
              <a
                href="${item.link}"
                target="_blank"
                >Live Demo</a
              >
              `
                : ""
            }
            </div>
          </div>
      `;
    })
    .join("");

  box.innerHTML = html;
}

// contactForm

function contactForm() {
  //
  const formId = "1FAIpQLSfYE-7Knu94BIidzaeGH02n00zlGyavATYHtJFZXr_I1jyMcw";
  const form = document.getElementById("contactForm");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.querySelector("#contactForm .name_input").value;
    const message = document.querySelector("#contactForm .message_input").value;
    // check form

    if (!name) return showToast("info", "Please enter your name");
    if (!message) return showToast("info", "Please enter your message");

    const formData = new FormData();
    formData.append("entry.140176577", name);
    formData.append("entry.1838977824", message);

    fetch(`https://docs.google.com/forms/d/e/${formId}/formResponse`, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    })
      .then(() => {
        showToast("success", "Your message has been sent successfully.");
        form.reset();
      })
      .catch(() => {
        showToast("error", "Something went wrong. Please try again later.");
      });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  TechnicalSkillsRender();
  ProjectsRender();
  contactForm();
});

function showToast(type, message, duration = 3000) {
  let container = document.querySelector(".toast-container");

  if (!container) {
    container = document.createElement("div");
    container.className = "toast-container";
    document.body.appendChild(container);
  }

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  toast.innerText = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("show");
  }, 10);

  setTimeout(() => {
    toast.classList.remove("show");

    setTimeout(() => {
      toast.remove();
    }, 300);
  }, duration);
}
