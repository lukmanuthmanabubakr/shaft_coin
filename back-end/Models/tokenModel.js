const mongoose = require("mongoose");



const tokenSchema = mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"user",
        },
        vToken: {
            type: String,
            default: "",
            
        },
                //reset token
        rToken: {
            type: String,
            default: "",

        },
        //login token
        lToken: {
            type: String,
            default: "",

        },
        createdAt: {
            type: Date,
            required: true

        },
        expiresAt: {
            type: Date,
            required: true

        },
        
        
    }
    
);




const Token = mongoose.model("Token", tokenSchema)

module.exports = Token