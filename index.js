function main() {
  const formEL = document.querySelector(".contac-form");
  console.log(formEL);

  // Esuchamos el evento submit (escucha los datos enviados)
  formEL.addEventListener("submit", (e) => {
    // Cancelar funciones por defecto
    e.preventDefault();

    const form = e.target;
    console.log("Target", form);

    // Crear un Obj FormData para tener pares de clave-valor de los datos del formulario (esas key-value estan en sus metodos)
    const datos = new FormData(form);
    console.log("Datos de formData:", datos);

    // Conviertir el FormData en un objeto común { nombre: 'Ana', edad: '25' } (limpio para poder leerlo)
    const objetoLimpio = Object.fromEntries(datos);
    console.log("Datos limpios", objetoLimpio);

    // Para checkbox - Cambiamos los valores de most-diff-subjects por el un conjunto de datos seleccionados
    objetoLimpio["most-diff-subjects"] = datos.getAll("most-diff-subjects");

    //Print final
    console.log("Datos Limpios Completos:", objetoLimpio);
  });
}
main();
