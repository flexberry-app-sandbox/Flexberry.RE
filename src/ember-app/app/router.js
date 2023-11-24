import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-r-e-автоматизация-l');
  this.route('i-i-s-r-e-автоматизация-e',
  { path: 'i-i-s-r-e-автоматизация-e/:id' });
  this.route('i-i-s-r-e-автоматизация-e.new',
  { path: 'i-i-s-r-e-автоматизация-e/new' });
  this.route('i-i-s-r-e-база-клиента-l');
  this.route('i-i-s-r-e-база-клиента-e',
  { path: 'i-i-s-r-e-база-клиента-e/:id' });
  this.route('i-i-s-r-e-база-клиента-e.new',
  { path: 'i-i-s-r-e-база-клиента-e/new' });
  this.route('i-i-s-r-e-остаток-l');
  this.route('i-i-s-r-e-остаток-e',
  { path: 'i-i-s-r-e-остаток-e/:id' });
  this.route('i-i-s-r-e-остаток-e.new',
  { path: 'i-i-s-r-e-остаток-e/new' });
  this.route('i-i-s-r-e-резервуар-l');
  this.route('i-i-s-r-e-резервуар-e',
  { path: 'i-i-s-r-e-резервуар-e/:id' });
  this.route('i-i-s-r-e-резервуар-e.new',
  { path: 'i-i-s-r-e-резервуар-e/new' });
  this.route('i-i-s-r-e-ценновая-стела-l');
  this.route('i-i-s-r-e-ценновая-стела-e',
  { path: 'i-i-s-r-e-ценновая-стела-e/:id' });
  this.route('i-i-s-r-e-ценновая-стела-e.new',
  { path: 'i-i-s-r-e-ценновая-стела-e/new' });
});

export default Router;
