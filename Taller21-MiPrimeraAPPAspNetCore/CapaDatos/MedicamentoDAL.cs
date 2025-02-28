using CapaEntidad;
using Microsoft.Extensions.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace CapaDatos
{
    public class MedicamentoDAL : CadenaDAL
    {
        public List<MedicamentoCLS> ListarMedicamento()
        {
            List<MedicamentoCLS> lista = null;

            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("SELECT m.IIDMEDICAMENTO, m.CODIGO, m.NOMBREMEDICAMENTO,\r\ntm.IIDTIPOMEDICAMENTO,\r\n" +
                        " tm.NOMBRE as TIPO_MEDICAMENTO,\r\nl.IIDLABORATORIO,\r\nl.NOMBRE as NOMBRE_LABORATORIO,\r\nm.USOMEDICAMENTO, m.CONTENIDO\r\n" +
                        " FROM Medicamento m \r\nINNER JOIN TipoMedicamento tm \r\nON m.IIDTIPOMEDICAMENTO = tm.IIDTIPOMEDICAMENTO\r\ninner join Laboratorio l\r\n" +
                        " on m.IIDLABORATORIO=l.IIDLABORATORIO\r\nWHERE m.BHABILITADO = 1", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.Text;

                        SqlDataReader dr = cmd.ExecuteReader();


                        if (dr != null)
                        {
                            MedicamentoCLS omedicamentoCLS;
                            lista = new List<MedicamentoCLS>();
                            int posIdMedicamento = dr.GetOrdinal("IIDMEDICAMENTO");
                            int posCodigo = dr.GetOrdinal("CODIGO");
                            int posNombreMedicamento = dr.GetOrdinal("NOMBREMEDICAMENTO");
                            int posTipoMedicamento = dr.GetOrdinal("TIPO_MEDICAMENTO");
                            int posNombreLaboratorio = dr.GetOrdinal("NOMBRE_LABORATORIO");
                            int posUsoMedicamento = dr.GetOrdinal("USOMEDICAMENTO");
                            int posContenido = dr.GetOrdinal("CONTENIDO");
                            while (dr.Read())
                            {
                                omedicamentoCLS = new MedicamentoCLS();
                                omedicamentoCLS.idMedicamento = dr.IsDBNull(posIdMedicamento) ? 0 : dr.GetInt32(posIdMedicamento);
                                omedicamentoCLS.codigo = dr.IsDBNull(posCodigo) ? "" : dr.GetString(posCodigo);
                                omedicamentoCLS.nombreMedicamento = dr.IsDBNull(posNombreMedicamento) ? "" : dr.GetString(posNombreMedicamento);
                                omedicamentoCLS.tipoMedicamento = dr.IsDBNull(posTipoMedicamento) ? "" : dr.GetString(posTipoMedicamento);
                                omedicamentoCLS.nombreLaboratorio = dr.IsDBNull(posNombreLaboratorio) ? "" : dr.GetString(posNombreLaboratorio);
                                omedicamentoCLS.usoMedicamento = dr.IsDBNull(posUsoMedicamento) ? "" : dr.GetString(posUsoMedicamento);
                                omedicamentoCLS.contenido = dr.IsDBNull(posContenido) ? "" : dr.GetString(posContenido);

                                lista.Add(omedicamentoCLS);
                            }
                        }
                    }
                }
                catch (Exception)
                {
                    cn.Close();
                    lista = null;
                    throw;

                }
            }
            return lista;

        }

        public int GuardarMedicamento(MedicamentoCLS oMedicamentoCLS)
        {
            int respuesta = 0;
            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspGuardarMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidmedicamento", oMedicamentoCLS.idMedicamento);
                        cmd.Parameters.AddWithValue("@codigo", oMedicamentoCLS.codigo);
                        cmd.Parameters.AddWithValue("@nombremedicamento", oMedicamentoCLS.nombreMedicamento);
                        cmd.Parameters.AddWithValue("@iidtipomedicamento", oMedicamentoCLS.idTipoMedicamento);
                        cmd.Parameters.AddWithValue("@iidlaboratorio", oMedicamentoCLS.idLaboratorio);
                        cmd.Parameters.AddWithValue("@usomedicamento", oMedicamentoCLS.usoMedicamento);
                        cmd.Parameters.AddWithValue("@contenido", oMedicamentoCLS.contenido);
                        respuesta = cmd.ExecuteNonQuery();
                    }
                }
                catch (Exception)
                {
                    cn.Close();
                    respuesta = 0;
                    throw;
                }
            }
            return respuesta;
        }

        public MedicamentoCLS RecuperarMedicamento(int idMedicamento)
        {
            int respuesta = 0;
            MedicamentoCLS omedicamentoCLS = new MedicamentoCLS();
            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("SELECT * FROM Medicamento WHERE BHABILITADO = 1 AND IIDMEDICAMENTO = @idmedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.Text;
                        cmd.Parameters.AddWithValue("@idmedicamento", idMedicamento);
                        SqlDataReader dr = cmd.ExecuteReader();
                        if (dr != null)
                        {
                            int posIdMedicamento = dr.GetOrdinal("IIDMEDICAMENTO");
                            int posCodigo = dr.GetOrdinal("CODIGO");
                            int posNombreMedicamento = dr.GetOrdinal("NOMBREMEDICAMENTO");
                            int posTipoMedicamento = dr.GetOrdinal("IIDTIPOMEDICAMENTO");
                            int posLaboratorio = dr.GetOrdinal("IIDLABORATORIO");
                            int posUsoMedicamento = dr.GetOrdinal("USOMEDICAMENTO");
                            int posContenido = dr.GetOrdinal("CONTENIDO");
                            if (dr.Read())
                            {
                                omedicamentoCLS.idMedicamento = dr.IsDBNull(posIdMedicamento) ? 0 : dr.GetInt32(posIdMedicamento);
                                omedicamentoCLS.codigo = dr.IsDBNull(posCodigo) ? "" : dr.GetString(posCodigo);
                                omedicamentoCLS.nombreMedicamento = dr.IsDBNull(posNombreMedicamento) ? "" : dr.GetString(posNombreMedicamento);
                                omedicamentoCLS.idTipoMedicamento = dr.IsDBNull(posTipoMedicamento) ? 0 : dr.GetInt32(posTipoMedicamento);
                                omedicamentoCLS.idLaboratorio = dr.IsDBNull(posLaboratorio) ? 0 : dr.GetInt32(posLaboratorio);
                                omedicamentoCLS.usoMedicamento = dr.IsDBNull(posUsoMedicamento) ? "" : dr.GetString(posUsoMedicamento);
                                omedicamentoCLS.contenido = dr.IsDBNull(posContenido) ? "" : dr.GetString(posContenido);
                            }
                        }
                    }
                }
                catch (Exception)
                {
                    cn.Close();
                    omedicamentoCLS = null;
                    throw;
                }
            }
            return omedicamentoCLS;

        }

        public int EliminarMedicamento(int idMedicamento)
        {
            int respuesta = 0;
            using (SqlConnection cn = new SqlConnection(this.cadena))
            {
                try
                {
                    cn.Open();
                    using (SqlCommand cmd = new SqlCommand("uspEliminarMedicamento", cn))
                    {
                        cmd.CommandType = System.Data.CommandType.StoredProcedure;
                        cmd.Parameters.AddWithValue("@iidmedicamento", idMedicamento);
                        respuesta = cmd.ExecuteNonQuery();
                    }
                }
                catch (Exception)
                {
                    cn.Close();
                    respuesta = 0;
                    throw;
                }
            }
            return respuesta;

        }
    }

}

