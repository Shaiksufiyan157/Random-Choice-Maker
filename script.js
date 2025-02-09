const tagsel=document.getElementById('choices')
const textarea=document.getElementById('textarea')

textarea.focus();

textarea.addEventListener('keyup',(e)=>{
    createtags(e.target.value)
    if(e.key==='Enter'){
        setTimeout(()=>{
            e.target.value=''
        },10)
        randomSelect()
    }

})

function createtags(input){
    const tags=input.split(',').filter(tag=>tag.trim()
!=='').map(tag=>tag.trim())
tagsel.innerHTML=''
tags.forEach(tag=>{
    const tagel=document.createElement('span')
    tagel.classList.add('tags')
    tagel.innerText=tag
    tagsel.appendChild(tagel)
})
}
function randomSelect(){
    const times=30
    const interval=setInterval(()=>{
        const randomtag=pickRandomTag()
        highlight(randomtag)
        setTimeout(()=>{
            unhighlight(randomtag)
        },100)
    },100);
    setTimeout(()=>{
        clearInterval(interval)
        setTimeout(()=>{
            const randomTag=pickRandomTag()
            highlight(randomTag)
        },100)

    },times*100)
}
function pickRandomTag(){
    const tags=document.querySelectorAll('.tags')
    return tags[Math.floor(Math.random()*tags.length)]
}
function highlight(tag){
    tag.classList.add('highlight')
}
function unhighlight(tag){
    tag.classList.remove('highlight')
}