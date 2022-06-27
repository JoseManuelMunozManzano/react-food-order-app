import classes from './Input.module.css';

const Input = (props) => {
  return (
    <div className={classes.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      {/* Si props.input tiene una clave-valor, por ejemplo {type: 'text'}  
          con {...props.input} nos aseguramos que lo reciba. 
          Este truco lo hace muy configurable */}
      <input {...props.input} />
    </div>
  );
};

export default Input;
