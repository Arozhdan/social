import React from "react";

const PostItem = (props) => (
    <div className="post-item">
        <div className="post-avatar">
            <img src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png" alt="avatar"/>
        </div>
        <div className="post-item-content">
            <p className="post-text">{props.message || `Lorem ipsum dolor sit amet, consectetur adipisicing elit. A accusamus
            dignissimos eos facere inventore modi molestiae natus neque nihil nulla officia optio perferendis
            quo sequi tempora velit, veniam voluptate voluptatibus!`}</p>
            <div className={props.liked? 'post-like post-like__active' : 'post-like'}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" fill="#666"
                     xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd"
                          d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                </svg>
            </div>
        </div>
    </div>)
export default PostItem