---
title: "Modified Ender 5"
description: "Read about my custom Ender 5."
date: "2022-10-29"
banner:
  src: "../../custom-imgs/ender-5/ender5.jpg"
  alt: "A messy 3D printer"
  caption: 'My heavily modified Ender 5.'
categories:
  - "Electronics"
  - "3D Printing"
keywords:
  - "3D Printing"
  - "Electronics"
  - "Raspberry Pi"
---
## Introduction

This is my Ender 5, a printer I’ve had since 9th grade. I’ve included it since there has been a longstanding process of fixing it, researching 3D printers, and upgrading it. Through this printer, I’ve gained nearly all my current knowledge on FDM 3D printing.

## Repairs and Modifications

Throughout the lifespan of this printer, a few things have broken and been replaced. For instance, the hotend was damaged. In the process of researching replacements, I learned that I could print materials at higher temperatures using an all-metal hotend. This allowed me to start experimenting with materials like PETG. In this experimentation, I also ruined a smooth PEI build plate, as the two materials are known to fuse. Thus, I researched comparable alternatives for PETG, landing on a textured PEI sheet.

I have elected to make upgrades such as a geared extruder, Raspberry Pi server for remote control of the printer, custom 32-bit mainboard, and auto-bed leveling. These have all made my printer more reliable, and even quieter.

#### Hotend

![The hotend of the 3D printer.](../../custom-imgs/ender-5/hotend.jpg "The Ender 5 hotend.")

Pictured above is the all metal hotend with a BLTouch attached. I chose the BLTouch for auto-bed leveling I find that it has the least drawbacks of any system. The main concern is that its mechanical parts may wear over time, but in exchange, it is bed-type agnostic, unlike inductive or capacitive sensors. This means that I can swap the bed out with no worry that the sensor or Z-offset will need to be adjusted.

#### Raspberry Pi Server

![A Raspberry Pi computer mounted in a red case, attached to the frame of a 3D printer.](../../custom-imgs/ender-5/rpi.jpg "The Raspberry Pi mounted to the printer.")

This Raspberry Pi server runs <u><a>[OctoPrint](https://octoprint.org/)</a></u>, allowing me to control the printer and check its status on the local network. Handy, since my printer is in the basement!

#### 32-bit Mainboard

![A 3D printer mainboard mounted in a blue, attached to the frame of a 3D printer.](../../custom-imgs/ender-5/mainboard.jpg "The 32-bit board mounted to the printer.")

This is a BigTreeTech SKR V1.3 with TMC2208 Stepper Motor Drivers. The purpose of this is threefold:
1. More space for custom firmware (useful for auto-bed leveling and other advanced features)
2. More physical expansion (useful for auto-bed leveling)
3. Near silent operation (thanks to the TMC2208 drivers)


