import "./list.css";
import { Link,  useLocation } from "react-router-dom";


export default function List() {

    const location = useLocation();

    const movie= location.state.movie




    return (
        <div className="product">
            <div className="productTitleContainer">
         
                <span className="productTitle">List</span>
                <Link to="/newmovie">
                    
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
               
                <div className="productTopRight">
                    <div className="productInfoTop">
                        
                        <span className="productName">{movie.title}</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">Id:</span>
                            <span className="productInfoValue">{movie._id}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Title:</span>
                            <span  className="productInfoValue">{movie.title}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Genre:</span>
                            <span className="productInfoValue">{movie.genre}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Title:</span>
                            <span className="productInfoValue">{movie.title}</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Type</span>
                            <span className="productInfoValue">{movie.type}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>List Title</label>
                        <input type="text" placeholder={movie.title} />
                        <label>Type</label>
                        <input type="text" placeholder={movie.type} />
                        <label>Genre</label>
                        <input type="text" placeholder={movie.genre} />
   
                    </div>
                  
                   <button className="productButton">Update</button>
                    
                </form>
            </div>
        </div>
    );
}