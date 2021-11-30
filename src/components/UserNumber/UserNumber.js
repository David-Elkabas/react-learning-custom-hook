import { useRef } from 'react'

const UserID = ({getUserId}) => {

    let numberInput = useRef();  // React use ref to get input value

    const onOnclickHandler = (e) => {
      getUserId(parseInt(numberInput.current.value))
    };
  
    return (
      <div>
        <input ref={numberInput} type="number" />
        <button onClick={onOnclickHandler}>Click Here</button>
        
      </div>
    );
}

export default UserID;
