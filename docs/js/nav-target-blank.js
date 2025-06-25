// Open external navigation links in new tab
document.addEventListener("DOMContentLoaded", function () {
  // Find all navigation links
  const navLinks = document.querySelectorAll(".md-nav__link");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    // Check if link is external (starts with http/https or is absolute path starting with /)
    if (href && (href.startsWith("http://") || href.startsWith("https://"))) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});
