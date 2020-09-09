package io.ionic.starter;

import android.os.Bundle;

import com.getcapacitor.BridgeActivity;
import com.getcapacitor.Plugin;
import com.github.sbannigan.capacitor.VideoRecorder;

import java.util.ArrayList;

public class MainActivity extends BridgeActivity {
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    this.init(savedInstanceState, new ArrayList<Class<? extends Plugin>>() {{
      // todo: switch between web and native impl by adding / removing the "add" line below
      // On the web impl (without "add") the preview is shown (but native recording doesn't work ~ obviously).
      // On the native impl (with "add") the preview window is not shown.
      // The underlying web code is exactly the same and corresponds to the minimal implementation of the official github page.
      add(VideoRecorder.class);
    }});
  }
}
