const axios = require("axios");


exports.homeRouts=(req,res)=>{
    axios.get("http://localhost:3001/api/user")
        .then((response)=>{
            res.render("index",{users : response.data});
        })
        .catch(err=>{
            res.send(err);
        })
}

exports.add_user=(req,res)=>{
    res.render("add_user");
}

exports.update_user=(req,res)=>{
    axios.get("http://localhost:3001/api/user",{params:{id:req.query.id}})
    .then(userdata=>{
        res.render("update_user",{users:userdata.data});
    })
    .catch(err=>{
        res.send(err);
    })

}