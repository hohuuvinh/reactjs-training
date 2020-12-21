import React, { useState } from 'react';

function TodoItem({products}) {
    return (
        <div>
          <p>{products.name}</p>
        </div>
    );
}

export default TodoItem;