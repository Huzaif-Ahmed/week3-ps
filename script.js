const btn=document.getElementById("button")
const body=document.body;

const colors=['red','green','yellow','blue','turquoise','pink','purple']

btn.addEventListener('click',changebackground)

function changebackground(){
    const colorind=Math.floor(Math.random()*colors.length)
    body.style.backgroundColor=colors[colorind]
}