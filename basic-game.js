(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.txt = new cjs.Text("1", "33px 'Times New Roman'", "#000033");
	this.txt.name = "txt";
	this.txt.lineHeight = 39;
	this.txt.parent = this;
	this.txt.setTransform(13,24.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#99FFFF").s().p("AkDGaIAAszIIHAAIAAMzg");
	this.shape.setTransform(26,41);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.txt}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,52,82);


(lib.deck = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol1();
	this.instance.setTransform(26,454.95,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(130,454.95,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 1);

	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(256,454.95,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_2, 0, 1, 1);

	this.instance_3 = new lib.Symbol1();
	this.instance_3.setTransform(401,454.95,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_3, 0, 1, 1);

	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(528,454.95,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_4, 0, 1, 1);

	this.instance_5 = new lib.Symbol1();
	this.instance_5.setTransform(649,454.95,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_5, 0, 1, 1);

	this.instance_6 = new lib.Symbol1();
	this.instance_6.setTransform(766,454.95,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_6, 0, 1, 1);

	this.instance_7 = new lib.Symbol1();
	this.instance_7.setTransform(881,454.95,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_7, 0, 1, 1);

	this.instance_8 = new lib.Symbol1();
	this.instance_8.setTransform(766,275,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_8, 0, 1, 1);

	this.instance_9 = new lib.Symbol1();
	this.instance_9.setTransform(881,275,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_9, 0, 1, 1);

	this.instance_10 = new lib.Symbol1();
	this.instance_10.setTransform(401,275,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_10, 0, 1, 1);

	this.instance_11 = new lib.Symbol1();
	this.instance_11.setTransform(528,275,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_11, 0, 1, 1);

	this.instance_12 = new lib.Symbol1();
	this.instance_12.setTransform(649,275,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_12, 0, 1, 1);

	this.instance_13 = new lib.Symbol1();
	this.instance_13.setTransform(26,275,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_13, 0, 1, 1);

	this.instance_14 = new lib.Symbol1();
	this.instance_14.setTransform(130,275,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_14, 0, 1, 1);

	this.instance_15 = new lib.Symbol1();
	this.instance_15.setTransform(256,275,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_15, 0, 1, 1);

	this.instance_16 = new lib.Symbol1();
	this.instance_16.setTransform(881,41,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_16, 0, 1, 1);

	this.instance_17 = new lib.Symbol1();
	this.instance_17.setTransform(766,41,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_17, 0, 1, 1);

	this.instance_18 = new lib.Symbol1();
	this.instance_18.setTransform(528,41,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_18, 0, 1, 1);

	this.instance_19 = new lib.Symbol1();
	this.instance_19.setTransform(401,41,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_19, 0, 1, 1);

	this.instance_20 = new lib.Symbol1();
	this.instance_20.setTransform(649,41,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_20, 0, 1, 1);

	this.instance_21 = new lib.Symbol1();
	this.instance_21.setTransform(130,41,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_21, 0, 1, 1);

	this.instance_22 = new lib.Symbol1();
	this.instance_22.setTransform(256,41,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_22, 0, 1, 1);

	this.instance_23 = new lib.Symbol1();
	this.instance_23.setTransform(26,41,1,1,0,0,0,26,41);
	new cjs.ButtonHelper(this.instance_23, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_23},{t:this.instance_22},{t:this.instance_21},{t:this.instance_20},{t:this.instance_19},{t:this.instance_18},{t:this.instance_17},{t:this.instance_16},{t:this.instance_15},{t:this.instance_14},{t:this.instance_13},{t:this.instance_12},{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.deck, new cjs.Rectangle(0,0,907,496), null);


// stage content:
(lib.basicgame = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		var deck = this.deck;
		console.log(deck)
		var faces = [];
		var prevFace;
		var face ;
		var presses =0;
		function start() {
			
				var maxIndex = deck.children.length;
				console.log(maxIndex);
				faces = getRandomArray(maxIndex);
				setFaces(faces, maxIndex);
				deck.addEventListener("click" , onClickDeck)	
			
		}
		function getRandomArray(max) {
			var array = [];
			for (var i = 0; i < max; i++) {
				array[i] = Math.floor(i * 0.5);
		
			}
			console.log([array])
			// Shuffle the array
			for (let i = array.length - 1; i > 0; i--) {
				let j = Math.floor(Math.random() * (i + 1));
				[array[i], array[j]] = [array[j], array[i]];
			}
		
		
			return array;
		}
		
		
		function setFaces(array, max) {
			for (var i = 0; i < max; i++) {
				let card = deck.getChildAt(i);
				card.index = i;
				card.name = "card" + String(array[i]) + String(i % 2.0);
				card.txt.text = String(array[i]);
				console.log(card.txt.text)
			}
		
		}
		function onClickDeck (e)
		{
			face = e.target;
			console.log(face);
			face.mouseEnabled = false;
			face.alpha = 0.1;
			if (presses % 2 == 1)
			{
				if(face.name.slice(0,-1) == prevFace.name.slice(0,-1) )
				{
						face.mouseEnabled = false ;
					prevFace.mouseEnabled = false;
					prevFace.alpha = 0.1 ;
					}
					else
					{
						face.mouseEnabled = true;
					face.alpha = 1 ;
						prevFace.mouseEnabled = true;
					prevFace.alpha = 1 ;
					}
				
			}
			else
			{
				prevFace = face ;
			}
			presses++
			}
		
		start(); // Correct function call
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// deck
	this.deck = new lib.deck();
	this.deck.name = "deck";
	this.deck.setTransform(484.45,252.05,1,1,0,0,0,418.4,216);

	this.timeline.addTween(cjs.Tween.get(this.deck).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(578.1,324.1,395,207.89999999999998);
// library properties:
lib.properties = {
	id: '8B1D2960822CDB4CBCA9FBB94AF74015',
	width: 1024,
	height: 576,
	fps: 24,
	color: "#333333",
	opacity: 1.00,
	manifest: [],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['8B1D2960822CDB4CBCA9FBB94AF74015'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;