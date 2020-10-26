import React from 'react';
import PropTypes from 'prop-types';

GetList.propTypes = {
    studentList: PropTypes.array,
};
GetList.defaultProps = {
    studentList: [],
};

function GetList(props) {
    const { studentList } = props;
    return (
        <ul className="post-list">
            {studentList.map(post => (
                <li key={post.id}>{post.name} age {post.age}</li>
            ))}
        </ul>
    );
}

export default GetList;