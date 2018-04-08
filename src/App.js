import React, { Component } from 'react';
import SingleTable from './SingleTable';

const data = require('./convertcsv.json');
const jsPDF = require('jspdf')

class App extends Component {
  render() {

    const form = this.buildForm(data)
    console.log(form.length)

    return (
      <div className="App">
      {
            form.map( (item, index) => {
              return (
                <table key={index}>
                  <tbody>
                      <tr>
                        <td>
                          <table>
                            <tbody>
                              {
                                  
                              }
                              
                            </tbody>
                          </table>
                        </td>
                      </tr>
                  </tbody>
                </table>
              )
            })
          }
        {/* <table>
          <tbody>
          {
            form.map( (item, index) => {
              const table = new SingleTable(item)
              return (
                <tr key={index}>
                  <td>{table}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table> */}
      </div>
    );
  }

  generatePDF() {
    
  }

  buildForm (data) {
    let myData = data
    var form = []
    
    for (var i = 0; i < myData.length; i++) {
      const item = myData[i]

      form.push({
        createdAt: item.createdAt,
        name: item.createdAt,
        nickname: item.nickname,
        date: item.date,
        oasisNumber: item.oasisNumber,
        email: item.email,
        cellphone: item.cellphone,
        phone: item.phone,
        community: item.community,
        neighborhood: item.neighborhood,
        team: item.team
      })
    }

    return form
  }
}

export default App;
