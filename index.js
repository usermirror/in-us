var jstz = require('jstz')

module.exports = function inUS() {
  return isInUSTimezone() || isUSLocale()
}

var countryCodes = {
  US: 'United States'
}

module.exports.isInUSTimezone = isInUSTimezone
module.exports.isUSLocale = isUSLocale

function isUSLocale() {
  var locale = browserLocale()
  var code = locale

  if (locale.indexOf('-') >= 0) {
    code = locale.split('-')[1]
  }

  return !!countryCodes[code.toUpperCase()]
}

var timezoneCities = {
  'America/Adak': true,
  'America/Anchorage': true,
  'America/Boise': true,
  'America/Chicago': true,
  'America/Dawson': true,
  'America/Denver': true,
  'America/Detroit': true,
  'America/Los_Angeles': true,
  'America/Indiana/Indianapolis': true,
  'America/Indiana/Knox': true,
  'America/Indiana/Marengo': true,
  'America/Indiana/Petersburg': true,
  'America/Indiana/Tell_City': true,
  'America/Indiana/Vevay': true,
  'America/Indiana/Vincennes': true,
  'America/Indiana/Winamec': true,
  'America/Kentucky/Louisville': true,
  'America/Kentucky/Menticello': true,
  'America/Menominee': true,
  'America/Yakutat': true,
  'America/Honolulu': true,
  'America/New_York': true,
  'America/Nome': true,
  'America/North_Dakota/Beulah': true,
  'America/North_Dakota/Center': true,
  'America/North_Dakota/New_Salem': true,
  'America/Guam': true,
  'America/Puerto_Rico': true,
  'America/Phoenix': true
}

function isInUSTimezone() {
  var tz = jstz.determine().name()
  return Boolean(tz && timezoneCities[tz])
}

function browserLocale() {
  if (window.navigator.languages && window.navigator.languages.length > 0) {
    // Latest versions of Chrome and Firefox set this correctly
    return navigator.languages[0]
  }

  if (navigator.userLanguage) {
    // IE only
    return navigator.userLanguage
  }

  return navigator.language
}
