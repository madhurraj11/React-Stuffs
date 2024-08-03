import React, {useState, useEffect} from "react";

const Draglist = () => {
    const [item, setItem] = useState([1,2,3,4,5]);
    const [startIndex, setStartIndex] = useState(0);

    const onDragOver = (e) => {
        e.preventDefault();
    }

    const dragItem = (i) => {
        setStartIndex(i);
    }

    const dropItem = (i) => {
        const newArr = [...item];
        const movedElement = newArr.splice(startIndex,1);
        newArr.splice(i,0,movedElement);
        setItem(newArr);
    }
    return (
        <div>
            <h2>Draggable List</h2>
            {
                item.map((e,i)=>{
                    return <div
                        key={i}
                        draggable
                        classname='item'
                        onDragOver={onDragOver}
                        onDragStart={()=>{dragItem(i)}}
                        onDrop={()=>{dropItem(i)}}>
                            Item {e}
                    </div>
                })
            }
        </div>
    );
};

export default Draglist;