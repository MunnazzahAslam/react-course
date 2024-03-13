import Button from "./Button";

function Card() {
    return (
        <div className="card">
            <img className="card-image" src="https://avatars.githubusercontent.com/u/48833555?v=4" alt="munnazzah"></img>
            <h2 className="card-title">Munnazzah</h2>
            <p className="card-desc">I'm a software engineer</p>
            <Button/>
        </div>
    );
}

export default Card;