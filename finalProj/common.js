class StickyNote {
    constructor(){
        this.notes = [];
    }

    getAllNotes = () => {
        return this.notes;
    }

    insertNewNote = (title, message) => {
        this.notes = [...this.notes, {title, message}]
    }

    deleteNote = (titles) => {
        this.notes = this.notes.filter(obj=>titles !== obj.title);
        
    }

    updateNote = (title, message) => {
        this.notes = this.notes.map(object => {
            if (object.title == title) {
                object.message = message;
            }
            return object;
        });
    }
}

const allNotes = new StickyNote();


const txtTitle = document.querySelector('.title');
const txtMessage = document.querySelector('.message');
const buttonAdd = document.querySelector('.btnAdd');
const buttonUpdate = document.querySelector('.btnUpdate');
const buttonDelete = document.querySelector('.btnDelete');
const table = document.querySelector('#myTable');

function Clear() {
    txtTitle.value = "";
    txtMessage.value = "";
}

// Table display
function DisplayData() {
    allNotes.getAllNotes().forEach(obj => {
        const row = document.createElement("tr");
        const titleCell = document.createElement("td");
        const messageCell = document.createElement("td");

        titleCell.textContent = obj.title;
        messageCell.textContent = obj.message;

        row.appendChild(titleCell);
        row.appendChild(messageCell);
        table.appendChild(row);
    });
}

buttonAdd.addEventListener('click', (e)=>{
    // validation: empty fields
    if (txtTitle.value === "" && txtMessage.value === "") {
        alert("Please input value.");
    } else {
        allNotes.insertNewNote(txtTitle.value, txtMessage.value);
        console.log("Insert: ",allNotes.getAllNotes());

        //To clear the fields
        Clear();
        DisplayData();
    }
});


buttonUpdate.addEventListener('click', (e) => {
    if (txtTitle.value === "" && txtMessage.value === "") {
        alert("Please input value.");
    } else {
        allNotes.updateNote(txtTitle.value, txtMessage.value);
        console.log("Update: ",allNotes.getAllNotes());

        //To clear the fields
        Clear();
    }
});

buttonDelete.addEventListener('click', (e) => {
    if (txtTitle.value === "" && txtMessage.value === "") {
        alert("Please input value.");
    } else {
        allNotes.deleteNote(txtTitle.value);
        console.log("Delete: ",allNotes.getAllNotes());

        //To clear the fields
        Clear();
    }
});