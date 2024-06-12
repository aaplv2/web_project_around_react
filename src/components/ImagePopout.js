import closeButtonPath from "../images/close-icon.svg";

function ImagePopout(props) {
  return (
    <div className={`popout-${props.name}`}>
      <button className={`popout-${props.name}__button-close`} type="submit">
        <img src={closeButtonPath} alt="Boton de cerrar" className="close" />
      </button>
      <img className={`popout-${props.name}__image`} src=" " alt="" />
      <p className={`popout-${props.name}__${props.title}`}></p>
    </div>
  );
}

export default ImagePopout;
