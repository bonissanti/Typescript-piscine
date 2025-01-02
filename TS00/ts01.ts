class Contacts
{
    _firstName: string;
    _lastName: string;
    _phoneNumber: string;
    _nickname: string;
    _darkestSecret: string;

    constructor(firstName: string, lastName: string, phoneNumber: string, nickname: string, darkestSecret: string){
        this._firstName = firstName;
        this._lastName = lastName;
        this._phoneNumber = phoneNumber;
        this._nickname = nickname;
        this._darkestSecret = darkestSecret;
    }
}

class Phonebook
{
    private static instance: Phonebook;
    public _contacts: Contacts[];
    public _size: number = 0;

    private constructor() {
        this._contacts = [];
    }

    public static getInstance(): Phonebook{
        if (this.instance == null)
            this.instance = new Phonebook();
        return this.instance;
    }
    addContact(newContact: Contacts){
        if (this._size < 8){
            this._contacts[this._size] = newContact;
            this._size++;
            return ;
        }

        this._contacts[this._size % 8] = newContact;
        this._size++;
    }
    generateTable(){
        const table: HTMLTableElement = document.createElement("table");
        const tableBody: HTMLTableSectionElement = document.createElement("tbody");

        for (let i = 0; i < this._size; i++){
            const row = document.createElement("tr");
            const cellFirstName: HTMLTableCellElement = document.createElement("td");
            const cellLastName: HTMLTableCellElement = document.createElement("td");
            const cellPhoneNumber: HTMLTableCellElement = document.createElement("td");
            const cellNickname: HTMLTableCellElement = document.createElement("td");
            const cellSecret: HTMLTableCellElement = document.createElement("td");

            const textFirstName: Text = document.createTextNode(`${this._contacts[i]._firstName}`)
            const textLastName: Text = document.createTextNode(`${this._contacts[i]._lastName}`)
            const textPhoneNumber: Text = document.createTextNode(`${this._contacts[i]._phoneNumber}`)
            const textNickname: Text = document.createTextNode(`${this._contacts[i]._nickname}`)
            const textSecret: Text = document.createTextNode(`${this._contacts[i]._darkestSecret}`)

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
    }
}

function sleep(ms: number){
    return new Promise(resolve => setTimeout(resolve, ms));
}

function checkPhoneNumber(newPhoneNumber: string): boolean{
    if (newPhoneNumber.length < 11 || newPhoneNumber.length > 14)
        return false;
    return true;
}

function isEmpty(firstName: string, lastName: string, phoneNumber: string, nickname: string, darkestSecret: string) : boolean{
    if (!firstName || !lastName || !phoneNumber || !nickname || !darkestSecret)
        return false;
    return true;
}

async function handleError(log: HTMLElement, errorMsg: string, ms: number){
    log.textContent = errorMsg;
    await sleep(ms);
    log.textContent = '';
}

function getForm(){
    const form: HTMLElement = document.querySelector('form') as HTMLElement;
    const log: HTMLElement = document.getElementById('id') as HTMLElement;
    form.addEventListener('submit', async (event: Event) =>{
        event.preventDefault();
        const firstName: string = (document.getElementById('firstName') as HTMLInputElement).value;
        const lastName: string = (document.getElementById('lastName') as HTMLInputElement).value;
        const phoneNumber: string = (document.getElementById('phoneNumber') as HTMLInputElement).value;
        const nickname: string = (document.getElementById('nickname') as HTMLInputElement).value;
        const darkestSecret: string = (document.getElementById('darkestSecret') as HTMLInputElement).value;

        if (!isEmpty(firstName, lastName, phoneNumber, nickname, darkestSecret)){
            await handleError(log, "Error! Some of these fields is/are empty, please fill in all fields and try again", 6000);
            return ;
        }
        if (!checkPhoneNumber(phoneNumber)){
            await handleError(log, "There was an error while getting contacts.", 4000);
            return ;
        }
        const contact = new Contacts(firstName, lastName, phoneNumber, nickname, darkestSecret);
        const phonebook = Phonebook.getInstance();

        phonebook.addContact(contact);
        log.textContent = "Contact added successfully.";
    })
}

function getAllContacts(){
    const button: HTMLElement = document.getElementById('generateList') as HTMLElement;
    button.addEventListener('click', (event: Event) => {
        event.preventDefault();
        const phonebook = Phonebook.getInstance();
        phonebook.generateTable();
    })
}

function runServer() {
    try {
        getForm();
        getAllContacts();
    }
    catch(error){
        console.log(error);
    }
}

runServer();