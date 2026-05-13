import mongoose from 'mongoose';
const UserTrackGenreSchema = new mongoose.Schema({
  userId: String,
  trackId: String,
  genre: String
}, { collection: 'user_track_genres' });
const UserTrackGenre = mongoose.model('UserTrackGenre', UserTrackGenreSchema);

async function run() {
  try {
    await mongoose.connect('mongodb://localhost:27017/test', {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('connected');
    const exists = await UserTrackGenre.findOne({ userId: 'a', trackId: 'b', genre: 'c' });
    console.log('exists:', exists);
    await UserTrackGenre.create({ userId: 'a', trackId: 'b', genre: 'c' });
    console.log('created');
    process.exit(0);
  } catch (err) {
    console.error('error:', err);
    process.exit(1);
  }
}
run();
