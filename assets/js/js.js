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

document.addEventListener("DOMContentLoaded", () => {
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
});
