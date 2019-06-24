import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'capital'
})

export class CapitalPipe implements PipeTransform {
    transform(value: string, all:number ): string {
        value = value.toLowerCase();

        let words = value.split(" ");

        if(all == 0){
            words[0] = words[0][0].toUpperCase() + words[0].substr(1);
        }else if(all == 1){
            words[1] = words[1][0].toUpperCase() + words[1].substr(1);
        }else if(all == 2){
            words[2] = words[2][0].toUpperCase() + words[2].substr(1);
        }else {
            for(let i in words){
                words[i] = words[i][0].toUpperCase() + words[i].substr(1);
            }
        }
        
        return words.join(" ");
    }
}