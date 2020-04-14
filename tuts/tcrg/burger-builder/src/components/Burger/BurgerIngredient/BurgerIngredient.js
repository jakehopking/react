import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './BurgerIngredient.scss';

class BurgerIngredient extends Component {
  // constructor(props) {
  //   super(props)

  // }

  render() {
    let ingredient = null;

    switch (this.props.type) {
      case 'bread-bottom':
        ingredient = <div className={styles.BreadBottom} />;
        break;
      case 'bread-top':
        ingredient = (
          <div className={styles.BreadTop}>
            <div className={styles.Seeds1} />
            <div className={styles.Seeds2} />
          </div>
        );
        break;
      case 'meat':
        ingredient = <div className={styles.Meat} />;
        break;
      case 'cheese':
        ingredient = <div className={styles.Cheese} />;
        break;
      case 'salad':
        ingredient = <div className={styles.Salad} />;
        break;
      case 'bacon':
        ingredient = <div className={styles.Bacon} />;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}
// LOWER CASE P on first!!!
BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
