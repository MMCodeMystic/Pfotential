document.querySelectorAll('input[required], select[required], textarea[required]')
    .forEach(function(field) {
        field.addEventListener('invalid', function() {
            if (this.validity.valueMissing) {
                this.setCustomValidity('Bitte dieses Feld ausfüllen.');
            }
        });
        field.addEventListener('input', function() {
            this.setCustomValidity('');
        });
    });