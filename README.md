# Importing the CDPStudio project files:

To import this system into CDP Studio you first need to place the folder named ControlSystem into your "CDPStudioWorkSpace" folder. The "CDPStudioWorkSpace" folder is normally located in the top directory of your drive, Eg: "C:\CDPStudioWorkspace".

When the files are in the correct folder you can Load it in via the file menu, or by right clicking the system then clicking "Load project". On windows you can also use Ctrl+Shift+O.


# Instructions for the Arduino project files:
In the folder I2CServoSlave you can find a file "I2CServoSlave.ino". THis file can be opened and uploaded to the arduino using the Arduino IDE.


# Setting up I2C and SSH on Raspberry Pi:
In order get everything to run properly we need to do three things.
* Make sure the Pi is accessible on the same network as the computer running CDPStudio
* Enable SSH
* Enable I2C

Open a terminal and type in "sudo raspi-config". Select the "Interfacing Options"(5) menu option. In the following menu you enable both SSH and I2C.

NB: If you are on a fresh install you should change the default "username: pi, password: raspberry" to something private. To change the password use the command "passwd".


# Wiring the system:

**Raspberry Pi Zero**
![Image of wiring the PIZ](https://raw.githubusercontent.com/CDPTechnologies/I2CIOServerArduino/master/diagramPiZero.png)

**Raspberry Pi 3**
![Image of wiring the PI3](https://raw.githubusercontent.com/CDPTechnologies/I2CIOServerArduino/master/diagramPi3.png)

## Raspberry Pi
In order for the system to work out of the box you need to wire the I2C pins from the RaspberryPi to the Arduino. You will also need to wire together the ground pins.

## Arduino
You will have to connect a servomotor to the arduino. Pin 11 is used to control the pwm for the servo in the "I2CServoSlave.ino" file.

# Running the system
After everything is wired up and you have the project opened up in CDP Studio you will have to locate the Raspberry pi from the device list on your network and type in the ssh credentials that you set up "the default is username:pi and password:raspberry".

You then select the raspberry as the device that you will deploy to, you will also have to select rasbian jessie as the toolkit. After you have done this you will be ready to rightclick the system and click run to deploy and run the system.

> If you had troubles following the instructions above then I recommend taking a look at the help mode in CDP Studio.
> I recommend taking a look at the "Configure mode manual" and also the "Advanced Use -> Deployment Manual"

# Connecting to the web user interface
If you want to connect to the web user interface then you will have to input the following into your browser http://127.0.0.1:7689/www/index.html
The IP address: 127.0.0.1 will have to be switched out with the ip address of the raspberry pi.

This is what the web ui looks like.
![Image of Web UI](https://raw.githubusercontent.com/CDPTechnologies/I2CIOServerArduino/master/webui.png)
