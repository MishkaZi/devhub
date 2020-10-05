import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../layout/Spinner';
import { getCurrentProfile } from '../../actions/profile';
import DashboardActions from '../dashboard/DashboardActions';
import { Link } from 'react-router-dom';
import Education from './Education';
import Experience from './Experience';

const Dashboard = ({
  getCurrentProfile,
  auth:{user},
  profile: { profile, loading },
}) => {
  useEffect(() => {
    getCurrentProfile();
  }, []);

  return loading && profile === null ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1 class='large text-primary'>Dashboard</h1>
      <p class='lead'>
        <i class='fas fa-user'></i> Welcome {user && user.name}
      </p>
      {profile !== null ? 
       <Fragment>
          <DashboardActions/>
          <Education education={profile.rducation}/>
          <Experience experience={profile.experience}/>
       </Fragment>
       : 
       <Fragment>
        <p>You have not yet set an profile, add some info!</p>
        <Link to='/create-profile' className='btb btn-primary my-1'>Create Profile</Link>
      </Fragment>}
    </Fragment>
  );
};

Dashboard.propTypes = {
  getCurrentProfile: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentProfile })(Dashboard);
