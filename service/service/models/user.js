import mongoose from "mongoose";
 
const userSchema = new mongoose.Schema({

    userId: {

        type: String,

        required: true,

        unique: true

    },

    firstName: {

        type: String,

        required: true

    },

    lastName: {

        type: String,

        required: true

    },

    email: {

        type: String,

        required: true,

        unique: true,

        validate: {

            validator: function (v) {

                return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v); // Basic email validation

            },

            message: props => `${props.value} is not a valid email address!`

        }

    },

    createdAt: {

        type: Date,

        default: Date.now

    }

});
 
const UserModel = mongoose.model('user', userSchema);

export default UserModel;

 