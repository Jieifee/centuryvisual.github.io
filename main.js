var game = new Phaser.Game(600, 600);
var vitesse = 600;

var dodger = {
    preload: function() {
        //Chargement image
        game.load.image('fond', 'assets/fond.png');
        game.load.image('player', 'assets/player.png');
    },
    create: function() {
        //setup + affichage
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        game.add.sprite(0, 0, 'fond');
        
        this.player = game.add.sprite(300, 500, 'player');
        this.player.anchor.set(0.5);
        game.physics.arcade.enable(this.player);
        
        this.cursors= game.input.keyboard.createCursorKeys();
        
    },
    update: function() {
        //Logique du jeu
        this.player.body.velocity.x = 0;
        this.player.body.velocity.y = 0;
        if (this.cursors.left.isDown) {
            this.player.body.velocity.x = vitesse * -1;
        }
        if (this.cursors.right.isDown) {
            this.player.body.velocity.x = vitesse;
        }
        if (this.cursors.up.isDown) {
            this.player.body.velocity.y = vitesse * -1;
        }
        if (this.cursors.down.isDown) {
            this.player.body.velocity.y = vitesse;
        }
        if (this.player.inWorld == false) {
            this.restartGame();
        }
    },
    restartGame: function() {
        game.state.start('dodger');
    }
};

game.state.add('dodger', dodger);
game.state.start('dodger');