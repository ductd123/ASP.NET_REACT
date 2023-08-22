﻿using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Configuration;
using ASP.Net___ReactJS.Models;
using System.Data;

namespace ASP.Net___ReactJS.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TestController : ControllerBase
    {
        SqlConnection conn = new SqlConnection("server=APVN-PF3XBMS8\\OLIVER;database=master;Integrated Security=true");
        SqlCommand cmd = null;
        SqlDataAdapter da = null;

        [HttpPost]
        [Route("Registrtion")]
        public string Registration(Employee employee)
        {
            string msg = string.Empty;
            try
            {
                cmd = new SqlCommand("usp_Registration", conn);
                cmd.CommandType = CommandType.StoredProcedure;
                cmd.Parameters.AddWithValue("@Name", employee.Name);
                cmd.Parameters.AddWithValue("@PhoneNo", employee.PhoneNo);
                cmd.Parameters.AddWithValue("@Address", employee.Address);
                cmd.Parameters.AddWithValue("@IsActive", employee.IsActive);

                conn.Open();
                int i = cmd.ExecuteNonQuery();
                conn.Close();
                if (i > 0)
                {
                    msg = "Data inserted.";
                }
                else
                {
                    msg = "Error.";
                }

            }
            catch(Exception e)
            {
                msg = e.Message;
            }
            return msg;

        }

        [HttpPost]
        [Route("Login")]
        public string Login(Employee employee)
        {
            string msg = string.Empty;
            try
            {
                da = new SqlDataAdapter("usp_Login", conn);
                da.SelectCommand.CommandType = CommandType.StoredProcedure;
                da.SelectCommand.Parameters.AddWithValue("@Name",employee.Name);
                da.SelectCommand.Parameters.AddWithValue("@PhoneNo", employee.PhoneNo);
                DataTable dt = new DataTable();
                da.Fill(dt);
                if (dt.Rows.Count > 0)
                {
                    msg = "Use is valid";
                }
                else
                {
                    msg = "Use is invalid";
                }
            }
            catch (Exception e)
            {
                msg = e.Message;
            }
            return msg;

        }
    }
}