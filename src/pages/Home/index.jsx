import { useState } from 'react';
import CustomCursor from '../../components/CustomCursor/CustomCursor';
import Header from '../../components/Header';
import Image from '../../components/Image';
import Title from '../../components/Title';

import { pageData } from '../../data';

const Home = () => {
  const [rotationPosition, setRotation] = useState(
    new Array(pageData.length).fill(0)
  );
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleSetRotation = (itemIndex) => {
    // Random between -7 and 7
    const newRotation =
      Math.random() * 7 * (Math.round(Math.random()) ? 1 : -1);

    const tempState = [...rotationPosition];
    tempState[itemIndex] = newRotation;
    setRotation(tempState);
    setActiveIndex(itemIndex);
  };

  return (
    <>
      <CustomCursor />
      <Header />
      <div className="main-container" id="main-container">
        <div className="title-container" data-scroll-container>
          {pageData.map(({ title }, index) => (
            <Title
              key={title}
              title={title}
              index={index}
              setRotation={handleSetRotation}
              setIndex={setActiveIndex}
            />
          ))}
        </div>
        <div className="image-container">
          {pageData.map(({ url }, index) => (
            <Image
              key={url}
              url={url}
              active={activeIndex === index}
              rotationPosition={rotationPosition[index]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
