import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class InformacionService {

  info: any = {};
  cargada = false;
  cargada_sobre_nosotros = false;
  equipo: any[] = [];

  constructor( public http: Http ) {
      this.carga_info();
      this.carga_sobre_nosotros();
   }

   public carga_info() {
    this.http.get('../../assets/data/info.pagina.json')
    .subscribe( data => {
      this.cargada = true;
      this.info = data.json();
    });
   }

   carga_sobre_nosotros() {
      this.http.get('https://paginaweb-4a19d.firebaseio.com/Equipo.json')
      .subscribe(data => {
        
        this.cargada_sobre_nosotros = true;
        this.equipo = data.json();
      });
   }
}
