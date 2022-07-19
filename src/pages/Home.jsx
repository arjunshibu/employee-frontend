import withLayout from '../hoc/withLayout';

const Home = () => {
  return (
    <div className="app-title">
      <h3 className="app-title-company">KeyValue</h3>
      <h1 className="app-title-name">Employee Application</h1>
    </div>
  );
};

export default withLayout({ noSidebar: true })(Home);
