# Issue #27 #
Reference: https://github.com/TeamHive/capacitor-video-recorder/issues/27

## 1. Implementation ##
This is the most minimal `ionic blank` implementation of the video recorder possible as shown by the official github page: https://github.com/TeamHive/capacitor-video-recorder

## 2. What does work ##
The web- and ios-implementation preview window works.

## 3. What does *not* work ##
The android native implementation does not show any preview window.

## 4. How to recreate ##

### 4.1 Setup the dev environment ###
Clone this repository and set it up accordingly
```
 - npm install
 - ionic build
 - npx cap sync
 - npx cap open android
```
*you may require additional steps - but as i said its the most basic impl*

### 4.2 Test the working / not working parts of the code ###
Follow the steps shown in the MainActivity to switch between the native and web implementation.

File to modify: 

`android/app/src/main/java/io/ionic/starter/MainActivity.java` 

Code to modify:
```javascript
// todo: switch between web and native impl by adding / removing the "add" line below
// On the web impl (without "add") the preview is shown (but native recording doesn't work ~ obviously).
// On the native impl (with "add") the preview window is not shown.
// The underlying web code is exactly the same and corresponds to the minimal implementation of the official github page.
add(VideoRecorder.class);
```
