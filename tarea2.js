var esVerdad = true ;
var esFalso  = false;

var objeto = {
    mascotas: ['perros','gatos','canarios','pez','serpiente'],
    esSegura: false,
    llamarAlerta: function(props){
        alert('Propiedades: ' + props);
    }, 
    esHttps: function(){

        if( this.esSegura == esFalso ) {
            this.esSegura = esVerdad;
        } else {
            this.esSegura = esFalso;
        }

        return this.esSegura;
    },

    eliminaMascota: function(tipoMascota){
        var index = this.mascotas.indexOf(tipoMascota);

        this.mascotas.splice(index, 1)
        return this.mascotas;

    },

    eliminaUltimaMascota: function(){

        this.mascotas.pop();
        return this.mascotas;

    },

    agregaMascota: function(mascota){

        this.mascotas.push(mascota);
        return this.mascotas;

    },

    cuentaMascotas: function() {

    var contador    = 0;
    var terminacion = 'os';

        this.mascotas.forEach(function(valor, indice, arregloCompleto){

            if( valor.includes( terminacion ) ) {
                contador += 1;
            }
         
        })
   
        return "Se encontraron [ " + contador + " ] - mascotas que tienen terminación 'os' ......";
        
    }

}