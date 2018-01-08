import React from 'react';

import Layout from '../components/layout';

import styled, { css } from 'styled-components';

const Status = styled.div`
    margin-top: 10px;
    color: #999;
    font-weight: 400;
    ${props => props.uploading === true && css `
        color: orange;
    `}
    ${props => props.uploading === false && css `
        color: #38AC5F;
    `}
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
                <input type="file" onChange={() => this.onChange()} />
                <Status uploading={uploading}>
                    {status}
                </Status>
            </Layout>
        );
    }
}

export default UploadPrescription;
