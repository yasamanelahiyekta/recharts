import './App.css';
import { Typography } from '@mui/material';
import Barchart from './Charts/BarChart/BarChart';
import Linechart from './Charts/LineChart/Linechart';
import Piechart from './Charts/PieChart/Piechart';
import Areachart from './Charts/AreaChart/Areachart';
import Composedchart from './Charts/ComposedChart/Composedchart';

function App() {

  return (
    <div className='App'>


      <Typography variant='h3' className='text-slate-500 '>Charts</Typography>
      <div className=" grid grid-rows-5 grid-cols-1 lg:grid-cols-2 lg:grid-rows-3">
        <div>
          <Barchart />
        </div>
        <div>
          <Linechart />
        </div>
        <div>
          <Piechart />
        </div>
        <div>
          <Areachart />
        </div>
        <div>
          <Composedchart />
        </div>
      </div>
    </div>
  );
}
export default App;
