if (window.location.pathname.startsWith('/team.html')) {
    document.getElementById('buttondial').addEventListener('click', () => {
        document.getElementById('ekipdial').showModal();
    })

    document.getElementById('closedial').addEventListener('click', () => {
        document.getElementById('ekipdial').close();
    })

    document.getElementById("disabtn").addEventListener('click', () => {
        document.getElementById("disabtn").setAttribute('disabled', 'disabled')
    })
}

document.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
        document.getElementById('navbar').style.opacity = '.5'
    } else {
        document.getElementById('navbar').style.opacity = '1'
    }
})