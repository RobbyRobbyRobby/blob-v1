namespace SpriteKind {
    export const Neutral = SpriteKind.create()
}
function PlayIntro () {
	
}
function ValidateBlobColorValues () {
    if (BlobRed > 100) {
        BlobRed = 100
    }
    if (BlobRed < 0) {
        BlobRed = 0
    }
    if (BlobYellow > 100) {
        BlobYellow = 100
    }
    if (BlobYellow < 0) {
        BlobYellow = 0
    }
    if (BlobBlue > 100) {
        BlobBlue = 100
    }
    if (BlobBlue < 0) {
        BlobBlue = 0
    }
}
function AddRandomStuffToLevel () {
    ClearSpriteArrays()
    InitInkBotList(20)
}
function SetupLevel (levelNumber: number, newTimerValueInSeconds: number) {
    info.stopCountdown()
    if (levelNumber == 0) {
        BlobSprite.startEffect(effects.confetti)
        tiles.setTilemap(tiles.createTilemap(hex`5000500002020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020102020202020202020202020202020202020202020202020202040202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020102020202020202020202020202020202020202020102020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202020202010202020202020202020202020202020204020202010202020202020202020202020201020202020202020202020202020201020202020202020202020202020202010202020202020202020204020201020202020202020402020202020204020202020201020202020202020202020202020102020202020202020202020202020102020202020202020202020202020201020202020202020202020202020102020202020202020202020202020202020202020102020202020202020202020202010202020202020202020202020202010202020202020204020202020202020102020202020202020202020202010202020202020202020202020202020202020202010202020202020202020202020201020202020202040202020202020201020202020202020202020202020202010202020202040202020202020201020202020202020202020202020202020202020201020202020202020202020202020102020202020202020202020202020102020202020202020202020202020201020202020202020202020202020102020202020202020202020202020202020202020102020202020202020202020202010502020202020202020202020202010202020202020202020202020202020102020202020202020202020202010202020202020202020202020201010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010202020202020202020201020202020202020202020202020102020202020202020202020202020103030303030303030303030303030301020202020202020202020202020102020202020202020202020202020202020202020102020202020202020202020202010202020202020202020202020202010303030303030303030303030303030102020202020202020202020202010202020202020202020202020202020202020202010202020202020202020202020201020202020202020202020202020201030303030303030303030303030303010202020202020202020202020201020202020202020202020202020202020202020201020202020202020202020202020102020202020202020202020202020103030303030303030303030303030301020202020204020202020202020102020202020202020202020202020202020202020102020202020202020202020202010202020202020202020202020202010303030304030303030304030303030102020202020202020202020202010202020202020202020202020202040202020202010202020202020202020202020201020202020202020202020202020201030303030303030303030303030303010202020202020202020202020201020202020202020202020202020202020202020501020202020202020202020202020102020202020202020202020202020103030303030303030303030303030301020202020202020202020202020102020202020202020202020202020202020202020102020202020202020202020202010202020202020202020202020202010303030303030303030303030303030102020202020202020202020202010202020202020202020202020202020202020202010202020202020202040202020201020202020202020202020202020201030303030403030303040303030303010202020202020202020202020201020202020402020202020202020202020202020201020202020202020502020202020102020202040202020202020202020103030303030303030303030303030301020202020202020202020202020102020202020202020202020202020202020202020102020202020202020202020202010202020202020202020202020202010303030303030303030303030303030102020202020402020202020202010202020202020202020202020202020202020202010202020202020202020202020201020202020202020202020202020201030303030303030303030303040303010202020202020202020202020201020202020202020202020202020202020202020201020202020202020202020202020102020202020202020202020202020103030303030303040303030303030301020202020202020202020202020102020202020202020202020202020202020202020102020202020202020202020202010202020202020202020202020202010303030303030303030303030303030102020202020202020202020202010202020202020202020202020202020202020202010202020202020202020202020201020202020202020202020202020201030303030303030303030303030303010202020202020202020202020201020202020202020202020202010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101020202020202020202020102020202020202020202020202010202020202020202020202020202010202020202020202020202020202020102020202020202020202020202010202020202020202020202020202020202020202010202020202020202020202020201020202020202020202020202020201020202020202020202020202020202010202020202020202020202020201020202020202020202020202020202020202020201020202020202020204020202020102020202020202020202020202020102020202020202020202020202020201020202020202020202020202020102020202020202020202020202020202020202020102020202020202020202020202010202020202020202020202020202010202020202020202020202020202020102020202020202020202020202010202020202020202020202020202020202020202010202020202020202020202020201020202020202020202020202020201020202020202020202020202020202010204020202040202020202020201020202020202020202020202020202020202020201020202020202020202020202020102020202020202020402020202020102020202020202020202020202020201020202020202020202020202020102020202040202020202020202020202020202020102020202020202020202020202010202020202020202020202020202010202020202020202020205020202020102020202020202020202020202010202020202020202020202020204020202020202010202020202020202020202020201020204020202020202020202020201020202020202020202020202020202010202020202020202020204020201020202020202020202020202020202020202020201020202020202020202020202020102020202020202050202020202020102020202020202020202020202020201020202020202020202020202020102020202020202020202020202020202020202040102020202020202020202020202010202020202020204020202020202010202020202020202020202020202020102020202020202020202020202010202020202040202020202020202020202020202010202020202020202020202020201020202020202020202020202020201020202020202020202020202020202010202020202020202020202020201020202020202020202020202020202020202020201020202020202020202020202020102020202020202020202020202020102020202020202020202020202020201020202020202020202020202020102020202020202020202020202020202020202020102020202020202020202020202010202020202020202020202020202010202020202020202020202020202020102020202020202020202020202010202020202020202020202020202020202020202010202020202020202020202020201020202020202020202020202020201020202020202020202020202020202010202020202020202020202020201020202020202020202020202020202020101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010202020202020202020202020102020202020202020202020202010202020202020202020202020202010202020202020202020202020202020102020202020202020202020202010202020202020202020202020202020202020202010202020202020202020202020201020202020202020202020202020201020202020202020202020202040202010202020202020202020202020201020202020202020202020202020202020202050201020202020202020202020202020102020202020202020202020202020102020202020202020202020202020201020202020202020202020202020102020202020202020202020202020202020202020102020202020202020202020202010202020202020202020202020202010202020202020202020202020202020102020202020202020202020202010202020202020202020202020202020202020202010202020202020202020202020201020202020202020202020202020201020202020202020202020202020202010202020202020202020202020201020202020202020202020202020202020202020201020202020202020200020202020102020202020202020202020202020102020202020202020202020202020201020202020202020202020202020102020202020202020202020202020202020202020102020202020202020202020202010202020205020202020402020202010202020402020202020202020205020102020202040202020202050202010202020202020202020202020202020202020202010202020202020202020202020201020202020202020202020202020201020202020202020202020202020202010202020202020202020202020201020202020202020202020202020402020202020201020202020202020202020202020102020202020202020202020202020102020202020202020202020202020201020202020202020202020202020102020402020202020202020202020202020202020102020202020202020202020202010202020202020202020202020202010202020202020202020202020202020102020202020202020202020202010202020202020202020202020202020202020202010202020202020202020202020201020202020202020202020202020201020202020202020202020202020202010202020202020202020204020201020202020202020202020202020202020202020201020204020202020202020202020102020202020202020204020202020102020202020202020202050202020201020202020202020202020202020102020202020202020202020202020202020202020102020202020202020202020202010202020202020202020202020202010202020202020402020202020202020102020202020202020202020202010202020202020202020202020202020202020202010202020202020202020202020201020202020202020202020202020201020202020202020202020202020202010202020202020202020202020201020202020202020202020202020202020202020201020202020202020202020202020102020202020202020202020202020102020202020202020202020202020201020202020202020202020202020102020202020202020202020202020101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102020202020202020202020202010303030303030303030303030301020202020202020202020202020201020202020202020202020202020202010202020202020202020202020201020202020202020202020202020202020202020201030303030303030303030303030102020202020202020202020202020102020202020202020202020202020201020202020202020202020202020102020202020202020202020202020202020502020103030303030303030303030303010202020202020202020202020202010202020202020202020202020202020102020202020202020202020202010202020202020202020202020202020202020202010303030303030303030303030301020202020202020202020202020201020202020202020202020202020202010202020204020202020202020201020202020202020202020202020202020202020201030303030303030303030303030102020202020202020202020202020102020202020202040202020202020201020202020202020202020202020102020202020202020202020202020202020202020103030303030303030303030303010202020202020204020202020202010202020202020202020202020202020102020202020202020204020202010402020202020202020202020202020202020202010303030303030304030303030301020202020202020202020202020201020202020202020202020202020202010202020202020202020202020201020202020202020202020202020202020202020201030303030303030303030303030102020202020202020202020202020102020202020202020202020204020201020202020202020202020202020102020202020202020202020202020202020202020103030303030303030303030303010202020202020202040202020202010202020202020202020202020202020102020402020202020202020202010202020202020402020202020202040202020202010303030303030303030303030301020202020202020202020202020201020202020202020202020202020202010202020202020202020204020201020202020202020202020202020202020202020201030303030303030303030303030102020202020202020202020202020102020202020202020202020202020201020202020202020202020202020102020202020202020202020202020202020202020103030303030303030303030303010202020202020202020202020202010202020202020202020202020202020102020202020202020202020202010202020202020202020202020202020202020202010303030303030303030303030301020202020202020202020202020201020202020202020202020202020202010202020202020202020202020201020202020202040202020202020202010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010102020202020202020202020102020202020202020202020202010202020202020202020202020202010202020202020202020202020202020103030303030303030303030303010202020202020202020202020202020202020202010202020202020202020202020201020202020202020202020202020201020202020202020202020202020202010303030303030303030503030301020202020202020202020202020202020202020201020202020202020202020202020102020202020202020202020202020102020202020202020202020202020201030303030303030303030303030102020202020202020202020202020202020202020102020202020204020202020202010202020202020202050202020202010202020202020204020202020202020103030303030303030303030303010202020202020202020202020202020202020202010202020202020202020202020201020202020202020202040202020201020202020202020202020202020202010303030303030303030303030301020202040202020204020202020402020202020201020202020202020202020202020102020202020202020202020202020102020202020202020202020202020201030303030303030303030303030102020202020202020202020202020202020202020102020202020202020202020202010202020202020202020202020202010202020202020202020202020202020103030303030303030303030303010202020202020202020202020202020202020202010202020202020202020202020201020202020202020202020202020201020202020202020202020202020202010303030303030303030303030301020202020202020202020202020202020202020201020202020202020202020202020102020202020202020202020202020102020202020202020202020202020201030303030303030303030303010202020202020202020202`, img`
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            ................................................................................
            `, [myTiles.transparency16,sprites.builtin.brick,sprites.castle.tileGrass1,sprites.castle.tilePath5,sprites.builtin.forestTiles0,sprites.castle.tileDarkGrass2], TileScale.Sixteen))
        AddRandomStuffToLevel()
        BlobSprite.setPosition(25, 25)
        BlobSprite.setFlag(SpriteFlag.StayInScreen, true)
        BlobBlue = 0
        BlobRed = 0
        BlobYellow = 0
        scene.cameraFollowSprite(BlobSprite)
        pause(1000)
        effects.clearParticles(BlobSprite)
    }
    BlobSprite.say("Let's colour!")
    game.splash("Are you ready?")
    info.startCountdown(newTimerValueInSeconds)
    controller.moveSprite(BlobSprite)
}
function CalculateBlobsColor () {
    ValidateBlobColorValues()
    for (let index = 0; index <= 3; index++) {
        BlobSpriteImageList[index] = BlobSpriteOriginalImageList[index].clone()
    }
    if (BlobRed > BlobYellow) {
        if (BlobBlue > BlobRed) {
            for (let value of BlobSpriteImageList) {
                value.replace(1, 8)
            }
        } else {
            for (let value of BlobSpriteImageList) {
                value.replace(1, 2)
            }
        }
    } else {
        if (BlobBlue > BlobYellow) {
            for (let value of BlobSpriteImageList) {
                value.replace(1, 8)
            }
        } else {
            for (let value of BlobSpriteImageList) {
                value.replace(1, 5)
            }
        }
    }
}
function UpdateBlobSpriteImage () {
    if (BlobSprite.vx > 0) {
        BlobSprite.setImage(BlobSpriteImageList[1])
    } else if (BlobSprite.vx < 0) {
        BlobSprite.setImage(BlobSpriteImageList[3])
    } else if (BlobSprite.vy > 0) {
        BlobSprite.setImage(BlobSpriteImageList[2])
    } else if (BlobSprite.vy < 0) {
        BlobSprite.setImage(BlobSpriteImageList[0])
    } else {
    	
    }
}
function Init () {
    ColorList = [
    1,
    2,
    5,
    8,
    7,
    10,
    4,
    14,
    15
    ]
    InkBotImageOriginalList = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . b 1 1 1 1 1 1 b . . . . 
        . . . . b 1 1 1 1 1 1 b . . . . 
        . . . . b 1 1 1 1 1 1 b . . . . 
        . . . . b 1 1 1 1 1 1 b . . . . 
        . . . . b 1 1 1 1 1 1 b . . . . 
        . . . . b 1 1 1 1 1 1 b . . . . 
        . . . . b 1 1 1 1 1 1 b . . . . 
        . . . . b 1 1 1 1 1 1 b . . . . 
        . . . . b 1 1 1 1 1 1 b . . . . 
        . . . f f f f f f f f f f . . . 
        . . . f . . f . . f . . f . . . 
        . . . f . . f . . f . . f . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . b b b b b b b b . . . . 
        . . . . b . . . . . . b . . . . 
        . . . . b . . . . . . b . . . . 
        . . . . b . . . . . . b . . . . 
        . . . . b . . . . . . b . . . . 
        . . . . b . . . . . . b . . . . 
        . . . . b . . . . . . b . . . . 
        . . . . b . . . . . . b . . . . 
        . . . . b . . . . . . b . . . . 
        . . . . b . . . . . . b . . . . 
        . . . f f f f f f f f f f . . . 
        . . . f . . f . . f . . f . . . 
        . . . f . . f . . f . . f . . . 
        . . . . . . . . . . . . . . . . 
        `]
    BlobSpriteOriginalImageList = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 1 
        1 . . . f f f f f f f f . . . 1 
        1 . . f 1 1 1 1 1 1 1 1 f . . 1 
        1 1 f 1 1 f f 1 1 f f 1 1 f 1 . 
        . 1 f 1 1 1 1 1 1 1 1 1 1 f 1 . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . 1 1 1 . . 
        . . . . . . . . . . 1 1 . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 f 1 f . . 
        . . f 1 1 1 1 1 1 1 1 f 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 f 1 f . . 
        . . f 1 1 1 1 1 1 1 1 f 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . 1 1 . . . . 
        . . . . . . . . . . . 1 1 1 . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . 1 f 1 1 1 1 1 1 1 1 1 1 f 1 . 
        1 1 f 1 1 f f 1 1 f f 1 1 f 1 1 
        1 . . f 1 1 1 1 1 1 1 1 f . . 1 
        1 . . . f f f f f f f f . . . 1 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . 1 1 1 . . . . . . . . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 f 1 1 1 1 1 1 1 1 f . . 
        . . f 1 f 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 f 1 1 1 1 1 1 1 1 f . . 
        . . f 1 f 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . 1 1 1 . . . . . . . . . . . 
        `]
    BlobSpriteImageList = [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 1 
        1 . . . f f f f f f f f . . . 1 
        1 . . f 1 1 1 1 1 1 1 1 f . . 1 
        1 1 f 1 1 f f 1 1 f f 1 1 f 1 . 
        . 1 f 1 1 1 1 1 1 1 1 1 1 f 1 . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . . . . . . . . . . 1 1 1 . . 
        . . . . . . . . . . 1 1 . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 f 1 f . . 
        . . f 1 1 1 1 1 1 1 1 f 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 f 1 f . . 
        . . f 1 1 1 1 1 1 1 1 f 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . . . . . . . 1 1 . . . . 
        . . . . . . . . . . . 1 1 1 . . 
        `, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . 1 f 1 1 1 1 1 1 1 1 1 1 f 1 . 
        1 1 f 1 1 f f 1 1 f f 1 1 f 1 1 
        1 . . f 1 1 1 1 1 1 1 1 f . . 1 
        1 . . . f f f f f f f f . . . 1 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, img`
        . . 1 1 1 . . . . . . . . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . . . f f f f f f f f . . . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 f 1 1 1 1 1 1 1 1 f . . 
        . . f 1 f 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . f 1 f 1 1 1 1 1 1 1 1 f . . 
        . . f 1 f 1 1 1 1 1 1 1 1 f . . 
        . . f 1 1 1 1 1 1 1 1 1 1 f . . 
        . . . f 1 1 1 1 1 1 1 1 f . . . 
        . . . . f f f f f f f f . . . . 
        . . . . 1 1 . . . . . . . . . . 
        . . 1 1 1 . . . . . . . . . . . 
        `]
    EnemyList = sprites.allOfKind(SpriteKind.Enemy)
    InkBotList = sprites.allOfKind(SpriteKind.Food)
    NeutralList = sprites.allOfKind(SpriteKind.Neutral)
    BuildingList = []
    LevelList = []
    BlobSprite = sprites.create(BlobSpriteImageList[2], SpriteKind.Player)
    info.setLife(1)
    info.setScore(0)
}
function InitInkBotList (HowMany: number) {
    InkBotList = []
    for (let index = 0; index < HowMany; index++) {
        InkBotList.push(sprites.create(InkBotImageOriginalList[0].clone(), SpriteKind.Food))
        sprites.setDataNumber(InkBotList[InkBotList.length - 1], "Color", ColorList[randint(1, 3)])
        sprites.setDataNumber(InkBotList[InkBotList.length - 1], "ColorPoints", 25)
        InkBotList[InkBotList.length - 1].image.replace(1, sprites.readDataNumber(InkBotList[InkBotList.length - 1], "Color"))
        tiles.placeOnRandomTile(InkBotList[InkBotList.length - 1], sprites.castle.tileGrass1)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    if (sprites.readDataNumber(otherSprite, "ColorPoints") > 0) {
        otherSprite.startEffect(effects.bubbles)
        if (sprites.readDataNumber(otherSprite, "Color") == 2) {
            BlobRed += sprites.readDataNumber(otherSprite, "ColorPoints")
            BlobYellow += -10
            BlobBlue += -10
        } else if (sprites.readDataNumber(otherSprite, "Color") == 5) {
            BlobRed += -10
            BlobYellow += sprites.readDataNumber(otherSprite, "ColorPoints")
            BlobBlue += -10
        } else if (sprites.readDataNumber(otherSprite, "Color") == 8) {
            BlobRed += -10
            BlobYellow += -10
            BlobBlue += sprites.readDataNumber(otherSprite, "ColorPoints")
        } else {
        	
        }
        CalculateBlobsColor()
        sprites.setDataNumber(otherSprite, "ColorPoints", 0)
        otherSprite.setImage(InkBotImageOriginalList[1])
        pause(1000)
        effects.clearParticles(otherSprite)
    }
})
function ClearSpriteArrays () {
    BuildingList = []
    EnemyList = []
    NeutralList = []
    InkBotList = []
}
let LevelList: number[] = []
let BuildingList: number[] = []
let NeutralList: Sprite[] = []
let InkBotList: Sprite[] = []
let EnemyList: Sprite[] = []
let InkBotImageOriginalList: Image[] = []
let ColorList: number[] = []
let BlobSpriteOriginalImageList: Image[] = []
let BlobSpriteImageList: Image[] = []
let BlobSprite: Sprite = null
let BlobBlue = 0
let BlobYellow = 0
let BlobRed = 0
Init()
PlayIntro()
SetupLevel(0, 60)
game.onUpdate(function () {
    UpdateBlobSpriteImage()
})
