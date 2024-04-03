import { useState } from "react";
import './ListGroup.css';

interface ListGroupProps {
    items: string[];
    header: string;
    children: string;

}

function ListGroup({items, header, children}: ListGroupProps){
    
    const [clicketItem, setClickedItem] = useState(-1);

    const [mouseOver, setMouseOver] = useState(false);
    const [mouseLeave, setMouseLeave] = useState(false);
    

    return (
      <>
        <h1 className="">{children}</h1>
        <ul className="list-group">
          {items.map((item, index) => (
            <li
              className={ clicketItem == index ? "list-group-item selected" : "list-group-item" }
              key={index}
              id={index.toString()}
              onClick={() => setClickedItem(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      </>
    );
}

export default ListGroup;