import './styles/index.scss';
import { Game } from './js/game';

const game = new Game();
game.loadScene().then(() => {
  game.start();
});
