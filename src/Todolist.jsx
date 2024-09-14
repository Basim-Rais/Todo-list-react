import React, { useState } from 'react'
import "./index.css"

const Todo = () => {

    const [inputData, setinputData] = useState("");
    const [items, setitems] = useState([]);
    const [editedItem, seteditedItem] = useState("");
    const [toggleButt, settoggleButt] = useState(false);
    const addData = () => {
        if (!inputData) {
            alert("plz fill the data");
        } else if(inputData && toggleButt){
            setitems(
                items.map((curElem)=>{
                    if(curElem.id ==+ editedItem){
                        return {...curElem, name : inputData}
                    }
                        return curElem;
                })
            )

            setinputData("");
            seteditedItem(null);
            settoggleButt(false);
        } else {
            const newData = {
                id : new Date().getTime().toString(),
                name : inputData
            }
            setitems([...items, newData]);
            setinputData("");
        }
    };

    const editItem = (Index) =>{
        const edited_Item = items.find((curElem)=>{
            return curElem.id === Index
        });
        setinputData(edited_Item.name);
        seteditedItem(Index);
        settoggleButt(true);
    };

    const delItem =(Index)=>{
        const uptadeItem = items.filter((curElem)=>{
            return curElem.id !== Index;
        });

        setitems(uptadeItem);
    };

    const delAll = () =>{
        setitems([]);
    };


    return (
        <>
            <div className='container'>
                <div className="todo-Con">
                    <div className='image'>
                        <img src="https://media.istockphoto.com/id/1470081732/vector/grammar-editing-process.jpg?s=612x612&w=0&k=20&c=tMsggaFZc5P2Mwes5yCykQP_GTmBbDaoOHUFLoaU3PQ=" alt="" />
                    </div>
                    <h4>Add your list here ✌</h4>
                    <div className='addItem'>
                        <input type="text" placeholder='✍ Add Items...' onChange={(event) => setinputData(event.target.value)} value={inputData} />
                        {
                            toggleButt ?  (<i className="fa-regular fa-pen-to-square" onClick={addData}></i>) : (<i className="fa-solid fa-plus " onClick={addData}></i>) 
                        }
                       
                    </div>

                    <div className='showItem'>

                        {
                            items.map((curElem, Index) => {
                                return (
                                    <div className='eachitem ' key={Index}>
                                        <input type="text" value={curElem.name} />
                                        <i className="fa-regular fa-pen-to-square trash"  onClick={()=>{editItem(curElem.id)}}></i>
                                        <i className="fa-solid fa-trash" onClick={()=>{delItem(curElem.id)}}></i>
                                    </div>

                                )
                            })
                        }

                    </div>
                    <div className='remove-btn'>
                        <button role="button" onClick={delAll}>Clear All</button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Todo;
