
console.log('testing');

// import `.scss` files
import './stylesheets/style.scss';

// import DepthCounter class
import { DepthCounter as defaultExport } from './scripts/DepthCounter';

// export default DepthCounter class
// I used `defaultExport` to state that variable name doesn't matter
export default defaultExport;