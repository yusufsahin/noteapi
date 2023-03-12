import mongoose from 'mongoose';

interface Note {
  title: string;
  content: string;
}

const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
});

const NoteModel = mongoose.model<Note & mongoose.Document>('Note', noteSchema);

export { NoteModel };
