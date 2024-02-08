import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element

const heading = React.createElement("h1",{id:"heading"},"Hello React")
// create element is old way of doing this


// JSX(transpiled before it reaches the JS)-Done by Parcel-By using Babel. 

// const jsxHeading= (<h1 id="heading">
//     Namste react using JSX
//     </h1>) // if we want to write babel in multiple line, we need to use () brackets


const jsxHeading=<img src="https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350"/>

// JSX is not html indside JS. It have XML, HTML  like syntax.

// React Components
// ClassBased COmponents -Old Way of writting code
//Functional Components- New way of writting code

//react functional componets: It is a Simple javaScript Function

const HeadingComponent=()=>(
    <div>
        <h1>React Functional Component</h1>
    </div>
)
const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(<HeadingComponent />)



// --Babel: It takes js and converts it to the code that js engine can understand. Transpiler, javascript compiler. Babel transpiles code to a code that old browsers can even understand. 

// React element reffers to the js code and reac t functional component returns react element