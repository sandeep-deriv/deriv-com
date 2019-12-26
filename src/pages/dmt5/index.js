import React from 'react'
import styled from 'styled-components'
import DMT5Video from './_dmt5-video.js'
import DMT5Animation from 'images/lotties/dmt5-animation.json'
import DHowItWorks from 'components/custom/_dhow-it-works.js'
import DTrading from 'components/custom/_dtrading.js'
import DHero from 'components/custom/_dhero.js'
import DNumber from 'components/custom/_dnumbers.js'
import Layout from 'components/layout/layout'
import dmt5_logo from 'images/svg/dmt5-icon.svg'
import { OtherPlatform } from 'components/custom/other-platforms.js'
import { SEO, Show } from 'components/containers'
import { localize, WithIntl, Localize } from 'components/localization'
import DMT5BG from 'images/svg/dmt5-bg.svg'
import Signup, { Appearances } from 'components/custom/signup'

const items = [
    { title: '70+', subtitle: 'tradable assets and growing' },
    { title: '1:1,000', subtitle: 'maximum leverage' },
    { title: '30', subtitle: 'maximum lot size' },
]
const PlatformContainer = styled.div`
    padding: 8rem 0;
`
const trading = [
    {
        title: localize('DMT5 Standard Account'),
        subtitle: localize('Get started easily with a DMT5 Standard account for high leverage on your forex trades.'),
        second_title: localize('DMT5 Advanced Account'),
        second_subtitle: localize("Get your trades placed straight through to the market with a DMT5 Advanced account — a 100% A-Book account with tight spreads."),
        image_name: 'dmt-5-ipad-iphone.png',
        image_alt: localize('DMT5 mac')
    },
    {
        title: localize('DMT5 Synthetic Indices'),
        subtitle: localize('Trade 24/7 with a Synthetic Indices account. Trade indices that simulate the movements of real markets.'),
        second_title: localize('Practice with Demo accounts'),
        second_subtitle: localize('Create demo accounts (DMT5 Standard, DMT5 Advanced, or DMT5 Synthetic Indices) — the best way for you to check out the platform, get familiar with the tools, and learn trading techniques.'),
        image_name: 'dmt-5-mac.png',
        image_alt: localize('DMT5 ipad iphone')
    },
]

const DMT5 = () => {
    return (
        <Layout>
            <SEO title={localize('DMT5')} />
            <DHero
                title={localize('DMT5')}
                content={<Localize translate_text="The all-in-one FX<0/>and CFD trading<0/>platform" components={[<br key={0} />]} />}
                join_us_for_free
                Logo={dmt5_logo}
                animation={DMT5Animation}
                background={DMT5BG}
            />
            <Show.Desktop>
                <DNumber items={items} justify='space-around' />
            </Show.Desktop>
            <DHowItWorks Video={DMT5Video} title='Get started with DMT5 in 3 easy steps' />
            <DTrading trading={trading} reverse two_title />
            <PlatformContainer>
                <OtherPlatform exclude="dmt5" />
            </PlatformContainer>
            <Signup appearance={Appearances.public} />
        </Layout>
    )
}

export default WithIntl()(DMT5)
