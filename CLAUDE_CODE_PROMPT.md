# PASTE THIS INTO CLAUDE CODE
# ================================

## Step 1: Navigate to the project
# Run this in your terminal first:
# cd ~/dhurandhar-game

## Step 2: Initialize git
# Run this:
# git init
# git add .
# git commit -m "Initial setup: CLAUDE.md, README, assets"

## Step 3: Open Claude Code in the project folder
# Run this:
# claude

## Step 4: Paste this prompt into Claude Code:
# -----------------------------------------------

Read CLAUDE.md completely before writing any code.

Build the entire game as described in CLAUDE.md. Create index.html with the full Super Mario Level 1 clone.

Key reminders:
- Single index.html file with embedded CSS and JS
- All 7 images are in assets/ folder. Load them all before starting the game.
- Characters use "bobblehead" style: circular cropped face photo as head + simple colored body
- Hero faces are loaded from assets/hero.png
- 3 goomba types from assets/goomba1.png, goomba2.png, goomba3.png
- 2 koopa types from assets/koopa1.png, koopa2.png  
- Queen from assets/queen.png stands near the flag at level end
- Match Mario 1-1 feel: ground with gaps, floating platforms, question blocks, brick blocks, pipes, coins, flag pole
- Physics: gravity, jump velocity, horizontal acceleration with friction
- Camera: side-scrolling, player in left third of screen
- HUD: score (top left), time countdown from 400 (top center), lives as small hero face icons (top right)
- Game states: start screen, playing, death, level complete, game over
- Goombas walk and reverse at edges. Die when stomped.
- Koopas walk and reverse. When stomped become kickable shell.
- Kicked shells slide and destroy other enemies.
- Player has 3 lives. Touching enemy from side = lose life. Falling in gap = lose life.
- No sound. No external libraries. No build tools.
- Make the level fun: 8-10 screen widths long, progressive difficulty.

Build it now. The full game in one index.html file.
