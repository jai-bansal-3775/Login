import UserModel from "../models/User.js"
import bcrypt from 'bcrypt'
class UserControllers{
    static home = (req,res)=>{
        res.render("index")
    }

    static registration = (req,res)=>{
        res.render("registration")
    }

    static createUser = async (req,res)=>{
        const hashPassword = await bcrypt.hash(req.body.password,10)
        try {
            const doc = new UserModel({
                name:req.body.name,
                email:req.body.email,
                password:hashPassword
            })
            await doc.save()
            res.redirect('/login')

            
        } catch (error) {
            console.log(error)
        }
    }


    static login = (req,res)=>{
        res.render("login")
    }

    static verifyLogin = async (req,res)=>{
        try {
            const {email , password} = req.body
            const result = await UserModel.findOne({email:email})
            // console.log(result)


            if(result!=null){
                const isMatch = await bcrypt.compare(password,result.password)
            if(result.email==email && isMatch){
                res.send("Login Successfully")
                console.log(result)
            }
            else {
                res.send("Enter Correct password")
            }
        }
        else{
            res.send("Enter a valid email")
        }
        } catch (error) {
            console.log(error)
            
        }
    }
}


export default UserControllers