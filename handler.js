import middy from '@middy/core';
import { authenticate } from './middleware/auth.js';

import {
  addNote as addNoteToDb,
  deleteNote as deleteNoteFromDb,
  getNotes as getNotesFromDb,
  updateNote as updateNoteInDb
} from './functions/notes.js';

const getNotesHandler = async (event) => {
  const userId = event.user.email; 
  return await getNotesFromDb(userId);  
};

const addNoteHandler = async (event) => {
  const noteData = JSON.parse(event.body);
  noteData.userId = event.user.email; 
  return await addNoteToDb(noteData);  
};

const updateNoteHandler = async (event) => {
  const noteData = JSON.parse(event.body); 
  noteData.userId = event.user.email;  
  return await updateNoteInDb(noteData);  
};

const deleteNoteHandler = async (event) => {
  const { id } = event.pathParameters; 
  const userId = event.user.email; 
  return await deleteNoteFromDb(id, userId); 
};

export const getNotes = middy(getNotesHandler).use(authenticate());
export const addNote = middy(addNoteHandler).use(authenticate());
export const updateNote = middy(updateNoteHandler).use(authenticate());
export const deleteNote = middy(deleteNoteHandler).use(authenticate());