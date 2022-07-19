import CreateEmployeeForm from '../containers/CreateEmployeeForm';
import withLayout from '../hoc/withLayout';

const CreateEmployee = () => {
  return (
    <section className="main-content">
      <header className="card">
        <h1>Create Employee</h1>
      </header>
      <CreateEmployeeForm />
    </section>
  );
};

export default withLayout()(CreateEmployee);
