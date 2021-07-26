import React from 'react';
import gql from 'graphql-tag';
import { withProvider } from '../graphqlProvider';
// import { useAllJobsQuery } from '../graphql/types';
import {useQuery} from '@apollo/client'
import { EditFilled, DeleteFilled, EyeFilled } from '@ant-design/icons';

const jobsQuery = gql`
  query allJobs{
    jobs {
      company
      position
      status
      contact
    }
  }
`;

const loading = false;

const Job: React.FunctionComponent = ({ company, position, status, contact }) => {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
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
          <EyeFilled />
        </div>
        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
          <EditFilled />
        </div>
        <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
          <DeleteFilled />
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

  return (
    <div className="overflow-x-auto">
      <div className="min-w-screen min-h-screen bg-gray-100 flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
        <div className="w-full lg:w-5/6">
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