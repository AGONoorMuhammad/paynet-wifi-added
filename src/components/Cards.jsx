const Cards = ({title, tlcolor, bg, className, borderColor, paragraph, pcolor}) => {





    return(
        <div className="card-component h-[15vh]"
        style={{backgroundColor: bg,
            borderColor: borderColor
        }}
        >
            <div className={`${className}`}>
                <h1 style={{color:tlcolor}}> {title} </h1>
                <p style={{pcolor}}> {paragraph} </p>
            </div>
        </div>
    )


}


export default Cards;