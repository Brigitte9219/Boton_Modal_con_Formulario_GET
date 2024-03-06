import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  dato: any;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.obtenerDatosPorId('1'); // Pasa el ID que desees obtener
  }

  obtenerDatosPorId(id: string): void {
    this.dataService.obtenerDatosPorId(id).subscribe(data => {
      this.dato = data;
    });
  }
}
