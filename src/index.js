import 'phaser';

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create
    }
};

var game = new Phaser.Game(config);

function preload ()
{
    this.load.image('logo', 'assets/logo.png');
    this.load.image('card-ca', 'assets/cards/card_b_ca.png');
    this.load.image('card-c2', 'assets/cards/card_b_c2.png');
    this.load.image('card-c3', 'assets/cards/card_b_c3.png');
    this.load.image('card-c4', 'assets/cards/card_b_c4.png');
    this.load.image('card-c5', 'assets/cards/card_b_c5.png');
}

function create ()
{
    var cards = [
      this.add.image(400, 101, 'card-ca'),
      this.add.image(65, 101, 'card-c2'),
      this.add.image(130, 101, 'card-c3'),
      this.add.image(195, 101, 'card-c4'),
      this.add.image(260, 101, 'card-c5')
    ];

    this.tweens.add({
        targets: cards[0],
        y: 450,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });

}
