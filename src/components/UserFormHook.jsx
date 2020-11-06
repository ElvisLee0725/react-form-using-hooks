import React, { Fragment, useState } from 'react';

const UserFormHook = (props) => {

    const hobbiesArray = ['Sports', 'Music', 'Theater'];
    const [inputData, setInputData] = useState({
        username: '',
        password: '',
        description: '',
        age: '',
        gender: '',
        hobbies: hobbiesArray.reduce((allHobbies, hobby) => {
            return {
                ...allHobbies,
                [hobby]: false
            }
        }, {})
    });

    const { username, password, description, age, gender, hobbies } = inputData;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Username: ", username);
        console.log("Password: ", password);
        console.log("Description: ", description);
        console.log("Age: ", age);
        console.log("Gender: ", gender);
        
        const hobbyArr = Object.entries(hobbies);
        const res = [];
        for(let i = 0; i < hobbyArr.length; i++) {
            if(hobbyArr[i][1]) {
                res.push(hobbyArr[i][0]);
            }
        }
        console.log("Hobbies: ", res);
    }

    return (
        <Fragment>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" className="form-control" id="username" placeholder="Enter Username" name="username" value={username} onChange={(e) => setInputData({...inputData, [e.target.name]: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" className="form-control" id="password" placeholder="Password" name="password" value={password} onChange={(e) => setInputData({...inputData, [e.target.name]: e.target.value})}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" rows="3" name="description" value={description} onChange={(e) => setInputData({...inputData, [e.target.name]: e.target.value})}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="age">Age</label>
                    <select className="form-control" id="age" name="age" value={age} onChange={(e) => setInputData({...inputData, [e.target.name]: e.target.value})}>
                        <option value="Young">&lt; 20</option>
                        <option value="Young Adult">20 - 40</option>
                        <option value="Mid Age">40 - 60</option>
                        <option value="Senior">&gt; 60</option>
                    </select>
                </div>

                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" id="Male" value="Male" onChange={(e) => setInputData({...inputData, [e.target.name]: e.target.value})}/>
                    <label className="form-check-label" htmlFor="Male">Male</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" id="Female" value="Female" onChange={(e) => setInputData({...inputData, [e.target.name]: e.target.value})}/>
                    <label className="form-check-label" htmlFor="Female">Female</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="radio" name="gender" id="NotTell" value="Not To Tell" onChange={(e) => setInputData({...inputData, [e.target.name]: e.target.value})}/>
                    <label className="form-check-label" htmlFor="NotTell">Prefer not to tell</label>
                </div>

                { hobbiesArray.map((hobby, index) => {
                    return (
                       <div className="form-check" key={index}>
                            <input className="form-check-input" type="checkbox" name={hobby} checked={hobbies[hobby]} id={hobby} onChange={(e) => setInputData({...inputData, hobbies: {...hobbies, [e.target.name]: !hobbies[e.target.name]}})}/>
                            <label className="form-check-label" htmlFor={hobby}>{hobby}</label>
                    </div>  
                    )
                })}
               

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </Fragment>
    )
}

export default UserFormHook;