import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';



@Component({
  selector: 'app-portfolio-item',
  templateUrl: './portfolio-item.component.html',
  styles: []
})
export class PortfolioItemComponent  {
  producto: any = undefined;
  cod: string = undefined;
  constructor( private _ps: ProductosService,
              private route: ActivatedRoute ) {
    route.params.subscribe(parametros => {
      // console.log(parametros['id']);

      _ps.cargar_producto(parametros['id'])
      .subscribe(res => {
        this.cod = parametros['id'];
        this.producto = res.json();
        // console.log(this.producto);
      });
    });
  }

}
