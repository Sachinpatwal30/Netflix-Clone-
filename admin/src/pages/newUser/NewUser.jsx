import { useState } from "react";
import "./newUser.css"
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import storage from "../../firebaseConfig";
import { createUser } from "../../context/usersContext/UsersApiCalls";
import { useContext } from "react";
import { UsersContext } from "../../context/usersContext/UserContext";
import {useNavigate} from "react-router-dom"

export default function NewUser() {

    const [user, setUser] = useState({});
    const [img, setImg] = useState(null);
    const [count, setCount] = useState(0);
    const {dispatch}= useContext(UsersContext);
    const name="profilePicture";
    const navigate= useNavigate();


    const handleChange = (e) => {
        const value = e.target.value;
        setUser({ ...user, [e.target.name]: value });
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();
        createUser(user,dispatch);

        console.log("new user added successfully error is on net page");
        navigate("/users");
        
    }
    


    const handleUpload = (e) => {

        e.preventDefault();
         const fileName = new Date().getTime() + img.name;
        const storageRef = ref(storage, `/netflix-clone/${fileName}`);  // path before file name will create a folder with name netflix clone.
        const uploadTask = uploadBytesResumable(storageRef, img);

        uploadTask.on('state_changed',
            (snapshot) => {

                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default: new Error('Unknown state');
                        break;
                }
            },
            (error) => {
                console.log('Error: ' + error);
            },
            () => {

                setCount(count + 1);
                console.log('Count: ' + count);

                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                    setUser((prev) => {
                        return { ...prev, [name]: downloadURL }
                    });  }); 
            } );
        }



    return (

        <div className="newUser">

            <span className="title"> New User Details</span>

            <h1 className="newUserTitle">New User</h1>

            <form className="newUserForm">

                <div className="newUserItem">

                    <label>Username</label>
                    <input type="text" placeholder="Username" name="username" onChange={handleChange} />

                </div>


                <div className="newUserItem">

                    <label>Email</label>
                    <input type="email " placeholder="xyz@email.com" name="email" onChange={handleChange} />

                </div>

                <div className="newUserItem">

                    <label>Password</label>
                    <input type="password" placeholder="Password" name="password" onChange={handleChange} />

                </div>

                <div className="newUserItem admin">

                    <label>Is Admin</label>
                    <select type="text" name="isAdmin" onChange={handleChange}>

                        <option value="true">Yes</option>
                        <option value="false" >No</option>

                    </select>

                </div>

                <div className="addProductItem img">
                    <label>Profile Picture</label>
                    <input type="file" id="img" name="profilePicture" onChange={(e) => { setImg(e.target.files[0]) }} />
                </div>

                {
                    (count === 1) ? <button className="newUserButton create"  onClick={handleSubmit}>Create</button> :
                        <button className="newUserButton" onClick={handleUpload}>Upload</button>
                }

            </form>






        </div>
    )
}
