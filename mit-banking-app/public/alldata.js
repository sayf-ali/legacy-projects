function AllData(){
    const ctx = React.useContext(UserContext);
    return (
      <>
      <h1>Account Data</h1>
      {JSON.stringify(ctx)}<br/>
      </>
    );
  }
  