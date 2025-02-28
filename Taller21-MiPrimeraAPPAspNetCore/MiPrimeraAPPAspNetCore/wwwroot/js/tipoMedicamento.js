window.onload = function () {
    ListarTipoMedicamento();
}

let objTipoMedicamento;

async function ListarTipoMedicamento() {

    objTipoMedicamento = {
        url: "TipoMedicamento/ListartipoMedicamento",
        cabeceras: ["Id tipo Medicamento", "Nombre", "Descripcion"],
        propiedades: ["idTipoMedicamento", "nombre", "descripcion"],
        editar: true,
        eliminar: true,
        propiedadID: "idTipoMedicamento"
    }

    pintar(objTipoMedicamento);
}

function FiltrarTipoMedicamento() {
    let nombre = get("txtNombreTipoMedicamento");

    if (nombre == "") {
        ListarTipoMedicamento();
    } else {
        objTipoMedicamento.url = "TipoMedicamento/FiltrartipoMedicamento/?nombre=" + nombre,
        pintar(objTipoMedicamento);
    }
}


function Buscar() {
    let nombreTipoMedicamento = get("txtNombreTipoMedicamento");
    objTipoMedicamento.url = "TipoMedicamento/FiltrartipoMedicamento/?nombre=" + nombreTipoMedicamento,

    pintar(objTipoMedicamento);
}

function Limpiar() {
    ListarTipoMedicamento();
    set("txtNombreTipoMedicamento", "");
}

function GuardarTipoMedicamento() {
    let form = document.getElementById("frmTipoMedicamento");
    let frm = new FormData(form);
    fetchPost("TipoMedicamento/GuardarTipoMedicamento", "text", frm, function (res) {
        // Perform other operations first
        LimpiarDatos("frmTipoMedicamento");
        Exito("Registro Guardado con Exito");
        ListarTipoMedicamento();

        var myModal = bootstrap.Modal.getInstance(document.getElementById('modaltipoMedicamento'));
        myModal.hide();
    });
}

function LimpiarTipoMedicamento() {
    LimpiarDatos("frmTipoMedicamento");
}

function Editar(id) {
    fetchGet("TipoMedicamento/RecuperarTipoMedicamento/?idTipoMedicamento=" + id, "json", function (data) {
        setN("idTipoMedicamento", data.idTipoMedicamento)
        setN("nombre", data.nombre)
        setN("descripcion", data.descripcion)
        // Desplazar suavemente al formulario
        //document.getElementById("fieldsetForm").scrollIntoView({ behavior: "smooth" });
        // Show the modal
        var myModal = new bootstrap.Modal(document.getElementById('modaltipoMedicamento'));
        myModal.show();
    });
}

//function Eliminar(id) {
//    let modal = new bootstrap.Modal(document.getElementById('confirmDeleteModal'));
//    modal.show();

//    // Asignamos la acción al botón de confirmar dentro del modal
//    document.getElementById("btnConfirmDelete").onclick = function () {
//        fetchGet("TipoMedicamento/EliminarTipoMedicamento/?idTipoMedicamento=" + id, "text", function (data) {
//            ListarTipoMedicamento();
//            modal.hide();
//        });
//    };
//}

function Eliminar(id) {
    fetchGet("TipoMedicamento/RecuperarTipoMedicamento/?idTipoMedicamento=" + id, "json", function (data) {
        Confirmar(undefined, "¿Desea eliminar el Tipo de Medicamento " + data.nombre + " ?", function () {
            fetchGet("TipoMedicamento/EliminarTipoMedicamento/?idTipoMedicamento=" + id, "text", function (r) {
                Exito("Tipo de Medicamento eliminado exitosamente");
                ListarTipoMedicamento();
            });
        });
    });
}

function MostrarModal() {
    LimpiarDatos("frmTipoMedicamento");//
    var myModal = new bootstrap.Modal(document.getElementById('modaltipoMedicamento'));
    myModal.show();
}