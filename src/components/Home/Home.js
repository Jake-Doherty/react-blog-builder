import Preview from '../Preview/Preview';
import Editor from '../Editor/Editor';

import './Home.css';

import { useState } from 'react';

export default function Home() {
  // add useState calls here for title, subtitle, font, align, and text
  const [title, setTitle] = useState('Title goes here');
  const [subTitle, setSubTitle] = useState('Subtitle goes here');
  const [font, setFont] = useState('indie-flower');
  const [align, setAlign] = useState('center');
  const [text, setText] = useState('');

  return (
    <main>
      {/* pass the state variables as props to the presentational components */}
      <Preview title={title} subTitle={subTitle} font={font} align={align} text={text} />
      <Editor
        title={title}
        setTitle={setTitle}
        subTitle={subTitle}
        setSubTitle={setSubTitle}
        font={font}
        setFont={setFont}
        setAlign={setAlign}
        text={text}
        setText={setText}
      />
    </main>
  );
}
