// Se crea la clase sujeto
class subject{
    constructor(){
        this.observers=[];
    }

//Metodo suscribir 
suscribir(observador){
    this.observers.push(observador);
    console.log(`Observador agregado ${observador.name}`)
}

//Metodo desuscribir
desuscribir(observador){
    this.observers=this.observers.filter(obs=>obs!==observador);
    console.log(`Observador eliminado ${observador.name}`)      
}


//Metodo notificar
notificar(notificacion){
    this.observers.forEach(observador=>observador.update(notificacion));

}}
//clase observador 
class observador{
    constructor(name){
        this.name=name;
    } 
    update(notificacion){
        console.log(`Notificacion para ${this.name}: ${notificacion}`);     
    }
}

//Crear instancia de sujeto 
const sujeto=new subject();
//Crear observadores
const observador1=new observador('Ana');
const observador2=new observador('Luis');
const observador3=new observador('Maria');  
//suscribir observadores
sujeto.suscribir(observador1);
sujeto.suscribir(observador2);
sujeto.suscribir(observador3);   
//Simular notificacion 
sujeto.notificar('Nueva oferta disponible: 20% de descuento en frutas y verduras');
//Desuscribir un observador 
sujeto.desuscribir(observador3);
//Nueva notificacion
sujeto.notificar('Nueva oferta disponible: 50% de descuento en productos de limpieza');