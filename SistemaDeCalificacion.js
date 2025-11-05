// Clase Subject: Profesor que publica las notas
class Profesor {
    constructor() {
      this.observers = []; // Lista de estudiantes
    }

// Metodo para suscribir estudiantes
subscribe(observer) {
    this.observers.push(observer);
    console.log(`${observer.name} se ha suscrito al sistema de calificaciones`);
    }

// Metodo para eliminar estudiantes
unsubscribe(observer) {
    this.observers = this.observers.filter(x => x !== observer);
    console.log(`${observer.name} se ha eliminado del sistema de notificaciones`);
    }

// Metodo para notificar a todos los observadores
notify(noteInfo) {
    console.log(`Nueva nota publicada: ${noteInfo}`);
    this.observers.forEach(observer => observer.update(noteInfo));
    }

// Metodo que simula la subida de una nota
grade(student, grade) {
    const message = `El estudiante ${student} obtuvo una nota de ${grade}`;
    this.notify(message);
    }
    }

// Clase Observer: representa a los que reciben la notificación
class Observer {
    constructor(name) {
        this.name = name;
    }

// Metodo que se ejecuta cuando llega una notificación
update(message) {
        console.log(`${this.name} recibió la notificación: "${message}"`);
    }
    }



// Crear instancia del profesor (Subject)
const profesor = new Profesor();

// Crear observadores 
const estudiante = new Observer("Estudiante Juan Perez");
const estudiante2 = new Observer("Estudiante Maria Lopez");
const sistemaNotas = new Observer("Sistema de notas");

// Suscribir los observadores
profesor.subscribe(estudiante);
profesor.subscribe(estudiante2);
profesor.subscribe(sistemaNotas);


// Simular publicación de notas
profesor.grade("Juan Perez", 4.5);
profesor.grade("Maria Lopez", 3.8);


// Desuscribir observadores
profesor.unsubscribe(estudiante2)