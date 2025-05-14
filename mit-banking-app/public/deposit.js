function Deposit(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [deposit, setDeposit]   = React.useState('');
     const [balance, setBalance]   = React.useState(0);
     const [disabled, setDisabled] = React.useState(true);
    const ctx = React.useContext(UserContext); 

  
    const validate = amount => {

      if(!Number(amount)) {        
        setStatus('Error: Please Enter Amount Above $0');
        return false;
      }
      if(amount < 0) {
        setStatus("Error: Cannot Deposit Amount Below $1.00");
        return false;
      }
      return true;
    }
  
    const depositMoney = amount => {
      if (!validate(amount)) return;
      setBalance(Number(balance) + Number(amount));
      setShow(false);
      setStatus('');
      ctx.users.push(Number(balance) + Number(amount));
    }
  
  
    function clearForm(){
      setDeposit('');
      setShow(true);
    }
  
    React.useEffect(() => {
          if (!deposit) {
              setDisabled(true);
          }
          else {
              setDisabled(false);
          }
      }, [deposit]);
  
    return (
      <Card
        bgcolor="secondary"
        header="DEPOSIT FUNDS"
        status={status}
        body={show ? (  
                <>
                <h5>Balance: ${balance}</h5>
                <br/>Enter Deposit Amount<br/>
                <input type="deposit" className="form-control" id="deposit" placeholder="$" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-primary" onClick={() => depositMoney(deposit)} disabled={disabled}>Deposit</button>
                </>
              ):(
                <>
                <h6>Deposit Complete!</h6>
                <button type="submit" className="btn btn-primary" onClick={clearForm}>Enter New Deposit</button>
                </>
              )}
      />
    )
  }