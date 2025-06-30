function showSidebar() {
    document.getElementById("sidebar").style.display = "flex";
  }
  
  function hideSidebar() {
    document.getElementById("sidebar").style.display = "none";
  }
  
  function dropDown(event) {
    event.preventDefault();
    const clicked = event.target;
    const dropdown = clicked.nextElementSibling;
  
    // Close all others
    document.querySelectorAll('.mobile-dropdown').forEach(menu => {
      if (menu !== dropdown) {
        menu.classList.remove('open');
      }
    });
  
    // Toggle clicked one
    dropdown.classList.toggle('open');
  }
  
  // Close dropdown on outside click
  document.addEventListener("click", function (e) {
    if (
      !e.target.classList.contains("mobile-dropdown-toggle") &&
      !e.target.closest(".sidebar")
    ) {
      document.querySelectorAll(".mobile-dropdown").forEach(drop => {
        drop.classList.remove("open");
      });
    }
  });
  