sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    scene.setBackgroundColor(2)
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    otherSprite.destroy(effects.disintegrate)
    mySprite.startEffect(effects.fire, 1000)
    pause(1000)
    scene.setBackgroundColor(5)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(10)
    otherSprite.destroy()
    sprite.startEffect(effects.smiles, 100)
    music.baDing.play()
})
let projectile: Sprite = null
let choice = 0
let mySprite: Sprite = null
scene.setBackgroundColor(5)
mySprite = sprites.create(img`
    . . . b b b b b b b b b . . . . 
    . . b 1 d d d d d d d 1 b . . . 
    . b 1 1 1 1 1 1 1 1 1 1 1 b . . 
    . b d b c c c c c c c b d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 d 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c 6 6 6 6 6 6 6 c d b . . 
    . b d c c c c c c c c c d b . . 
    . c b b b b b b b b b b b c . . 
    c b c c c c c c c c c c c b c . 
    c 1 d d d d d d d d d d d 1 c . 
    c 1 d 1 1 d 1 1 d 1 1 d 1 1 c . 
    c b b b b b b b b b b b b b c . 
    c c c c c c c c c c c c c c c . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
mySprite.setStayInScreen(true)
info.setLife(3)
forever(function () {
    if (info.score() == 100) {
        mySprite.startEffect(effects.confetti)
        game.over(true)
    }
    if (info.score() == 50) {
        scene.setBackgroundColor(7)
    }
})
game.onUpdateInterval(500, function () {
    choice = randint(1, 3)
    if (choice == 1) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . . . . . . b b b . . . 
            . . . . . . . . b e e 3 3 b . . 
            . . . . . . b b e 3 2 e 3 a . . 
            . . . . b b 3 3 e 2 2 e 3 3 a . 
            . . b b 3 3 3 3 3 e e 3 3 3 a . 
            b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
            b 3 3 3 d d d d 3 3 3 3 3 d d a 
            b b b b b b b 3 d d d d d d 3 a 
            b d 5 5 5 5 d b b b a a a a a a 
            b 3 d d 5 5 5 5 5 5 5 d d d d a 
            b 3 3 3 3 3 3 d 5 5 5 d d d d a 
            b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
            b b b 3 d 5 5 5 5 5 5 5 d d b a 
            . . . b b b 3 d 5 5 5 5 d d 3 a 
            . . . . . . b b b b 3 d d d b a 
            . . . . . . . . . . b b b a a . 
            `, -60, 0)
    } else if (choice == 2) {
        projectile = sprites.createProjectileFromSide(img`
            . . . . . 3 3 b 3 3 d d 3 3 . . 
            . . . . 3 1 1 d 3 d 1 1 1 1 3 . 
            . . . 3 d 1 1 1 d 1 1 1 d 3 1 3 
            . . 3 d d 1 1 1 d d 1 1 1 3 3 3 
            . 3 1 1 d 1 1 1 1 d d 1 1 b . . 
            . 3 1 1 1 d 1 1 1 1 1 d 1 1 3 . 
            . b d 1 1 1 d 1 1 1 1 1 1 1 3 . 
            . 4 b 1 1 1 1 d d 1 1 1 1 d 3 . 
            . 4 4 d 1 1 1 1 1 1 d d d b b . 
            . 4 d b d 1 1 1 1 1 1 1 1 3 . . 
            4 d d 5 b d 1 1 1 1 1 1 1 3 . . 
            4 5 d 5 5 b b d 1 1 1 1 d 3 . . 
            4 5 5 d 5 5 d b b b d d 3 . . . 
            4 5 5 5 d d d d 4 4 b 3 . . . . 
            . 4 5 5 5 4 4 4 . . . . . . . . 
            . . 4 4 4 . . . . . . . . . . . 
            `, 60, 0)
    } else {
        projectile = sprites.createProjectileFromSide(img`
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 7 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 7 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 7 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 7 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 7 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 7 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 7 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 7 7 7 7 7 7 7 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 7 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 7 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 7 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 7 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 7 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            . . 9 9 9 9 9 9 9 9 9 9 9 9 . . 
            `, 55, 0)
        projectile.setKind(SpriteKind.Food)
    }
    projectile.y = randint(10, 110)
})
