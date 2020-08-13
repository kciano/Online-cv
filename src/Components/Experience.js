import React from 'react';
import '../App.css';


function Experience(props) {
    return (
        <experience id="work" className="App-header">
            <h1>Work Experience</h1>
            <br></br>
            <p className="expParagraph"><strong>Technical Support Engineer, Digicert</strong></p>
            <p className="subparagraph">July 2018 - Present</p>
            <ul>
                <li>Provide technical support for DigiCert clients, offering web security, and digital certificates using protocols such as the SSL, TLS etc.</li>
                <li>Provide assistance in PKI structure, Codesigning, HTML, DNS, S/MIME and SMTP.</li>
                <li>Work with the IIS servers, Apache, Tomcat and more in assisting the customers to install digital Certificates</li>
            </ul>

            <br></br>
            <p className="expParagraph"><strong>LAN Support Engineer, Imparatech</strong></p>
            <p className="subparagraph">November 2016 - June 2018</p>
            <ul>
                <li>Provide technical support on mobile devices i.e. Android smartphones and tablets</li>
                <li>Configure and test android mobile devices</li>
                <li>Enrolment of android mobile devices using SAP Afaria</li>
                <li>Identify and troubleshoot faulty equipment\devices and provide technical support to Emergency Support Staff</li>
                <li>SAP GUI support</li>
                <li>Hardware Support</li>
                <li>Resolution of calls received through IT Service Desk within a defined SLA</li>
                <li>Knowledge and skills transfer</li>
                <li>Support 3G and wireless networks</li>
                <li>Apply ITIL methodology</li>
            </ul>

            <br></br>
            <p className="expParagraph"><strong>Technical Support Analyst, NSC Global</strong></p>
            <p className="subparagraph">March 2014 - January 2016</p>
            <ul>
                <li>Provide technical support on mobile devices i.e. Android smartphones and tablets</li>
                <li>Prepare and issue daily KPI report to Senior Management</li>
                <li>Collate and issue the external RAID log</li>
                <li>Providing regular status reports and statistical analysis</li>
                <li>Provide advice and assistance to the different teams in the writing of their processes and procedures</li>
                <li>Maintain a register of processes and procedures</li>
                <li>Ensure PES clearance procedures are carried out for every new candidate on a timely basis</li>
            </ul>

            <br></br>
            <p className="expParagraph"><strong>Systems and Network Administrator, The Data Factory</strong></p>
            <p className="subparagraph">March 2013 - June 2013</p>
            <ul>
                <li>D-link Firewall and network configuration</li>
                <li>Daily backup on window server 2008</li>
                <li>Desktop Support</li>
            </ul>
        </experience>
        )
    }

    export default Experience;