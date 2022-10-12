function removeLastNumber(array){
    let newArray = [...array];
    newArray.pop();
    return newArray
}

function raiseSalaries(employeesList,percentage){

    let newList = employeesList.map(employee => {
        let employeeCopy = {...employee};
        employeeCopy.salary = Math.ceil(employeeCopy.salary + employeeCopy.salary*(percentage/100));
        return employeeCopy;
    });
    return newList;
}

function updateTasks(person, ...newTasks){
    const newPerson = structuredClone(person)
    for (let i = 0; i < newTasks.length; i++){ 
        newPerson.tasks.push(newTasks[i]);
    }
    console.log(person)
    return newPerson;
}

function cloneObject(target,source){
    for (let [key,value] of Object.entries(source)){
        target[key] = value;
    }

    return target;
}

console.log(updateTasks(
    { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] },
    "read books",
    "tidy room"
  ))
module.exports = { removeLastNumber, raiseSalaries, updateTasks, cloneObject};
