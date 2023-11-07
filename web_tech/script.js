function find_edit(){
    const p1  = document.getElementsByTagName('p')[1]
    console.log(p1.innerText)
    p1.innerText = 'Efromeev Leonid two thousand and fourth year of birth'
}
const node_for_click = document.getElementById("for_click")
node_for_click.addEventListener("click",find_edit)