class Paciente{
    constructor(nombrePaciente, Apellidopaciente, cedula, edad, telefono, especialidad, doctor){
        this.nombreMascota=nombrePaciente
        this.nombreDuenio=Apellidopaciente
        this.cedulaDuenio=cedula
        this.edadMascota=edad
        this.telefonoDuenio=telefono
        this.especialidad=especialidad
        this.doctor=doctor
    }
}

const Eli= new Paciente("Eli", "Santodomingo", 1087965, 35, 365487643, "Medicina General", "Wilson")
const Stephen = new Paciente("Stephen", "Cardenas", 23876456, 22, 300876544, "Radiologia", "Teresa")
const Martin = new Paciente("Martin", "Rojas", 5467823, 26, 321098221, "Medicina general", "Ingrid")
const Ibbie = new Paciente("Ibbie", "Mamian", 109876234, 20, 322098754, "Odontologia", "Jasper")

const tablaMascotas= document.getElementById("tabla-pacientes");
const cuerpoTabla= document.getElementsByTagName("tbody")[0]

function agregarFila(pacientes){
    // Se insertan las filas
    const fila= cuerpoTabla.insertRow()
    const celdaNombrepacientes=fila.insertCell()
    celdaNombrepacientes.textContent=Paciente.celdaNombrepacientes
    const celdaApellidoPacientes=fila.insertCell()
    celdaApellidoPacientes.textContent=Paciente.Apellidopaciente
    const celdaCedula=fila.insertCell()
    celdaCedula.textContent=Paciente.cedula
    const celdaEdad=fila.insertCell()
    celdaEdad.textContent=Paciente.edad
    const celdaTelefono=fila.insertCell()
    celdaTelefono.textContent=Paciente.telefono
    const celdaEspecialidad=fila.insertCell()
    celdaEspecialidad.textContent=Paciente.especialidad
    const celdaMedico=fila.insertCell()
    celdaMedico.textContent=Paciente.doctor
}

agregarFila(Eli)
agregarFila(Stephen)
agregarFila(Martin)
agregarFila(Ibbie)