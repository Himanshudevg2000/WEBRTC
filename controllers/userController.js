const loadIndex = async(req,res)=> {
    try{
        return res.render('index');
    }
    catch(err){
        console.log(err);
    }
};

const check = async(req,res)=> {
    return res.send('working');
}

module.exports = {
    loadIndex,
    check
}