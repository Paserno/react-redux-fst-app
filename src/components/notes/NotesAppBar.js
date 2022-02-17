import moment from 'moment';
import { useDispatch, useSelector } from "react-redux";
import { CloseNote, startSaveNote, startUploading } from "../../actions/notes";


export const NotesAppBar = () => {

    const dispatch = useDispatch();
    const { active } = useSelector( state => state.notes );
    const noteDate = moment(active.date).locale('es');

    const handleSave = () =>{
        
        dispatch( startSaveNote( active ) );
    }

    const handlePictureClick = () => {
        document.querySelector('#fileSelector').click();
    }
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if( file ){
            dispatch( startUploading( file ) );
        }
    }

    const handleClose = () => {
        dispatch(CloseNote());
    }

  return (
      <div className="notes__appbar">
          <span>{noteDate.format('LL')}</span>

          <input 
            id="fileSelector"
            type="file"
            name="file"
            style={{ display:"none"}}
            onChange={ handleFileChange }
          />

          <div>
              <button
                className="btn"
                onClick={ handlePictureClick }
              >
                  Picture
              </button>
              
              <button 
                className="btn"
                onClick={ handleSave }
                >
                  Save
              </button>
                <span>||</span>
              <button 
                className="btn btn-close"
                onClick={ handleClose }
                >
                  Close
              </button>

          </div>
      </div>
  )
};
