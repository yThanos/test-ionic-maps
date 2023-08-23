import { Component, ElementRef, ViewChild } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild("map") mapRef?: ElementRef<HTMLElement>;
  mapa?: GoogleMap;
  async init(){
    this.mapa = await GoogleMap.create({
      id: "my_map",
      element: document.getElementById("map")!,
      apiKey: "AIzaSyDEalAKzT7YOti3UKWwaCsDqbkSRcj8Hsc",
      config: {
        center: {
          lat: -29.720026670824154,
          lng: -53.7175518200379
        },
        zoom: 16
      }
    });
  }
}
