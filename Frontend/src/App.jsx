import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* Có thể thêm Header, Footer ở đây */}
      <Outlet />
    </div>
  );
}

export default App;
