const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.getElementById("siteNav");
const quoteForm = document.getElementById("quoteForm");
const formNote = document.getElementById("formNote");
const accountForm = document.getElementById("accountForm");
const accountNote = document.getElementById("accountNote");
const loginForm = document.getElementById("loginForm");
const loginNote = document.getElementById("loginNote");

if (menuToggle && siteNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      siteNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (quoteForm) {
  quoteForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(quoteForm);
    const name = String(data.get("name") || "").trim();
    const contact = String(data.get("contact") || "").trim();
    const category = String(data.get("category") || "").trim();
    const details = String(data.get("details") || "").trim();

    const subject = encodeURIComponent(`Supply request from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Email or phone: ${contact}`,
        `Category: ${category}`,
        "",
        "Request details:",
        details
      ].join("\n")
    );

    window.location.href = `mailto:tinangosa1@gmail.com?subject=${subject}&body=${body}`;

    if (formNote) {
      formNote.textContent = "Opening your email app with the request details.";
    }
  });
}

if (accountForm) {
  accountForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const data = new FormData(accountForm);
    const name = String(data.get("name") || "").trim();
    const company = String(data.get("company") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const category = String(data.get("category") || "").trim();

    const subject = encodeURIComponent(`Customer account request from ${name}`);
    const body = encodeURIComponent(
      [
        `Name: ${name}`,
        `Company or organization: ${company || "Not provided"}`,
        `Email: ${email}`,
        `Phone: ${phone}`,
        `Primary interest: ${category}`
      ].join("\n")
    );

    window.location.href = `mailto:tinangosa1@gmail.com?subject=${subject}&body=${body}`;

    if (accountNote) {
      accountNote.textContent = "Opening your email app with the account request.";
    }
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (loginNote) {
      loginNote.textContent = "Customer login is ready for backend connection.";
    }
  });
}
