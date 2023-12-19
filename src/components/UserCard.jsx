import React from 'react';

const UserCard = (props) => {
    const { data } = props;

    const user_name = data.name
    const user_email = data.email
    const user_age = data.age
    const user_img = data.img
    return (
        <div className="col-md-3">
        <article className="list--item">
            <figure>
                <img src={'/assets/users/' + user_img} class='img-fluid' alt="" />
                    <header>
                        <div className="floater">{user_email}</div>
                        <h2>{user_name}</h2>
                    </header>
                    <figcaption>
                        Привет, мне {user_age}
                    </figcaption>
            </figure>
        </article>
        </div>
    )
}

export default UserCard