document.body.style.backgroundImage = "url ('bank.jpg')";
function Home(){
  return (
    <Card 
      txtcolor="secondary"
      header="eBank"
      title="Online Banking Application"
      text="Welcome to eBank "
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image" />)}
      
    />    
    
  ); 
}