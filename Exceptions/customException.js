// try{
//     console.log("Start the try runs");
//     lalala;
// }catch(err){
//     console.log("Error has occured!")
// }


// try..catch works synchronously
// try{
//     setTimeout(function(){
//         noSuchVariable;
//     }, 1000)
// }catch(err){
//     console.log("Console won't works")
// }

// Note: That’s because the function itself is executed later, when the
//  engine has already left the try..catch construct.

// ImportTant: To catch an exception inside a scheduled function,
// try..catch must be inside that function:
// setTimeout(function() {
//     try {
//       noSuchVariable; // try..catch handles the error!
//     } catch {
//       console.log( "error is caught here!" );
//     }
//   }, 1000);


// try{
//     lalala;

// }catch(err){
//     console.log(err.name);
//     console.log(err.message);
//     console.log(err.stack);
// }

let json = "{bad json}";

try{
    let user = JSON.parse(json);
    console.log(user.name);
}catch(err){
    console.log("Our apologies the data has errors, we'll try to request it one more time");
    console.log(err.name)
    console.log(err.message)
}
