import React from 'react';
import { Balancer } from 'react-wrap-balancer';

const HomePage = () => {
  return (
    <>
      <h1 className="text-center text-4xl font-bold tracking-tight sm:text-6xl">
        <Balancer>
          Your marketplace for high-quality{' '}
          <span className="text-blue-600">digital assets</span>.
        </Balancer>
      </h1>
      <p className="mt-6 max-w-prose text-center text-lg text-muted-foreground">
        Welcome to DigitalSavanna. Every asset on our platform is verified by
        our team to ensure our highest quality standards.
      </p>
    </>
  );
};

export default HomePage;
