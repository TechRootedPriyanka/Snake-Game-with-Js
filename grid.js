const GRID_SIZE = 21

export function randomGridPosition() {
    return{
        x: Math.floor(Math.random() * GRID_SIZE) + 1,
        y: Math.floor(Math.random() * GRID_SIZE) + 1, 
    }
}

export function outsideGrid(Position) {
    return (
        Position.x < 1 || Position.x > GRID_SIZE || Position.y < 1 || Position.y > GRID_SIZE
    )
}