import { Link } from 'react-router-dom';
import EmployeeDetailsCard from '../containers/EmployeeDetailsCard';
import withLayout from '../hoc/withLayout';
import Pencil from '../icons/Pencil';

const EmployeeDetails = () => {
  return (
    <section className="main-content">
      <header className="card">
        <h1>Employee Details</h1>
        <section>
          <Link to="edit">
            <span className="icon-sm">
              <Pencil />
            </span>
            <span>Edit employee</span>
          </Link>
        </section>
      </header>
      <EmployeeDetailsCard />
    </section>
  );
};

export default withLayout()(EmployeeDetails);
