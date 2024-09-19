# Uses JavaScript to excecute EXE files on the Flipper Zero to Windows PC via Mass Storage
## This script sends keystrokes to the Windows machine to open up Powershell to listen and excecute our EXE file as the script opens up the Flipper's mass storage feature containing our EXE file.
### In order for this to work we need some configuration

> [!WARNING]
> USE AT YOUR OWN RISK I AM NOT RESPONSIBLE FOR ABUSE OF POWER

On your computer, download ExcecuteEXE.js, open up qFlipper and connect your Flipper Zero

Go to the file manager on the Flipper, go into sdcard/apps/Scripts and right click on any black space, from here you can open the script and place it into this folder

Now on your Flipper Zero, go to apps then USB and select Mass Storage and create an image named BackDoor.

After you create that image, select it and plug your Flipper back to your computer, this will open that image as a mass storage device you can place your exe file in and eject.

> [!NOTE]
> If you want the Image and EXE file to be named different you must also change the names in line 6 and 35 of the script otherwise the Windows machine won't understand.

Now you're all set! Plug in the Flipper into your target machine and excecute the JavaScript and watch the magic happen
