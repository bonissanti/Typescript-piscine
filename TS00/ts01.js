var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Contacts = /** @class */ (function () {
    function Contacts(firstName, lastName, phoneNumber, nickname, darkestSecret) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
        this._nickname = nickname;
        this._darkestSecret = darkestSecret;
    }
    return Contacts;
}());
var Phonebook = /** @class */ (function () {
    function Phonebook() {
        this._size = 0;
        this._contacts = [];
    }
    Phonebook.getInstance = function () {
        if (this.instance == null)
            this.instance = new Phonebook();
        return this.instance;
    };
    Phonebook.prototype.addContact = function (newContact) {
        if (this._size < 8) {
            this._contacts[this._size] = newContact;
            this._size++;
            return;
        }
        this._contacts[this._size % 8] = newContact;
        this._size++;
    };
    Phonebook.prototype.generateTable = function () {
        var table = document.createElement("table");
        var tableBody = document.createElement("tbody");
        for (var i = 0; i < this._size; i++) {
            var row = document.createElement("tr");
            var cellFirstName = document.createElement("td");
            var cellLastName = document.createElement("td");
            var cellPhoneNumber = document.createElement("td");
            var cellNickname = document.createElement("td");
            var cellSecret = document.createElement("td");
            var textFirstName = document.createTextNode("".concat(this._contacts[i]._firstName));
            var textLastName = document.createTextNode("".concat(this._contacts[i]._lastName));
            var textPhoneNumber = document.createTextNode("".concat(this._contacts[i]._phoneNumber));
            var textNickname = document.createTextNode("".concat(this._contacts[i]._nickname));
            var textSecret = document.createTextNode("".concat(this._contacts[i]._darkestSecret));
            cellFirstName.appendChild(textFirstName);
            cellLastName.appendChild(textLastName);
            cellPhoneNumber.appendChild(textPhoneNumber);
            cellNickname.appendChild(textNickname);
            cellSecret.appendChild(textSecret);
            row.appendChild(cellFirstName);
            row.appendChild(cellLastName);
            row.appendChild(cellPhoneNumber);
            row.appendChild(cellNickname);
            row.appendChild(cellSecret);
            tableBody.appendChild(row);
        }
        table.append(tableBody);
        document.body.appendChild(table);
        table.setAttribute("border", "2");
    };
    return Phonebook;
}());
function sleep(ms) {
    return new Promise(function (resolve) { return setTimeout(resolve, ms); });
}
function checkPhoneNumber(newPhoneNumber) {
    if (newPhoneNumber.length < 11 || newPhoneNumber.length > 14)
        return false;
    return true;
}
function isEmpty(firstName, lastName, phoneNumber, nickname, darkestSecret) {
    if (!firstName || !lastName || !phoneNumber || !nickname || !darkestSecret)
        return false;
    return true;
}
function handleError(log, errorMsg, ms) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    log.textContent = errorMsg;
                    return [4 /*yield*/, sleep(ms)];
                case 1:
                    _a.sent();
                    log.textContent = '';
                    return [2 /*return*/];
            }
        });
    });
}
function getForm() {
    var _this = this;
    var form = document.querySelector('form');
    var log = document.getElementById('id');
    form.addEventListener('submit', function (event) { return __awaiter(_this, void 0, void 0, function () {
        var firstName, lastName, phoneNumber, nickname, darkestSecret, contact, phonebook;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    event.preventDefault();
                    firstName = document.getElementById('firstName').value;
                    lastName = document.getElementById('lastName').value;
                    phoneNumber = document.getElementById('phoneNumber').value;
                    nickname = document.getElementById('nickname').value;
                    darkestSecret = document.getElementById('darkestSecret').value;
                    if (!!isEmpty(firstName, lastName, phoneNumber, nickname, darkestSecret)) return [3 /*break*/, 2];
                    return [4 /*yield*/, handleError(log, "Error! Some of these fields is/are empty, please fill in all fields and try again", 6000)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
                case 2:
                    if (!!checkPhoneNumber(phoneNumber)) return [3 /*break*/, 4];
                    return [4 /*yield*/, handleError(log, "There was an error while getting contacts.", 4000)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
                case 4:
                    contact = new Contacts(firstName, lastName, phoneNumber, nickname, darkestSecret);
                    phonebook = Phonebook.getInstance();
                    phonebook.addContact(contact);
                    log.textContent = "Contact added successfully.";
                    return [2 /*return*/];
            }
        });
    }); });
}
function getAllContacts() {
    var button = document.getElementById('generateList');
    button.addEventListener('click', function (event) {
        event.preventDefault();
        var phonebook = Phonebook.getInstance();
        phonebook.generateTable();
    });
}
function runServer() {
    try {
        getForm();
        getAllContacts();
    }
    catch (error) {
        console.log(error);
    }
}
runServer();
