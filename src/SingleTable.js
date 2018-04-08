import React, { Component } from 'react'

class SingleTable extends Component {

    constructor(props) {
        super()

        this.state = {
            createdAt: props.createdAt,
            name: props.name,
            nickname: props.nickname,
            date: props.date,
            oasisNumber: props.oasisNumber,
            email: props.email,
            cellphone: props.cellphone,
            phone: props.phone,
            community: props.community,
            neighborhood: props.neighborhood,
            team: props.team
          }
    }

    render () {
        return (
            <table>
                <tbody>
                    <tr>
                        <td>{this.state.name} <b>({this.state.nickname})</b></td>
                        <td>Oásis: {this.state.oasisNumber}</td>
                    </tr>
                    <tr>
                        <td>Email: {this.state.email}</td>
                        <td>Niver {this.state.date}</td>
                    </tr>
                    <tr>
                        <td>Tel:. {this.state.cellphone}</td>
                        <td>{this.state.phone}</td>
                    </tr>
                    <tr>
                        <td>Comunidade: {this.state.community}</td>
                        <td>Bairro: {this.state.neighborhood}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default SingleTable
