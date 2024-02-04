/*

 <div class="parent">
    <div class="child">
        <h1>Hello i am h1 tag</h1>
        <h2>Hello i am h2 tag</h2>
    </div>     
</div>     
    <div class="child2">
        <h1>Hello i am h1 tag</h1>
        <h2>Hello i am h2 tag</h1>
    </div>     
</div>     
*/


// const heading= React.createElement("h1",{
//     id:'heading'
// },"Hello World From React")
// this object is used to give attributes to the tag 


const heading= React.createElement("div",{id:'parent'},
    [React.createElement("div",{id:"child1"},
    [React.createElement("h1",{},'Hello i am h1 tag'),React.createElement("h2",{},'Hello i am h2 tag')]),
    React.createElement("div",{id:"child2"},
    [React.createElement("h1",{},'Hello i am h1 tag'),React.createElement("h2",{},'Hello i am h2 tag')])
])

const root=ReactDOM.createRoot(document.getElementById('root'))

root.render(heading)