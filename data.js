const loginPage = document.getElementById("loginPage")
const signupPage = document.getElementById("signupPage")
const sendIt = document.getElementById("sendToPython")
const recieveIt = document.getElementById("recieveFromPython")
const toSignup = document.getElementById("noAccount")
const toLogin = document.getElementById("haveAccount")
const data = document.getElementById("info")

loginPage.style.display = 'none'

sendIt.onclick= function(){

    data.innerHTML = null

    un = document.getElementById('usernameSignup').value

    ps = document.getElementById('passwordSignup').value

    if(un.length < 1 || ps.length < 1){
        alert("Please fill out the required fields")
        return
    }

    const signup = [
        { "username":un, "password":ps },
       ];

    // Get the reciever endpoint from Python using fetch
    fetch("http://127.0.0.1:5000/receiver", 
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
       //Strigify the data into JSON
        body:JSON.stringify(signup)}).then(res=>{
                if(res.ok){
                    return res.json()
                }else{
                    alert("something is wrong")
                }
            }).then(jsonResponse=>{
                
                // Iterate through the data with Map and write to the page
                jsonResponse.map(Main=>
                    // Posts signup data underneath to test
                    data.innerHTML +="<p>"+"Username:"+ " " + Main.username) 
            } 
            ).catch((err) => console.error(err));
            
           }

recieveIt.onclick= function(){
    alert("UNDER CONSTRUCTION")

/*
    data.innerHTML = null

    const pyData = {{ py_data|tojson }}

    alert(pyData)

    un = document.getElementById('usernameLogin').value

    ps = document.getElementById('passwordLogin').value

    if(un.length < 1 || ps.length < 1){
        alert("Please fill out the required fields")
        return
    }
    const login = [
        { "username":un, "password":ps },
       ]; */
}

toSignup.onclick = function(){
    loginPage.style.display = 'none'
    signupPage.style.display = 'block'
    data.innerHTML = null
}
toLogin.onclick = function(){
    loginPage.style.display = 'block'
    signupPage.style.display = 'none'
    data.innerHTML = null
}