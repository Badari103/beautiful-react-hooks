import './App.css';
import TestComponent from './components/infiniteScroll';
import Event from './components/eventListening';
import GlobalEvent from './components/globalEvent';
import PreviousValue from './components/previousValue';
import ValueHistory from './components/valueHistory';
import ValidatedField from './components/ValidatedState';
import MediaQueryReporter from './components/mediaQuery';
import ConnectionTest from './components/onlineState';
import ViewportSpyComponent from './components/viewportSpy';
import WindowSizeReporter from './components/viewportState';
import SpeechSynthesisDemo from './components/speechRecognition';
import SpeechSynthesisDemoBasic from './components/speechSynthesis/basicUsage';
import PositionReporter from './components/geoLocation';
import DragComponent from './components/drag/basicUsage';
// import DragImageComponent from './components/drag/imageDrag';
import DragZoneComponent from './components/drag/dragZone';
import MouseReporter from './components/mouse';
import TouchReporter from './components/touchComponent';
// import LifeCycleComponent from './components/lifeCycleComponents';
// import WindowScrollReporter from './components/windowScroll';

function App() {
  return (
    <div className="App">
      <TestComponent />
      <Event />
      <GlobalEvent />
      <PreviousValue />
      <ValueHistory />
      <ValidatedField />
      <br />
      <MediaQueryReporter />
      <ConnectionTest />
      <ViewportSpyComponent />
      <WindowSizeReporter />
      <SpeechSynthesisDemo />
      <br></br>
      <SpeechSynthesisDemoBasic />
      <PositionReporter />
      <DragComponent />
      {/* <DragImageComponent /> */}
      <DragZoneComponent />
      <MouseReporter />
      <TouchReporter />
      {/* <LifeCycleComponent /> */}
      {/* <WindowScrollReporter /> */}
    </div>
  );
}

export default App;
