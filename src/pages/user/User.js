import { Component } from 'react';
import UserForm from './UserForm';

class User extends Component{
  render(){
    let list = [
        {
            nome: "Adinaildo",
            email: "teste@mail.com"
        },
        {
            nome: "Teste",
            email: "teste2@mail.com"
        },
        {
            nome: "Testado",
            email: "testado@mail.com"
        },
        {
            nome: "Hello World",
            email: "hello@world.com"
        }
    ]
    
    return (
        <div>
            <UserForm></UserForm>
            <table>
                <thead>
                    <th>Nome</th>
                    <th>Email</th>
                </thead>
                <tbody>
                    {list.map((item) => {
                        return <tr>
                            <td>{item.nome}</td>
                            <td>{item.email}</td>
                        </tr>  
                                                  
                    })}
                </tbody>
            </table>            
        </div>
        );
  }    
}

export default User;