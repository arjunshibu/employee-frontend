import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useGetEmployeeByIdQuery } from '../api';
import File from '../icons/File';

const EmployeeDetailsCard = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useGetEmployeeByIdQuery(id);
  const [employee, setEmployee] = useState({
    name: '',
    id: '',
    joiningDate: '',
    experience: 0,
    address: '',
    role: '',
    status: '',
  });

  useEffect(() => {
    if (!isLoading && !error) {
      const employee = data.data;

      setEmployee({
        id: employee.id,
        name: employee.name,
        joiningDate: employee.joiningDate.substring(0, 10),
        experience: employee.experience,
        address: employee.address,
        role: employee.role,
        status: employee.status,
      });
    }
  }, [isLoading, data, error]);

  return isLoading ? (
    <p>Loading...</p>
  ) : error ? (
    <h3>Employee not found</h3>
  ) : (
    <section className="card employee-details">
      <section>
        <p>Employee Name</p>
        <p>{employee.name}</p>
      </section>
      <section>
        <p>Employee ID</p>
        <p>{employee.id}</p>
      </section>
      <section>
        <p>Joining Date</p>
        <p>{employee.joiningDate}</p>
      </section>
      <section>
        <p>Role</p>
        <p className="title-case">{employee.role}</p>
      </section>
      <section>
        <p>Status</p>
        <p
          className={
            employee.status === 'active'
              ? 'title-case badge badge-success'
              : employee.status === 'inactive'
              ? 'title-case badge badge-danger'
              : 'title-case badge badge-warning'
          }
        >
          {employee.status}
        </p>
      </section>
      <section>
        <p>Experience</p>
        <p>{employee.experience} Years</p>
      </section>
      <section>
        <p>Address</p>
        <p>{employee.address}</p>
      </section>
      <section>
        <p>ID Proof</p>
        <File />
      </section>
    </section>
  );
};

export default EmployeeDetailsCard;
