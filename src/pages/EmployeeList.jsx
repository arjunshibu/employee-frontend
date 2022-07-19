import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useGetEmployeesQuery } from '../api';
import InputSelect from '../components/InputSelect';
import EmployeeTable from '../containers/EmployeeTable';
import withLayout from '../hoc/withLayout';

const EmployeeList = () => {
  const { data, isLoading } = useGetEmployeesQuery();
  const options = [
    { value: 'name', label: 'Name' },
    { value: 'id', label: 'ID' },
    { value: 'joiningDate', label: 'Joining Date' },
    { value: 'role', label: 'Role' },
    { value: 'status', label: 'Status' },
    { value: 'experience', label: 'Experience' },
  ];
  const [filter, setFilter] = useState('');

  return (
    <section className="main-content">
      <header className="card">
        <h1>Employee List</h1>
        <section>
          <InputSelect
            name="filter"
            id="filter"
            label="Filter"
            defaultLabel={false}
            options={options}
            value={filter}
            onChange={(e) => {
              setFilter(e.target.value);
            }}
          />
          <Link to="/employees/create">
            <span>+</span>
            <span>Create employee</span>
          </Link>
        </section>
      </header>
      {isLoading ? (
        <p>Loading...</p>
      ) : data && data.data.length ? (
        <EmployeeTable employees={data.data} />
      ) : (
        <h3>No employees found</h3>
      )}
    </section>
  );
};

export default withLayout()(EmployeeList);
