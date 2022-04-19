import Akbar from "../Images/IMG_0530.JPG"

function Info (){
    return(
        <div className=" col-7 mx-auto align-items-center ">
            <div className="akbar-pfp"> </div>
                <div className="bg-light text-center text-dark mx-auto">
                    <h2 className=" name">Akbar Badmus</h2>
                    <h4 className="text-warning skill" >Frontend Developer</h4>
                    <h6 className="email">akbarbadmus07@gmail.com</h6>
                </div>
                <div className="row container bg-light mx-auto pt-3">
                    <button className=" offset-1 col-5 btn btn-light border border-dark"> <i class="fa-solid fa-envelope"></i> Email

                    </button>
                    <button className=" col-5 offset-1 btn btn-primary"><i class="fa-brands fa-linkedin"></i> linkedin

                    </button>

                </div>
        </div>
        
            
    
    )
}
export default Info