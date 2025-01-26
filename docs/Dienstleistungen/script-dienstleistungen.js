document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section");
    
    let currentIndex = 0;
    
    function scrollToSection(index) {
      if (index >= 0 && index < sections.length) {
        sections[index].scrollIntoView({ behavior: "smooth" });
        currentIndex = index;
      }
    }
  
    document.addEventListener("wheel", (event) => {
      if (event.deltaY > 0) {
        scrollToSection(currentIndex + 1);
      } else {
        scrollToSection(currentIndex - 1);
      }
    });
  
    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowDown") {
        scrollToSection(currentIndex + 1);
      } else if (event.key === "ArrowUp") {
        scrollToSection(currentIndex - 1);
      }
    });
  });
  