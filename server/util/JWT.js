

const jsonwebtoken = require("jsonwebtoken")
const secret = "ying"

const JWT = {
    generate(value, expires){
        return jsonwebtoken.sign(value, secret, {expiresIn: expires})
    },
    verify(token){
        try{
            return jsonwebtoken.verify(token, secret)
        } catch (e){
            return false
        }
    }
}

// const token = JWT.generate({name:"ying"}, "10s")
// console.log(JWT.verify(token))
// setTimeout(()=>{
//     console.log(JWT.verify(token))
// },11000)

module.exports = JWT