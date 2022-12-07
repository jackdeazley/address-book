import { Component, Input, OnInit } from '@angular/core';
import { faCheck, faTrash, faX } from '@fortawesome/free-solid-svg-icons';
import {
  ToasterAlertModel,
  ToasterAlertService,
  ToasterAlertType,
} from 'src/app/services/toaster-alert.service';

@Component({
  selector: 'app-toaster-alert',
  templateUrl: './toaster-alert.component.html',
  styleUrls: ['./toaster-alert.component.scss'],
})
export class ToasterAlertComponent implements OnInit {
  @Input() toasterAlertModel: ToasterAlertModel;

  public faSuccess = faCheck;
  public faClose = faX;
  public faDelete = faTrash;

  public success: ToasterAlertType.SUCCESS;
  public error: ToasterAlertType.ERROR;
  public delete: ToasterAlertType.DELETE;

  constructor(public toasterService: ToasterAlertService) {}

  ngOnInit(): void {
    console.log(this.toasterAlertModel);
  }

  public closeToasterAlert(): void {
    this.toasterService.toasterAlert$.next({ showToaster: false });
  }
}
