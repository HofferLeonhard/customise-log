

module.exports = {
 /**
   * Browse directory
   *
   * @param  {String} path
   * @param  {String} level
  */
  colors : require('colors/safe'),

  init : function(){
  	var $this = this;
  	$this.colors.setTheme({log : ['white', 'bold'], error: ['red', 'bold'], warn : ['yellow', 'bold'], info : ['yellow', 'bold'], success : ['green', 'bold'], debug : ['blue', 'bold'],  fatal : ['cyan']});
  },

  log : function(message, color, bgColor, style){
  	var $this = this;

  	try{
  		$this.init();
	  	var params = [];
	  	if(color)
	  		params.push(color);
	  	if(bgColor)
	  		params.push(bgColor);
	  	if(style)
	  		params.push(style);

	  	if(params.length>0)
	  		$this.colors.setTheme({log : params});

	  	message = $this.colors.log(message);
	  	message = " "+message+" ";
	  	console.log(message);
	  }catch(err){
	  	console.log("Erreur survenue : "+err);
	  }
  	
  },

  error : function(message){
  	var $this = this;
  	$this.init();
  	message = $this.colors.error(message);
  	message = " "+message+" ";
  	console.log(message);
  },

  warn : function(message){
  	var $this = this;
  	$this.init();
  	message = $this.colors.warn(message);
  	message = " "+message+" ";
  	console.log(message);
  },

  debug : function(message){
  	var $this = this;
  	$this.init();
  	message = $this.colors.debug(message);
  	message = " "+message+" ";
  	console.log(message);
  },

  fatal : function(message){
  	var $this = this;
  	$this.init();
  	message = $this.colors.fatal(message);
  	message = " "+message+" ";
  	console.log(message);
  },

  info : function(message){
  	var $this = this;
	$this.init();
  	message = $this.colors.fatal(message);
  	message = " "+message+" ";
  	console.log(message);
  	
  },

  success: function(message){
  	var $this = this;
	$this.init();
  	message = $this.colors.success(message);
  	message = " "+message+" ";
  	console.log(message);
  	
  }

};

