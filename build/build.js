var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x888888,
});
window.onload = () => __awaiter(this, void 0, void 0, function* () {
    document.body.appendChild(app.view);
});
const circles = [];
function createCircle(x, y) {
    const circle = new PIXI.Sprite(PIXI.Texture.from('assets/particle.png'));
    circle.anchor.set(0.5);
    circle.position.set(x, y);
    app.stage.addChild(circle);
    return circle;
}
function setup() {
    for (let i = 0; i < 100; i++) {
        const x = Math.random() * app.screen.width;
        const y = -Math.random() * app.screen.height;
        const circle = createCircle(x, y);
        circles.push(circle);
    }
    app.ticker.add(update);
}
function update() {
    circles.forEach((circle) => {
        circle.y += 2;
        if (circle.y > app.screen.height + circle.height / 2) {
            circle.y = -circle.height / 2;
        }
    });
}
window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);
});
setup();
//# sourceMappingURL=build.js.map