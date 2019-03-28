import { BeforeAll, After, AfterAll, setDefaultTimeout, Status, Before } from 'cucumber';

setDefaultTimeout(10000);

BeforeAll(async () => {

    // await console.log("Verify BeforeAll scenario was called in the right order");
});

Before(async () => {

    // await console.log("verify Before scenario  was called in the right order");
});

After(async function (Scenario) {

    // await console.log("verify After scenario  was called in the right order");
});

AfterAll(async function () {

    // await console.log("verify AfterAll scenario  was called in the right order");
});