import { useState } from 'react';
import './styleForSelectModes.css';
import GameBase from './GameBase';

class Mode4 extends GameBase{

   constructor(props){
       super(props);
   }
    
    render(){
        return(
            <div className='block'>
                <div className='mode'>
                <table className='table4'>
                    <tbody>
                        <tr><td><p>4 X 4</p></td><td><button onClick={this.restartGame}>RELOAD</button></td></tr>
                        <tr> 
                            <td colSpan={2}>
                            {this.getArrayOfNumbers().map(cardId => this.getCardHtml(cardId))}
                            </td>
                        </tr>
                    </tbody>
                </table> 
                    </div> 
            </div>
        )
    }
}

export default Mode4;


