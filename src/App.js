import React from 'react';

const App = () => {
const profiles = [
	{ name: "taro", age: 18 }
	,{ name: "hanako", age: 5 }
	,{ name: "kurose" }
]

	return (
    <div>
	{
		profiles.map((profile, index) => {
			return <User name={profile.name} age={profile.age} key={index}/>
		})
	}
    </div>
  )
}

const User = (props) => {
	return <div>Hi, i am {props.name}, and i am {props.age} years old!</div>
}
User.defaultProps = {
	age: 1,
	name: "taro"
}


export default App;

