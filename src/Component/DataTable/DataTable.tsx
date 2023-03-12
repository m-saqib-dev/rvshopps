import React from 'react';
import './datatable.css';

type TableEmployee = {
  id: number;
  name: string;
  email: string;
  phone: string;
  department_name: string;
  department_id: number;
};

type DataTableProps = {
  data: TableEmployee[];
};

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  return (
    <div className="list-container">
      <ul className="list">
        <li className="list-lable">id</li>
        <li className="list-lable">name</li>
        <li className="list-lable">email</li>
        <li className="list-lable">phone</li>
        <li className="list-lable">department_name</li>
        {data.map(({ id, name, email, phone, department_name }) => {
          return (
            <React.Fragment key={id}>
              <li className="list-value">{id}</li>
              <li className="list-value">{name}</li>
              <li className="list-value">{email}</li>
              <li className="list-value">{phone}</li>
              <li className="list-value">{department_name}</li>
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default DataTable;
