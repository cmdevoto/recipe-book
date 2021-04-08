import React, { useEffect, useState } from "react";
import { createUser } from "../../Common/Services/UserLearnService.js";
import NewAccountForm from './NewAccountForm.js';

const NewAccount = () => {

    const [newUser, setNewUser] = useState({
        email: "",
        username: "",
        password: ""
    });

    const [add, setAdd] = useState(false);

    useEffect(() => {
        if (newUser && add){
            createUser(newUser).then((userCreated) => {
                if (userCreated){
                    alert(
                        `${userCreated.get("username")}, you successfully registered!`
                    );
                }
            setAdd(false);
            });
        }
    }, [newUser, add]);

    console.log(newUser);

    const onChangeHandler = (e) => {
        e.preventDefault();
        console.log(e.target);
        const { name, value: newValue } = e.target;
        console.log(newValue);

        setNewUser({
            ...newUser,
            [name]: newValue
        });
    };

    const onSubmitHandler = (e) => {
        console.log(newUser);
        e.preventDefault();
        console.log("submitted: ", e.target);
        setAdd(true);
    };


    return (
        <div>
            <NewAccountForm user={newUser} onChange={onChangeHandler} onSubmit={onSubmitHandler}></NewAccountForm>
        </div>
    )
};

export default NewAccount;

