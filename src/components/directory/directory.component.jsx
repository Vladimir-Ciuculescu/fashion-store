import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import './directory.styles.css';        

class Directory extends React.Component { 

    constructor() {
        super();
        this.state = {
            sections: [{
                title: 'Hats',
                imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                id: 1,
                linkUrl: '',
                da:''
              },
              {
                title: 'Jackets',
                imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                id: 2,
                linkUrl: '',
                da:''
              },
              {
                title: 'Sneakers',
                imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                id: 3,
                linkUrl: '',
                da:''
              },
              {
                title: 'Women',
                imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                size: 'large',
                id: 4,
                linkUrl: '',
                da:''
              },
              {
                title: 'Men',
                imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                size: 'large',
                id: 5,
                linkUrl: '',
                da:''
              }]
        }
    }

    render() { 
        return (

            <div className="directory-menu">
                {this.state.sections.map(({title,imageUrl,id,size,linkUrl,da}) => (
                  <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} da={da}></MenuItem>
                ))
                }
            </div>

        )
    }
    

}

export default Directory;