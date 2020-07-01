import React from 'react';
import { useMediaQuery } from 'react-responsive';

import { Layout } from '../components/Layout';
import { SEO } from '../components/SEO';
import { HomeHeroSection } from '../components/HomeHeroSection/HomeHeroSection';
import { GapNurseSection } from '../components/GapNurseSection/GapNurseSection';
import { TeamSection } from '../components/TeamSection/TeamSection';
import { MMOSection } from '../components/MMOSection/MMOSection';
import { LookingSection } from '../components/LookingSection/LookingSection';
import { WhatWeDoSection } from '../components/WhatWeDoSection/WhatWeDoSection';
import { LetsStarted } from '../components/LetsStarted/LetsStarted';
import { BlogSection } from '../components/BlogSection/BlogSection';
import { SiteHeader } from '../components/Header';
import { SiteFooter } from '../components/Footer';

const siteTitle = 'Home';
const keywords = [
  'softbee',
  'softbee.tech',
  'developers',
  'team of developers',
  'developers from Ukraine',
];

const IndexPage = ({ location }) => {
  const isMobile = useMediaQuery({ query: '(max-width: 1210px)' });
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={siteTitle} keywords={keywords} />
      <SiteHeader />
      <HomeHeroSection withBackground={!isMobile} />
      <GapNurseSection withBackground={!isMobile} />
      <TeamSection />
      <MMOSection withBackground={!isMobile} />
      <LookingSection />
      <WhatWeDoSection />
      <LetsStarted />
      <BlogSection withBackground />
      <SiteFooter />
    </Layout>
  );
};

export default IndexPage;
