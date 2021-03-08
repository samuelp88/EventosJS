class Eventos {
    constructor() {
        // Propriedades Privadas
        var listenedEvents = [];
        
        // Metodos Publicos
          
        this.on = function(eventName, fn) {
            listenedEvents.push(EventConstructor(eventName, fn));
            this.listenedEvents = listenedEvents;
        }
        this.emmit = function(eventName, eventData) {
            listenedEvents.filter((value) => {
                return value.name === eventName;
            }).forEach((value) => {
                value.fn(eventData);
            })
            
        }

        // Metodos Privados

        // Desnecessario mas facilita na leitura do código
        var EventConstructor = function(eventName, fn){
            var event = {}
            event.name = eventName;
            event.fn = fn
            return event;
        }
    }
}

module.exports = Eventos;


