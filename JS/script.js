document.addEventListener('DOMContentLoaded', function () {
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Handle newsletter form submission
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const successMessage = document.getElementById('newsletter-success');
            const emailInput = newsletterForm.querySelector('input[type="email"]');

            // Simple validation
            if (emailInput.value.trim() !== '') {
                // In a real application, you would send this to your server
                console.log('Newsletter subscription: ' + emailInput.value);

                // Show success message
                if (successMessage) {
                    successMessage.classList.remove('d-none');
                    // Reset form
                    newsletterForm.reset();

                    // Hide success message after 5 seconds
                    setTimeout(function () {
                        successMessage.classList.add('d-none');
                    }, 5000);
                }
            }
        });
    }

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const successMessage = document.getElementById('form-success');
            const errorMessage = document.getElementById('form-error');

            // In a real application, you would send this to your server
            console.log('Contact form submission');

            // Show success message (simulating successful submission)
            if (successMessage) {
                errorMessage?.classList.add('d-none');
                successMessage.classList.remove('d-none');
                contactForm.reset();

                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Handle pickup order form submission
    const pickupForm = document.getElementById('pickupForm');
    if (pickupForm) {
        pickupForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const successMessage = document.getElementById('p-success');

            // In a real application, you would send this to your server
            console.log('Pickup order submitted');

            // Show success message
            if (successMessage) {
                successMessage.classList.remove('d-none');
                pickupForm.reset();

                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Handle delivery order form submission
    const deliveryForm = document.getElementById('deliveryForm');
    if (deliveryForm) {
        deliveryForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const successMessage = document.getElementById('d-success');

            // In a real application, you would send this to your server
            console.log('Delivery order submitted');

            // Show success message
            if (successMessage) {
                successMessage.classList.remove('d-none');
                deliveryForm.reset();

                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    // Set minimum date for date inputs to today
    const dateInputs = document.querySelectorAll('input[type="date"]');
    if (dateInputs.length > 0) {
        const today = new Date().toISOString().split('T')[0];
        dateInputs.forEach(input => {
            input.setAttribute('min', today);
        });
    }

    // Check for festivals and display festival banner (example functionality)
    checkForFestivals();
});

// Function to handle product filtering (for future use)
function filterProducts(category) {
    console.log('Filter products by: ' + category);
    // Implementation would go here
}

// Function to check for Indian festivals and display relevant banner
function checkForFestivals() {
    const today = new Date();
    const month = today.getMonth() + 1; // JavaScript months are 0-indexed
    const day = today.getDate();

    let festivalMessage = "";

    // Example festival dates (simplified for demonstration - would need proper calculation for actual festivals)
    if (month === 10 && day >= 15 && day <= 19) {
        festivalMessage = "Order your Diwali special sweets and gift boxes! Free delivery on orders above ₹2000";
    } else if (month === 8 && day >= 18 && day <= 22) {
        festivalMessage = "Celebrate Raksha Bandhan with our special sweet boxes and rakhi combos!";
    } else if (month === 3 && day >= 28 && day <= 29) {
        festivalMessage = "Holi celebrations! Order our special Gujiya and colorful desserts!";
    }

    // Add more festival checks as needed

    if (festivalMessage && document.body) {
        // Create and insert festival banner if we have an active festival
        const banner = document.createElement('div');
        banner.className = 'festival-banner';
        banner.innerHTML = `<div class="container">${festivalMessage}</div>`;
        document.body.insertBefore(banner, document.body.firstChild);
    }
}

// Function to convert prices to Rupees format
function formatRupees(amount) {
    return "₹" + amount.toFixed(2);
}