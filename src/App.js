import React, { useState } from 'react';
import { Container } from '@mui/material';
import TagsInput  from './components/MathTagInput';

function App() {

  const [tags, setTags] = useState([]);

  return (
    <Container>
      
      <h1>Tag App</h1>
      <TagsInput />

     </Container>
  );

}

export default App;
