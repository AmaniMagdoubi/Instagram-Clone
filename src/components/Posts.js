const Posts = () => {
    return (
        <article>
            <h1></h1>
            <button className='UserProfileButton'></button>
            <div>
                <button className='LikeButton'></button>
                <button className='CommentButton'></button>
                <button className='ShareButton'></button>
                <button className='SaveButton'></button>
            </div>
            <p>LIKES</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>TIMESTAMP</p>
            <input className="CommentInput" placeholder="Add a comment... "></input>
        </article>
    )
}; 

export default Posts; 