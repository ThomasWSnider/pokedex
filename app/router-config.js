import { AccountController } from "./controllers/AccountController.js";
import { PokemonsController } from "./controllers/PokemonsController.js";
import { SandboxPokemonsController } from "./controllers/SandboxPokemonsController.js";
import { AuthGuard } from "./services/AuthService.js";
import { Router } from "./utils/Router.js";


export const router = new Router([
  {
    path: '',
    controllers: [PokemonsController, SandboxPokemonsController],
    view: 'app/views/PokedexView.html'
  },
  {
    path: '#/account',
    middleware: [AuthGuard],
    controllers: [AccountController],
    view: 'app/views/AccountView.html',
  }
])




