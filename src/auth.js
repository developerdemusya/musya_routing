module.exports ={
    ensureAuthedicated: (req,res,next) =>{
        if(req.isAuthedicated()){
            return next();
        }
        res.redirect('./component/home')
    }
}