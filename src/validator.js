import Vue from 'vue';

Vue.validator('email', function (val) {
  return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val)
});

/**
 * See if value matches the ruled value,
 * for password confirm and such
 * @param  {var} 'val'  Input value
 * @param  {var} 'rule' Compare value
 * @return {Boolean} Validation result
 */
Vue.validator('match', (val, rule) => {
	return val === rule;
});