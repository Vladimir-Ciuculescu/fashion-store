import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './preview-collection.styles.css';


const PreviewCollection = ({items,title}) => { 

    
    return (
        <div className = "preview-collection">
            <h1 className="title">{title}</h1>

            <div className="preview">
                {items.filter((item , id)=> id < 4)
                    .map(item => (
                    <CollectionItem key={item.id}  item = {item}></CollectionItem>
                ))}
                
                
            </div>
            
        </div>
    )
    
}

export default PreviewCollection;