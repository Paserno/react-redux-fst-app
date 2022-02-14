

export const LoadingScreen = () => {
    const pathImage = require.context('../../assets', true);
  return (
      
    <div className="auth__main ">
    <div className="auth__background"></div>
        <img 
                src={pathImage('./fondo.jpg')} 
                alt="Fondo"
                className="auth__main-back"
            />
            <div className="auth__box-container">
                <h1 className="auth__title auth__title__big">Cargando...</h1>
                <p></p>
                </div>
        


    </div>
  )
}
