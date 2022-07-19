import Navbar from '../containers/Navbar';
import Sidebar from '../containers/Sidebar';

const withLayout =
  (props = {}) =>
  (WrappedComponent) =>
  (componentProps) => {
    return (
      <main>
        <Navbar />
        {!props.noSidebar && <Sidebar />}
        <WrappedComponent {...componentProps} />
      </main>
    );
  };

export default withLayout;
