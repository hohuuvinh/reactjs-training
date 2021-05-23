import Chart from "react-google-charts";

function App() {
  return (
    <div className="App">
      <Chart
        width={'100%'}
        height={'100vh'}
        chartType="GeoChart"
        data={[
          ['Country', 'Popularity'],
          ['Germany', 200],
          ['United States', 300],
          ['Brazil', 400],
          ['Canada', 500],
          ['France', 600],
          ['RU', 1000],
        ]}
        // Note: you will need to get a mapsApiKey for your project.
        // See: https://developers.google.com/chart/interactive/docs/basic_load_libs#load-settings
        mapsApiKey="YOUR_KEY_HERE"
        rootProps={{ 'data-testid': '1' }}
      />
    </div>
  );
}

export default App;
