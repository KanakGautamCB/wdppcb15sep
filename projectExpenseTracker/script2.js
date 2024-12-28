document.addEventListener('DOMContentLoaded', ()=>{

    let entries = JSON.parse(localStorage.getItem('entries'))||[]

    const entryForm = document.getElementById('entryForm');
    const editForm = document.getElementById('editEntryForm');
    const entriesTable = document.getElementById('entriesTable').getElementsByTagName('tbody')[0];
    const totalIncomeElement = document.getElementById('totalIncome');
    const totalExpensesElement = document.getElementById('totalExpenses');
    const balanceElement = document.getElementById('balance');
    const filterType = document.getElementById('filterType');
    const filterCategory = document.getElementById('filterCategory');

    entryForm.addEventListener('submit',addEntry)

    filterType.addEventListener('change',renderEntries)
    filterCategory.addEventListener('change',renderEntries)

    function renderEntries(){
        entriesTable.innerHTML='';

        const filterTypeValue = filterType.value
        const filterCategoryValue = filterCategory.value
        let totalIncomeElementValue = 0
        let totalExpensesElementValue = 0
        let balanceElementValue = 0
        
        entries.forEach((entry,index)=>{
            console.log()
            if((filterTypeValue=='all' || filterTypeValue==entry.type)&&(filterCategoryValue=='all' || filterCategoryValue==entry.category)){
                const row = entriesTable.insertRow();
                row.innerHTML=`
                <td>${entry.description}</td>
                <td>${entry.amount}</td>
                <td>${entry.type}</td>
                <td>${entry.category}</td>
                <td>
                    <button class='edit-button'>Edit</button>
                    <button class='delete-button'>Delete</button>
                </td>
                `
                const editButton = row.querySelector('.edit-button');
                const deleteButton = row.querySelector('.delete-button')

                editButton.addEventListener('click',()=>editEntry(index))
                deleteButton.addEventListener('click',()=>deleteEntry(index))

                if(entry.type=='expense'){
                    totalExpensesElementValue+=Number(entry.amount)
                    console.log(totalExpensesElementValue)
                }
                if(entry.type=='income'){
                    totalIncomeElementValue+=Number(entry.amount)
                    console.log(totalIncomeElementValue)
                }
            }
        })

        balanceElementValue=totalIncomeElementValue-totalExpensesElementValue
        totalExpensesElement.textContent=totalExpensesElementValue
        totalIncomeElement.textContent=totalIncomeElementValue
        balanceElement.textContent=balanceElementValue

    }


    function addEntry(event){
        event.preventDefault()
        const description = document.querySelector('#addDescription').value.trim();
        const amount = document.querySelector('#addAmount').value.trim();
        const type = document.querySelector('#addType').value.trim();
        const category = document.querySelector('#addCategory').value.trim();

        if(description && amount && type && category){
            entries.push({
                description,
                amount,
                type,
                category
            })
        }
        saveEntries()
        renderEntries()
        

    }

    function deleteEntry(index){
        entries.splice(index,1);
        renderEntries()
        saveEntries()
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

        const editSubmitButton = editForm.querySelector('#edit-submit-button')
        editSubmitButton.addEventListener('click',(event)=>{
            console.log('clicked')
            entries[index]={
                'description':description.value,
                'amount':amount.value,
                'type':type.value,
                'category':category.value
            }
            event.preventDefault()
            editForm.classList.add('vanish')
            saveEntries()
            renderEntries()
            
        })
        

    }

    function saveEntries(){
        localStorage.setItem('entries',JSON.stringify(entries));
    }




    renderEntries()
})