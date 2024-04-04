fetch("http://localhost:3500/register", {method:"POST", body:{
    name: "leeja",
    pwd: "somslekjlkasj"
}, headers:{"Content-Type": "application/json"}}).then(res=>res.json()).then(data=>console.log(data));