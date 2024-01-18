const app = new PIXI.Application<HTMLCanvasElement>({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x888888, // Grey background color
});

window.onload = async (): Promise<void> => {
    document.body.appendChild(app.view);
}

const circles: PIXI.Sprite[] = [];

function createCircle(x: number, y: number): PIXI.Sprite {
    const circle = new PIXI.Sprite(PIXI.Texture.from('assets/particle.png'));

    circle.anchor.set(0.5);
    circle.position.set(x, y);

    // Apply blur filter for the glow effect

    app.stage.addChild(circle);

    return circle;
}

function setup() {
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * app.screen.width;
        const y = -Math.random() * app.screen.height; // Start above the canvas

        const circle = createCircle(x, y);
        circles.push(circle);
    }

    app.ticker.add(update);
}

function update() {
    circles.forEach((circle) => {
        circle.y += 2; // Adjust the falling speed as needed

        // Bounce back up when reaching the bottom
        if (circle.y > app.screen.height + circle.height / 2) {
            circle.y = -circle.height / 2;
        }
    });
}

// Resize the canvas when the window is resized
window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
});

setup();
