import './Card.css'

//this is a wrapper css component
const Card = (props) => {
    //props.className gives the component access to className called card plus all className when called. 
    //because it is the parent container
    const classes = 'card ' + props.className;
    return (
    <div className={classes}>{props.children}</div>
    )
}
export default Card;