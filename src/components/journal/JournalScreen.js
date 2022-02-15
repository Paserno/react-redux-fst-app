import React from 'react';
import { useSelector } from 'react-redux';
import { NoteScreen } from '../notes/NoteScreen';
import { NothingSelected } from './NothingSelected';
import { Sidbar } from './Sidbar';

export const JournalScreen = () => {

    const { active } = useSelector(state => state.notes);
    console.log(active)

    return (
        <div className='journal__main-content'>

            <Sidbar />

            <main>

                {
                    (active)
                       ? (<NoteScreen />)
                       : (<NothingSelected />)
                }
                

            </main>


        </div>
    )
};
