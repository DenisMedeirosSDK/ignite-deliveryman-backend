import { Router } from 'express';
import { AuthenticateClientController } from './modules/acount/authenticateUser/AuthenticateClientController';
import { AuthenticateDeliverymanController } from './modules/acount/authenticateDeliveryman/AuthenticateDeliverymanController';
import { CreateClientController } from './modules/clients/useCases/createClient/CreateClientController';
import { FindAllDeliveriesController } from './modules/clients/useCases/deliveries/FindAllDeliveriesController';
import { CreateDeliverymanController } from './modules/deliveryman/useCases/createDeliveryman/CreateDeliverymanController';
import { FindAllDeliveriesDeliverymanController } from './modules/deliveryman/useCases/findAllDeliveries/FindAllDeliveriesDeliverymanController';
import { CreateDeliveryController } from './modules/deliveries/useCases/CreateDelivery/CreateDeliveryController';
import { FindAllAvailableController } from './modules/deliveries/useCases/findAllAvailable/FindAllAvailableController';
import { UpdateDeliverymanController } from './modules/deliveries/useCases/updateDeliveryman/UpdateDeliverymanController';
import { ensureAuthenticateClient } from './middlewares/ensureAuthenticateClient';
import { ensureAuthenticateDeliveryman } from './middlewares/ensureAuthenticateDeliveryman';

const routes = Router();

const createClientController = new CreateClientController();
const findAllDeliveriesController = new FindAllDeliveriesController();
const createDeliverymanController = new CreateDeliverymanController();
const findAllDeliveriesDeliverymanController =
  new FindAllDeliveriesDeliverymanController();
const authenticateClientController = new AuthenticateClientController();
const authenticateDeliverymanController =
  new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();

routes.post('/client/authenticate', authenticateClientController.handle);
routes.get(
  '/client/deliveries',
  ensureAuthenticateClient,
  findAllDeliveriesController.handle
);

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

routes.get(
  '/deliveryman/deliveries',
  ensureAuthenticateDeliveryman,
  findAllDeliveriesDeliverymanController.handle
);

routes.get(
  '/delivery/available',
  ensureAuthenticateDeliveryman,
  findAllAvailableController.handle
);

routes.put(
  '/delivery/updateDeliveryman/:id',
  ensureAuthenticateDeliveryman,
  updateDeliverymanController.handle
);

export { routes };
