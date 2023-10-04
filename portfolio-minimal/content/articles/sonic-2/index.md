---
title: "Reinforcement Learning with Python for Video Games"
description: "Deep Q-Learning with C# and Python"
date: "2023-10-01"
banner:
  src: "../../custom-imgs/sonic-2/sonic-thumbnail.png"
  alt: "Sonic 2 with Custom UI Elements for Training."
  caption: 'A screenshot of what the game looks like right now.'
categories:
  - "Software Development"
  - "Misc."
keywords:
  - "AI"
  - "Reinforcement Learning"
  - "Python"
  - "C#"
  - "Games"
---

View the code on <u><a>[Github](https://github.com/AnnoyingDoge/Sonic2-AI)</a></u>!

## Introduction
This project is heavily inspired by a series of videos (by user SethBling) about reinforcement learning for a few Mario games. I've really wanted to get into doing something similar, so this is my first attempt at that.

```Lua
--Lua code to get the camera position and display everything on screen
--#region main
while true do
    position = mainmemory.read_u16_be(0xEE00)

    --only update fitness when we get further than previous
    if position > fitness then
        updateFitness()
    end


    --gui text for reading information
    gui.text(50, 150, 'Position ' .. tostring(position))
    gui.text(50, 200, 'Fitness ' .. tostring(fitness))

    --make emulator go to next frame (rather than waiting for script to end)
    emu.frameadvance()
end
--#endregion
```

Initially, the project was going to use the BizHawk emulator's Lua scripting features to interact with Python. However, this interaction with Python is much easier to do using C#, which the BizHawk emulator can also do using a custom .NET tool. Basic data is gathered directly from the game's memory.

```Csharp
//Slightly different C# code to get the camera's position from memory, drawing GUI elsewhere
public uint GetCameraPosition()
{
    APIs.Memory.UseMemoryDomain(APIs.Memory.MainMemoryName); //position information stored in main RAM of game
    APIs.Memory.SetBigEndian(true); //position information uses big Endian
    return APIs.Memory.ReadU16(0xEE00);
}
```

So far, I'm only just starting on the actual reinforcement learning part of the process. For now, I've got a C# tool that sends fitness (reward feedback) and position data to Python, while receiving game input back. This uses a simple websocket connection, which I had not written before, but was quite simple. Next, I will implement the basic training model (as well as getting visual data from Sonic 2 for training).

```Csharp
//Asynchronus Task to connect to the websocket server and send information
async Task<int> Connect()
{
    using (var ws = new ClientWebSocket())
    {
        //connect
        await ws.ConnectAsync(uri, CancellationToken.None);
        //buffer stuff for receiving a message
        var buffer = new byte[256];
        var buffer_segment = new ArraySegment<byte>(buffer);

        while (ws.State == WebSocketState.Open)
        {
            //send a message
            await ws.SendAsync(messageBytes, WebSocketMessageType.Binary, true, CancellationToken.None);
            
            WebSocketReceiveResult received = await ws.ReceiveAsync(buffer_segment, CancellationToken.None);

            //get rid of extra bytes on message
            byte[] receivedBytes = new byte[received.Count];
            for(int i = 0; i < received.Count; i++)
            {
                receivedBytes[i] = buffer_segment.Array[i];
            }
            //convert resulting message to string
            receivedMessage = Encoding.UTF8.GetString(receivedBytes);

            buffer_segment = new ArraySegment<byte>(buffer);
        }
    }

    return 0;
}
```