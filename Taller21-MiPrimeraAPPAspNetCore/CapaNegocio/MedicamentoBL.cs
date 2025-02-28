using CapaDatos;
using CapaEntidad;
using System.Reflection.Metadata.Ecma335;

namespace CapaNegocio
{
    public class MedicamentoBL
    {
        public List<MedicamentoCLS> ListarMedicamento()
        {
            MedicamentoDAL obj = new MedicamentoDAL();
            return obj.ListarMedicamento();
        }

        public int GuardarMedicamento(MedicamentoCLS oMedicamentoCLS)
        {
            MedicamentoDAL medicamentoDAL = new MedicamentoDAL();
            return medicamentoDAL.GuardarMedicamento(oMedicamentoCLS);
        }

        public MedicamentoCLS RecuperarMedicamento(int idMedicamento)
        {
            MedicamentoDAL obj = new MedicamentoDAL();
            return obj.RecuperarMedicamento(idMedicamento);
        }

        public int EliminarMedicamento(int idMedicamento)
        {
            MedicamentoDAL obj = new MedicamentoDAL();
            return obj.EliminarMedicamento(idMedicamento);
        }

    }
}