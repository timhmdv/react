import React from 'react';
import PropTypes from 'prop-types';
import {Col, Row} from 'reactstrap';

const RowBlock = ({left, right}) => {
  return (
    <Row>
      <Col md='6'>
        {left}
      </Col>
      <Col md='6'>
        {right}
      </Col>
    </Row>
  );
};

RowBlock.propTypes = {
  left: PropTypes.object,
  right: PropTypes.object,
};

export default RowBlock;
