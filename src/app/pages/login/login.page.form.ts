import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class LoginPageForm {

    private formbuilder: FormBuilder;

    constructor(formBuilder: FormBuilder){
        this.formbuilder = formBuilder;
    }
    
    createForm(): FormGroup{
        return this.formbuilder.group({
            email: ['',[Validators.required, Validators.email]],
            password:['',[Validators.required]]
        })
    }

}