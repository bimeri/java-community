import {Inject, Injectable} from '@angular/core';
import {PartnerService} from "../partner/partner.service";

@Injectable({
  providedIn: 'root',

})
export class AdminService {
private dashboardService = Inject(PartnerService);
  constructor(@Inject('APP_NAME') private appName: string) {}
}
