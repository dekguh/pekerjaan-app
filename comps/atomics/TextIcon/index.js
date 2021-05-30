import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const TextIcon = ({ classes, classesIcon, icon, text }) => {
    return (
        <div className={classes ? `text__icon ${classes}` : 'text__icon'}>
            <i className={classesIcon ? `mr-2 ${classesIcon}` : 'mr-2'}><FontAwesomeIcon icon={icon} /></i>
            <span>{text}</span>
        </div>
    )
}

export default TextIcon;
