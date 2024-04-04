fetch("http://localhost:3500/register", {method:"POST", body:{
    name: "leeja",
    pwd: "somslekjlkasj",
    phn:"234",
    eml:"asdsad"
}, headers:{"Content-Type": "application/json"}}).then(res=>res.json()).then(data=>console.log(data));