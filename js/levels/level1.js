export default class level1 extends Phaser.Scene {
    constructor() {
        super({ key: "level1" });
    }

    preload() {
        this.load.image('pacman', './assets/img/pacman.png');
        this.load.image('wallVert', './assets/img/wallVert.png');
        this.load.image('wallHoe', './assets/img/wallHoe.png');
        this.load.image('pink_ghost', './assets/img/pacman2.png');
        this.load.image('blue_ghost', './assets/img/pacman3.png');
        this.load.image('yellow_ghost', './assets/img/pacman4.png');
        this.load.image('green_ghost', './assets/img/pacman5.png');
        this.load.image('question', './assets/img/question.png');
        this.load.image('intro', './assets/img/intro.png');
    }

    create() {
        let index = 0;
        let questions = [{
            title: "introduction to Pac-Girl",
            description: "use the arrow keys to move pac-girl around collect the question to win. Good Luck"
        }, {
            title: "what is HTML?",
            description: "Hypertext Markup Language (HTML), is used to create the structure of a Web page and consists of a series of elements to ell the browser how to display the content. HTML elements are represented by tags"
        }, {
            title: "What are HTML tags?",
            description: 'HTML tags label pieces of content such as "heading", "paragraph", "table", and so on. Browsers do not display the HTML tags, but use them to render the content of the page'
        }, {
            title: "How to Write an HTML document",
            description: "All HTML documents must start with a document type declaration: <!DOCTYPE html>. The HTML document itself begins with <html> and ends with </html>.The visible part of the HTML document is between <body> and </body>."
        }, {
            title: "HTML Headings",
            description: "HTML headings are defined with the <h1> to <h6> tags. <h1> defines the most important heading. <h6> defines the least important heading."
        }, {
            title: "HTML Paragraphs and Links",
            description: 'HTML paragraphs are defined with the <p> tag. example: <p>This is my first paragraph</p>. HTML links are defined with the <a> tag and they look like this <a href="https://www.google.com">This is a link</a>'
        }, {
            title: "HTML Images and Buttons",
            description: "HTML images are defined with the <img> tag. The source file (src), alternative text (alt), width, and height are provided as attributes. HTML buttons are defined with the <button> tag"
        }];
        //walls and static
        let platforms = this.physics.add.staticGroup();
        platforms.create(600, 400, 'wallVert');
        platforms.create(543, 335, 'wallHoe');
        platforms.create(700, 400, 'wallVert');
        platforms.create(756, 335, 'wallHoe');
        platforms.create(540, 235, 'wallHoe');
        platforms.create(640, 235, 'wallHoe');
        platforms.create(800, 180, 'wallVert');
        platforms.create(856, 120, 'wallHoe');
        platforms.create(737, 120, 'wallHoe');
        platforms.create(850, 60, 'wallVert');
        platforms.create(530, 120, 'wallHoe');
        platforms.create(530, -40, 'wallVert');
        platforms.create(430, 120, 'wallHoe');
        platforms.create(370, 180, 'wallVert');
        platforms.create(970, 235, 'wallHoe');
        platforms.create(970, 335, 'wallHoe');
        platforms.create(935, 465, 'wallHoe');
        platforms.create(818, 585, 'wallHoe');
        platforms.create(860, 585, 'wallHoe');
        platforms.create(1020, 690, 'wallHoe');
        platforms.create(875, 525, 'wallVert');
        platforms.create(875, 600, 'wallVert');
        platforms.create(875, 820, 'wallVert');
        platforms.create(850, 465, 'wallHoe');
        platforms.create(760, 610, 'wallVert');
        platforms.create(760, 650, 'wallVert');
        platforms.create(703, 676, 'wallHoe');
        platforms.create(703, 550, 'wallHoe');
        platforms.create(50, 700, 'wallHoe');
        platforms.create(110, 640, 'wallVert');
        platforms.create(172, 580, 'wallHoe');
        platforms.create(172, 480, 'wallHoe');
        platforms.create(110, 420, 'wallVert');
        platforms.create(50, 360, 'wallHoe');
        platforms.create(330, 335, 'wallHoe');
        platforms.create(260, 320, 'wallVert');
        platforms.create(200, 260, 'wallHoe');
        platforms.create(20, 120, 'wallHoe');
        platforms.create(130, -40, 'wallVert');
        platforms.create(225, 120, 'wallHoe');
        platforms.create(-10, 260, 'wallHoe');
        platforms.create(380, 480, 'wallHoe');
        platforms.create(380, 580, 'wallHoe');
        platforms.create(380, 640, 'wallVert');
        platforms.create(323, 700, 'wallHoe');
        platforms.create(550, 640, 'wallVert');
        platforms.create(465, 820, 'wallVert');
        platforms.create(330, -40, 'wallVert');

        //AI
        this.ghost1 = this.physics.add.image(50, 750, 'pink_ghost');
        this.ghost2 = this.physics.add.image(50, 50, 'blue_ghost');
        this.ghost3 = this.physics.add.image(950, 750, 'yellow_ghost');
        this.ghost4 = this.physics.add.image(950, 50, 'green_ghost');
        let ghost1 = this.ghost1, ghost2 = this.ghost2, ghost3 = this.ghost3, ghost4 = this.ghost4;
        ghost1.setCollideWorldBounds(true);
        ghost2.setCollideWorldBounds(true);
        ghost3.setCollideWorldBounds(true);
        ghost4.setCollideWorldBounds(true);

        //questions
        let quest = this.physics.add.staticGroup();
        quest.create(20, 310, 'question');
        quest.create(975, 285, 'question');
        quest.create(910, 525, 'question');
        quest.create(340, 640, 'question');
        quest.create(410, 170, 'question');
        quest.create(560, 380, 'question');
        quest.create(170, 530, 'intro');

        //player 
        this.pacman = this.physics.add.image(50, 530, 'pacman');
        let pacman = this.pacman;
        pacman.flipX = true;
        pacman.setCollideWorldBounds(true);
        pacman.body.setGravityY(0);
        pacman.body.setGravityX(0);
        this.physics.add.collider(this.pacman, platforms);
        this.physics.add.overlap(this.pacman, quest, question, null, this);
        this.cursors = this.input.keyboard.createCursorKeys();
        function question(pacman, quest) {
            quest.disableBody(true, true);
            this.scene.pause('level1');
            $(document).ready(function () {
                $('.modal').modal();
                $('#modal').modal('open');
                $('#title').text(questions[index].title);
                $('#description').text(questions[index].description);
                index++;
            });
        };
        this.physics.add.collider(pacman, ghost1, gameOver, null, this);
        this.physics.add.collider(pacman, ghost2, gameOver, null, this);
        this.physics.add.collider(pacman, ghost3, gameOver, null, this);
        this.physics.add.collider(pacman, ghost4, gameOver, null, this);
        function gameOver(pacman, ghost) {
            console.log('test');
            this.physics.pause();
            pacman.setTint(0xff0000);
            gameOver = true;
            this.scene.pause('level1');
            $(document).ready(function () {
                $('.modal').modal();
                $('#gameOver').modal('open');
            });
        }
        this.physics.add.collider(ghost1, platforms, moveGhost, null, this);
        this.physics.add.collider(ghost2, platforms, moveGhost, null, this);
        this.physics.add.collider(ghost3, platforms, moveGhost, null, this);
        this.physics.add.collider(ghost4, platforms, moveGhost, null, this);
        let xMove = 20, yMove = 0;
        function moveGhost(ghost1, ghost2, ghost3, ghost4) {
            if (xMove > 0) {
                yMove = 20;
                xMove = 0;
            } else if (yMove > 0) {
                xMove = 20;
                yMove - 0;
            }
        }

        ghost1.setVelocity(xMove, yMove);
        ghost2.setVelocity(xMove, yMove);
        ghost3.setVelocity(xMove, yMove);
        ghost4.setVelocity(xMove, yMove);
    }
    update() {
        const moveObj = 150;
        let pacman = this.pacman;
        pacman.setDrag(1500);
        if (this.cursors.right.isDown) {
            pacman.setVelocityX(moveObj);
            pacman.angle = 0;
            pacman.flipX = true;
        } else if (this.cursors.left.isDown) {
            pacman.setVelocityX(-moveObj);
            pacman.angle = 0;
            pacman.flipX = false;
        } else if (this.cursors.up.isDown) {
            pacman.setVelocityY(-moveObj);
            pacman.angle = -90;
            pacman.flipX = true;
        } else if (this.cursors.down.isDown) {
            pacman.setVelocityY(moveObj);
            pacman.angle = 90;
            pacman.flipX = true;
        }


    }
}