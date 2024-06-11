
            // Telegram popup script
            const popup = document.getElementById("telegram-popup");
            const closeButton = document.getElementById("close-popup");

            // Show the popup after a delay (e.g., 3 seconds)
            setTimeout(() => {
                popup.classList.add("show");
            }, 3000);

            // Close the popup when the close button is clicked
            closeButton.addEventListener("click", () => {
                popup.classList.remove("show");
            });
        });
