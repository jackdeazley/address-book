import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToasterAlertService {
  public toasterAlert$: Subject<ToasterAlertModel> =
    new Subject<ToasterAlertModel>();

  constructor() {}
}

export interface ToasterAlertModel {
  showToaster: boolean;
  toasterType?: ToasterAlertType;
  message?: string;
}

export enum ToasterAlertType {
  SUCCESS = 'success',
  ERROR = 'error',
  DELETE = 'delete',
}
