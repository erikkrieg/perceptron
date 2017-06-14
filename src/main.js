
// TODO: refactor code for grid generation (should be imported class or functions)
// TODO: consider creating a verion of this using SVG (could have both)
// TODO: interface Perceptron logic with the grid(s)
    // - draw the slope that the Perceptron predicts

function drawGrid (rows, cols, canvas) {
    const context = canvas.getContext('2d')
    const width = canvas.width
    const height = canvas.height
    const padding = 500 / rows
    const offset = 0.5
    const color = '#ddd'

    for (let x = offset; x <= width; x += padding) {
        context.moveTo(x, 0)
        context.lineTo(x, height)
    }

    for (let y = offset; y <= height; y += padding) {
        context.moveTo(0, y)
        context.lineTo(width, y)
    }

    context.strokeStyle = color
    context.stroke()

    return {
        canvas,
        context,
        color,
        size: { width, height, padding, offset }
    }
}

function drawSlope (grid) {
    const {context} = grid
    const {width, height} = grid.size
    context.moveTo(0, 0)
    context.lineTo(width, height)
    context.stroke()
}

function drawPoint (x, y, grid) {
    const {padding, offset} = grid.size
    const radius = padding / 4
    const angles = [0, 2 * Math.PI]
    const {context} = grid
    x = x * padding + offset
    y = y * padding + offset
    context.beginPath()
    context.arc(x, y, radius, ...angles)
    context.lineWidth = 2
    context.strokeStyle = '#222'
    context.stroke()
}

const size = 25
const grid = drawGrid(size, size, document.querySelector('#perceptron-canvas'))
drawSlope(grid)

for (let i = 0; i < 50; i++) {
    const x = Math.floor(Math.random() * (grid.size.width / grid.size.padding))
    const y = Math.floor(Math.random() * (grid.size.height / grid.size.padding))
    drawPoint(x, y, grid)
}
