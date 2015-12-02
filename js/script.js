function start(){
    var queue;
    var stage;
    
    function preload(){
			queue = new createjs.LoadQueue();
			queue.addEventListener('complete', init);
			queue.loadManifest([
				{id: 'cloud_1' , src: '../assets/sprite-sheet-01.png'},
				{id: 'cloud_2' , src: '../assets/sprite-sheet-02.png'},
				{id: 'thunder_cloud' , src: '../assets/sprite-sheet-03.png'},
				{id: 'coin' , src: '../assets/sprite-sheet-04.png'},
				{id: 'zeppelin_left' , src: '../assets/sprite-sheet-05.png'},
                {id: 'plattform' , src: '../assets/sprite-sheet-06.png'},
                {id: 'zeppelin_right' , src: '../assets/sprite-sheet-07.png'},
                {id: 'parachuter' , src: '../assets/sprite-sheet-08.png'},
                {id: 'plane' , src: '../assets/sprite-sheet-09.png'},
			]);
            init();
		} 
    
    function init(){
        stage = new createjs.Stage(document.getElementById('canvas'));
    }	
    
    function drawAsset(x, y, scale_x, scale_y, preload_id){
        var asset = new createjs.Bitmap(queue.getResult(preload_id));
        asset.scaleX = scale_x;
        asset.scaleY = scale_y;
        asset.x = x;
        asset.y = y;
        
        stage.addChild(asset);
        stage.update();
    }
        
    preload();
}

window.addEventListener('load', start, false);