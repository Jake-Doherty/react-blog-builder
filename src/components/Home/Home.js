import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

import { useState } from 'react';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('Title');
  const [subTitle, setSubTitle] = useState('Subtitle');
  const [font, setFont] = useState('indie-flower');
  const [align, setAlign] = useState('center');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subTitle={subTitle} font={font} align={align} />
      <Editor
        title={title}
        setTitle={setTitle}
        subTitle={subTitle}
        setSubTitle={setSubTitle}
        font={font}
        setFont={setFont}
        setAlign={setAlign}
      />
    </main>
  );
}
