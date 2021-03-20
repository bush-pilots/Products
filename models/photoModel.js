
const photoSchema = new Schema({
  photo_id: Number,
  style_id: Number,
  url: String,
  thumbnail_url: String,
})

const Photo = mongoose.model('Photo', photoSchema);


