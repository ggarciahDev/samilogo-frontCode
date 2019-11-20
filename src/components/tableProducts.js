import React from 'react';
import ProductCard from './productCard';

function TableProducts({ titleP, descriptionP }){    
    return (
        <table align = "center"  cellSpacing="20" cellPadding="20">
                                <tr>
                                <td><ProductCard pTitle={titleP[0]} pDescription={descriptionP[0]}/></td>
                                <td><ProductCard pTitle={titleP[1]} pDescription={descriptionP[1]}/></td>
                                <td><ProductCard pTitle={titleP[2]} pDescription={descriptionP[2]}/></td>
                                <td><ProductCard pTitle={titleP[3]} pDescription={descriptionP[3]}/></td>
                              </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[4]} pDescription={descriptionP[4]}/></td>
                                  <td><ProductCard pTitle={titleP[5]} pDescription={descriptionP[5]}/></td>
                                  <td><ProductCard pTitle={titleP[6]} pDescription={descriptionP[6]}/></td>
                                  <td><ProductCard pTitle={titleP[7]} pDescription={descriptionP[7]}/></td>
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[8]} pDescription={descriptionP[8]}/></td>
                                  <td><ProductCard pTitle={titleP[9]} pDescription={descriptionP[9]}/></td>
                                  <td><ProductCard pTitle={titleP[10]} pDescription={descriptionP[10]}/></td>
                                  <td><ProductCard pTitle={titleP[11]} pDescription={descriptionP[11]}/></td>
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[12]} pDescription={descriptionP[12]}/></td>
                                  <td><ProductCard pTitle={titleP[13]} pDescription={descriptionP[13]}/></td>
                                  <td><ProductCard pTitle={titleP[14]} pDescription={descriptionP[14]}/></td>
                                  <td><ProductCard pTitle={titleP[15]} pDescription={descriptionP[15]}/></td>
                                  
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[16]} pDescription={descriptionP[16]}/></td>
                                  <td><ProductCard pTitle={titleP[17]} pDescription={descriptionP[17]}/></td>
                                  <td><ProductCard pTitle={titleP[18]} pDescription={descriptionP[18]}/></td>
                                  <td><ProductCard pTitle={titleP[19]} pDescription={descriptionP[19]}/></td>
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[20]} pDescription={descriptionP[20]}/></td>
                                  <td><ProductCard pTitle={titleP[21]} pDescription={descriptionP[21]}/></td>
                                  <td><ProductCard pTitle={titleP[22]} pDescription={descriptionP[22]}/></td>
                                  <td><ProductCard pTitle={titleP[23]} pDescription={descriptionP[23]}/></td>
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[24]} pDescription={descriptionP[24]}/></td>
                                  <td><ProductCard pTitle={titleP[25]} pDescription={descriptionP[25]}/></td>
                                  <td><ProductCard pTitle={titleP[26]} pDescription={descriptionP[26]}/></td>
                                  <td><ProductCard pTitle={titleP[27]} pDescription={descriptionP[27]}/></td>
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[28]} pDescription={descriptionP[28]}/></td>
                                  <td><ProductCard pTitle={titleP[29]} pDescription={descriptionP[29]}/></td>
                                  <td><ProductCard pTitle={titleP[30]} pDescription={descriptionP[30]}/></td>
                                  <td><ProductCard pTitle={titleP[31]} pDescription={descriptionP[31]}/></td>
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[32]} pDescription={descriptionP[32]}/></td>
                                  <td><ProductCard pTitle={titleP[33]} pDescription={descriptionP[33]}/></td>
                                  <td><ProductCard pTitle={titleP[34]} pDescription={descriptionP[34]}/></td>
                                  <td><ProductCard pTitle={titleP[35]} pDescription={descriptionP[35]}/></td>
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[36]} pDescription={descriptionP[36]}/></td>
                                  <td><ProductCard pTitle={titleP[37]} pDescription={descriptionP[37]}/></td>
                                  <td><ProductCard pTitle={titleP[38]} pDescription={descriptionP[38]}/></td>
                                  <td><ProductCard pTitle={titleP[39]} pDescription={descriptionP[39]}/></td>
                                </tr>
                                <tr>
                                  <td><ProductCard pTitle={titleP[40]} pDescription={descriptionP[40]}/></td>
                                  <td><ProductCard pTitle={titleP[41]} pDescription={descriptionP[41]}/></td>
                <td><ProductCard pTitle={titleP[42]} pDescription={descriptionP[42]}/></td>
                <td><ProductCard pTitle={titleP[43]} pDescription={descriptionP[43]}/></td>
            </tr>
            <tr>
                <td><ProductCard pTitle={titleP[44]} pDescription={descriptionP[44]}/></td>
                <td><ProductCard pTitle={titleP[45]} pDescription={descriptionP[45]}/></td>
                <td><ProductCard pTitle={titleP[46]} pDescription={descriptionP[46]}/></td>
                <td><ProductCard pTitle={titleP[47]} pDescription={descriptionP[47]}/></td>
            </tr>
            <tr>
                <td><ProductCard pTitle={titleP[48]} pDescription={descriptionP[48]}/></td>
                <td><ProductCard pTitle={titleP[49]} pDescription={descriptionP[49]}/></td>
            </tr>
        </table>
    ); 
}

export default TableProducts