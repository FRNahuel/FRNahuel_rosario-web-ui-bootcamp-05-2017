class EventEmitter {
  constructor() {
      this.events = new Map();
  }

  on (event, callback) {
			this.events.set(event, callback);
        }


    emit (event) {
			 const handler = this.events.get(event);
					handler(`${event} event emitted`);

    }

    off (event, callback) {
        this.events.delete(event);
        }
}

class Movie extends EventEmitter {

	constructor(title, year, duration){
		super();
		this.title = title;
		this.year = year;
		this.duration = duration;
		this.castArray = [];
	}
  play () {
		super.emit('play');
  }
	resume () {
		super.emit('resume');
	}
	pause () {
		super.emit('pause')
	}
	addCast (cast) {
		if(cast.lenght<1) {
			this.castArray.push(actors);
		}
		else {
			this.castArray = this.castArray.concat(cast);
		}
	}
}

class Actor {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
}

class Logger {
		log(info) {
			console.log(info);
		}
}

const social 	= {
		like(name) {
			const logger = new Logger();
			logger.log(`${name} likes ${this.title}`);
		},
		share(name) {
			const logger = new Logger();
			logger.log(`${name} shares ${this.title}`);
		}
}

const add = {
	addCast(name) {
		const logger = new Logger();
		name.forEach(actor =>  {
			logger.log(`Actor ${actor.name} added to the movie: ${this.title}`);
		});
	}
}

let logger = new Logger ();
let mov = new Movie('I am legend','2007','1h44m');
let act = new Actor('Will Smith', '48');
let actor = new Actor("Alberto", 29);
let cast = [
  ca1 = new Actor("Anastacia", 24),
	ca2 = new Actor("Rodrigo", 24),
];

mov.on('play',logger.log);
mov.play();

Object.assign(mov, social);
mov.share('Nawe');
mov.like('Nawe');

Object.assign(mov, add)
//mov.addCast(actor); //Need fix
mov.addCast(cast);
