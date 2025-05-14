function Withdraw(){
    const [show, setShow]         = React.useState(true);
    const [status, setStatus]     = React.useState('');
    const [withdrawal, setWithdrawal]   = React.useState('');
     const [balance, setBalance]   = React.useState(1000);
     const [disabled, setDisabled] = React.useState(true);
    const ctx = React.useContext(UserContext); 
  
    const validate = amount => {

      if(!Number(amount)) { 
        setStatus('Error: Please Enter Amount Above $0');
        return false;
      }
      if(amount < 0) {
        setStatus("Error: Cannot Withdraw Amount Below $1.00");
        return false;
      }
      if (balance - amount < 0) {
        setStatus('Error: Insufficient Funds!')
        return false;
      }
      return true;
    }
  
    const withdrawMoney = amount => {
      if (!validate(amount)) return;
      setBalance(Number(balance) - Number(amount));
      setShow(false);
      setStatus('');
      ctx.users.push(Number(balance) - Number(amount));
    }
  
    function clearForm(){
      setWithdrawal('');
      setShow(true);
    }
  
    React.useEffect(() => {
          if (!withdrawal) {
              setDisabled(true);
          }
          else {
              setDisabled(false);
          }
      }, [withdrawal]);
  
    return (
      <Card
        bgcolor="secondary"
        header="WITHDRAW FUNDS"
        status={status}
        body={show ? (  
                <>
                <h5>Balance: ${balance}</h5>
                <br/>Enter Withdrawal Amount<br/>
                <input type="withdraw" className="form-control" id="withdraw" placeholder="$ " value={withdrawal} onChange={e => setWithdrawal(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-primary" onClick={() => withdrawMoney(withdrawal)} disabled={disabled}>Withdraw</button>
                </>
              ):(
                <>
                <h6>Withdrawal Complete!</h6>
                <button type="submit" className="btn btn-primary" onClick={clearForm}>Withdraw New Amount</button>
                </>
              )}
      />
    )
  }