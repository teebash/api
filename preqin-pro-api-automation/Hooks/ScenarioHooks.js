"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const ApiClient_1 = require("../HelperUtils/ApiClient");
let apiClient = new ApiClient_1.ApiClient();
cucumber_1.setDefaultTimeout(10000);
cucumber_1.Before(() => __awaiter(this, void 0, void 0, function* () {
    // return await apiClient.Init();
}));
cucumber_1.After(function (Scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        if (Scenario.result.status === cucumber_1.Status.FAILED) {
            yield console.error("something failed");
        }
        ;
    });
});
//# sourceMappingURL=ScenarioHooks.js.map