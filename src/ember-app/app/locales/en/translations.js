import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISREАвтоматизацияLForm from './forms/i-i-s-r-e-автоматизация-l';
import IISREБазаКлиентаLForm from './forms/i-i-s-r-e-база-клиента-l';
import IISREОстатокLForm from './forms/i-i-s-r-e-остаток-l';
import IISREРезервуарLForm from './forms/i-i-s-r-e-резервуар-l';
import IISREЦенноваяСтелаLForm from './forms/i-i-s-r-e-ценновая-стела-l';
import IISREАвтоматизацияEForm from './forms/i-i-s-r-e-автоматизация-e';
import IISREБазаКлиентаEForm from './forms/i-i-s-r-e-база-клиента-e';
import IISREОстатокEForm from './forms/i-i-s-r-e-остаток-e';
import IISREРезервуарEForm from './forms/i-i-s-r-e-резервуар-e';
import IISREЦенноваяСтелаEForm from './forms/i-i-s-r-e-ценновая-стела-e';
import IISREАвтоматизацияModel from './models/i-i-s-r-e-автоматизация';
import IISREБазаКлиентаModel from './models/i-i-s-r-e-база-клиента';
import IISREОстатокModel from './models/i-i-s-r-e-остаток';
import IISREПокупкаModel from './models/i-i-s-r-e-покупка';
import IISREРезервуарModel from './models/i-i-s-r-e-резервуар';
import IISREЦенноваяСтелаModel from './models/i-i-s-r-e-ценновая-стела';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-r-e-автоматизация': IISREАвтоматизацияModel,
    'i-i-s-r-e-база-клиента': IISREБазаКлиентаModel,
    'i-i-s-r-e-остаток': IISREОстатокModel,
    'i-i-s-r-e-покупка': IISREПокупкаModel,
    'i-i-s-r-e-резервуар': IISREРезервуарModel,
    'i-i-s-r-e-ценновая-стела': IISREЦенноваяСтелаModel
  },

  'application-name': 'RE',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'RE',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'RE',
          title: 'RE'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        'r-e': {
          caption: 'RE',
          title: 'RE',
          'i-i-s-r-e-ценновая-стела-l': {
            caption: 'Ценновая стела',
            title: ''
          },
          'i-i-s-r-e-база-клиента-l': {
            caption: 'База клиента',
            title: ''
          },
          'i-i-s-r-e-остаток-l': {
            caption: 'Остаток',
            title: ''
          },
          'i-i-s-r-e-резервуар-l': {
            caption: 'Резервуар',
            title: ''
          },
          'i-i-s-r-e-автоматизация-l': {
            caption: 'Автоматизация',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-r-e-автоматизация-l': IISREАвтоматизацияLForm,
    'i-i-s-r-e-база-клиента-l': IISREБазаКлиентаLForm,
    'i-i-s-r-e-остаток-l': IISREОстатокLForm,
    'i-i-s-r-e-резервуар-l': IISREРезервуарLForm,
    'i-i-s-r-e-ценновая-стела-l': IISREЦенноваяСтелаLForm,
    'i-i-s-r-e-автоматизация-e': IISREАвтоматизацияEForm,
    'i-i-s-r-e-база-клиента-e': IISREБазаКлиентаEForm,
    'i-i-s-r-e-остаток-e': IISREОстатокEForm,
    'i-i-s-r-e-резервуар-e': IISREРезервуарEForm,
    'i-i-s-r-e-ценновая-стела-e': IISREЦенноваяСтелаEForm
  },

});

export default translations;
