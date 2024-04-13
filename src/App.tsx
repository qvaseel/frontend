import React from 'react';
import Header from './components/widgets/Header/Header';
import Advantages from './components/widgets/Advantages/Advantages';
import Liders from './components/widgets/Liders/Liders';
import Directions from './components/widgets/Directions/Directions';
import Projects from './components/widgets/Projects/Projects';
import RunningLine from './components/widgets/RunningLine/RunningLine';
import Infrastructure from './components/widgets/Infrastructure/Infrastructure';
import Awards from './components/widgets/Awards/Awards';
import CreateProject from './components/widgets/CreateProject/CreateProject';


function App() {
  return (
    <div className='flex flex-col gap-[120px]'>
      <Header/>
      <Advantages/>
      <Liders/>
      <Directions/>
      <Projects/>
      <RunningLine/>
      <Infrastructure/>
      <Awards/>
      <CreateProject/>
    </div>
  );
}

export default App;
