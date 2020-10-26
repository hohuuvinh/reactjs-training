import React from 'react';
import PropTypes from 'prop-types';

List.propTypes = {

};

List.propTypes = {
    posts: PropTypes.array,
};
List.defaultProps = {
    posts: [],
};

function List(props) {
    const { posts } = props;
    return (
        <ul className="post-list">
            {posts.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}
export default List;