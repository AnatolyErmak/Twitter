import React from 'react';
import PostListItem from '../post-list-item/post-list-item';
import './post-list.css'

const PostList = ({posts}) => {

    const elements = posts.map((item) => {

        const {id, ...itemProps} = item; // деструктуризация разбиваем наш пропс на 2 элемента

        return (
            <li key={id} className = "list-group-item">
                <PostListItem {...itemProps} /*  это тоже самое 
                label = {item.label} 
                important = {item.important} */
                />
            </li>
        )
    })

    return (
        <ul className = "app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList