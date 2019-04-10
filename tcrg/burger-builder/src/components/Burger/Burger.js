import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import styles from './Burger.scss';

const burger = (props) => {
  // Object.keys returns an array of values
  // https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8109018?start=0
  let transformedIngredients = Object.keys(props.ingredients).map((igKey) => {
    return [...Array(props.ingredients[igKey])].map((_, i) => {
      return <BurgerIngredient key={igKey + i} type={igKey} />;
    })
  }).reduce((arr, el) => {
    return arr.concat(el)
  }, []);
  // .reduce()
  // https://www.udemy.com/react-the-complete-guide-incl-redux/learn/v4/t/lecture/8109020?start=0
  // console.log(Object.keys(props.ingredients));
  console.log(transformedIngredients);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please add some ingredients!</p>
  }
  return (
    <div className={styles.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  )
}

export default burger;
