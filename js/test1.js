$( document ).ready(function() {
    // ====================== Util Func =========================
    var isLocalHost = (function() {
        return location.hostname === "localhost" 
               || location.hostname === "127.0.0.1" 
               || location.hostname === "";
    })();

    // ====================== Create Data Test ==================
    
    // Test data with relative path
    var soundUrls = [
        "bgm01.mp3", 
        "bgm02.mp3"
    ];
    var movieUrls = [
          "scene_0001.mp4",
          "scene_0002.mp4",
          "scene_0003.mp4",
          "scene_0004.mp4"
    ];
    

    // ====================== Embed SWF To HTML =================
    
    var flashvars = {
        // in production, need remove this line or set value to fasle 
        debugEnable: true,          
        
        // set value to true to flash-player know all urls we using as relative
        relativePath: true,         

        // when paths is relative we need specific prependURL
        // for example: if our's movies at path: 
        // http://example.com/todaymovie/assets/movie01.mp4
        // => prependURL will be: "/todaymovie/assets/" 
        prependURL: isLocalHost ? "/assets/" : "/queuevideoplayback/assets/"    
    };
    
    var params = {};
    var attributes = {};

    swfobject.embedSWF("swf/Main.swf",       /* path to we flash player */
                   "preview",                /* id of HTML tag we want embed flash player */ 
                   "100%", "100%", 
                   "9.0.0", 
                   "swf/expressInstall.swf", /* path to expressInstall swf (swfobject) */
                   flashvars, params, attributes);
                                

    // ==================== TEST BUTTONS ======================
    
                 
    $("#play-one-movie-btn-1").click(function(){ 
        var player = document.getElementById("preview");
        player.playMovie(movieUrls[0], ""); 
    });
    
    $("#play-one-movie-btn-2").click(function(){ 
        var player = document.getElementById("preview");
        player.playMovie(movieUrls[1], ""); 
    });
    
    $("#play-multi-movie-btn").click(function(){
        var player = document.getElementById("preview");
        player.playMultiMovies(movieUrls, soundUrls[0]);    
    });

    $("#play-multi-movie-btn2").click(function(){
        var player = document.getElementById("preview");
        var movieUrls = [
          "scene_0001.mp4",
          "scene_0002.mp4",
          "scene_0003.mp4",
          "scene_0004.mp4",
          "scene_0005.mp4",
          "scene_0006.mp4"
        ];
        player.playMultiMovies(movieUrls, soundUrls[1]);    
    });
    
    $("#change-bgm-btn-1").click(function(){ 
        var player = document.getElementById("preview");
        player.setBGM(soundUrls[0]);    
    });


    $("#change-bgm-btn-2").click(function(){ 
        var player = document.getElementById("preview");
        player.setBGM(soundUrls[1]);    
    });
});
