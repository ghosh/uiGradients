module.exports = {
  'App load test': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(devServer)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('.header')
      .assert.elementPresent('.actionbar')
      .assert.elementPresent('.display')
      .assert.elementPresent('.nav')
      .end();
  },

  'Gradient navigation test': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(`${devServer}/#Cherry`)
      .waitForElementVisible('#app', 5000)
      .pause(3000) // wait for preloader to fade
      .assert.containsText('.display__gradientname p', 'Cherry')
      .click('#nav--next')
      .assert.containsText('.display__gradientname p', 'Pinky')
      .click('#nav--prev')
      .click('#nav--prev')
      .assert.containsText('.display__gradientname p', 'Mojito')
      .end();
  },

  'Copy css code test': function test(browser) {
    const devServer = browser.globals.devServerURL;
    browser
      .url(`${devServer}/#Cherry`)
      .waitForElementVisible('#app', 5000)
      .pause(3000) // wait for preloader to fade
      .click('#js-code')
      .assert.elementPresent('.modal__container')
      .assert.elementPresent('.codeblock')
      .click('#js-copy')
      .assert.elementPresent('.modal__success')
      .assert.elementNotPresent('.codeblock')
      .pause(2000) // wait for copy message to fade out
      .assert.elementNotPresent('.modal__success')
      .assert.elementPresent('.codeblock')
      .click('.modal__mask')
      .assert.hidden('.modal__container')
      .end();
  },

};
