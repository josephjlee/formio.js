var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { SourceComponentValueSource } from './SourceComponent';
var SourceComponentValueValueSource = /** @class */ (function (_super) {
    __extends(SourceComponentValueValueSource, _super);
    function SourceComponentValueValueSource() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SourceComponentValueValueSource, "name", {
        get: function () {
            return 'sourceComponentValue';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SourceComponentValueValueSource, "title", {
        get: function () {
            return 'Source Component Value';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SourceComponentValueValueSource, "weight", {
        get: function () {
            return 210;
        },
        enumerable: false,
        configurable: true
    });
    SourceComponentValueValueSource.prototype.getValue = function () {
        var _a, _b;
        return (_b = (_a = _super.prototype.getValue.call(this)) === null || _a === void 0 ? void 0 : _a.dataValue) !== null && _b !== void 0 ? _b : null;
    };
    return SourceComponentValueValueSource;
}(SourceComponentValueSource));
export { SourceComponentValueValueSource };