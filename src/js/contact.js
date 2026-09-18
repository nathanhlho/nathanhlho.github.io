const contactForm = document.getElementById("contactForm");
const formNote = document.getElementById("formNote");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const fromEmail = document.getElementById("fromEmail").value.trim();
    const message = document.getElementById("message").value.trim();

    const subject = encodeURIComponent(`Pesan dari ${name} lewat Portfolio`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${fromEmail})`);

    formNote.classList.remove("hidden");
    window.location.href = `mailto:jonatanhaloho11@gmail.com?subject=${subject}&body=${body}`;
  });
}
