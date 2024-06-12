import closeButtonPath from "../images/close-icon.svg";

function PopoutWithForm(props) {
  return (
    <div>
      <div className={`popout-${props.name} ${props.isOpen ? "active" : ""}`}>
        <h4 className={`popout-${props.name}__title`}>{props.title}</h4>
        <button className={`popout-${props.name}__button-close`} type="submit">
          <img src={closeButtonPath} alt="Boton de cerrar" className="close" />
        </button>
        <form className={`popout-${props.name}__form form`}>
          {props.children}
          <button
            className={`popout-${props.name}__button-save form__submit`}
            type="submit"
          >
            Guardar
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopoutWithForm;
