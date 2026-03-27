const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

function createNavLinks(items, container, isMobile = false) {
    container.innerHTML = "";

    items.forEach((item) => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.href = item.href;
        a.textContent = item.label;
        a.className = isMobile
        ? "mobile-link block py-2 hover:text-cyan-400 transition"
        : "hover:text-cyan-400 transition";
        
        if (isMobile) {
            a.addEventListener("click", () => {
                mobileMenu.classList.add("hidden");
            });
        }

        li.appendChild(a);
        container.appendChild(li);
    });
}

function createHomeButtons(buttons, container) {
    container.innerHTML = "";

    buttons.forEach((button) => {
        const a = document.createElement("a");
        a.href = button.href;
        a.textContent = button.label;
        a.className = button.className;
        container.appendChild(a);
    });
}

function createAboutTags(tags, container) {
    container.innerHTML = "";

    tags.forEach((tag) => {
        const span = document.createElement("span");
        span.textContent = tag.name;
        span.className = tag.className;
        container.appendChild(span);
    });
}

function createSkillCards(skills, container) {
    container.innerHTML = "";

    skills.forEach((skill) => {
        const card = document.createElement("div");
        card.className ="bg-slate-800 p-6 rounded-2xl hover:scale-105 transition shadow";

        card.innerHTML = `
            <h3> class="font-semibold text-lg mb-2">${skill.title}</h3>
            <p class="text-slate-400">${skill.description}</p>
        `;

            container.appendChild(card);
    });
}

function createFooterLinks(links, container) {
    container.innerHTML = "";

    links.forEach((link) => {
        const li = document.createElement("a");
        a.href = link.href;
        a.textContent = link.label;
        a.className = "hover:text-cyan-400";
        container.appendChild(li);
    });
}

async function loadData() {
    try {
        const response = await fetch("../data.json");
        const data = await response.json();

        document.title = data.site.title;
        document.getElementById("pageTitle").textContent = data.site.title;
        document.getElementById("brandName").textContent = data.site.brand;

        createNavLinks(data.navigation, document.getElementById("desktopNav"));
        createNavLinks(data.navigation, document.getElementById("mobileNav"), true);

        document.getElementById("homeTitle").textContent = data.home.title;
        document.getElementById("homeSubtitle").textContent = data.home.subtitle;
        document.getElementById("homeImage").src = data.home.image;
        document.getElementById("homeImage").alt = data.home.title;
        createHomeButtons(data.home.buttons, document.getElementById("homeButtons"));

        document.getElementById("aboutText1").textContent = data.about.paragraph1;
        document.getElementById("aboutText2").textContent = data.about.paragraph2;
        createAboutTags(data.about.tags, document.getElementById("aboutTags"));

        createSkillCards(data.skills, document.getElementById("skillsGrid"));

        document.getElementById("footerText").textContent = data.footer.text;
        createFooterLinks(data.footer.links, document.getElementById("footerLinks"));
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
}

menuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
});

loadData();