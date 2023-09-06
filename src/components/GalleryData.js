import "./GalleryStyles.css"

function GalleryData(props){
    return(
        <div className="t-card">
            <div className="t-image">
                <img alt="imagegalley" src={props.image}/>
            </div>
        </div>
    )
}
export default GalleryData;