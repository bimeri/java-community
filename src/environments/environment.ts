import {constants} from "../assets/constants";
import {Environment} from "../app/model/Environment";

const adminServiceHost = `http://192.168.215.70:4001`;
const mediaServiceHost = `http://192.168.215.70:5001`;
const userServiceHost = `http://192.168.215.70:4000`;
export const environment = {
  production: true,
  environmentName:  Environment.PROD,
  admin_url: `${adminServiceHost}${constants.ACTIVE_VERSION}/api/public/auth`,
  organization_url: `${adminServiceHost}${constants.ACTIVE_VERSION}/api/public`,
  media_url: `${mediaServiceHost}${constants.ACTIVE_VERSION}/api/media`,
  user_url: `${userServiceHost}${constants.ACTIVE_VERSION}/api/public`,
  version: '0.0.1'
};

