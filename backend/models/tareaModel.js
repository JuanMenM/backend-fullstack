//Definir los campos de la colección y como funcionará. 
const mongoose = require('mongoose')
//Se creará un esquema con los campos y su tipo contenido
const tareaSchema = mongoose.Schema({
    user:{ 
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    texto: {
        type: String,
        required: [true, 'Por favor escribe el texto de la tarea']
    }
},{
    timestamps:true
})

module.exports = mongoose.model('Tarea', tareaSchema)