import FileInputField from './FileInputField';
import InputField from './InputField';
import InputSelect from './InputSelect';

const CreateEmployee = () => {
  const inputFields = [
    {
      label: 'Employee Name',
      type: 'text',
      name: 'name',
      id: 'name',
      placeholder: 'Employee Name',
    },
    {
      label: 'Employee ID',
      type: 'text',
      name: 'id',
      id: 'id',
      placeholder: 'Employee ID',
    },
    {
      label: 'Joining Date',
      type: 'date',
      name: 'joiningDate',
      id: 'joiningDate',
      placeholder: 'Joining Date',
    },
    {
      label: 'Experience',
      type: 'text',
      name: 'experience',
      id: 'experience',
      placeholder: 'Experience',
    },
    {
      label: 'Address',
      type: 'text',
      name: 'address',
      id: 'address',
      placeholder: 'Address',
    },
  ];
  const inputSelectFields = [
    {
      label: 'Role',
      name: 'role',
      id: 'role',
      options: [
        { value: 'frontend', label: 'Frontend' },
        { value: 'backend', label: 'Backend' },
      ],
    },
    {
      label: 'Status',
      name: 'status',
      id: 'status',
      options: [
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
      ],
    },
  ];

  return (
    <div>
      <div className="card create-employee">
        <h1>Create Employee</h1>
      </div>
      <form id="create-employee-form" className="card">
        <div className="create-employee-form">
          {inputFields.map((inputField, index) => (
            <InputField
              key={index}
              label={inputField.label}
              type={inputField.type}
              name={inputField.name}
              id={inputField.id}
              placeholder={inputField.placeholder}
            />
          ))}
          {inputSelectFields.map((inputSelectField, index) => (
            <InputSelect
              key={index}
              label={inputSelectField.label}
              name={inputSelectField.name}
              id={inputSelectField.id}
              options={inputSelectField.options}
            />
          ))}
          <FileInputField
            label="Upload ID proof"
            name="proof"
            id="proof"
            placeholder="Choose file"
          />
        </div>
        <div className="create-employee-form-buttons">
          <button type="submit">Create</button>
          <button type="button">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default CreateEmployee;
