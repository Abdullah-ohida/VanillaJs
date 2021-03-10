// Before 
function compareObject(firstObj, secondObj){
    for (const key in firstObj, secondObj) {
        if(firstObj[key] == secondObj[key])
        return true;
    }
}

// After

const matches = (obj, source) => Object.keys(source).every(key =>{
    obj.hasOwnProperty(key) && obj[key] === source[key]});



const user1 = {
    age: 54,
    name: "Ismail",
    hubby: "Table tennis",
}


const user2 = {
    age: 54,
    name: "Ismail",
    hubby: "Table tennis",
}

console.log(matches(user1, user2));

