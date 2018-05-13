import {Validator, NG_VALIDATORS, AbstractControl} from '@angular/forms';
import {Directive, Input} from '@angular/core';

@Directive({
    selector : '[confirmEqualPassword]',
    providers : [{
        provide :  NG_VALIDATORS,
        useExisting : confirmEqualPasswordValidator,
        multi : true
    }]
})

export class confirmEqualPasswordValidator implements Validator{
    @Input() confirmEqualPassword : string;
    validate(control: AbstractControl):{[key : string]:any | null}{
        const controlToCompare = control.parent.get(this.confirmEqualPassword);
        if(controlToCompare && controlToCompare.value !== control.value){
            return {'notEqual':true};
        }
        return null;
    }
}