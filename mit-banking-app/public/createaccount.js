function CreateAccount(){
	const [show, setShow]         = React.useState(true);
	const [status, setStatus]     = React.useState('');
	const [name, setName]         = React.useState('');
	const [email, setEmail]       = React.useState('');
	const [password, setPassword] = React.useState('');
	const [disabled, setDisabled] = React.useState(true);
	const ctx = React.useContext(UserContext);  
  

	React.useEffect(() => {
		if (!name && !email && !password) {
			setDisabled(true);
		}
		else {
			setDisabled(false);
		}
	}, [name, email, password]);
	

	function validate(field, label){
		if (!field) {
		  setStatus('Error: ' + label);
		  setTimeout(() => setStatus(''),3000);
		  return false;
		}
		return true;
	}


	function passwordLength(field, label){
		if (field.length < 8) {
		  setStatus('Error: ' + label);
		  setTimeout(() => setStatus(''),3000);
		  return false;
		}
		return true;
	}
  

	function handleCreate(){
	  console.log(name,email,password);
	  if (!validate(name,     'Please Enter Name'))     return;
	  if (!validate(email,    'Please Enter Email'))    return;
	  if (!validate(password, 'password')) return;
	  if(!passwordLength(password, 'Password Requires At Least 8 Characters!')) return;
	  ctx.users.push(name,email,password);
	  console.log(ctx);
	  setShow(false);
	}   
	
	  
	function clearForm(){
	  setName('');
	  setEmail('');
	  setPassword('');
	  setShow(true);
	}

	
  return (
		<Card
		  bgcolor="secondary"
		  header="CREATE ACCOUNT"
		  status={status}
			body={show ? (
		   <>
				  Name<br/>
				  <input type="input" className="form-control" id="name" placeholder="Enter Name" value={name} onChange={e => setName(e.currentTarget.value, 'name')} /><br/>
				 
				  Email address<br/>
				  <input type="input" className="form-control" id="email" placeholder="Enter Email" value={email} onChange={e => {setEmail(e.currentTarget.value, 'email')}}/><br/>
				  
				  Password<br/>
				  <input type="password" className="form-control" id="password" placeholder="Enter Password" value={password} onChange={e => {setPassword(e.currentTarget.value, 'password')}}/><br/>
				  <button type="submit" className="btn btn-primary" onClick={handleCreate} disabled={disabled}>Create Account</button>
				  <br />
				  
				  </>
				):(
				  <>
				  <h5>Account Created!</h5>
				  <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>

				  </>
				)}
				/>		
			)

			}	
			

	
				
	 