import { Injectable } from '@angular/core';
import {  ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AddUserComponent } from './add-user/add-user.component';
import { SafeData } from './save-data.interface';

@Injectable({
  providedIn: 'root'
})
export class UnSaveChangesGuard implements CanDeactivate<SafeData> {
  canDeactivate(component:SafeData){
  
    if (!component.isDataSaved()) {
      return window.confirm('You have Unsaved changes.Are You sure want to navigate ')
    }
    else{
      return true;
    }
  }
}
