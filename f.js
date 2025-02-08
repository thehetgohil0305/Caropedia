const collapsibles = document.querySelectorAll(".collapsible");
collapsibles.forEach(button => {
    button.addEventListener("click", function() {
        collapsibles.forEach(btn => {
            if (btn !== this) {
                btn.classList.remove("active");
                btn.nextElementSibling.style.display = "none";
            }
        });
        
        this.classList.toggle("active");
        let content = this.nextElementSibling;
        content.style.display = (content.style.display === "block") ? "none" : "block";
    });
});