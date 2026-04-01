# CLAUDE.md - Dhurandhar: The Game

## WHAT IS THIS PROJECT

A Super Mario Bros Level 1 clone built as a browser game using HTML5 Canvas + vanilla JavaScript. No frameworks. No build tools. No npm. Just open index.html in a browser and play.

The hero is "Dhurandhar" (a Bollywood movie character). The enemies are villains from the same movie. The queen (Princess Peach equivalent) appears at the end of Level 1.

## CRITICAL RULES - READ BEFORE WRITING ANY CODE

1. **SINGLE FILE ARCHITECTURE**: The game is ONE `index.html` file with embedded CSS + JS. No separate files except images.
2. **NO BUILD TOOLS**: No webpack, no vite, no npm, no node. This runs by double-clicking index.html.
3. **NO FRAMEWORKS**: No React, no Phaser, no Three.js. Pure HTML5 Canvas + vanilla JS only.
4. **IMAGES ARE IN `/assets/`**: All character sprites are PNG files in the assets folder. Load them with `new Image()`.
5. **GAME MUST WORK OFFLINE**: Once files are on disk, no internet needed.

## PROJECT STRUCTURE

```
dhurandhar-game/
  CLAUDE.md          # This file (AI instructions)
  README.md          # How to run the game
  index.html         # THE ENTIRE GAME (single file)
  assets/            # All image sprites
    hero.png         # Dhurandhar - player character
    goomba1.png      # Enemy type 1 (walking enemy)
    goomba2.png      # Enemy type 2 (walking enemy)
    goomba3.png      # Enemy type 3 (walking enemy)
    koopa1.png       # Enemy type 4 (turtle enemy - hides in shell when stomped)
    koopa2.png       # Enemy type 5 (turtle enemy - hides in shell when stomped)
    queen.png        # Princess character (end of level)
```

## CHARACTER MAPPING

| Game Role | Mario Equivalent | Image File | Behavior |
|---|---|---|---|
| Dhurandhar | Mario | hero.png | Player. Runs, jumps, stomps enemies. Arrow keys + Space. |
| Goomba 1 | Goomba | goomba1.png | Walks left/right. Dies when stomped from above. |
| Goomba 2 | Goomba | goomba2.png | Same as Goomba 1. Random variety. |
| Goomba 3 | Goomba | goomba3.png | Same as Goomba 1. Random variety. |
| Koopa 1 | Koopa Troopa | koopa1.png | Walks left/right. When stomped, hides in shell. Shell can be kicked. |
| Koopa 2 | Koopa Troopa | koopa2.png | Same as Koopa 1. Random variety. |
| Queen | Princess Peach | queen.png | Appears at end of level near the flag. Static, not an enemy. |

## GAME MECHANICS (Match Classic Mario Level 1)

### Physics
- Gravity pulls player down constantly
- Jump has initial velocity upward, gravity brings back down
- Horizontal movement has slight acceleration and friction (not instant stop)
- Player cannot walk through platforms or ground

### Player Controls
- LEFT ARROW: Move left
- RIGHT ARROW: Move right
- SPACE or UP ARROW: Jump (only when on ground)
- Player faces direction of movement

### Enemy Behavior
- Goombas: Walk in one direction. Reverse at edges/walls. Die when stomped (squish animation). Hurt player on side contact.
- Koopas: Walk in one direction. When stomped, retreat into shell (becomes kickable). Kicked shell slides and destroys other enemies. Shell hurts player if it hits them while moving.

### Level Design (Match Mario 1-1 Layout Spirit)
- Flat ground with gaps (falling = death)
- Floating platforms with question mark blocks
- Question blocks give coins when hit from below
- Brick blocks can be broken when hit from below
- Pipes (green) as obstacles - some tall, some short
- Coin collectibles floating in air
- Progressive difficulty: few enemies at start, more toward end
- Flag pole at the end with the Queen standing nearby
- Total level length: roughly 8-10 screen widths of scrolling

### Game States
1. START SCREEN: Title "Dhurandhar" with "Press SPACE to Start"
2. PLAYING: Active gameplay
3. DEATH: Player falls in gap or touches enemy from side. Brief animation, respawn or game over.
4. LEVEL COMPLETE: Player reaches flag pole. Queen appears. "Level Complete!" message.
5. GAME OVER: 3 lives lost. "Game Over - Press SPACE to Restart"

### HUD (Heads Up Display)
- Top left: Score (increments on coin collect, enemy stomp)
- Top center: Time countdown (400 seconds, like Mario)
- Top right: Lives remaining (start with 3, shown as small Dhurandhar face icons)

### Visual Style
- Sky: Gradient blue background
- Ground: Brown/green platform blocks
- Pipes: Green rectangles
- Blocks: Yellow (question) and brown (brick) squares
- Character sprites: Use the uploaded face images, rendered as circular or rounded portraits on top of simple colored bodies
- Enemies get simple colored bodies (brown for goombas, green for koopas) with their face images as heads

### Camera
- Side-scrolling: Camera follows player horizontally
- Player stays roughly in the left-third of the screen
- Camera does not scroll vertically (fixed height view)
- Camera does not scroll past level start or end

### Sprite Rendering Approach
Since we have face photos (not pixel art), render characters as:
- **Head**: The uploaded face image, cropped to a circle or rounded square, sized ~40x40px
- **Body**: Simple colored rectangle below the head (~30x30px)
- **Feet**: Two small rectangles for legs, animated when walking
- This creates a "bobblehead" style that works well with photo faces

### Sounds
- No sound required. Keep it visual only.

### Performance
- Use requestAnimationFrame for game loop
- Target 60fps
- Only render entities visible on screen (culling off-screen objects)

## HOW TO TEST

1. Open index.html in Chrome/Safari/Firefox
2. Press SPACE to start
3. Use arrow keys to move, SPACE to jump
4. Stomp enemies, collect coins, reach the flag

## COMMON BUGS TO AVOID

- Player falling through ground: Check collision AFTER applying gravity, not before
- Double jump: Only allow jump when player.onGround === true
- Camera jitter: Use Math.floor() on camera position
- Images not loading: Use onload callbacks, start game only after ALL images loaded
- Enemy walking through platforms: Apply same collision logic as player
- Blurry canvas: Set canvas width/height attributes AND CSS size, use image-rendering: pixelated

## WHEN MAKING CHANGES

- All game code is in index.html between <script> tags
- Level layout is defined as an array of objects (platforms, enemies, items)
- To add enemies: Add entries to the level data array
- To change physics: Modify GRAVITY, JUMP_FORCE, MOVE_SPEED constants at top of script
- To resize: Change CANVAS_WIDTH and CANVAS_HEIGHT constants

## DO NOT

- Do NOT add npm, package.json, or any build system
- Do NOT split into multiple JS files
- Do NOT use ES modules or import statements (except for type="module" in script tag if needed)
- Do NOT add TypeScript
- Do NOT use any external CDN or library
- Do NOT add sound files or audio code
- Do NOT overcomplicate - this is a fun fan game, not a production release
