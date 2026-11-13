"use strict";
// OOP - Object Oriented Programming
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
// 1) Class
// 2) constructor
// 3) this keyword
// 4) encapsulation
// 5) inheritance
// 6) polymorphism
// 7) abstraction
// 8) access modifiers
// 9) Static members
// import & export
const MultiClass = __importStar(require("./constructor"));
class HomePage {
    constructor() {
        this.value = "playwright";
    }
    printOne() {
        const value = 'Cypress';
        console.log(value);
    }
    validate() {
        console.log("validating...");
    }
    userLogin() {
        const log = new MultiClass.LoginPage('Admin', 'Test@123');
        log.login();
    }
}
const home = new HomePage();
home.userLogin();
// home.validate()
// console.log(home.value)
// home.printOne()
// export function print() {
// }
//# sourceMappingURL=class.js.map