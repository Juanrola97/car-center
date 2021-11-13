import { Mantenimiento } from './../model/mantenimiento';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoService {

  constructor(private http: HttpClient) { }

  getMantenimiento() {
    return this.http
      .get<any>('assets/mantenimiento.json')
      .toPromise()
      .then((res) => <Mantenimiento[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
