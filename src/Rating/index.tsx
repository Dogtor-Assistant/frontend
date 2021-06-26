import React from 'react';

import PropTypes from 'prop-types';

interface IProps {
    value: number,
    color: string,
}

const Rating = ({ value, color }:IProps) => {
    if (value >= 4) {
        color='green';
    }
    return (<>
        <div className="rating">
            <span>
                <i
                    className={
                        value >= 1
                            ? 'fas fa-star'
                            : value >= 0.5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                    }
                    style={{ color: color }}
                ></i>
            </span>
            <span>
                <i
                    className={
                        value >= 2
                            ? 'fas fa-star'
                            : value >= 1.5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                    }
                    style={{ color: color }}
                ></i>
            </span>
            <span>
                <i
                    className={
                        value >= 3
                            ? 'fas fa-star'
                            : value >= 2.5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                    }
                    style={{ color: color }}
                ></i>
            </span>
            <span>
                <i
                    className={
                        value >= 4
                            ? 'fas fa-star'
                            : value >= 3.5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                    }
                    style={{ color: color }}
                ></i>
            </span>
            <span>
                <i
                    className={
                        value >= 5
                            ? 'fas fa-star'
                            : value >= 4.5
                                ? 'fas fa-star-half-alt'
                                : 'far fa-star'
                    }
                    style={{ color: color }}
                ></i>
            </span>
        </div>
    </>
    );
};

Rating.defaultProps = {
    color: 'yellow',
};

Rating.propTypes = {
    color: PropTypes.string,
    value: PropTypes.number.isRequired,
};

export default Rating;
