import React from 'react';
import gql from 'graphql-tag';
import { withProvider } from '../graphqlProvider';
// import { useAllJobsQuery } from '../graphql/types';
import {useQuery} from '@apollo/client'
import { EditFilled, DeleteFilled, EyeFilled } from '@ant-design/icons';

const jobsQuery = gql`
  query allJobs{
    jobs {
      id
      company
      position
      status
      contact
    }
  }
`;

// hard code the user id for now
const addJob = gql`
mutation {
  addJob(input: {
    company: "Company 3",
    position: "position 3",
   status: "status 3",
   contact: "contact 3",
   userId: 1,
  }) {
    job {
      id,
      user_id,
      company,
      position,
     status,
     contact
    }
    errors
  }
 }
`

const loading = false;

const Job: React.FunctionComponent = ({ company, position, status, contact, id }) => {
  const actionClick = (action) => {
    switch(action) {
      case 'status':
        console.log('change status');
        break;
      case 'edit':
        console.log('edit job');
        break;
      case 'delete':
        console.log('delete job');
        break;
      default:
        console.log('how did we get here....');
        break;
    }
  }

  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100" key={id}>
      <td className="py-3 px-6 text-left whitespace-nowrap">
        <div className="flex items-center">
          <span className="font-medium">{position}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-left">
        <div className="flex items-center">
          <span>{company}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex items-center justify-center">
          <span>{contact}</span>
        </div>
      </td>
      <td className="py-3 px-6 text-center">
        <span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">{status}</span>
      </td>
      <td className="py-3 px-6 text-center">
        <div className="flex item-center justify-center">
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <EyeFilled onClick={() => actionClick('status')} />
          </div>
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <EditFilled onClick={() => actionClick('edit')} />
          </div>
          <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
            <DeleteFilled onClick={() => actionClick('delete')} />
          </div>
        </div>
      </td>
    </tr>
  );
};

const Jobs = () => {
  const { data, loading, error } = useQuery(jobsQuery);

  if (loading) {
    return <span>"Loading..."</span>;
  }

  const addJob = () => {
    console.log('add job');
  };

  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
          {/* <button className="top-0 right-0 bg-green-500 active:bg-green-700 rounded border-4" onClick={addJob}>Add Job</button> */}
          <button className="top-0 right-0 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded" onClick={addJob}>Add Job</button>

          <div className="bg-white shadow-md rounded my-6">
            <table className="min-w-max w-full table-auto">
              <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <th className="py-3 px-6 text-left">Job Title</th>
                  <th className="py-3 px-6 text-left">Company</th>
                  <th className="py-3 px-6 text-center">Contact</th>
                  <th className="py-3 px-6 text-center">Status</th>
                  <th className="py-3 px-6 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm font-light">
                {
                  data.jobs.map((user) => (
                    <Job {...user} key={user.id} />
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
};

export default withProvider(Jobs);