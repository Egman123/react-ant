import { Row, Col } from 'antd';
import './App.css';

import Table from './Table';

function App() {
  return (
    <div className="App">
     
      <Row>

         {/* <Col span={8} offset={8} className="block">col</Col> */}
         {/* <Col xs={{span: 18, offset: 3}}  className="block">Col */}
          <Table />
         {/* </Col> */}
        
      </Row>
      
          
    </div>
  );
}

export default App;
