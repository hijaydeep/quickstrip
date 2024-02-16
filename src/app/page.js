import React from 'react';
import Banner from '@/components/Banner';
import Card from '@/components/Card';

const page = () => {

  return (
    <>
      <main id="main" className="aux-main aux-territory  aux-single aux-page aux-full-container no-sidebar aux-sidebar-style-border aux-user-entry">
        <div className="aux-wrapper">
          <div className="aux-container aux-fold">
            <div id="primary" className="aux-primary">
              <div className="content" role="main">
                <article id="post-105" className="post-105 page type-page status-publish hentry">
                  <div data-elementor-type="wp-page" data-elementor-id={105} className="elementor elementor-105">
                    <Banner />
                    <Card />
                  </div>
                </article>
                <div className="clear" />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;