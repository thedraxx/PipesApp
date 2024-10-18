import { Pipe, PipeTransform } from '@angular/core';

//Fernando | toggleCase ="FERNANDO"
@Pipe({
  name: 'ToggleFly'
})

export class ToggleFly implements PipeTransform {
  transform(value: boolean): string {

    return (value)
      ? "vuela"
      : "no vuela"



  }
}
