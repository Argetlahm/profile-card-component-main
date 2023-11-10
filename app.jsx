const app = document.getElementById("app")

const AppContent = () => {
    return(
        <div className="container">
            <svg className="pattern top" width="978" height="978" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="a"><stop stopColor="#0989B4" stopOpacity="0" offset="0%"/><stop stopColor="#53FFEE" offset="99.94%"/></linearGradient></defs><ellipse fill="url(#a)" transform="rotate(-135 489 489)" cx="489" cy="489" rx="489" ry="488" fillRule="evenodd" opacity=".5"/></svg>
            <svg className="pattern bottom" width="978" height="978" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient x1="50%" y1=".779%" x2="50%" y2="100%" id="b"><stop stopColor="#0989B4" stopOpacity="0" offset="0%"/><stop stopColor="#53FFEE" offset="99.94%"/></linearGradient></defs><ellipse fill="url(#a)" transform="scale(1 -1) rotate(45 1669.55 0)" cx="489" cy="489" rx="489" ry="488" fillRule="evenodd" opacity=".25"/></svg>
            <div className="profile-container">
                <div className="image-container">
                    <ImageComponent class="img-profile" src="images/image-victor.jpg" altName="profile-image" />
                </div>
                <div className="info-container">
                    <div className="group-1">
                        <MainTitle title="Victor Crest" />
                        <Paragraph content="26" />
                    </div>
                    <Paragraph className="location-info" content="London" />
                </div>
                <hr />
                <div className="sns-container">
                    <div className="sns">
                        <Paragraph className="sns-bold" content="80K" />
                        <Paragraph className="sns-sub" content="Followers" />
                    </div>
                    <div className="sns">
                        <Paragraph className="sns-bold" content="803K" />
                        <Paragraph className="sns-sub" content="Likes" />
                    </div>
                    <div className="sns">
                        <Paragraph className="sns-bold" content="1.4K" />
                        <Paragraph className="sns-sub" content="Photos" />
                    </div>
                </div>
            </div>
            
            
        </div>
    )
}

function ImageComponent (props) {
    return <img className={props.class} src={props.src} alt={props.altName} />
}

function Paragraph (props) {
    return <p className={props.className}>{props.content}</p>
}

function MainTitle (props) {
    return <h1>{props.title}</h1>
}

ReactDOM.render(<AppContent />, app)