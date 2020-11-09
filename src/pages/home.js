import React from 'react';
import { HeaderContainer } from '../containers/header';
import { Feature, OptForm } from '../components';
import { JumbotronContainer } from '../containers/jumbotron';
import { FooterContainer } from '../containers/footer';
import { FaqsContainer } from '../containers/faqs';

export default function Home() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>
                        Unlimited films, TV programs and more.
                    </Feature.Title>
                    <Feature.Subtitle>
                        Watch anywhere. Cancel at any time.
                    </Feature.Subtitle>
                </Feature>
                <OptForm>
                    <OptForm.Input placeholder="Email Address" />
                    <OptForm.Button>Get Started</OptForm.Button>
                    <OptForm.Text>
                        Ready to watch? Enter your email to create or restart your membership
                    </OptForm.Text>
                    <OptForm.Break />
                </OptForm>
            </HeaderContainer>

            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
};