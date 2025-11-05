const Cards = ({title, tlcolor, bg, className, borderColor, paragraph, pcolor}) => {





    return(
        <div className="card-component"
        style={{
            backgroundColor: bg,
            borderColor: borderColor,
            borderWidth: '1px',
            borderStyle: 'solid'
        }}
        >
            <div className={`${className}`}>
                <h1 style={{color: tlcolor, marginBottom: '0.75rem'}}>{title}</h1>
                <p style={{color: pcolor, lineHeight: '1.6', margin: 0}}>{paragraph}</p>
            </div>
        </div>
    )


}


export default Cards;