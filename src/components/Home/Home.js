import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

import { useState } from 'react';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('Title');
  const [subTitle, setSubTitle] = useState('Subtitle');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subTitle={subTitle} />
      <Editor title={title} setTitle={setTitle} subTitle={subTitle} setSubTitle={setSubTitle} />
    </main>
  );
}
