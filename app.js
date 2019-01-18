const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

const handlecheck = function(ev) {
    let inBetween = false;

    if (ev.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handlecheck));