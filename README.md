# customise-log
Set custom logs with colors and styles in your nodejs applications

[![NPM version](https://img.shields.io/npm/v/customise-log.svg)](https://www.npmjs.com/package/customise-log)

## How to use

#### Install it as npm dependence

```bash
npm install customise-log
```

#### Log Messages
To log something into a console, you just have to instanciate customise-log object and call his logs methods.
For example :

	var logger = require("customise-log");            			
		logger.log("Bienvenue à tous");

#### Logger levels
They are 7 possible logger levels : 

	- info
	- success
	- fatal
	- warn
	- debug
	- error

Log level is the default level use to set a normal info log or to customise output messages
 
#### Use Of Logger levels
All logger levels are properties of the logger object created.
In this case, to use levels, you just have to call them into a logger object.
For example :
	
	logger.log("log message")
	logger.info("log message")
	logger.success("log message")
	logger.fatal("log message")
	logger.debug("log message")
	logger.error("log message")
	logger.warn("log message")

##### Setting custom logs
You can style your own log and use log level of the object logger, by setting color, background-color and style.
The syntax is :
	logger.log(message, color, background-color, style);

For example :

	logger.log("Bienvenue à tous", "green", "hidden", "bgYellow");


###### Availables colors
	
	 - black
	  - red
	  - green
	  - yellow
	  - blue
	  - magenta
	  - cyan
	  - white
	  - gray
	  - grey

###### Availables background-colors

	  - bgBlack
	  - bgRed
	  - bgGreen
	  - bgYellow
	  - bgBlue
	  - bgMagenta
	  - bgCyan
	  - bgWhite

###### Availables styles

	  - reset
	  - bold
	  - dim
	  - italic
	  - underline
	  - inverse
	  - hidden
	  - strikethrough

## License

[MIT](LICENSE)


Enjoy it !