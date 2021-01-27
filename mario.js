const printPyramid = height => {
    let draw = document.createElement('div')
    draw.className = 'draw'
    const brick = document.createElement('div')
    brick.className = 'brick'

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
            level.push(elemCreate(brick))
            bNum--
        }
        return level
    }

    for (let i = 1; i <= height; i++) {
        const levelContent = fillLevel(height - i, i + 1, 'space', 'brick', divElem)
        const level = document.createElement('div')
        level.className = 'drawLevel'
        level.append(...levelContent)
        draw.append(level)
    }
    pyramid.append(draw)
    construction.remove()
}

printPyramid(10)