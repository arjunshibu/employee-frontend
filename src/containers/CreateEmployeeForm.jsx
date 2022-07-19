import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateEmployeeMutation } from '../api';
import Button from '../components/Button';
import FileInputField from '../components/FileInputField';
import InputField from '../components/InputField';
import InputSelect from '../components/InputSelect';

const CreateEmployeeForm = () => {
  const [createEmployee] = useCreateEmployeeMutation();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: '',
    id: '',
    joiningDate: '',
    experience: 0,
    address: '',
    role: '',
    status: '',
  });

  const inputFields = [
    {
      label: 'Employee Name',
      type: 'text',
      name: 'name',
      id: 'name',
      placeholder: 'Employee Name',
      value: employee.name,
      onChange: (e) => {
        setEmployee((currentEmployee) => ({
          ...currentEmployee,
          name: e.target.value,
        }));
      },
    },
    {
      label: 'Employee ID',
      type: 'text',
      name: 'id',
      id: 'id',
      placeholder: 'Employee ID',
      value: employee.id,
      onChange: (e) => {
        setEmployee((currentEmployee) => ({
          ...currentEmployee,
          id: e.target.value,
        }));
      },
    },
    {
      label: 'Joining Date',
      type: 'date',
      name: 'joiningDate',
      id: 'joiningDate',
      placeholder: 'Joining Date',
      value: employee.joiningDate,
      onChange: (e) => {
        setEmployee((currentEmployee) => ({
          ...currentEmployee,
          joiningDate: e.target.value,
        }));
      },
    },
    {
      label: 'Experience',
      type: 'number',
      name: 'experience',
      id: 'experience',
      placeholder: 'Experience',
      value: employee.experience,
      onChange: (e) => {
        setEmployee((currentEmployee) => ({
          ...currentEmployee,
          experience: e.target.value,
        }));
      },
    },
    {
      label: 'Address',
      type: 'text',
      name: 'address',
      id: 'address',
      placeholder: 'Address',
      value: employee.address,
      onChange: (e) => {
        setEmployee((currentEmployee) => ({
          ...currentEmployee,
          address: e.target.value,
        }));
      },
    },
  ];
  const inputSelectFields = [
    {
      label: 'Role',
      name: 'role',
      id: 'role',
      value: employee.role,
      options: [
        { value: 'admin', label: 'Admin' },
        { value: 'h r', label: 'H R' },
        { value: 'manager', label: 'Manager' },
        { value: 'engineer', label: 'Engineer' },
      ],
      onChange: (e) => {
        setEmployee((currentEmployee) => ({
          ...currentEmployee,
          role: e.target.value,
        }));
      },
    },
    {
      label: 'Status',
      name: 'status',
      id: 'status',
      value: employee.status,
      options: [
        { value: 'active', label: 'Active' },
        { value: 'probation', label: 'Probation' },
        { value: 'inactive', label: 'Inactive' },
      ],
      onChange: (e) => {
        setEmployee((currentEmployee) => ({
          ...currentEmployee,
          status: e.target.value,
        }));
      },
    },
  ];

  const onSubmit = (e) => {
    e.preventDefault();

    createEmployee(employee);

    navigate('/employees');
  };

  const onCancel = () => {
    window.history.back();
  };

  return (
    <form id="create-employee-form" className="card" onSubmit={onSubmit}>
      <section className="create-employee-form">
        {inputFields.map((inputField, index) => (
          <InputField
            key={index}
            label={inputField.label}
            type={inputField.type}
            name={inputField.name}
            id={inputField.id}
            placeholder={inputField.placeholder}
            value={inputField.value}
            onChange={inputField.onChange}
          />
        ))}
        {inputSelectFields.map((inputSelectField, index) => (
          <InputSelect
            key={index}
            label={inputSelectField.label}
            name={inputSelectField.name}
            id={inputSelectField.id}
            value={inputSelectField.value}
            options={inputSelectField.options}
            onChange={inputSelectField.onChange}
          />
        ))}
        <FileInputField
          label="Upload ID proof"
          name="id-proof"
          id="id-proof"
          placeholder="Choose file"
        />
      </section>
      <section className="create-employee-form-buttons">
        <Button className="btn-sm btn-primary" label="Create" type="submit" />
        <Button
          className="btn-sm btn-secondary"
          label="Cancel"
          type="button"
          onClick={onCancel}
        />
      </section>
    </form>
  );
};

export default CreateEmployeeForm;
