const button = document.getElementById("theButton")
const data = document.getElementById("info")

// Create the data to send to Python
const cars = [
 { "make":"Porsche", "model":"911S" },
 { "make":"Mercedes-Benz", "model":"220SE" },
 { "make":"Jaguar","model": "Mark VII" }
];

button.onclick= function(){

    data.innerHTML = null

    // Get the reciever endpoint from Python using fetch</strong>
    fetch("http://127.0.0.1:5000/receiver", 
        {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Accept': 'application/json'
            },
       //Strigify the data into JSON</strong>
        body:JSON.stringify(cars)}).then(res=>{
                if(res.ok){
                    return res.json()
                }else{
                    alert("something is wrong")
                }
            }).then(jsonResponse=>{
                
                // Iterate through the data with Map and write to the page
                jsonResponse.map(Main=>
                    // If the cars make is Porsche, it writes that it is a good product
                    Main.make==="Porsche"? data.innerHTML +="<p>"+ Main.make+" "+" is a good product":
                    // If the cars make is anything else, it writes that it is an average product
                    data.innerHTML +="<p>"+ Main.make+" "+"is an average product" ) 
            } 
            ).catch((err) => console.error(err));
            
           }