const toggleMenu = document.querySelector('.toggle');
const menu = document.querySelector('.menu');

toggleMenu.addEventListener('click', () => {
    // Toggle class 'active' untuk menampilkan atau menyembunyikan menu
    menu.classList.toggle('active');

    // Mengubah ikon hamburger menjadi tanda silang (X) ketika menu terbuka
    const icon = toggleMenu.querySelector('i');
    if (menu.classList.contains('active')) {
        icon.classList.remove('ri-menu-line');
        icon.classList.add('ri-close-line');
    } else {
        icon.classList.remove('ri-close-line');
        icon.classList.add('ri-menu-line');
    }
});
