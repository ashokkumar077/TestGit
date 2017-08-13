import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mySort'
})

export class mySort implements PipeTransform{       
    transform(data:any,term:any):any{
            if(term === undefined) {console.log("sssssss");return data};
            return data.filter(function (dataEl:any) {
              return dataEl.name.toLowerCase().includes(term.toLowerCase())
            });    
    } 
}
