import React from 'react';

function ListItem({studentList}) {
    return (
        <p>{studentList.name}</p>
    );
}

export default ListItem;