import test from 'ava'
import jstz from 'jstz'
import browserEnv from 'browser-env'
import inUS, { isInUSTimezone, isUSLocale } from '../index'

browserEnv()

let originalTZ = jstz.determine
let originalLanguages = window.navigator.languages
let originalLanguage = navigator.language
let originalUserLanguage = navigator.userLanguage

function mockTZ(tz) {
  jstz.determine = () => ({
    name: () => tz
  })
}

function mockLanguages(languages) {
  Object.defineProperty(window.navigator, 'languages', {
    value: languages,
    writable: true
  })
}

function mockLanguage(language) {
  Object.defineProperty(navigator, 'language', {
    value: language,
    writable: true
  })
}

function mockUserLanguage(language) {
  Object.defineProperty(navigator, 'userLanguage', {
    value: language,
    writable: true
  })
}

function reset() {
  jstz.determine = originalTZ

  Object.defineProperty(navigator, 'languages', {
    value: originalLanguages,
    writable: true
  })

  Object.defineProperty(navigator, 'language', {
    value: originalLanguage,
    writable: true
  })

  Object.defineProperty(navigator, 'userLanguage', {
    value: originalUserLanguage,
    writable: true
  })
}

test.beforeEach(reset)

test.serial(
  'inUS -> verifies the visitors timezone and locale (in order)',
  t => {
    // US English speaker traveling in London
    mockLanguages(['en-US'])
    mockTZ('Europe/London')
    t.true(inUS())

    // Spanish speaker in Phoenix
    mockLanguages(['es-ES'])
    mockTZ('America/Phoenix')
    t.true(inUS())
  }
)

test.serial('isInUSTimezone -> checks for timezones in Europe', t => {
  mockTZ('America/Chicago')
  t.true(isInUSTimezone())

  mockTZ('America/Mexico_City')
  t.false(isInUSTimezone())

  mockTZ('Pacific/Auckland')
  t.false(isInUSTimezone())
})

test.serial('isUSLocale -> supports `window.navigator.languages`', t => {
  // English
  mockLanguages(['en-US'])
  t.true(isUSLocale())

  // Spanish in US
  mockLanguages(['en-US'])
  t.true(isUSLocale())

  // Spanish in Spain
  mockLanguages(['es-ES'])
  t.false(isUSLocale())

  // Brazil / Portuguese
  mockLanguages(['pt-BR'])
  t.false(isUSLocale())
})

test.serial('isUSLocale -> supports `navigator.userLanguage`', t => {
  mockLanguages(undefined)
  mockLanguage(undefined)

  // English
  mockUserLanguage('en-US')
  t.true(isUSLocale())

  // Spanish
  mockUserLanguage('es-US')
  t.true(isUSLocale())
})

test.serial('isUSLocale -> supports `navigator.language`', t => {
  // English
  mockLanguages(null)
  mockLanguage('en-US')
  t.true(isUSLocale())

  // Spanish
  mockLanguage('es-US')
  t.true(isUSLocale())
})
