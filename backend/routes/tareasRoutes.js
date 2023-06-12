const express = require('express')
const router = express.Router()
const { getTareas, setTarea, updateTarea, deleteTarea } = require('../controllers/tareasControllers')
const { protect } = require('../middleware/authMiddleware')

router.route('/').get(protect, getTareas).post(protect, setTarea)
//router.get('/', getTareas) **lo mismo de lo de arriba simplificado en una línea
//router.post('/', setTarea) **lo mismo de lo de arriba simplificado en una línea

router.route('/:id').put(protect, updateTarea).delete(protect, deleteTarea)
//router.put('/:id', updateTarea)
//router.delete('/:id', deleteTarea)


module.exports = router