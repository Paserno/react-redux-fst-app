import { db } from '../firebase/firebaseConfig';


export const loadNotes = async( uid ) => {

   const Snapshot = await db.collection(`${ uid }/journal/notes`).orderBy('date').get()
    
    const notes = [];

   Snapshot.forEach( snap => {
       notes.push({
           id: snap.id,
           ...snap.data()
       })
    });

   return notes;
}