import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


@Injectable()
export class ProductosService {
  productos: any[] = [];
  cargando = false;

  constructor(public http: Http) {
    this.cargar_productos();
  }

  public cargar_productos() {
    this.cargando = true;
    this.http.get('https://paginaweb-4a19d.firebaseio.com/productos_idx.json')
    .subscribe( res => {
      console.log(this.productos);
      this.cargando = false;
      this.productos = res.json();
    } );
  }
}
