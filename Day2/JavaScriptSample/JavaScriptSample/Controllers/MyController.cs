using JavaScriptSample.Models;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace JavaScriptSample.Controllers
{
    public class MyController : Controller
    {
        public MyController()
        {

        }

        public ActionResult GetBook()
        {
            return Ok(new Book { Title = "Professional C# 7", Publisher = "Wrox Press" });
        }
    }
}
