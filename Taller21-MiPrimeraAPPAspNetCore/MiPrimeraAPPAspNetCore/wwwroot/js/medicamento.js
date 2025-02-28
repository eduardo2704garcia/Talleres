window.onload = function () {
    ListarMedicamento();
    ListarTipoMedicamento();
    ListarLaboratorio();
}


let objMedicamento;

async function ListarMedicamento() {

    objMedicamento = {
        url: "Medicamento/ListarMedicamento",
        cabeceras: ["Id Medicamento", "Codigo", "Nombre Medicamento", "Tipo Medicamento", "Laboratorio", "Uso Medicamento", "Contenido"],
        propiedades: ["idMedicamento", "codigo", "nombreMedicamento", "tipoMedicamento", "nombreLaboratorio", "usoMedicamento", "contenido"],
        editar: true,
        eliminar: true,
        propiedadID: "idMedicamento"
    }

    pintar(objMedicamento);
}
function ListarTipoMedicamento() {
    fetchGet("TipoMedicamento/ListarTipoMedicamento", "json", function (data) {
        data.forEach((tipoMedicamento) => {
            let option = document.createElement("option");
            option.value = tipoMedicamento.idTipoMedicamento;
            option.text = tipoMedicamento.nombre;
            document.getElementById("tipoMedicamento").appendChild(option);
        });
    });
}

function ListarLaboratorio() {
    fetchGet("Laboratorio/ListarLaboratorio", "json", function (data) {
        data.forEach((laboratorio) => {
            let option = document.createElement("option");
            option.value = laboratorio.idLaboratorio;
            option.text = laboratorio.nombre;
            document.getElementById("laboratorio").appendChild(option);
        });
    });
}

function MostrarModal() {
    LimpiarDatos("frmMedicamento");
    var myModal = new bootstrap.Modal(document.getElementById('modalMedicamento'));
    myModal.show();
    ListarTipoMedicamento();
    ListarLaboratorio();
}

function GuardarMedicamento() {
    let form = document.getElementById("frmMedicamento");
    let frm = new FormData(form);
    fetchPost("Medicamento/GuardarMedicamento", "text", frm, function (res) {
        // Perform other operations first
        LimpiarDatos("frmMedicamento");
        Exito("Registro Guardado con Exito");
        ListarMedicamento();
        var myModal = bootstrap.Modal.getInstance(document.getElementById('modalMedicamento'));
        myModal.hide();
    });
}

function Editar(id) {
    fetchGet("Medicamento/RecuperarMedicamento?idMedicamento=" + id, "json", function (data) {
        setN("idMedicamento", data.idMedicamento);
        setN("codigo", data.codigo);
        setN("nombreMedicamento", data.nombreMedicamento);
        setN("tipoMedicamento", data.idTipoMedicamento);
        setN("laboratorio", data.idLaboratorio);
        setN("usoMedicamento", data.usoMedicamento);
        setN("contenido", data.contenido);
        var myModal = new bootstrap.Modal(document.getElementById('modalMedicamento'));
        myModal.show();
    });

}

function Eliminar(id) {
    fetchGet("Medicamento/RecuperarMedicamento/?idMedicamento=" + id, "json", function (data) {
        Confirmar(undefined, "¿Desea eliminar el medicamento " + data.nombreMedicamento + " ?", function () {
            fetchGet("Medicamento/EliminarMedicamento/?idMedicamento=" + id, "text", function (r) {
                Exito("Medicamento Eliminado con Exito");
                ListarMedicamento();
            });
        });
    });
}

function LimpiarMedicamento() {
    LimpiarDatos("frmMedicamento");
}