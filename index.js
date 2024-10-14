var buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.addEventListener('click', function() {
        var hiddenContent = item.parentElement.nextElementSibling; // This selects the sibling element (the .dropContant div)
            let isActive = hiddenContent.getAttribute('data-active') === 'true';
            hiddenContent.setAttribute('data-active', !isActive); // Update the data-active attribute
    });
});
