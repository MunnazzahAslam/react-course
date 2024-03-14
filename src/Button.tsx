function Button() {
    const styles = {
        fontFamily:"'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        backgroundColor: "rgb(21, 123, 196)",
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        padding: "10px 20px",
        borderRadius: "5px",
        marginBottom: "10px",
    }

    let count = 0;
    const handleClick = (e) => {
        console.log(e);
        e.target.textContent = 'Clicked';
        count++;
        console.log(`Button clicked ${count} times`);
    }

    return(
        <button onClick={(e) => handleClick(e)} style={styles}>View More</button>
    );
};

export default Button;