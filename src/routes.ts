import { Router } from 'express';
import { AuthenticateClientController } from './modules/acount/authenticateUser/AuthenticateClientController';
import { AuthenticateDeliverymanController } from './modules/acount/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { CreateDeliveryController } from './modules/deliveries/useCases/CreateDelivery/CreateDeliveryController';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';

const routes = Router();

const createClientController = new CreateClientController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();

routes.post('/client/authenticate', authenticateClientController.handle);
routes.post(
  '/deliveryman/authenticate',
  authenticateDeliverymanController.handle
);
routes.post('/client/', createClientController.handle);
routes.post('/deliveryman/', createDeliverymanController.handle);
routes.post(
  '/delivery',
  ensureAuthenticateClient,
  createDeliveryController.handle
);

export { routes };
