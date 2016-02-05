/*import languages from 'catalogue/languages';
import testing from 'catalogue/testing';
import features from 'catalogue/features';
import _ from 'lodash';*/
var _ = require('lodash');
var languages = require('./catalogue/languages');
var testing = require('./catalogue/testing');
var features = require('./catalogue/features');

(() => {
  "use strict";

  const language = languages[_.random(0, languages.length - 1)];
  const tests = testing[_.random(0, testing.length - 1)];
  const feature = features[_.random(0, features.length - 1)];

  let date = new Date();

  console.log('Use ' + language +
              ' with ' + tests +
              ' to verify ' + feature +
              '. You have until ' + date.getHours() +  ':' + (date.getMinutes() + 10));

})();