import * as React from 'react';
import { graphql } from 'gatsby';
import { BuilderComponent } from '@builder.io/react';

function PageTemplate({ data }) {
  const models = data?.allBuilderModels;
  const page = models.page?.content;

  return <BuilderComponent name="page" content={page} />;
}

export default PageTemplate;

export const pageQuery = graphql`
  query ($path: String!) {
    allBuilderModels {
      onePage(target: { urlPath: $path }) {
        content
      }
    }
  }
`;