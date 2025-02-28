using CapaNegocio;
using CapaEntidad;
using Microsoft.AspNetCore.Mvc;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace MiPrimeraAPPAspNetCore.Controllers
{
    public class MedicamentoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }


        public List<MedicamentoCLS> ListarMedicamento()
        {
            MedicamentoBL obj = new MedicamentoBL();
            return obj.ListarMedicamento();
        }

        public int GuardarMedicamento(MedicamentoCLS oMedicamentoCLS)
        {
            MedicamentoBL obj = new MedicamentoBL();
            return obj.GuardarMedicamento(oMedicamentoCLS);
        }

        public MedicamentoCLS RecuperarMedicamento(int idMedicamento)
        {
            MedicamentoBL obj = new MedicamentoBL();
            return obj.RecuperarMedicamento(idMedicamento);
        }

        public int EliminarMedicamento(int idMedicamento)
        {
            MedicamentoBL obj = new MedicamentoBL();
            return obj.EliminarMedicamento(idMedicamento);
        }
    }
}
