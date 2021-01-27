const printPyramid = (height, color) => {
    const divElem = divClass => {
        const elem = document.createElement('div')
        elem.className = divClass
        return elem
    }

    const fillLevel = (sNum, bNum, space, brick, elemCreate) => {
        const level = []
        while (sNum > 0) {
            level.push(elemCreate(space))
            sNum--
        }
        while (bNum > 0) {
            level.push(elemCreate(`brick ${color}`))
            bNum--
        }
        return level
    }
    
    const draw = divElem('draw')

    for (let i = 1; i <= height; i++) {
        const levelContent = fillLevel(height - i, i + 1, 'space', 'brick', divElem)
        const level = divElem('drawLevel')
        level.append(...levelContent)
        draw.append(level)
    }
    const oldDraw = document.querySelector('.draw')
    oldDraw && oldDraw.remove()
    pyramid.append(draw)
}

const colorSelector = document.querySelector('#brick-color')
const highSelector = document.querySelector('#pyramid-high')
const highValue = document.querySelector('#pyramid-high-value')

highValue.innerText = highSelector.value

highSelector.addEventListener('input', e => {
    highValue.innerText = e.target.value
})

colorSelector.addEventListener('change', e => {
    printPyramid(highSelector.value, colorSelector.value)
})
highSelector.addEventListener('change', e => {
    printPyramid(highSelector.value, colorSelector.value)
})

printPyramid(highSelector.value, colorSelector.value)