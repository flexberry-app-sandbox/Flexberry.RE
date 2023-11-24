import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.r-e.caption'),
          title: i18n.t('forms.application.sitemap.r-e.title'),
          children: [{
            link: 'i-i-s-r-e-ценновая-стела-l',
            caption: i18n.t('forms.application.sitemap.r-e.i-i-s-r-e-ценновая-стела-l.caption'),
            title: i18n.t('forms.application.sitemap.r-e.i-i-s-r-e-ценновая-стела-l.title'),
            icon: 'briefcase',
            children: null
          }, {
            link: 'i-i-s-r-e-база-клиента-l',
            caption: i18n.t('forms.application.sitemap.r-e.i-i-s-r-e-база-клиента-l.caption'),
            title: i18n.t('forms.application.sitemap.r-e.i-i-s-r-e-база-клиента-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-r-e-остаток-l',
            caption: i18n.t('forms.application.sitemap.r-e.i-i-s-r-e-остаток-l.caption'),
            title: i18n.t('forms.application.sitemap.r-e.i-i-s-r-e-остаток-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-r-e-резервуар-l',
            caption: i18n.t('forms.application.sitemap.r-e.i-i-s-r-e-резервуар-l.caption'),
            title: i18n.t('forms.application.sitemap.r-e.i-i-s-r-e-резервуар-l.title'),
            icon: 'archive',
            children: null
          }, {
            link: 'i-i-s-r-e-автоматизация-l',
            caption: i18n.t('forms.application.sitemap.r-e.i-i-s-r-e-автоматизация-l.caption'),
            title: i18n.t('forms.application.sitemap.r-e.i-i-s-r-e-автоматизация-l.title'),
            icon: 'calendar',
            children: null
          }]
        }
      ]
    };
  }),
})