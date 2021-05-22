import { EventoComponent } from "src/app/components/evento/evento.component";
import { User } from "src/app/models/user";

function saveHabitacion(req, res){
    var habitacion = new Habitacion();
    var params = req.body;

    if(params.name && params.tipo && params.precio){
        habitacion.name = params.name;
        habitacion.tipo = params.tipo;
        habitacion.estado = true;
        habitacion.precio = params.precio;

        habitacion.save((err, habitacionSave)=>{
            if(err){
                res.status(500).send({message: 'Error general', err})
            }else if(habitacionSave){
                res.send({message: 'Habitacion agregada con exito', habitacionSave})
            }else{
                res.status(401).send({message: 'No se pudo agregar la habitacion, intentelo de nuevo mas tarde'})
            }
        })
    }
}

function removeEvento(req, res){
    let userId = req.params.idU;
    let eventoId = req.params.idE;

    if(userId != req.user.sub){
        return res.status(500).send({message:'No tienes permiso para eliminar un evento'})
    }else{
        User.findOneAndUpdate({_id: userId, evento: eventoId},
            {$pull: {evento: eventoId}}, {new:true}, (err, eventoPull)=>{
                if(err){
                    return res.status(500).send({message: 'Error general', err})
                }else if(eventoPull){
                    Event.findByIdAndRemove(eventoId, (err, eventoRemoved)=>{
                        if(err){
                            return res.status(500).send({message: 'Error general al eliminar el evento, pero sí eliminado del registro de usuario', err})
                        }else if(eventoRemoved){
                            return res.send({message: 'Evento eliminado con exito', eventoPull})
                        }else{
                            return res.status(404).send({message: 'Evento no encontrado o ya eliminado'})
                        }
                    })
                }else{
                    return res.status(404).send({message: 'No existe el usuario que pueda eliminar el evento'})
                }
            }).populate('evento')
    }
}