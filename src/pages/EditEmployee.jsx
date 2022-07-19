import EditEmployeeForm from '../containers/EditEmployeeForm';
import withLayout from '../hoc/withLayout';

const EditEmployee = () => {
  return (
    <section className="main-content">
      <header className="card">
        <h1>Edit Employee</h1>
      </header>
      <EditEmployeeForm />
    </section>
  );
};

export default withLayout()(EditEmployee);
