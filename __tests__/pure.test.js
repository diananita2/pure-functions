const {removeLastNumber,raiseSalaries,updateTasks,cloneObject} = require("../pure.js")


describe('removeLastNumber',() => {
    test('returns an empty array when the input is an empty array ',() =>{
        expect(removeLastNumber([])).toEqual([])
    })
    test('returns an array with the last element removed',() =>{
        expect(removeLastNumber([1,2,3,4])).toEqual([1,2,3])
    })
    test('returns an empty array when the input array only has 1 element ',() =>{
        expect(removeLastNumber([1])).toEqual([])
    })

    describe('side effects',() => {
        test('returns a new array different from the input ',() =>{
            const input = [1,2,3,4];
            const output = removeLastNumber(input)
            expect(output).not.toEqual(input)
        })
        
    })
})



describe('raiseSalaries',() => {
    test('returns an empty array when the input is an empty array ',() =>{
        expect(raiseSalaries([])).toEqual([])
    })
    test('returns an array with the employee with incresed salary when the initial list has only one employee',() =>{
        let input = [{ name: "Alice", salary: 3000 }]
        let output = raiseSalaries(input,10);
        let expectedOutput = [{ name: 'Alice', salary: 3300 }]
        expect(output).toEqual(expectedOutput)
    })
    test('returns an array with the employees with incresed salary when passed more than 1 employee in the initial array ',() =>{
        let input = [
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4500 },
          ]
        let output = raiseSalaries(input,10);
        let expectedOutput = [
            { name: 'Alice', salary: 3300 },
            { name: 'Bob', salary: 2200 }, 
            { name: 'Vel', salary: 4950 }
          ]
        expect(output).toEqual(expectedOutput)
    })
    test('returns an identical but different in reference array if the percentage is 0  ',() =>{
        let input = [
            { name: "Alice", salary: 3000 },
            { name: "Bob", salary: 2000 },
            { name: "Vel", salary: 4500 },
          ]
        let output = raiseSalaries(input,0);
        let expectedOutput = [
            { name: 'Alice', salary: 3000 },
            { name: 'Bob', salary: 2000 }, 
            { name: 'Vel', salary: 4500 }
          ]
        expect(output).toEqual(expectedOutput)
        expect(input).not.toBe(output)
    })
    describe('side effects',() => {
        test('returns a new array different from the input ',() =>{
            let input = [
                { name: "Alice", salary: 3000 },
                { name: "Bob", salary: 2000 },
                { name: "Vel", salary: 4500 },
              ]
            let output = raiseSalaries(input,10);
            expect(input).not.toEqual(output)
        })
        test('check if none of the original employee objects have been mutated ',() =>{
            let input = [
                { name: "Alice", salary: 3000 },
                { name: "Bob", salary: 2000 },
                { name: "Vel", salary: 4500 },
              ]
            let output = raiseSalaries(input,10);
            for(let i=0;i<input.length;i++){
                expect(input[i]).not.toEqual(output[i]);
                expect(input[i]).not.toBe(output[i]);
            }
            
        })
    })
})


describe('updateTasks',() => {
    test('returns an empty object when the input is an empty object ',() =>{
        expect(updateTasks({})).toEqual({})
    })
    test('returns an object with 1 new task  added to tasks property',() =>{
        let input = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }
        let output =  updateTasks(input,"read books")
        let expectedOutput = {name: 'Anat',tasks: ['feed Schnitzel', 'Go to pottery', 'read books']}
        expect(output).toEqual(expectedOutput)
    })
    test('returns an object with more new tasks added to tasks property ',() =>{
        let input = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }
        let output =  updateTasks(input,"read books","tidy room")
        let expectedOutput = {name: 'Anat',tasks: ['feed Schnitzel', 'Go to pottery', 'read books', 'tidy room']}
        expect(output).toEqual(expectedOutput)
    })

    describe('side effects',() => {
        test('returns a new object different from the input ',() =>{
            let input = { name: "Anat", tasks: ["feed Schnitzel", "Go to pottery"] }
            let output =  updateTasks(input,"read books","tidy room")
            let expectedOutput = {name: 'Anat',tasks: ['feed Schnitzel', 'Go to pottery', 'read books', 'tidy room']}
            expect(input).not.toEqual(output)
            expect(input.tasks).not.toEqual(output.tasks)
        })
        
    })
})


describe('cloneObject',() => {
    test('returns an empty object when the inputs are empty objects ',() =>{
        expect(cloneObject({},{})).toEqual({})
    })
    test('returns an object with only source object elements when target object is empty',() =>{
        let target = {}
        let source = {a:'a',b:'b',c:'c'}
        let output =  cloneObject(target,source)
        let expectedOutput = {a:'a',b:'b',c:'c'}
        expect(output).toEqual(expectedOutput)
    })
    test('returns an object with only target elements when the source object is empty',() =>{
        let target = {a:'a',b:'b',c:'c'}
        let source = {}
        let output =  cloneObject(target,source)
        let expectedOutput = {a:'a',b:'b',c:'c'}
        expect(output).toEqual(expectedOutput)
    })
    test('returns an object with target elements and the source object elements',() =>{
        let target = {a:'a',b:'b',c:'c'}
        let source = {d:'d',e:'e',f:'f'}
        let output =  cloneObject(target,source)
        let expectedOutput = {a:'a',b:'b',c:'c',d:'d',e:'e',f:'f'}
        expect(output).toEqual(expectedOutput)
    })

    describe('side effects',() => {
        test('check the objects dont have the same reference ',() =>{
            let target = {}
            let source = {a:'a',b:'b',c:'c'}
            let output =  cloneObject(target,source)
            let expectedOutput = {a:'a',b:'b',c:'c'}
            expect(output).toEqual(source)
        })
        test('check if the target object has been mutated ',() =>{
            let target = {a:'a',b:'b',c:'c'}
            let source = {d:'d',e:'e',f:'f'}
            let output =  cloneObject(target,source)
            let expectedOutput = {a:'a',b:'b',c:'c',d:'d',e:'e',f:'f'}
            expect(target).toEqual(output)
        })
    })
})