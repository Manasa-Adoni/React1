import React from 'react';
import ReactDOM from 'react-dom';
import './Style.css';
class Score extends React.Component{
    constructor(props){
        super(props);
        this.state={ass:0,mtt:0,mpt:0,status:'',score:''}
    }
    calc=(event)=>{
        
        var x=this.state.ass;
        var y=this.state.mtt;
        var z=this.state.mpt;
         var p=(15*x)/100;
         var q=(15*y)/64;
         var r=(70*z)/70;
         var sum=p+q+r;
         if(sum<50){
             this.setState({score:'0',status:'Fail'});
         }
         else if(sum>49 && sum<60)
         {
            this.setState({score:'1',status:'Fail'});
         }
         else if(sum>59 && sum<70)
         {
            this.setState({score:'2',status:'Pass'});
         }
         else if(sum>69 && sum<80)
         {
            this.setState({score:'3',status:'Pass'});
         }
         else if(sum>79 && sum<90)
         {
            this.setState({score:'4',status:'Pass'});
         }
          else
          {
            this.setState({score:'5',status:'Pass'});
          }
          event.preventDefault();
    
    }
    render(){
        return (
              <div class="abc" align="center">
                  <form className='scorecard' onSubmit={this.calc}>
                      <h1 align="center">Trainee Score Calculation</h1>
                        <table>
                            <tr><td> <label>Assignment Marks : </label>
                      <input type='number' min='0' max='100' onChange={(e)=>{this.setState({ass:e.target.value})}} required></input></td></tr><br/>
                            <tr><td><label>MTT Marks : </label>
                      <input type='number' min='0' max='64' onChange={(e)=>{this.setState({mtt:e.target.value})}} required></input></td></tr><br/>
                            <tr><td><label>MPT Marks : </label>
                      <input type='number' min='0' max='70' onChange={(e)=>{this.setState({mpt:e.target.value})}} required></input></td></tr><br/>
                        </table>
                     <button className="scorecard" type='submit'>Result</button>
                  </form>
        <h3>Trainee Score : {this.state.score}</h3>
        <h3>Status : {this.state.status}</h3>
              </div>
        );

    }
}
ReactDOM.render(<Score/>,document.querySelector("#root"));