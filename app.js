

let loginForm = document.getElementById("userForm");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let email = document.getElementById("email").value
    let hobbies = document.getElementById("hobbies").value
    // console.log(name)
    // console.log(age)
    // console.log(email)
    // console.log(hobbies)
    
    let userdata = {
        name : name,
        age: age,
        email : email,
        hobbies : hobbies
    }
    
    const myJSON = JSON.stringify(userdata);
    console.log(myJSON)

    document.getElementById("jsonOutput").innerHTML = myJSON
    // handle submit
  });