import { CanMatchFn } from '@angular/router';
import {Inject} from "@angular/core";
import {PartnerService} from "../services/partner/partner.service";

export const authGuard: CanMatchFn = (route, segments) => {
  const authService: PartnerService = Inject(PartnerService);
  return true;
};

export const isAdminUser: CanMatchFn = (route, segments) => {
  return true;
};

