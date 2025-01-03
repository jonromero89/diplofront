import React from 'react';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className='novedades'>
            <h2>{title}</h2>
            <h3>{subtitle}</h3>
            <img src={imagen} alt={title} />
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
        </div>
    );

}

export default NovedadItem;