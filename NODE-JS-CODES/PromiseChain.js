let promise = new Promise(function(resolve, reject) {
    const user = {
        name : 'ABC XYZ',
        email : 'shahid@gmail.com',
        password : 'abc'
    }
    resolve(user);
});

promise.then(function(user) {
    console.log("\n");
  console.log(`Got User ${user.name}`);
  return user.email;
}).then(function(email){
    console.log("User email : ", email);
    console.log("\n");
})