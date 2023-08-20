const boxes = document.querySelectorAll(".hide")

window.onscroll = (() => {
    boxes.forEach((box) => {
        const info = box.getBoundingClientRect()
        if(info.top <= 800){
            box.classList.remove("hide")
        }else{
            box.classList.add("hide")
        }
    })
})

