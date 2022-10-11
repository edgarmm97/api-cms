import {Schema, model} from "mongoose";

const UsuarioSchema = new Schema({
    user_type: String,
    email: String,
    email_status: {
        type: String,
        enum: ['Confirmed', 'Unconfirmed'],
        default: 'Unconfirmed',
    },
    personal_information: {
        name: String,
        last_name: String,
        birth_date: {
            type: Date,
        }
    },
    password_hash: {
        type: String,
    },
    status: {
        type: String,
        enum: ['Active', 'Blocked'],
        default: 'Active',
        index: true,
    },

    creation_ip: {
        type: String,
    },

},{
    timestamps: true,
    versionKey: false
});


export default model("Usuario", UsuarioSchema);
