import { createWidget } from 'discourse/widgets/widget';

createWidget('wcrsearch', {
  tagName: 'div.wcrsearch',

  html() {
    return "wcrsearch";
  }
});
