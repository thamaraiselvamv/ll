document.addEventListener("DOMContentLoaded", () => {
    
    // --- 1. Reveal Elements on Scroll ---
    const revealElements = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;

        revealElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                element.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // --- 2. Contact Form with EmailJS ---
    const contactForm = document.getElementById("contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // Collect checkboxes
            const checkboxes = document.querySelectorAll('input[name="needs"]:checked');
            let selectedNeeds = [];
            checkboxes.forEach((checkbox) => {
                selectedNeeds.push(checkbox.value);
            });

            // Prepare template parameters
            const templateParams = {
                company_name: this.company_name.value,
                user_name: this.user_name.value,
                user_mobile: this.user_mobile.value,
                user_email: this.user_email.value,
                city: this.city.value,
                code: this.code.value,
                needs: selectedNeeds.join(", ") // Send as comma separated string
            };

            // Send via EmailJS (Replace with your IDs)
            // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
            
            console.log("Simulating Email Send:", templateParams);
            alert("Thank you! Form submitted successfully. (Check console for data)");
            this.reset();
        });
    }

    // --- 3. Gallery Modal (Dairy Farm Page) ---
    const modal = document.getElementById("imageModal");
    const modalImg = document.getElementById("modalImg");
    const captionText = document.getElementById("caption");
    const galleryItems = document.querySelectorAll(".gallery-item img");
    const closeBtn = document.getElementsByClassName("close")[0];

    if (modal && galleryItems.length > 0) {
        galleryItems.forEach(img => {
            img.addEventListener("click", function() {
                modal.style.display = "block";
                modalImg.src = this.src;
                captionText.innerHTML = this.alt;
            });
        });

        // Close on 'X' click
        closeBtn.onclick = function() {
            modal.style.display = "none";
        }

        // Close on outside click
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
});