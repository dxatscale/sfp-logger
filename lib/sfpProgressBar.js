"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressBar = void 0;
const cli_ux_1 = __importDefault(require("cli-ux"));
class ProgressBar {
    create(title, unit, displayTillLogLevel) {
        this.progressBarImpl = cli_ux_1.default.progress({
            format: `${title} - PROGRESS  | {bar} | {value}/{total} ${unit}`,
            barCompleteChar: '\u2588',
            barIncompleteChar: '\u2591',
            linewrap: true,
        });
        return this;
    }
    start(totalSize) {
        if (!(this.progressBarImpl === null || this.progressBarImpl === undefined)) {
            this.progressBarImpl.start(totalSize);
        }
    }
    stop() {
        if (!(this.progressBarImpl === null || this.progressBarImpl === undefined)) {
            this.progressBarImpl.stop();
        }
    }
    increment(count) {
        if (!(this.progressBarImpl === null || this.progressBarImpl === undefined)) {
            this.progressBarImpl.increment(count);
        }
    }
}
exports.ProgressBar = ProgressBar;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2ZwUHJvZ3Jlc3NCYXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvc2ZwUHJvZ3Jlc3NCYXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsb0RBQXlCO0FBRXpCLE1BQWEsV0FBVztJQUdiLE1BQU0sQ0FBQyxLQUFhLEVBQUUsSUFBWSxFQUFFLG1CQUEyQjtRQUM5RCxJQUFJLENBQUMsZUFBZSxHQUFHLGdCQUFHLENBQUMsUUFBUSxDQUFDO1lBQ2hDLE1BQU0sRUFBRSxHQUFHLEtBQUssMENBQTBDLElBQUksRUFBRTtZQUNoRSxlQUFlLEVBQUUsUUFBUTtZQUN6QixpQkFBaUIsRUFBRSxRQUFRO1lBQzNCLFFBQVEsRUFBRSxJQUFJO1NBQ2pCLENBQUMsQ0FBQztRQUVQLE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFTSxLQUFLLENBQUMsU0FBaUI7UUFDNUIsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxTQUFTLENBQUMsRUFBQztZQUN6RSxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUN2QztJQUNILENBQUM7SUFFTSxJQUFJO1FBQ1QsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsS0FBSyxJQUFJLElBQUksSUFBSSxDQUFDLGVBQWUsS0FBSyxTQUFTLENBQUMsRUFBRTtZQUMxRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQztJQUVNLFNBQVMsQ0FBQyxLQUFhO1FBQzVCLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLEtBQUssSUFBSSxJQUFJLElBQUksQ0FBQyxlQUFlLEtBQUssU0FBUyxDQUFDLEVBQUM7WUFDekUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0NBQ0o7QUEvQkQsa0NBK0JDIn0=