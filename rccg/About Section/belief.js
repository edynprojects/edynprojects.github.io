const dropdownContainers = document.querySelectorAll('.dropdown-info');

dropdownContainers.forEach(function(dropdownContainer) {
    const dropdown = dropdownContainer.querySelector('p');
    
    dropdownContainer.addEventListener("click", () => {
        if (dropdown.classList.contains('show-text')) {
            // Clicked dropdown is already open, close it
            dropdown.classList.remove("show-text");
        } else {
            // Close all other open dropdowns
            dropdownContainers.forEach(function(item) {
                const itemDropdown = item.querySelector('p');
                if (itemDropdown.classList.contains('show-text')) {
                    itemDropdown.classList.remove('show-text');
                }
            });
            // Open the clicked dropdown
            dropdown.classList.add("show-text");
        }
    });
});
