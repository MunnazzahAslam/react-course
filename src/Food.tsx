function Food() {
    const mainCourse = 'Qeema';
    const snack = 'Icecream';

    return (
        <ul>
            <li>
                {mainCourse}
            </li>
            <li>
                {snack.toUpperCase()}
            </li>
        </ul>
    );
}

export default Food;