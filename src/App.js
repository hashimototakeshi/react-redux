import React from 'react';
import PropTypes from 'prop-types';

const App = () => {
const profiles = [
	{ name: "taro", age: 18 }
	,{ name: "hanako", age: 5 }
	//,{ name: "Yamada" } これはワーニング　isRequired
	//,{ name: 18 }   これはワーニング string
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
User.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number.isRequired
}

export default App;

