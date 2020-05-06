import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
    this.state = {
        filename: ''};
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(
      `Selected file - ${
        this.fileInput.current.files[0].name
      }`
    );
     let fılename = this.fileInput.current.files[0].name;
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className='fileinp'>
        <label >
          Upload file:  <i class="far fa-file-archive"></i>
          <input type="file" ref={this.fileInput} className='filebut'/>
        
          <input type="submit" value="Submit" />
      
        </label>
        <br />

        </div>
      </form>

        
    );
  }
}

ReactDOM.render(
  <FileInput />,
  document.getElementById('root')
);
export default FileInput;