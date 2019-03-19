import { BeforeAll, After, AfterAll, setDefaultTimeout, Status, Before } from 'cucumber';
import { ApiClient } from '../HelperUtils/ApiClient';

let apiClient = new ApiClient();

setDefaultTimeout(10000);

Before(async () => {

    // return await apiClient.Init();
});

After(async function (Scenario) {

    if (Scenario.result.status === Status.FAILED) {

        await console.error("something failed");
    };
});