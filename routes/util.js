

let util = {
    convertToJson: function(value){
        if(!value) return [];
        let splitValues = value.split(/,(?={)/g);
        return splitValues.reduce( (acc, _value)=>{
            try {
                let converted =  JSON.parse(_value);
                acc.push(converted);
            } catch (error) {}
            return acc
        }, [])
    },
    convertToString: function(values){
        return values.reduce( (acc, value)=>{
            return acc + JSON.stringify(value);
        }, '')
    },
    obtenerContactosAsociados: function(stringContactos){
        if(!stringContactos) return [];
        return stringContactos.split(',')
    },
    joinName: function(contacto){
        let primerNombre = contacto.nombres && contacto.nombres.split(' ')[0] || '';
        let primerApellido = contacto.apellidos && contacto.apellidos.split(' ')[0] || '';
        return primerNombre + '  ' +primerApellido
    }
}

module.exports = util;