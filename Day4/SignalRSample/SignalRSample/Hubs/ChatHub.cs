using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SignalRSample.Hubs
{
    public class ChatHub : Hub
    {

        public async Task SendMessage(string name, string message)
        {
            await base.Clients.All.SendAsync("BroadcastMessage", name, message);
        }
    }
}
