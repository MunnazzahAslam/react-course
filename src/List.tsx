import PropTypes from 'prop-types';

function List() {
    const list = [{ key: 120 }, { key: 240 }, { key: 300 }, { key: 340 }, { key: 129 }];
    // list.sort((a, b)=> a.key.localeCompare(b.key)); // aLphabetical sort
    const smallList = list.filter((listItem) => listItem.key > 200);

    const listItems = smallList.map((i) => <li key={i.key}>{i.key}</li>);
    return (<ul>{listItems}</ul>);
}

List.propTypes = {
    string: PropTypes.string,
}
List.defaultProps = {
}

export default List;