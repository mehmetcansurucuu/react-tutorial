import { Layout } from 'antd';

import Login from "./Components/Login";
import 'antd/dist/antd.min.css';
import './assets/style.css'

const { Content } = Layout;

function App() {
  return (
<div>
  <Layout className="layout">
      <Login />
  </Layout>
</div>
  );
}

export default App;
