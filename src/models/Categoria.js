import { Schema, model } from 'mongoose';

const CategoriaSchema = new Schema({
    name: String,
    slug: String
},{
    timestamps: true,
    versionKey: false
});

export default model('Categoria', CategoriaSchema);