import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

import { cardStyle } from '../styles/cardStyle';

import { Store } from '../shared/providers';
import { useFetch } from '../shared/hooks/useFetch';
import { SET_ADMINS, CLEAR_ADMINS } from '../shared/providers/content';

const Admins = () => {
  const { dispatch } = useContext(Store);
  const [admins, error, isLoading, clearError] = useFetch(
    `/api/admin/`,
    SET_ADMINS,
    'admins'
  );

  const displayAdmins = admins?.admins.map((admin) => {
    return (
      <AdminCard title={admin.name} key={admin.name}>
        <p>{admin.username}</p>
      </AdminCard>
    );
  });

  useEffect(() => {
    return () => {
      clearError(null);
      dispatch({ type: CLEAR_ADMINS });
    };
    // eslint-disable-next-line
  }, []);

  if (isLoading) return 'Laddar administratörer';
  if (error) return error;

  return <Wrapper>{displayAdmins}</Wrapper>;
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
`;

const AdminCard = styled.section`
  ${cardStyle}

  width: 100%;
  margin: 1rem 0;

  @media screen and (min-width: 768px) {
    min-width: 30%;
    max-width: 46%;

    margin: 1rem 1rem;

    :last-of-type {
      margin-right: auto;
    }
  }
`;

export default Admins;
