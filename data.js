const button = document.getElementById("theButton")
const data = document.getElementById("info")

// Create the data to send to Python


button.onclick= function(){

    data.innerHTML = null

    un = document.getElementById('usernameInput').value

    ps = document.getElementById('passwordInput').value

    if(un.length < 1 || ps.length < 1){
        alert("Please fill out the required fields")
        return
    }

    const login = [
        { "username":un, "password":ps },
       ];

    // Get the reciever endpoint from Python using fetch</strong>
    fetch("http://127.0.0.1:5000/receiver", 
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
       //Strigify the data into JSON</strong>
        body:JSON.stringify(login)}).then(res=>{
                if(res.ok){
                    return res.json()
                }else{
                    alert("something is wrong")
                }
            }).then(jsonResponse=>{
                
                // Iterate through the data with Map and write to the page
                jsonResponse.map(Main=>
                    // Posts login data underneath to test
                    data.innerHTML +="<p>"+"Username:"+ " " + Main.username) 
            } 
            ).catch((err) => console.error(err));
            
           }