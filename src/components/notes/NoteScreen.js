import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";

import { NotesAppBar } from "./NotesAppBar";


export const NoteScreen = () => {

  const dispatch = useDispatch();

  const { active:note } = useSelector( state => state.notes );
  const [ formValues, handleInputChange, reset ] = useForm( note );
  const { body, title } = formValues;
 
  const activeId = useRef( note.id ); //Guardar una variable mutable

  useEffect(() => {
    // 274
    if( note.id !== activeId.current ){
      // console.log('first: ', note.id, ' Secund: ', activeId.current );
      reset( note );
      activeId.current = note.id;
    }
  }, [note, reset])
  
  useEffect(() => {
    
    dispatch( activeNote( formValues.id, {...formValues}) )

  }, [formValues])
  


  return (
      <div className="note__main-content">

          <NotesAppBar />
          
          <div className="notes__content">

            <input
              type="text"
              placeholder="Some awesome title"
              className="notes__title-input"
              autoComplete="off"
              name="title"
              value={ title }
              onChange={ handleInputChange }
            />

            <textarea
              placeholder="What happened today"
              className="notes__textarea"
              name="body"
              value={ body  }
              onChange={ handleInputChange }
            ></textarea>

            {/* {
              (note.url) &&
            } */}
            <div className="notes__image">
              <img 
                src="https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg"
                alt="image"
                width="500px"
              />
            </div>

          </div>

      </div>
  )
};
