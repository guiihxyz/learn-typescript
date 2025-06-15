// enums

enum Direction {
    North = 0,
    South,
    East,
    West,
}

const pos = {
    x: 0,
    y: 0,
    direction: Direction.North,
}

enum ClothingSize {
    Small = 'S',
    Medium = 'M',
    Large = 'L',
    ExtraLarge = 'XL',
}

const cloth = {
    color: 'green',
    size: ClothingSize.Medium,
}
