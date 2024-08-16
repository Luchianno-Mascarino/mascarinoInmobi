import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,

    },
    email: {
        type: String,
        required: true,
        unique: true,

    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
        default: "https://www.google.com/imgres?q=icono%20avatar&imgurl=https%3A%2F%2Fcdn-icons-png.flaticon.com%2F512%2F126%2F126486.png&imgrefurl=https%3A%2F%2Fwww.flaticon.es%2Ficono-gratis%2Favatar_126486&docid=Seamnr3p65a4BM&tbnid=fvdtVde6yMkN0M&vet=12ahUKEwjrsc2Jx_KHAxU3i_0HHVdtEtoQM3oECBkQAA..i&w=512&h=512&hcb=2&ved=2ahUKEwjrsc2Jx_KHAxU3i_0HHVdtEtoQM3oECBkQAA"
    },

}, { timestamps: true });

const User = mongoose.model('User', userSchema);

export default User;