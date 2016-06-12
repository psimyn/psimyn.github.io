---
layout: post
title: "Dual-booting Linux and OSX"
date: 2016-06-12 12:24:35 +1000
categories: linux
---

After far too long putting up with OSX's crap, I finally cracked a few days ago. The actual install/setup bit was pretty straightforward, there was some screwing around getting HFS+ partition shared between the two (I wanted to share most stuff in home directory). For easiest, jump to [the good way](#the-good-way)

## The Long Way

### 1. Clean up OSX
Critical thing here is disable "secure empty trash" in Finder. It was going to take about a week to delete otherwise (I had 1.8M files in there)

### 2. Create "partitions"
Using Disk Utility, wasn't able to resize partition for some weird reason. Clicking "+" button allowed adding empty space, but it used nearly all available space. Was hoping for smaller linux partition, but this will do for now. Just click and 

### 3. Install rEFInd
This is comically easy. [Download](http://www.rodsbooks.com/refind/installing.html) and run `install-refind`. Reboot to verify it works if you want, otherwise power through to install

### 4. Install linux, choose partitions and add what is needed
From rEFInd menu, can select USB boot (I had to power-off and boot with USB inserted). Install as normal, when partitioning you probably want to specify you own. Check these options carefully and step 5 should be avoidable.

### 5. Re-install rEFInd
GRUB will nuke replace rEFInd so for now you can only boot into Linux. Fix that with some help from [this guy](http://askubuntu.com/questions/698606/refind-menu-not-showing-on-a-dual-mac-ubuntu-machine). This is very likely avoidable

### 6. Re-order rEFInd boot options (default to Linux)
- efimanager something something 

### 7. No wifi
Classic Linux. This just needed an `apt-get install dkms` - but that needs a network connection. Options are either to download the package directly and copy it on some kind of floppy disk, or tether to a phone over bluetooth (which works out of the box..)

### 8. Mount HFS+
Now we have internet, and want to start sharing those tasty directories. Installed `hfsplus` package, then mount fails for some reason. Can't remember the exact error, but I usually assume fsck will fix it. Rebooted to OSX Recovery mode, and tried the black box "repair". Booted back into Linux and tried mounting again, and everything is ok

### 9. Mount HFS+ in RW mode 
Read-only home directory is not so useful for me. Apparently to mount HFS+ as writable, you need to disable journaling as described on [ineed.coffee](https://ineed.coffee/64/how-to-have-both-mac-os-x-and-linux-installed-and-share-the-same-home-directory-files/). Boot back into OSX and try disabling with various diskutil commands, but they just through unhelpful errors. Turns out it was Core Storage. This whole time

### 10. Kill Core Storage
Great overview of how to fix this from [awesometoast](http://awesometoast.com/yosemite-core-storage-and-partition-woes/).

Two `diskutil cs` commands later and you can now disable journaling. But first you need to reinstall rEFInd from osx again (just re-run `install-refind` script).

### 11. Disable HFS+ Journal
Reboot, boot into OSX Recovery Mode, open Disk Utility. 
Unmount "Macintosh HD", then Option click on "File" and Click "disable journaling"
From [castyour.net](http://castyour.net/disable-hfs-journaling-leopard-use-disks-readwrite-linux)

### 12. Mount!
Back in linux, you should now be able to mount properly. May need to set UID to 501 (or whatever Apple user is) and possibly `chown` the HFS+ mount directory, 
Now symlink any needed stuff from /mnt/ [Ubuntu docs](https://help.ubuntu.com/community/hfsplus)


### 13. Fix Suspend/Resume
Classic linux volume 2 - resuming from sleep always seems to break or misbehave for some reason. In this case suspend was fine straightaway, but when resuming the screen would turn on briedly, then go black. Hooray.

After resuming, the screen is either 100% or 0% - and 0 was the value it chose if the brightness was below about 95%. Solution for a while was just mash the "increase brightness" button until it turns back on. For proper fix, install (mba6x)[https://github.com/patjak/mba6x_bl] and everything is great.


### 14. Fix other keymap annoyances
- Make fn keys fn-by-default, use fn for media keys etc: `# echo 2 > /sys/module/hid_apple/parameters/fnmode`

What to do about ctrl/alt/super? The physical ordering of Ctrl/Alt/Super is different to normal layout so there is a lot of jumping. 



------------



## The Good Way

1. Disable CoreStorage on OSX partition (and disable journaling if RW is wanted)
1. Install rEFInd
1. Install distro of your choosing
1. Fix resume and key mappings