import React, {Component} from 'react'

class FileFieldInput  extends Component{

  getBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  onChange = (e) => {
    const { input: { onChange } } = this.props
    let file = e.target.files[0]

    this.getBase64(e.target.files[0])
      .then(data => onChange(data)); 
  }

  render(){
    let { input: { value } } = this.props;
    return(
     <div>
         <label>Subir imagen</label>
        <div>
        <input
            type='file'
            onChange={this.onChange}
        />
        </div>
     </div>
    )
}
}

export default FileFieldInput;