import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDeleteEmployeeMutation } from '../api';
import Badge from '../components/Badge';
import Modal from '../components/Modal';
import Pencil from '../icons/Pencil';
import Trash from '../icons/Trash';

const EmployeeTable = ({ employees }) => {
  const [deleteEmployee] = useDeleteEmployeeMutation();
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [employeeIdToDelete, setEmployeeIdToDelete] = useState('');

  const onDeleteModalCancel = () => {
    setShowDeleteModal(false);
  };

  const onDeleteModalConfirm = () => {
    deleteEmployee(employeeIdToDelete);
    setShowDeleteModal(false);
  };

  return employees.length ? (
    <>
      <table>
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Employee ID</th>
            <th>Joining Date</th>
            <th>Role</th>
            <th>Status</th>
            <th>Experience</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id} onClick={() => navigate(employee.id)}>
              <td>{employee.name}</td>
              <td>{employee.id}</td>
              <td>{employee.joiningDate.substring(0, 10)}</td>
              <td className="title-case">{employee.role}</td>
              <td className="title-case">
                <Badge
                  className={
                    employee.status === 'active'
                      ? 'badge badge-success'
                      : employee.status === 'inactive'
                      ? 'badge badge-danger'
                      : 'badge badge-warning'
                  }
                  label={employee.status}
                />
              </td>
              <td>{`${employee.experience} Years`}</td>
              <td>
                <button
                  className="btn-ghost icon-danger"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowDeleteModal(true);
                    setEmployeeIdToDelete(employee.id);
                  }}
                >
                  <Trash />
                </button>
                <button
                  className="btn-ghost icon-primary"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`${employee.id}/edit`);
                  }}
                >
                  <Pencil />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {showDeleteModal && (
        <Modal
          header="Are you sure?"
          body="Do you really want to delete the employee?"
          onClose={onDeleteModalCancel}
        >
          <button className="btn-xs btn-primary" onClick={onDeleteModalConfirm}>
            Confirm
          </button>
          <button
            className="btn-xs btn-secondary"
            onClick={onDeleteModalCancel}
          >
            Cancel
          </button>
        </Modal>
      )}
    </>
  ) : null;
};

export default EmployeeTable;
