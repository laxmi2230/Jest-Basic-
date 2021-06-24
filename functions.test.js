const functions = require('./functions');

//toBe
test('add 2 + 3 equal 5', () => {
    expect(functions.add(2, 3)).toBe(5);
})

//to not equal
test('add 9 + 34 to NOT equal 5', () => {
    expect(functions.add(9, 34)).not.toBe(5);
})

// Some basic testing keys
// toBeNull matches only null
//toBeUndefined matches only undefined
//toBeDefined is the opposite of toBeUndefined
//toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statement treats as false

// Lets say,
// initDatabase means to say from where the data starts in terminal
// closeDatabase means to say at where the data is closed in terminal 
// Above two run evertime we pass a test
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase()); 
// conclusion - so here the above to will run i.e initDatabase and closeDatabase will run for 8 times as total tests in functions.test.js is 8


// beforeAll(() => initDatabase());
// afterAll(() => closeDatabase()); 
// conclusion - so here the above to will run i.e initDatabase and closeDatabase will run for 1 time at beginning of first test in function.test.js and at end of last test in functions.test.js

// const initDatabase = () => console.log('database starts);
// const closeDatabase = () => console.log('database ends);

//will check the name is correct or not two times as there is two test inside describe
const nameCheck = () => console.log('checking Name...')

describe('checking Names', () => {
    beforeEach(() => nameCheck());

    test('user is jeff', () => {
        const user = 'jeff';
        expect(user).toBe('jeff');
    });


    test('user is Karan', () => {
        const user = 'Karan';
        expect(user).toBe('Karan');
    })
})




//toBeNull
test('shuld be Null', () => {
    expect(functions.isNull()).toBeNull();
})

//toBeFalsy(0,null,undefined are falsy values)
test('shuld be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
})

//toBeTruthy(except 0, null, undefined rest all numbers are truthy)
test('shuld be truthy', () => {
    expect(functions.checkValue(6)).toBeTruthy();
})

//toEqual(to compare values(objects) to match as toBe will not work on objects)
test('user should be Laxmi Menon', () => {
    expect(functions.createUser()).toEqual({ firstName: 'Laxmi', lastName: 'Menon' });
});

//Less than and Greater than or less than equal or Greater than equal
test('should be under 1600', () => {
    const a = 800;
    const b = 700;
    expect(a + b).toBeLessThanOrEqual(1600);
})

//Regex 
//toMatch
// /I/ (upper case sensitive)
// /I/i (not case sensitive)
test('there is no I in team', () => {
    expect('team').not.toMatch(/I/i)
})


//Arrays
test('Admin sholuld be in username', () => {
    username = ['John', 'William', 'Admin'];
    expect(username).toContain('Admin');
})

//using axios(working with async data)
// test('User fetched name should be Leanne Graham', () => {
// expect.assertions(1);
//   return functions.fetchUser().then(data => {
//        expect(data.name).toEqual('Leanne Graham')
//   })
//})

//Working with async await
test('User fetched name should be Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');

})




