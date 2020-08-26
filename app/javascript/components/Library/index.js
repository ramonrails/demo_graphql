import React from 'react';
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
import Skeleton from 'react-loading-skeleton';

const LibraryQuery = gql`
  {
    items {
      id
      title
      user {
        email
      }
    }
  }
`;

export default () => (
  <Query query={LibraryQuery}>
    {({ data, loading }) => (
      <div>
        {loading
          ? Array(4).fill().map((e, i) => (
            <div key={i}>
              <Skeleton height={10} width={350} />
            </div>
            ))
          : data.items.map(({ title, id, user }) => (
              <div key={id}>
                <b>{title}</b> {user ? `added by ${user.email}` : null}
              </div>
            ))}
      </div>
    )}
  </Query>
);
