import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hidepassword'
})
export class HidepasswordPipe implements PipeTransform {

  transform(value: string, activate:boolean = true): any {
    if (activate){
      let exit:string = "";
      for(let i=0; i<value.length; i++){
        exit += "*";
      }
      return exit;
    }else{
      return value;
    }
    
  }

}
