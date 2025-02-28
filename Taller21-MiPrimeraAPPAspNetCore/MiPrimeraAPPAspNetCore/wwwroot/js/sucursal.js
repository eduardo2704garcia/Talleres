
window.onload = function () {
    listarSucursal();
}

let objSucursal;
async function listarSucursal() {

    objLaboratorio = {
        url: "Sucursal/ListarSucursal",
        cabeceras: ["Id Sucursal", "Nombre", "Direccion"],
        propiedades: ["idSucursal", "nombre", "direccion"],
        editar: true,
        eliminar: true,
        propiedadID: "idSucursal"
    }

    pintar(objLaboratorio);
}

function filtrarSucursal() {
    let nombre = get("txtNombreSucursal");

    if (nombre == "") {
        listarSucursal();
    } else {
        objLaboratorio.url = "Sucursal/FiltrarSucursal/?nombre=" + nombre,
            pintar(objLaboratorio);
    }
}

function buscarSucursal() {
    let form = document.getElementById("frmSucursal");
    let frm = new FormData(form);

    fetchPost("Sucursal/FiltrarSucursal", "json", frm, function (res) {
        document.getElementById("divContenedorTabla").innerHTML = generarTabla(res);
    });
}

function Buscar() {
    let nombreSucursal = get("txtNombreSucursal");
    objLaboratorio.url = "Sucursal/FiltrarSucursal/?nombre=" + nombreSucursal,
    pintar(objLaboratorio);
}

function Limpiar() {
    listarSucursal();
    set("txtNombreSucursal", "");
}

function limpiarSucursal() {
    LimpiarDatos("frmSucursal");
    listarSucursal();
}

function GuardarSucursal() {
    let form = document.getElementById("frmSucursal");
    let frm = new FormData(form);
    fetchPost("Sucursal/GuardarSucursal", "text", frm, function (res) {
        LimpiarDatos("frmSucursal");
        Exito("Registro Guardado con Exito");
        listarSucursal();

        var myModal = bootstrap.Modal.getInstance(document.getElementById('modalSucursal'));
        myModal.hide();
    });
}

function Editar(id) {
    fetchGet("Sucursal/RecuperarSucursal/?idSucursal=" + id, "json", function (data) {
        setN("idSucursal", data.idSucursal);
        setN("nombre", data.nombre);
        setN("direccion", data.direccion);
        // Desplazar suavemente al formulario
        //document.getElementById("fieldsetForm").scrollIntoView({ behavior: "smooth" });
        // Show the modal
        var myModal = new bootstrap.Modal(document.getElementById('modalSucursal'));
        myModal.show();
    });
}

function MostrarModal() {
    LimpiarDatos("frmSucursal");
    var myModal = new bootstrap.Modal(document.getElementById('modalSucursal'));
    myModal.show();
}

function Eliminar(id) {
    fetchGet("Sucursal/RecuperarSucursal/?idSucursal=" + id, "json", function (data) {
        Confirmar(undefined, "¿Desea eliminar la Sucursal " + data.nombre + " ?", function () {
            fetchGet("Sucursal/EliminarSucursal/?idSucursal=" + id, "text", function (r) {
                Exito("Sucursal Eliminada con Exito");
                listarSucursal();
            });
        });
    });
}

//function Eliminar(id) {
//    let modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
//    modal.show();
//    // Asignamos la acción al botón de confirmar dentro del modal
//    document.getElementById("btnConfirmDelete").onclick = function () {
//        fetchGet("Sucursal/EliminarSucursal/?idSucursal=" + id, "text", function (res) {
//            listarSucursal();
//            modal.hide();

//        });
//    };
//}
