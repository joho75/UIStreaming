import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { FpapaManagerService } from './shared/services/fpapa-manager.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NoopAnimationsModule, MatTableModule],
  providers: [FpapaManagerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
