const { SendResponse } = require("../helpers/helper")
const jwt =require ('jsonwebtoken')

const bycrpt = require()
const AuthController = {
    singUp: async (req, res) => {
        try {
            let { userName, password, contact } = req.body
            let obj = { userName, password, contact }
            let errArr = []

            if (!obj.userName) {
                errArr.push('user name is required')
            }
            if (!obj, password) {
                errArr.push('password is required')
            }
            if (errArr.length > 0) {
                res.status(400).SendRespone(false, "error ", errArr)
                return;
            }
            let userExit = await UserModel.findOne({ userName: obj.userName });



            if (userExit) {
                res.status(400).send(SendRespone(false, "user already Exist with this user name"))
                return;
            }
            obj.password = await bycrpt.hash(obj.password, 10);
            let User = new UserModel(obj);
            let result = await User.save();
            if (result) {
                res
                    .status(200)
                    .send(SendResponse(true, "user created succsfully ", result
                    ))

            }
        },

        login: async (req, res) => {
            try {
                let { userName, password } = req.body;
                let obj = { userName, password };
                let existingUser = await UserModel.findOne({ userName: obj, userName });

                if (existingUser) {
                    let correctPassword = bycrpt.compare(obj.password, existingUser.password)

                    if (correctPassword) {
                        let token =jwt.sign({...existingUser},process.env.SECRET_KEY)
                        res.send(SendResponse(true, "login succesfully", {
                            user: existingUser,
                            token :token
                            
                        } ))
                    } else {

                        res.send(SendResponse(false, "user not match"))
                        
                    }

                } else {
                    res.send(SendResponse(false, "user not found with this user"))
                }

            }
            catch (Error) {

            }


        }







        module.exports = AuthController;