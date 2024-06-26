/* ==== SHOW MENU ===== */
function showMenu(toggleId, navId) {
    const toggle = document.getElementById(toggleId);
    const nav = document.getElementById(navId);

    if (toggle) {
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show-menu')
            toggle.classList.toggle('show-icon')
        })
    } else {
        console.log(toggleId +" Not found")
    }
    
    
}
showMenu('nav-toggle', 'nav-menu');

/* ==== SHOW VISIBILITY ==== */
function FadeInSection(props) {
    cosnt [isVisible, setVisible] = React
}