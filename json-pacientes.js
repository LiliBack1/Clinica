fetch("datos-pacientes.json")
.then(response => response.json())
.then(mascotas => {
    const tablaMascotas = document.getElementById("tabla-pacientes")
    const cuerpoTabla = tablaPacientes.getElementsByTagName("tbody")[0]
    for (let i = 0; i < paciente.length; i++) {

        const paciente=pacientes[i]
        console.log(paciente)
        const fila = cuerpoTabla.insertRow();

        const celdaNombrePaciente = fila.insertCell()
        celdaNombrePaciente.textContent= paciente.celdaNombrePaciente
        const celdaapellidoPaciente = fila.insertCell();
        celdaapellidoPaciente.textContent=paciente.apellidoPaciente
        const celdaCedulas = fila.insertCell();
        celdaCedulas.textContent=paciente.cedula
        const celdaEdades = fila.insertCell();
        celdaEdades.textContent=paciente.edad
        const celdaTelefono = fila.insertCell();
        celdaTelefono.textContent=paciente.telefono
        const celdaEspecialidad = fila.insertCell();
        celdaEspecialidad.textContent=paciente.especialidad
        const celdaDoctor = fila.insertCell();
        celdaDoctor.textContent=paciente.doctor
    }
})
.catch(error => console.error(error))