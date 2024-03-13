import Button from "../Button";
import styles from './Card.module.css';
// import PropTypes from 'prop-types';

function Card(props) {
    return (
        <div className={styles.card}>
            <img className={styles.image} src="https://avatars.githubusercontent.com/u/48833555?v=4" alt="munnazzah"></img>
            <h2 className={styles.title}>{props.name}</h2>
            <p className={styles.desc}>{props.desc}</p>
            <Button/>
        </div>
    );
}

// Card.propTypes = {
//     name: PropTypes.string,
//     desc: PropTypes.string,
// }

// Card.defaultProps = {
//     name: 'Default',
//     desc: 'Default',
// }

export default Card;