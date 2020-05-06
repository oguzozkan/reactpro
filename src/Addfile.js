import React from 'react';
import './App.css';
class Addfile extends React.Component {
state = {
selectedFile : null

}
fileSelectedHandler = event =>{
this.setState({
selectedFile: event.target.files[0]

})

}
dileUploadHanler = ()=>{



}

render(){

return(
<div>
<input type="file" onChange={this.fileSelectedHandler}/>
<button onClick={this.fileUploadHanler}>Upload</button>
</div>

);


}


}

export default Addfile;
