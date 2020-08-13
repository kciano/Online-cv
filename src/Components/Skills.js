import React from 'react';
import Table from 'react-bootstrap/Table'



function Skills(props) {
    return (
        <skills id="skills" className="App-header">
            <h1>Skills</h1>
            <br></br>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Skills</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Programming languages</td>
                        <td>HTML</td>
                        <td>CSS</td>
                        <td>JavaScript</td>
                        <td>ReactJS</td>
                        <td>JQuery</td>
                        <td>IOS Swift</td>
                    </tr>
                    <tr>
                        <td>Networking</td>
                        <td>Network Administration</td>
                        <td>TCP/IP</td>
                        <td>Firewall</td>
                        <td>Load Balancing</td>
                        <td>Network devices</td>
                        <td>CCNA</td>
                    </tr>
                    <tr>
                        <td>Security</td>
                        <td>SSL</td>
                        <td>SMIME</td>
                        <td>Linux, Windows, AWS and Cisco servers</td>

                    </tr>
                </tbody>
            </Table>
        
        </skills>
        )
    }

    export default Skills;