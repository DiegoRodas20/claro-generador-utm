
import { NgModule } from '@angular/core';
import { PrimeNGModule } from './prime-ng/prime-ng.module';

@NgModule({
    imports: [PrimeNGModule],
    exports: [PrimeNGModule],
})

export class SharedModule { }
