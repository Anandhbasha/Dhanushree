export const readController = (req,res)=>{
    res.send("Node is working")
}
export const insertController = (req,res)=>{
    const {userName,userPassword} = req.body
    res.send(`The userName of the user is:${userName} and the password is ${userPassword}`)
}
export const edit = (req,res)=>{
    const{userName} = req.params
    const {userPassword} = req.body
    res.send(`The ${userName} Password is Changed to ${userPassword} successfully`)
}
export const del = (req,res)=>{
    const{userName} = req.params
    res.send(`The ${userName} Deleted successfully`)
}