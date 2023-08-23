import { Component, Input } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent {

  @Input() name?: string;

  mapa?: GoogleMap;

  constructor() {
    setTimeout(() => {
      this.init();
    }, 500);
  }

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
    })
    let map = new google.maps.Map(document.getElementById("map")!, {
      center: { lat: -29.720026670824154, lng: -53.7175518200379 },
      zoom: 16,
    });
    let overlay = new google.maps.GroundOverlay(
      "https://i.imgur.com/AldQ3zS.png",
      {
        north: -29.710317267445962,
        south: -29.72881969343165,
        east: -53.708645705427465,
        west: -53.723339910344414,
      }
    )
    overlay.setMap(map);
  }
}
const northeast = [-29.710317267445962, -53.708645705427465]
const southwest = [-29.728819693511422, -53.723307767405664]
