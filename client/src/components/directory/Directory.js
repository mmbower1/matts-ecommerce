import React from 'react';
import { connect } from 'react-redux';
// components
import MenuItem from '../menu-item/MenuItem';
import './Directory.styles.scss';

const Directory = ({ directory }) => {
  return (
    <div className='directory-menu'>
      {directory.map(({ id, ...props }) => (
        <MenuItem key={id} {...props} />
      ))}
    </div>
  );
}

const mapStateToProps = state => ({
  directory: state.directory.sections
});

export default connect(mapStateToProps, null)(Directory);