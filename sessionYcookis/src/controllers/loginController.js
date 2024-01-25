const {validationResult} = require('express-validator');


const usersController = {
    login: (req,res)=>{
        res.render("login", {title: "LOGIN", usuario:req.session.usuario })
    },

    processLogin : (req,res) => {
        // res.send ('ACA TIENE QUE LLEGAR LO QUE ELIGIO EL USUARIO')
        const errores = validationResult(req)
        
        if(!errores.isEmpty()){
            res.render("login", { title: 'LOGIN COLORS', errors:errores.mapped(), oldData:req.body });
        }const user = req.body
        req.session.usuario = user       
        
        if(user.recuerdame){  
            res.cookie('cookieUser', user , {maxAge:1000*60*15})
            res.cookie('recuerdame', user.recuerdame , {maxAge:1000*60*15} )
        }
        
        res.render("login", { title: 'LOGIN COLORS', usuario: req.session.usuario });
    },
}


module.exports =usersController;