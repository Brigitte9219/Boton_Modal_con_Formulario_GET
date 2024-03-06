import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from './components/formulario/formulario.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba';
  overlay: any;

  constructor(public dialog: MatDialog) { }

  abrirFormulario(): void {
    const dialogRef = this.dialog.open(FormularioComponent, {
      width: '800px',
      height: '600px',
      //panelClass: 'custom-dialog-container',
      disableClose: false,
      //data: { /* datos a pasar al modal */ },
      //ariaDescribedBy: 'modal-description',
      //ariaLabel: 'Modal de edición de formulario',
      //position: { top: '50px', left: '50px' },
      closeOnNavigation: true,
      //scrollStrategy: this.overlay.scrollStrategies,
    });
    

    // Aquí puedes suscribirte a eventos del modal si es necesario
  }
  
}
