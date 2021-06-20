import React, {  useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const getItems =()=> [{
  id:"1",
  content:"vvvvvb"
},{
  id:"2",
  content:"gf"
},{
  id:"3",
  content:"n"
},{
  id:"4",
  content:"nb"
},{
  id:"5",
  content:"bvvbbvb"
}]

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};
const grid = 10;
const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer

  padding: '10px',
  margin: `0 ${grid}px 0 0`,
  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',
  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  display: 'flex',
  padding: grid,
  overflow: 'auto',
});

function App() {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     items: getItems(6),
  //   };
  //   this.onDragEnd = this.onDragEnd.bind(this);
  // }
  const [state,setState] = useState({items: getItems()})
console.log(state)
  function onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      state.items,
      result.source.index,
      result.destination.index
    );
    setState({ items });
  }

  // Normally you would want to split things out into separate components.
  // But in this example everything is just done in one place for simplicity
  
    return (
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {state.items.map((item, index) => (
                
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      {item.content}
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }


export default App;