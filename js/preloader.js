var preloader = function(game){};
 
preloader.prototype = {
    preload: function(){ 
        progressTxt = this.progress = this.game.add.text(this.game.world.centerX, this.game.world.centerY - 30, '0%',{
             font: '25px ' + font, fill: 'white', fontWeight: 'normal', align: 'center'
        });
        this.progress.anchor.setTo(0.5, 0.5);
        this.game.load.onFileComplete.add(this.fileComplete, this);
  
        loadingTxt = this.add.text(this.game.world.centerX - 37,  this.game.world.centerY - 150, "Loading...", {
            font: '18px ' + font, fill: 'lightgrey', fontWeight: 'normal', align: 'center'
        });

        game.load.image('bg', 'assets/images/bg2.jpg');
        game.load.image('next', 'assets/images/next.png');
        
        game.load.image('plus0', 'assets/images/plus0.png');
        game.load.image('plus1', 'assets/images/plus1.png');
        game.load.image('plus2', 'assets/images/plus2.png');
        game.load.image('plus3', 'assets/images/plus3.png');
        game.load.image('plus4', 'assets/images/plus4.png');
        
        game.load.image('calibrate', 'assets/images/calibrate.png');       
        game.load.image('reset', 'assets/images/reset.png');
        game.load.image('xtraBg', 'assets/images/xtraBg.png');
        game.load.image('sound_btn', 'assets/images/sound_btn.png');

        game.load.image('next_game', 'assets/images/next_game.png');
        game.load.image('prev_game', 'assets/images/prev_game.png');

        game.load.image('home_btn', 'assets/images/return.png');
        game.load.image('info', 'assets/images/info.png');

        game.load.spritesheet('blank', 'assets/images/blank.png', 594/4, 120);

        game.load.image('band_btn', 'assets/images/band_btn.png');

        game.load.audio('acoustic', 'assets/audio/acoustic_CM_104.ogg');
        game.load.audio('blues', 'assets/audio/blues_CM120.ogg');
        game.load.audio('clean', 'assets/audio/clean_Am_120.ogg');
        game.load.audio('funky', 'assets/audio/funky_Cm_120.ogg');       
        
        game.load.audio('dark', 'assets/audio/loop.mp3');       
        game.load.audio('ambient', 'assets/audio/ambient.mp3');       
        
        game.load.audio('sample1', 'assets/audio/sample1.mp3');       
        game.load.audio('sample2', 'assets/audio/sample2.mp3');       
        game.load.audio('sample3', 'assets/audio/sample3.mp3');       
    },
    
    create: function(){
    	 game.state.start("Game");
    }
};

preloader.prototype.fileComplete = function (progress, cacheKey, success, totalLoaded, totalFiles) {
    this.progress.text = progress+"%";
};