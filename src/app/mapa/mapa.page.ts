import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import * as L from 'leaflet';
import { Router } from '@angular/router';

@Component({
  selector: 'mapa',
  templateUrl: './mapa.page.html',
  styleUrls: ['./mapa.page.scss'],
})
export class MapaPage {
  map!: L.Map;
  searchInput: string = '';
  latitude: number = 0;
  longitude: number = 0;
  marker: L.Marker | null = null;
  localName: string = ''; 
  postalCode: string = ''; 

  constructor(private router: Router) {}

  ngOnInit() {
    this.map = L.map('map', {
      center: [0, 0],
      zoom: 15,
      renderer: L.canvas(),
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    setTimeout(() => {
      this.map.invalidateSize();
    }, 0);

    this.setupGeolocation();
  }

  setupGeolocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.watchPosition(
        (pos) => this.success(pos),
        (err) => this.error(err),
        {
          enableHighAccuracy: true,
          timeout: 5000,
        }
      );
    } else {
      console.log('Geolocation is not available in this browser.');
    }
  }

  success(pos: GeolocationPosition) {
    this.latitude = pos.coords.latitude;
    this.longitude = pos.coords.longitude;

    if (this.map) {
      this.map.remove();
    }

    this.map = L.map('map', {
      center: [pos.coords.latitude, pos.coords.longitude],
      zoom: 13,
      renderer: L.canvas(),
    });

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);

    this.marker = L.marker([pos.coords.latitude, pos.coords.longitude])
      .addTo(this.map)
      .bindPopup('Eu estou aqui!')
      .openPopup();
  }

  error(err: GeolocationPositionError) {
    console.log(err.message);
  }

  searchLocation() {
    const searchUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${this.searchInput}`;

    fetch(searchUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          const result = data[0];
          const latitude = parseFloat(result.lat);
          const longitude = parseFloat(result.lon);
          this.updateMapLocation(latitude, longitude);

       
          this.getReverseGeocode(latitude, longitude);
        } else {
          console.log('Local não encontrado');
        }
      })
      .catch((error) => {
        console.error('Erro ao buscar local:', error);
      });
  }

  updateMapLocation(latitude: number, longitude: number) {
    if (this.marker) {
      this.map.removeLayer(this.marker);
    }
    this.map.setView([latitude, longitude], 13);
    this.marker = L.marker([latitude, longitude])
      .addTo(this.map)
      .bindPopup('Local Pesquisado')
      .openPopup();
  }

  getReverseGeocode(latitude: number, longitude: number) {
    const reverseGeocodeUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`;

    fetch(reverseGeocodeUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.address) {
          this.localName = data.display_name;
          this.postalCode = data.address.postcode;
        } else {
          console.log('Informações detalhadas do local não encontradas');
        }
      })
      .catch((error) => {
        console.error('Erro ao buscar informações detalhadas do local:', error);
      });
  }

  irParaInicio() {
    this.router.navigate(['/home']);
  }

}