import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-slide-panel',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './slide-panel.component.html',
  styleUrl: './slide-panel.component.scss'
})
export class SlidePanelComponent {

  @Input() isOpen = false;
  @Input() headerText = 'Slide Panel Header'; // Fixed typo in the default header text
  @Output() onClose = new EventEmitter();


  onClosePanel(){ // Corrected method name
    this.onClose.emit(false);
  }

}
