const app = document.getElementById("app")

const AppContent = () => {
    return(
        <div>
            <div className="image-container">
                <ImageComponent class="img-profile" src="images/image-victor.jpg" alt="profile-image" />
            </div>
            <div className="info-container">
                <MainTitle title="Victor Crest" />
                <Paragraph content="26" />
                <Paragraph content="London" />
            </div>
            <hr />
            <div className="sns-container">
                <Paragraph content="80K" />
                <Paragraph content="Followers" />
                <Paragraph content="803K" />
                <Paragraph content="Likes" />
                <Paragraph content="1.4K" />
                <Paragraph content="Photos" />
            </div>
            
        </div>
    )
}

function ImageComponent (props) {
    return <img className={props.class} src={props.src} alt={props.altName} />
}

function Paragraph (props) {
    return <p>{props.content}</p>
}

function MainTitle (props) {
    return <h1>{props.title}</h1>
}

ReactDOM.render(<AppContent />, app)