const printPyramid = height => {
    for (let i = 1; i <= height; i++) {
        console.log(`${' '.repeat(height - i)}${'#'.repeat(i + 1)}`)
    }
}

printPyramid(10);