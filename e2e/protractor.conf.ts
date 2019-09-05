import { browser, Config } from "protractor";

export const config: Config = {

    seleniumAddress: "http://127.0.0.1:4444/wd/hub",

    SELENIUM_PROMISE_MANAGER: false, // needed if async/await is used anywhere in the spec - may no longer be needed?

    baseUrl: "http://localhost:8080/",

    framework: "custom",
    frameworkPath: require.resolve("protractor-cucumber-framework"),

    specs: [
      "../test/features/*.feature",
    ],

    onPrepare: () => {
        browser.manage().window().maximize();
    },

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        format: "json:.tmp/results.json",
        profile: false,
        require: "../typeScript/features/step_definitions/*.steps.js",
        tags: false,
        "no-source": true,
    },

    plugins: [{
      options: {
        automaticallyGenerateReport: true,
        removeExistingJsonReportFile: true,
      },
      package: "protractor-multiple-cucumber-html-reporter-plugin",

    }],
};
