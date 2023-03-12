import { Request, Response } from 'express';
import { NoteModel } from '../models/note';

const getNotes = async (req: Request, res: Response): Promise<void> => {
  try {
    const notes = await NoteModel.find();
    res.json(notes);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

const getNoteById = async (req: Request, res: Response): Promise<void> => {
  try {
    const note = await NoteModel.findById(req.params.id);
    if (!note) {
      res.status(404).send('Note not found');
    } else {
      res.json(note);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

const createNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const note = new NoteModel(req.body);
    await note.save();
    res.json(note);
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

const updateNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const note = await NoteModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!note) {
      res.status(404).send('Note not found');
    } else {
      res.json(note);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

const deleteNote = async (req: Request, res: Response): Promise<void> => {
  try {
    const note = await NoteModel.findByIdAndDelete(req.params.id);
    if (!note) {
      res.status(404).send('Note not found');
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Server error');
  }
};

export { getNotes, getNoteById, createNote, updateNote, deleteNote };
