package com.simpleapp;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.reactnativenavigation.NavigationReactPackage;
import com.reactnativecomponent.splashscreen.RCTSplashScreenPackage;
import com.reactnative.photoview.PhotoViewPackage;
import com.zmxv.RNSound.RNSoundPackage;
import com.rnim.rn.audio.ReactNativeAudioPackage;
import com.brentvatne.react.ReactVideoPackage;
import com.i18n.reactnativei18n.ReactNativeI18n;
import com.oblador.vectoricons.VectorIconsPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new NavigationReactPackage(),
            new RCTSplashScreenPackage(),
            new PhotoViewPackage(),
            new RNSoundPackage(),
            new ReactNativeAudioPackage(),
            new ReactVideoPackage(),
            new ReactNativeI18n(),
            new VectorIconsPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}
