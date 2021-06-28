import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';


const getItems = () => [{
  id: "1",
  image: "https://mediadesknm.com/wp-content/uploads/2018/09/photographer-698908_960_720.jpg"
}, {
  id: "2",
  image: "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
}, {
  id: "3",
  image: "https://www.chinaairlines-vn.com/uploads/data/images/tong-hop-kinh-nghiem-du-lich-los-angeles-tu-tuc-gia-re-1.jpg"
}, {
  id: "4",
  image: "https://imgcy.trivago.com/c_lfill,d_dummy.jpeg,e_sharpen:60,f_auto,h_450,q_auto,w_450/itemimages/13/32/1332344_v4.jpeg"
}, {
  id: "5",
  image: "https://s7d2.scene7.com/is/image/ritzcarlton/RCLOSAN_00052_conversion?$SmallViewport100pct$"
}]

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  width: "80px",
  height: "80px",
  marginRight: '10px',
  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = isDraggingOver => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  border: isDraggingOver ? '2px dotted blue' : '2px solid lightgrey',
  display: 'flex',
  padding: '10px',
  overflow: 'auto',
});

function App() {
  const [state, setState] = useState({ items: getItems() })
  

  var ArrSendServer = [];
  for (let i = 0; i < state.items.length; i++) {
    ArrSendServer.push({id:state.items[i].id,image:state.items[i].image,index:i});
  }
  console.log(ArrSendServer)
  function onDragEnd(result) {
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
                    <img src={item.image} width="100%" height="100%"></img>
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