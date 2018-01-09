import React from 'react';

import Layout from '../components/layout';

import styled, { css } from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const PrescriptionText = styled.div`
    margin-top: 0px;
    font-size: 19px;
    font-weight: bold;
`;

const Status = styled.div`
    margin-top: 20px;
    padding: 10px;
    border: 1px solid #333;
    color: #666;
    font-weight: bold;
    width: 350px;
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
    margin-top: 20px;
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
            status = "Thank you for uploading your prescription!";
        }
        return (
            <Container>
                <PrescriptionText>
                    Help us in helping you. Kindly upload your prescription so that we can suggest games for you.
                </PrescriptionText>
                <StyledInput
                    type="file"
                    onChange={() => this.onChange()}
                    className="inputfile"
                />
                {
                    uploading === null ? null : (
                        <Status uploading={uploading}>
                            {status}
                        </Status>
                    )
                }
            </Container>
        );
    }
}

export default UploadPrescription;
