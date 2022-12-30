import { Form, FormGroup } from "@angular/forms";

export interface SafeData{
    // form:FormGroup;
    isDataSaved():boolean;
}