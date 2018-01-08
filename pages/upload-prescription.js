import React from 'react';

import Layout from '../components/layout';

import styled, { css } from 'styled-components';

const Status = styled.div`
    margin-top: 10px;
    padding: 10px;
    border: 1px solid #333;
    color: #666;
    font-weight: 400;
    width: 250px;
    text-align: center;
    ${props => props.uploading === true && css `
        color: orange;
        border-color: orange;
    `}
    ${props => props.uploading === false && css `
        color: #38AC5F;
        border-color: #38AC5F;
    `}
`;

const StyledInput = styled.input`
    margin-top: 10px;
`;

class UploadPrescription extends React.Component {
    state = { uploading: null };

    onChange() {
        this.setState(() => ({ uploading: true }));
        setTimeout(() => {
            this.setState(() => ({ uploading: false }));
        }, 3000);
    }

    render() {
        let status = "Please upload your prescription";
        const { uploading } = this.state;
        if (uploading === true) {
            status = "Uploading prescription...";
        } else if (uploading === false) {
            status = "Uploaded prescription!";
        }
        return (
            <Layout>
                <Status uploading={uploading}>
                    {status}
                </Status>
                <StyledInput
                    type="file"
                    onChange={() => this.onChange()}
                    className="inputfile"
                />
            </Layout>
        );
    }
}

export default UploadPrescription;
