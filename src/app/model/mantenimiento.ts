export interface Mantenimiento {
    idMantenimiento?: number;
    idServicio?: number;
    idRepuesto?: number;
    nombre?: string;

    // Transients

    nombreServicio?: string;
    nombreRepuesto?: string;
    valorServicio?: number;
    valorRepuesto?: number;
    cantidadRepuesto?: number;
    descuentoServicio: number;
    descuentoRepuesto: number;
}
