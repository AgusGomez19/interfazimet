
document.querySelectorAll('.sidebar ul li').forEach(item => {
    item.addEventListener('click', function() {
        document.querySelector('.sidebar ul li.active').classList.remove('active');
        this.classList.add('active');
    });
});
