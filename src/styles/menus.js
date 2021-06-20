import React from 'react';

import { Wrapper, Example } from '../components';

const demos = [

  {
    js: require('../../utils/demos/menus/LongMenu').default,
    title: 'Long Menu',
    docs: 'https://material-ui.com/api/menu/'
  },
]

const Menus = () => (
  <div>
    {demos.map((demo, index) => (
      <Example
        key={index}
        index={index}
        title={demo.title}
        js={demo.js}
        docs={demo.docs}
      />
    ))}
  </div>
);

export default Menus;
