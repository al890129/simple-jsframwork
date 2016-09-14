(function(global,$){
	var Greeter = function(firstname,lastname,language) {
		return new Greeter.init(firstname,lastname,language);
	};

	var supportedLanguages = ["en","es"];

	var greetings = {
		en: "hello",
		es: "hola"
	};

	var formalGreetings = {
		en: "greetings",
		es: "saludos"
	};

	var loggedMessages = {
		en: "logged successfully",
		es: "Incion"
	};

	Greeter.prototype = {

		fullName: function() {
			return this.firstname +" "+ this.lastname;
		},

		validate: function() {
			if(supportedLanguages.indexOf(this.language) === -1){
				throw "Invalid language";
			}
		},

		greeting: function(){
			return greetings[this.language] +" "+ this.firstname;
		},

		formalgreting: function() {
			return formalGreetings[this.language] +","+ this.fullName();
		},

		greet: function(formal) {	
			var msg;
			if(formal) {
				msg = this.formalgreting();
			}else {
				msg = this.greeting();
			}
		
			
			if(console) {
				console.log(msg);
			}
			return this;
		},

		log: function(){
			if(console) {
				console.log(loggedMessages[this.language] +":"+ this.fullName());
			}
			return this;
		},

		setLang: function(lang) {
			this.language = lang;

			this.validate();

			return this;
		}

	};

	Greeter.init = function(firstname,lastname,language){
		var self = this;
		self.firstname = firstname || "";
		self.lastname = lastname || "";
		self.language = language || "en";
	};

	Greeter.init.prototype = Greeter.prototype;

	global.Greeter = global.G$ = Greeter;

}(window,jQuery));