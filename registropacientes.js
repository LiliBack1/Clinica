const formularioPaciente=document.getElementById("registro-pacientes-form")

const nombrePaciente=document.getElementById("paciente")
const apellido=document.getElementById("apellido")
const cedula=document.getElementById("cedula")
const edad=document.getElementById("edad")
const telefono=document.getElementById("telefono")
const especialidad=document.getElementById("especialidad")






formularioPaciente.addEventListener("submit",(event)=> {
    event.preventDefault();
    const  paciente = { 
        nombre: nombrePaciente.value,
        apellido:apellido.value,
        cedula:cedula.value,
        edad:edad.value,
        telefono:telefono.value,
        especialidad:especialidad.value,
        
        
        }
    let pacientes = []
    let localPacientes = localStorage.getItem("Pacientes")
    if(localPacientes){
        pacientes = JSON.parse(localPacientes)

    }
    pacientes.push(paciente)
    localStorage.setItem("Pacientes", JSON.stringify(pacientes))
    formularioPaciente.reset() 
    alert("Paciente Registrado")

})

