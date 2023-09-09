import { Button, Tree } from 'bud-ui';

function App() {
  return (
    <div
      style={{
        height: '100vh',
        padding: 64,
        backgroundColor: 'rgb(250, 250, 250)',
      }}
    >
      <div style={{ margin: '32px 0' }}>
        <Button>Example</Button>
        <Button appearance="contained">Example</Button>
        <Button appearance="outlined">Example</Button>
        <Button appearance="text">Example</Button>
      </div>
      <div>
        <Tree />
      </div>
    </div>
  );
}

export default App;
