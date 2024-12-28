document.addEventListener('DOMContentLoaded', ()=>{

    let entries = JSON.parse(localStorage.getItem('entries'))||[]
    let clickedEntryIndex =0;

    const entryForm = document.getElementById('entryForm');
    const editForm = document.getElementById('editEntryForm');
    const entriesTable = document.getElementById('entriesTable').getElementsByTagName('tbody')[0];
    const totalIncomeElement = document.getElementById('totalIncome');
    const totalExpensesElement = document.getElementById('totalExpenses');
    const balanceElement = document.getElementById('balance');
    const filterType = document.getElementById('filterType');
    const filterCategory = document.getElementById('filterCategory');

    entryForm.addEventListener('submit',(event)=>addEntry(event))

    filterType.addEventListener('change',()=>{renderEntries()})
    filterCategory.addEventListener('change',()=>{renderEntries()})

    editForm.addEventListener('submit',(event)=>{

        event.preventDefault()
        const description = document.querySelector('#editDescription');
        const amount = document.querySelector('#editAmount');
        const type = document.querySelector('#editType');
        const category = document.querySelector('#editCategory');
        console.log('clicked')
        entries[clickedEntryIndex]={
            'description':description.value,
            'amount':amount.value,
            'type':type.value,
            'category':category.value
        }
        event.preventDefault()
        editForm.classList.add('vanish')
        renderEntries()
        saveEntries()
        
    })

    function saveEntries(){
        localStorage.setItem('entries',JSON.stringify(entries));
    }


    function renderEntries(){
        entriesTable.innerHTML=''
        let totalIncome=0
        let totalExpense=0
        let balance=0

        entries.forEach((entry,index)=>{
            if((entry.type===filterType.value || filterType.value=='all') && (entry.category===filterCategory.value || filterCategory.value==='all')){
            let row = entriesTable.insertRow();
            row.innerHTML=`
                <td>${entry.description}</td>
                <td>${entry.amount}</td>
                <td>${entry.type}</td>
                <td>${entry.category}</td>
                <td>
                    <button id="edit-btn">edit</button>
                    <button id="delete-btn">delete</button>
                </td>
            `
            const deleteButton = row.querySelector('#delete-btn');
            deleteButton.addEventListener('click', ()=>{deleteEntry(index)})
            let editButton = row.querySelector('#edit-btn');
            editButton.addEventListener('click',()=>editEntry(index))

            if(entry.type==='expense'){
                totalExpense+=Number(entry.amount)
            }else{
                totalIncome+=Number(entry.amount)
            }
        }
            
        })
        balance = totalIncome-totalExpense
        totalIncomeElement.innerText=totalIncome
        totalExpensesElement.innerText=totalExpense
        balanceElement.innerText=balance
    }

    function editEntry(index){

        editForm.classList.remove('vanish')
        const description = document.querySelector('#editDescription');
        const amount = document.querySelector('#editAmount');
        const type = document.querySelector('#editType');
        const category = document.querySelector('#editCategory');

        console.log(entries[index])

        description.value=entries[index].description
        amount.value=entries[index].amount
        type.value=entries[index].type
        category.value=entries[index].category
        clickedEntryIndex=index
        
    }

    function deleteEntry(index){
        entries.splice(index,1)
        renderEntries()
        saveEntries()
    }

    function addEntry(event){
        event.preventDefault()
        const description = document.getElementById('addDescription').value.trim()
        const amount = document.getElementById('addAmount').value.trim()
        const type = document.getElementById('addType').value
        const category = document.getElementById('addCategory').value
        if(description && amount && type && category){
            entries.push({
                description,
                amount,
                type,
                category
            })
            renderEntries()
            saveEntries()
        }
        console.log(entries)

    }

    renderEntries()
   
})