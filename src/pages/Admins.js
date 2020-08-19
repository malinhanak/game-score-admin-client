import React, { useEffect, useContext } from 'react';
import styled from 'styled-components';

import { cardStyle } from '../styles/cardStyle';

import { Store } from '../shared/providers';
import { useFetch } from '../shared/hooks/useFetch';
import { SET_ADMINS, CLEAR_ADMINS } from '../shared/providers/content';
import Avatar from '../components/Avatar';
import Typography from '../components/Typography';

const Admins = () => {
  const { dispatch } = useContext(Store);
  const [admins, error, isLoading, clearError] = useFetch(
    `/api/admin/`,
    SET_ADMINS,
    'admins'
  );

  const displayAdmins = admins?.admins.map((admin, index) => {
    return (
      <AdminCard title={admin.name} key={admin.name}>
        <Avatar name={admin.name} index={index} />
        <section className="admins-content">
          <Typography variant="h3">Tävlingsledare</Typography>
          <Typography variant="p">{admin.username}</Typography>
        </section>
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

  return (
    <Wrapper>
      <Typography variant="h2">Administratörer</Typography>
      <section className="admins">{displayAdmins}</section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  section.admins {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

const AdminCard = styled.section`
  ${cardStyle}

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  width: 100%;
  margin: 1rem 0;

  section.admins-content {
    margin: auto auto auto 1rem;
  }

  @media screen and (min-width: 768px) {
    width: 35%;
    max-width: 276px;

    margin: 1rem 1rem;

    :last-of-type {
      margin-right: auto;
    }
  }
`;

export default Admins;
