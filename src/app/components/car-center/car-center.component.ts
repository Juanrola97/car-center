import { Mantenimiento } from './../../model/mantenimiento';
import { MantenimientoService } from './../../services/mantenimiento.service';
import { ProductService } from './../../services/product.service';
import { Product } from './../../model/product';
import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-car-center',
  templateUrl: './car-center.component.html',
  styleUrls: ['./car-center.component.scss'],
})
export class CarCenterComponent implements OnInit {
  facturaDialog: boolean = false;

  mantenimientos: Mantenimiento[] = [];

  Mantenimiento: Mantenimiento = {} as Mantenimiento;

  selectedMantenimiento: Mantenimiento[] = [];
  totalPago: number = 0;

  submitted: boolean = false;

  constructor(
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private mantenimientoService: MantenimientoService
  ) {}

  ngOnInit() {
    this.mantenimientoService
      .getMantenimiento()
      .then((data) => (this.mantenimientos = data));
  }
  generarFactura() {
    this.facturaDialog = true;
    this.totalPago = 0;
    this.selectedMantenimiento.map((mantenimiento) => {
      this.totalPago += mantenimiento.valorServicio
        ? mantenimiento.valorServicio -
          (mantenimiento.descuentoServicio / 100) * mantenimiento.valorServicio
        : 0;
      this.totalPago += mantenimiento.valorRepuesto
        ? (mantenimiento.valorRepuesto -
          (mantenimiento.descuentoRepuesto / 100) * mantenimiento.valorRepuesto) * (mantenimiento.cantidadRepuesto ? mantenimiento.cantidadRepuesto : 1)
        : 0;
    });
    this.totalPago += (19 / 100) * this.totalPago;
    //this.selectedProducts = [];
  }
}
