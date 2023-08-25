import { Component, Input } from '@angular/core';
import { GoogleMap } from '@capacitor/google-maps';
import * as jsonData from '../../assets/data/data.json';

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

  data: any = jsonData;

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
        north: northeast[0],
        south: southwest[0],
        east: northeast[1],
        west: southwest[1],
      }
    )
    //overlay.setMap(map);


    let polygon = new google.maps.Polygon({
      paths: [
        new google.maps.LatLng(-29.715915580049312, -53.7148139715800),
        new google.maps.LatLng(-29.71598066995641, -53.715209140119450),
        new google.maps.LatLng(-29.715436280342924, -53.715328372006354),
        new google.maps.LatLng(-29.715374148731946, -53.714929796841560),
        new google.maps.LatLng(-29.715915580049312, -53.71481397158000)
      ],
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
    })
    //polygon.setMap(map);

    for(let poly of this.data.polygons){
      let path = [];
      for(let latLng of poly.path){
        path.push(new google.maps.LatLng(latLng[0], latLng[1]));
      }
      let polygon = new google.maps.Polygon({
        paths: path,
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
      })
      polygon.setMap(map);
    }
  }
}
const northeast = [-29.710317267445962, -53.708645705427465]
const southwest = [-29.727996585731866, -53.72328774178500]
