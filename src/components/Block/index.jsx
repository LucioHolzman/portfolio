import React, {useState, useEffect} from 'react';
import './block.scss';
import Cube from '../Cube';
import Post from '../Post';
import Reset from '../Reset';

const Block = () => {

    const defaultTech = {
        title: 'Hola', 
        content:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto blanditiis nisi error quo saepe harum vitae commodi autem assumenda distinctio.'
    };
    
    const [tech, setTech] = useState(defaultTech);
    
    const updateData = (title, content) => {
        setTech({title, content})
    }

    // useEffect(() => {console.log('Hubo un cambio de tecnologia')},[tech])
    
    return (
        <>
            <div className="container-block">
                <Post
                postData={tech}
                />
                <Cube 
                handleContentPost={updateData}
                />
                <Reset
                handleClick={() => {setTech(defaultTech)}}
                />
            </div>
        </>
    )
}

export default Block;