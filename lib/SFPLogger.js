"use strict";
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.COLOR_KEY_VALUE = exports.COLOR_KEY_MESSAGE = exports.COLOR_TIME = exports.COLOR_SUCCESS = exports.COLOR_HEADER = exports.COLOR_DEBUG = exports.COLOR_TRACE = exports.COLOR_INFO = exports.COLOR_WARNING = exports.COLOR_ERROR = exports.FileLogger = exports.VoidLogger = exports.ConsoleLogger = exports.LoggerLevel = void 0;
const fs = __importStar(require("fs-extra"));
const os_1 = require("os");
const chalk = require("chalk");
var LoggerLevel;
(function (LoggerLevel) {
    LoggerLevel[LoggerLevel["TRACE"] = 10] = "TRACE";
    LoggerLevel[LoggerLevel["DEBUG"] = 20] = "DEBUG";
    LoggerLevel[LoggerLevel["INFO"] = 30] = "INFO";
    LoggerLevel[LoggerLevel["WARN"] = 40] = "WARN";
    LoggerLevel[LoggerLevel["ERROR"] = 50] = "ERROR";
    LoggerLevel[LoggerLevel["FATAL"] = 60] = "FATAL";
    LoggerLevel[LoggerLevel["HIDE"] = 70] = "HIDE";
})(LoggerLevel = exports.LoggerLevel || (exports.LoggerLevel = {}));
class ConsoleLogger {
    constructor() {
        this.logType = 1 /* LoggerType.console */;
    }
}
exports.ConsoleLogger = ConsoleLogger;
class VoidLogger {
    constructor() {
        this.logType = 3 /* LoggerType.void */;
    }
}
exports.VoidLogger = VoidLogger;
class FileLogger {
    constructor(path) {
        this.path = path;
        this.logType = 2 /* LoggerType.file */;
    }
}
exports.FileLogger = FileLogger;
exports.COLOR_ERROR = chalk.bold.red;
exports.COLOR_WARNING = chalk.keyword('orange');
exports.COLOR_INFO = chalk.white;
exports.COLOR_TRACE = chalk.gray;
exports.COLOR_DEBUG = chalk.blue;
exports.COLOR_HEADER = chalk.yellowBright.bold;
exports.COLOR_SUCCESS = chalk.green.bold;
exports.COLOR_TIME = chalk.magentaBright;
exports.COLOR_KEY_MESSAGE = chalk.magentaBright.bold;
exports.COLOR_KEY_VALUE = chalk.black.bold.bgGreenBright;
class SFPLogger {
    static enableColor() {
        chalk.level = 2;
    }
    static disableColor() {
        chalk.level = 0;
    }
    static log(message, logLevel = LoggerLevel.INFO, logger) {
        if (SFPLogger.isLogsDisabled)
            return;
        if (logLevel == null)
            logLevel = LoggerLevel.INFO;
        if (logLevel < this.logLevel)
            return;
        //Todo: Proper fix
        if (logger && logger.logType === 1 /* LoggerType.console */) {
            logger = null; //Make it nullable, so it goes to console
        }
        if (logger) {
            if (logger.logType === 3 /* LoggerType.void */) {
                return;
            }
            else if (logger.logType === 2 /* LoggerType.file */) {
                let fileLogger = logger;
                message = message === null || message === void 0 ? void 0 : message.toString().replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
                fs.appendFileSync(fileLogger.path, message + os_1.EOL, 'utf8');
            }
        }
        else {
            switch (logLevel) {
                case LoggerLevel.TRACE:
                    console.log((0, exports.COLOR_TRACE)(message));
                    break;
                case LoggerLevel.DEBUG:
                    console.log((0, exports.COLOR_DEBUG)(message));
                    break;
                case LoggerLevel.INFO:
                    console.log(message);
                    break;
                case LoggerLevel.WARN:
                    console.log((0, exports.COLOR_WARNING)(message));
                    break;
                case LoggerLevel.ERROR:
                    console.log((0, exports.COLOR_ERROR)(message));
                    break;
            }
        }
    }
    static disableLogs() {
        SFPLogger.isLogsDisabled = true;
    }
}
exports.default = SFPLogger;
SFPLogger.logLevel = LoggerLevel.INFO;
SFPLogger.isLogsDisabled = false;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU0ZQTG9nZ2VyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL1NGUExvZ2dlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDZDQUErQjtBQUMvQiwyQkFBeUI7QUFDekIsK0JBQWdDO0FBRWhDLElBQVksV0FRWDtBQVJELFdBQVksV0FBVztJQUNuQixnREFBVSxDQUFBO0lBQ1YsZ0RBQVUsQ0FBQTtJQUNWLDhDQUFTLENBQUE7SUFDVCw4Q0FBUyxDQUFBO0lBQ1QsZ0RBQVUsQ0FBQTtJQUNWLGdEQUFVLENBQUE7SUFDViw4Q0FBUyxDQUFBO0FBQ2IsQ0FBQyxFQVJXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBUXRCO0FBT0QsTUFBYSxhQUFhO0lBRXRCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sNkJBQXFCLENBQUM7SUFDdEMsQ0FBQztDQUNKO0FBTEQsc0NBS0M7QUFDRCxNQUFhLFVBQVU7SUFFbkI7UUFDSSxJQUFJLENBQUMsT0FBTywwQkFBa0IsQ0FBQztJQUNuQyxDQUFDO0NBQ0o7QUFMRCxnQ0FLQztBQUNELE1BQWEsVUFBVTtJQUVuQixZQUFtQixJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUMzQixJQUFJLENBQUMsT0FBTywwQkFBa0IsQ0FBQztJQUNuQyxDQUFDO0NBQ0o7QUFMRCxnQ0FLQztBQU1ZLFFBQUEsV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO0FBQzdCLFFBQUEsYUFBYSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDeEMsUUFBQSxVQUFVLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztBQUN6QixRQUFBLFdBQVcsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDO0FBQ3pCLFFBQUEsV0FBVyxHQUFHLEtBQUssQ0FBQyxJQUFJLENBQUM7QUFDekIsUUFBQSxZQUFZLEdBQUcsS0FBSyxDQUFD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