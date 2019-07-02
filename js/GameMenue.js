import level1 from "./levels/level1";

var config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 800,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    },
    scene: [level1]
};

var game = new Phaser.Game(config);
$(document).on('click', '#resume', function () {
    resume();
});

function resume() {
    game.scene.resume('level1');
}