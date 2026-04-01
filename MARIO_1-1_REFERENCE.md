# Super Mario Bros World 1-1 — Level Layout Reference

## Section 1: Opening (Columns 0–47)

- Mario spawns at column 3
- **Col 16**: First Goomba walking left
- **Col 16, Row 8**: `?` Block — COIN
- **Col 20–24, Row 8**: `?`(coin) / BRICK / `?`(**MUSHROOM**) / BRICK / `?`(coin)
- **Col 22, Row 4**: Hidden `?` Block above — COIN
- **Col 28–29**: Two Goombas paired
- **Col 29**: Pipe (2 tiles tall)
- **Col 38**: Pipe (3 tiles tall)
- **Col 46**: Pipe (4 tiles tall)
- **Col 47–48**: Goomba

## Section 2: Mid Section (Columns 48–85)

- **Col 57**: Pipe (4 tiles tall) — ENTERABLE (bonus coin room, exits at ~col 163)
- **Col 64–65**: Two Goombas
- **Col 69–70**: Brick/? cluster — one brick contains a STAR (hidden)
- **Col 77–79**: Elevated brick platform (row 4, ~8 bricks) + ? block (coin) below
- **Col 80–81**: Two Goombas

## Section 3: First Gap (Columns 86–120)

- **Col 86–88**: FIRST PIT (2-3 tiles wide)
- **Col 91**: `?` Block — MUSHROOM (second power-up)
- **Col 95–100**: Elevated brick platform with hidden coins
- **Col 100**: First GREEN KOOPA TROOPA
- **Col 107–109**: SECOND PIT

## Section 4: Enemy Gauntlet (Columns 120–155)

- **Col 118–122**: Brick/? formation (coins)
- **Col 128–130**: Two Goombas
- **Col 130–132**: THIRD PIT
- **Col 134–140**: Pipe + Goombas
- **Col 140–145**: More Goombas (2-3)

## Section 5: Staircases (Columns 155–195)

- **Col 155**: Small pipe
- **Col 160–164**: First staircase (ascending 1-2-3-4)
- **Col 171–173**: FOURTH PIT
- **Col 174–180**: Valley staircase (descending 4-3-2-1, ascending 1-2-3-4)
- **Col 184–195**: Final staircase (ascending 1 through 8 blocks)

## Section 6: Flagpole (Columns 196–210)

- **Col 198**: Flagpole (10 tiles tall)
- **Col 202–210**: Castle (decorative)

## Key Design Principles

1. First 15 columns are empty — safe zone
2. First enemy appears BEFORE first blocks
3. First mushroom is surrounded by bricks — bounces toward player
4. Pipes get progressively taller
5. Pits never appear before all other mechanics are introduced
6. Final staircase is 8 blocks tall
7. ~15 Goombas, 1-2 Koopas, 2 power-up mushrooms, 1 hidden star

## Power-up Behavior

- Mushroom pops out of ? block, slides right, bounces off walls
- Collecting mushroom makes Mario "Super" (bigger)
- In our clone: mushroom = temporary invincibility + score bonus
