import React from "react";
import "./cube.scss";
import Side from "../Side/";
import {posts} from '../../API/technologics/tech';
import Popup from '../Popup';

const Cube = ({handleContentPost}) => {
  return (
    <>
        <div className="container-cube">
            <Popup/>
            <div className="cube">
            <Side
                handleContentPost={handleContentPost}
                transformPost={posts.javascript}
            />
            <Side
                handleContentPost={handleContentPost}
                transformPost={posts.html}
            />
            <Side
                handleContentPost={handleContentPost}
                transformPost={posts.css}
            />
            <Side
                handleContentPost={handleContentPost}
                transformPost={posts.git}
            />
            <Side
                handleContentPost={handleContentPost}
                transformPost={posts.github}
            />
            <Side
                handleContentPost={handleContentPost}
                transformPost={posts.react}
            />
            </div>
            <div className="shadow"></div>
        </div>
    </>
  );
};

export default Cube;
