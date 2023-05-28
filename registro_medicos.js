const formularioMedico=document.getElementById("registro-medicos-form")

const nombreMedico=document.getElementById("medico")
const apellido=document.getElementById("apellido")
const cedula=document.getElementById("cedula")
const consultorio=document.getElementById("consultorio")
const correo=document.getElementById("correo")
const especialidad=document.getElementById("especialidad")






formularioMedico.addEventListener("submit",(event)=> {
    event.preventDefault();
    const  medico = { 
        nombre: nombreMedico.value,
        apellido:apellido.value,
        cedula:cedula.value,
        consultorio:consultorio.value,
        correo:correo.value,
        especialidad:especialidad.value,
        
        
        }
    let medicos = []
    let localMedicos = localStorage.getItem("Medicos")
    if(localMedicos){
        medicos = JSON.parse(localMedicos)

    }
    medicos.push(medico)
    localStorage.setItem("Medicos", JSON.stringify(medicos))
    formularioMedico.reset() 
    alert("Medico Registrado")

})
