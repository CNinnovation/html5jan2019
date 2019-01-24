using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using System.Web;

namespace SignalRSample.Hubs
{
    public class ChatHub : Hub
    {

        public async Task SendMessage(string name, string message)
        {
          
            name = HttpUtility.HtmlEncode(name);
            message = HttpUtility.HtmlEncode(message);
            await base.Clients.All.SendAsync("BroadcastMessage", name, message);
        }
    }
}
