Importing the CDPStudio project files:
To import this system into CDP Studio you first need to place the folder named ControlSystem into your "CDPStudioWorkSpace" folder. The "CDPStudioWorkSpace" folder is normally located in the top directory of your drive, Eg: "C:\CDPStudioWorkspace".

When the files are in the correct folder you can Load it in via the file menu, or by right clicking the system then clicking "Load project". On windows you can also use Ctrl+Shift+O.


Instructions for the Arduino project files:
In the folder I2CServoSlave you can find a file "I2CServoSlave.ino". THis file can be opened and uploaded to the arduino using the Arduino IDE.


Setting up I2C on Raspberry Pi:
In order get everything to run properly we need to do three things.
* Make sure the Pi is accessible on the same network as the computer running CDPStudio
* Enable SSH and I2C
Open a terminal and type in "sudo raspi-config". Select the "Interfacing Options"(5) menu option. In the following menu you enable both SSH and I2C.

NB: If you are on a fresh install you should change the default "username: pi, password: raspberry" to something private. To change the password use the command "passwd".


Wiring the system:
* Raspberry Pi
In order for the system to work out of the box you need to wire the I2C pins from the RaspberryPi to the Arduino. You will also need to wire together the ground pins.

* Arduino
You will have to connect a servomotor to the arduino. Pin 11 is used to control the pwm for the servo in the "I2CServoSlave.ino" file.