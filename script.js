document.addEventListener("DOMContentLoaded", () => {
  // 1. NAVIGATION LOGIC (Single Page Application Approach)
  const navLinks = document.querySelectorAll(".nav-link, .nav-link-target");
  const pageSections = document.querySelectorAll(".page-section");
  const mainNavLinks = document.querySelectorAll(".nav-link"); // Only top links for active state
  const mobileMenuToggle = document.getElementById("menuToggle");
  const navLinksContainer = document.getElementById("navLinks");

  function navigateTo(targetId) {
    // Hide all sections
    pageSections.forEach((section) => {
      section.classList.remove("active");
    });

    // Remove active class from all main nav links
    mainNavLinks.forEach((link) => {
      link.classList.remove("active");
    });

    // Show target section
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      targetSection.classList.add("active");
    }

    // Add active class to corresponding nav link
    const activeNavLink = document.querySelector(
      `.nav-link[data-target="${targetId}"]`,
    );
    if (activeNavLink) {
      activeNavLink.classList.add("active");
    }

    // Close mobile menu if open
    navLinksContainer.classList.remove("active");
    const menuIcon = mobileMenuToggle.querySelector("i");
    if (menuIcon) {
      menuIcon.classList.remove("ph-x");
      menuIcon.classList.add("ph-list");
    }

    // Scroll to top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("data-target");
      navigateTo(targetId);
    });
  });

  // 2. MOBILE MENU TOGGLE
  const menuIcon = mobileMenuToggle.querySelector("i");

  mobileMenuToggle.addEventListener("click", () => {
    navLinksContainer.classList.toggle("active");

    // Animasi ubah ikon hamburger menjadi silang (X)
    if (navLinksContainer.classList.contains("active")) {
      menuIcon.classList.remove("ph-list");
      menuIcon.classList.add("ph-x");
    } else {
      menuIcon.classList.remove("ph-x");
      menuIcon.classList.add("ph-list");
    }
  });

  // Tutup menu saat area luar menu diklik
  document.addEventListener("click", (e) => {
    if (
      !mobileMenuToggle.contains(e.target) &&
      !navLinksContainer.contains(e.target) &&
      navLinksContainer.classList.contains("active")
    ) {
      navLinksContainer.classList.remove("active");
      menuIcon.classList.remove("ph-x");
      menuIcon.classList.add("ph-list");
    }
  });

  // 3. AGENDA FILTER LOGIC
  const agendaFilters = document.querySelectorAll("#agenda .filter-btn");
  const agendaItems = document.querySelectorAll(".agenda-item");

  agendaFilters.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Update active button
      agendaFilters.forEach((f) => f.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      // Filter items
      agendaItems.forEach((item) => {
        if (
          filterValue === "all" ||
          item.getAttribute("data-category") === filterValue
        ) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // 4. GALLERY FILTER LOGIC
  const galleryFilters = document.querySelectorAll(
    "#gallery-filters .filter-btn",
  );
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryFilters.forEach((btn) => {
    btn.addEventListener("click", () => {
      galleryFilters.forEach((f) => f.classList.remove("active"));
      btn.classList.add("active");

      const filterValue = btn.getAttribute("data-filter");

      galleryItems.forEach((item) => {
        if (
          filterValue === "all" ||
          item.getAttribute("data-category") === filterValue
        ) {
          item.style.display = "block";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Handle clicking outside lightbox to close
  document.getElementById("lightbox").addEventListener("click", function (e) {
    if (e.target === this) {
      closeLightbox();
    }
  });
});

// 5. LIGHTBOX FUNCTIONS (Global)
function openLightbox(imageSrc) {
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  lightboxImg.src = imageSrc;
  lightbox.classList.add("active");
  document.body.style.overflow = "hidden"; // Prevent background scrolling
}

function closeLightbox() {
  const lightbox = document.getElementById("lightbox");
  lightbox.classList.remove("active");
  document.body.style.overflow = "auto"; // Restore scrolling
}
