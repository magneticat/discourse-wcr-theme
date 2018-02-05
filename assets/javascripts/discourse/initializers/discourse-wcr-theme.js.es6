import { h } from 'virtual-dom';
import { on } from 'ember-addons/ember-computed-decorators';
import DiscourseURL from 'discourse/lib/url';
import { withPluginApi } from 'discourse/lib/plugin-api';

export default {
  name : "discourse-wcr-theme",
  initialize(container) {
    withPluginApi('0.8.8', (api) => {
      api.createWidget('wcrsearch', {
        tagName: 'div.wcrsearch',
        html() {
          return "";
        }
      });
    });
  }
}
