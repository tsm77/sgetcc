import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PRIMENG_IMPORTS } from './primeng-imports';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalService } from './modal.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PRIMENG_IMPORTS,
    ReactiveFormsModule,
    FormsModule

  ],
  providers:[
    ModalService
  ],
  exports: [
    PRIMENG_IMPORTS,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }
