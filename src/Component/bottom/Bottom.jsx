import React from 'react';
import './Bottom.css';
import { row, col } from 'react-bootstrap';

const Bottom = () => {
	return (
		<div className="b">
			<div className="container-fluid">
				<div className="row">
					<div className="col col-sm-3">
						<div>
							<img className="aa" src={require('../../images/img.jpg')} alt="flower" />
						</div>
					</div>
					<div className="col col-sm-3">
						<div>
							<img className="aa" src={require('../../images/wood.jpg')} alt="flower"/>
						</div>
					</div>
					<div className="col col-sm-3">
						<div>
							<img className="aa" src={require('../../images/flower.jpg')} alt="flower" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Bottom;
