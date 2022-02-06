import { NotesAppBar } from "./NotesAppBar";


export const NoteScreen = () => {
  return (
      <div className="note__main-content">

          <NotesAppBar />
          
          <div className="notes__content">

            <input
              type="text"
              placeholder="Some awesome title"
              className="notes__title-input"
              autoComplete="off"
            />

            <textarea
              placeholder="What happened today"
              className="notes__textarea"
            ></textarea>

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
