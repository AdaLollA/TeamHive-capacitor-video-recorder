import { Component } from '@angular/core';

import '@teamhive/capacitor-video-recorder';
import { VideoRecorderCamera, VideoRecorderPreviewFrame } from '@teamhive/capacitor-video-recorder';
import {Plugins} from '@capacitor/core';

const { VideoRecorder } = Plugins;

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  config: VideoRecorderPreviewFrame = {
    id: 'video-record',
    stackPosition: 'front', // 'front' overlays your app', 'back' places behind your app.
    width: 200,
    height: 200,
    x: 100,
    y: 100,
    borderRadius: 0
  };

  async startCamera() {
    await VideoRecorder.initialize({
      camera: VideoRecorderCamera.FRONT, // Can use BACK
      previewFrames: [this.config]
    });
  }
}
