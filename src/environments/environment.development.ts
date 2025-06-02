import {constants} from "../assets/constants";
import {Environment} from "../app/model/Environment";

const adminServiceHost = "http://localhost:4001";
const mediaServiceHost = "http://localhost:5001";
const userServiceHost = "http://localhost:4000";

export const environment = {
  production: false,
  environmentName:  Environment.DEV,
  admin_url: `${adminServiceHost}${constants.ACTIVE_VERSION}/api/public/auth`,
  organization_url: `${adminServiceHost}${constants.ACTIVE_VERSION}/api/public`,
  media_url: `${mediaServiceHost}${constants.ACTIVE_VERSION}/api/media`,
  user_url: `${userServiceHost}${constants.ACTIVE_VERSION}/api/public`,
  version: '0.0.1'
};
