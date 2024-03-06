import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  dato: any;

  constructor(private dataService: DataService,
    private dialogRef: MatDialogRef<FormularioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

    ngOnInit(): void {
      // Obtener los datos por ID cuando el componente se inicializa
      this.obtenerDatosPorId(this.data.id);
    }

  obtenerDatosPorId(id: string): void {
    this.dataService.obtenerDatosPorId(id).subscribe(data => {
      this.dato = data;
    });
  }

  guardarDatos(): void {
    this.dataService.guardarDatos(this.dato).subscribe(response => {
      console.log('Datos guardados exitosamente:', response);
      alert('Datos guardados exitosamente!');
    });
  }

  cerrarModal(): void {
    this.dialogRef.close();
  }
}
