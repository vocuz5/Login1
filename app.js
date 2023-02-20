let options =  document.querySelectorAll('.changetype');
let form = document.getElementById('form');
let bgactive = document.getElementById('bg-active');

options.forEach(val =>{
    val.addEventListener('click', function(event){
        form.classList.remove('login');
        form.classList.remove('register');
        form.classList.add(this.id);
        bgactive.style.left = this.offsetLeft + 'px';
        options.forEach(item =>{
            item.classList.remove('active');
        })
        this.classList.add('active');
    })
})