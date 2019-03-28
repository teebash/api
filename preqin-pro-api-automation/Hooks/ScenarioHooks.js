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
cucumber_1.setDefaultTimeout(10000);
cucumber_1.BeforeAll(() => __awaiter(this, void 0, void 0, function* () {
    // await console.log("Verify BeforeAll scenario was called in the right order");
}));
cucumber_1.Before(() => __awaiter(this, void 0, void 0, function* () {
    // await console.log("verify Before scenario  was called in the right order");
}));
cucumber_1.After(function (Scenario) {
    return __awaiter(this, void 0, void 0, function* () {
        // await console.log("verify After scenario  was called in the right order");
    });
});
cucumber_1.AfterAll(function () {
    return __awaiter(this, void 0, void 0, function* () {
        // await console.log("verify AfterAll scenario  was called in the right order");
    });
});
//# sourceMappingURL=ScenarioHooks.js.map