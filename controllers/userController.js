export const login = (req,res) =>{
    console.log(req.body);
    const{username, password} = req.body;
    if(!username || !password){
        res.status(400).json({msg: "please provide email and password"});
    }
    res.send("Fake login/register/signup")
    };

export const dashboard = (req,res) =>{
    const luckyNumber = Math.floor(Math.random() *100);
    res
    .status(200)
    .json({
        msg: 'hello user',
        secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
    });
};